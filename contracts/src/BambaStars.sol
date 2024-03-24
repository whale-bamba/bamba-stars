// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";

import "./interfaces/IERC6551Registry.sol";

import "./StarAccount.sol";
import "./BadgeCollection.sol";


contract BambaStars is ERC721, Ownable {

    IERC6551Registry public erc6551Registry;
    address public erc6551Implementation;
    IERC20 public paymentToken;
    address public proxyImplementation;

    mapping(uint256 => string) public images;
    mapping(uint256 => address) public starsAccounts;
    mapping(uint256 => address) public badgesCollections;

    uint256 public counter;

    event Minted(uint256 tokenId, address badgeCollection, address starAccount);

    constructor(address _erc6551Registry, address _erc6551Implementation, 
                    address _paymentToken, address _proxyImplementation) 
        Ownable(_msgSender()) ERC721("BlockEstate", "BLOCKX"){

        erc6551Registry =  IERC6551Registry(_erc6551Registry);
        erc6551Implementation = _erc6551Implementation;
        paymentToken = IERC20(_paymentToken);
        proxyImplementation = _proxyImplementation;

    }


    function mint(string memory _name, string memory _symbol, uint256 _pricePerToken, 
        address _paymentToken, uint256 _milestone2Timestamp, uint256 _milestone3Timestamp,
        uint256 _targetTotalSupply, string memory img) public returns (uint256){

        uint256 tokenId = counter;

        counter++;

        _mint(address(this), tokenId);

        address starAccount = erc6551Registry.createAccount(
            address(erc6551Implementation),
            block.chainid,
            address(this),
            tokenId,
            0,
            abi.encodeWithSelector(StarAccount(payable(0)).initialize.selector)
        );

        StarAccount(payable(starAccount)).setName(_name, _symbol);
        StarAccount(payable(starAccount)).setPricePerToken(_pricePerToken);
        StarAccount(payable(starAccount)).setPaymentToken(_paymentToken);
        StarAccount(payable(starAccount)).setMilestones(_milestone2Timestamp, _milestone3Timestamp);
        StarAccount(payable(starAccount)).setTargetTotalSupply(_targetTotalSupply);
        
        BeaconProxy badgeCollection = new BeaconProxy(proxyImplementation,
            abi.encodeWithSelector(BadgeCollection(address(0)).initialize.selector, 
            _name, _symbol, address(starAccount),img)
        );

        StarAccount(payable(starAccount)).setBadgeCollection(address(badgeCollection));
        _transfer(address(this), _msgSender(), tokenId);

        badgesCollections[tokenId] = address(badgeCollection);
        starsAccounts[tokenId] = starAccount;

        images[tokenId] = img;

        emit Minted(tokenId, address(badgeCollection), address(starAccount));
        return tokenId;
    }
     
}