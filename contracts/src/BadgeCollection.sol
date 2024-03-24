// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./BambaStars.sol";

import "../lib/openzeppelin-contracts-upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol";
import "../lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol";



contract BadgeCollection is ERC721Upgradeable {

    uint256 public counter;

    uint256 internal INITIAL_CHAIN_ID;
    bytes32 internal INITIAL_DOMAIN_SEPARATOR;
    string public collectionImage;

    address public bambaAccount;

    //MODIFIERS
    modifier onlyManager() {
        require(_msgSender() == address(bambaAccount), "Badges: caller is not the manager");
        _;
    }

    constructor(){
        _disableInitializers();
    }

    function initialize(string calldata _name, string calldata _symbol, address _bambaAccount, string memory _collectionImage) initializer public {
        
        __ERC721_init(_name,_symbol);
        bambaAccount = _bambaAccount;

        collectionImage = _collectionImage;
        
        INITIAL_CHAIN_ID = block.chainid;
        INITIAL_DOMAIN_SEPARATOR = computeDomainSeparator();
    }

    function _baseURI() internal view override returns (string memory) {
        return collectionImage;
    }

    function mint(address _to) public onlyManager {
        _mint(_to, counter);
        counter++;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        _requireOwned(tokenId);
        string memory baseURI = _baseURI();
        return baseURI;
    }



    

    

    

    function DOMAIN_SEPARATOR() public view virtual returns (bytes32) {
        return block.chainid == INITIAL_CHAIN_ID ? INITIAL_DOMAIN_SEPARATOR : computeDomainSeparator();
    }

    function computeDomainSeparator() internal view virtual returns (bytes32) {
        return
            keccak256(
                abi.encode(
                    keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
                    keccak256(bytes(name())),
                    keccak256("1"),
                    block.chainid,
                    address(this)
                )
            );
    }
}