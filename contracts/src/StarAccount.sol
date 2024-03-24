// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC1271.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./interfaces/IERC6551Account.sol";

import "./BadgeCollection.sol";

import "../lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol";

import "forge-std/console.sol";



contract StarAccount is IERC165, IERC1271, IERC6551Account, ERC20Upgradeable {

    receive() external payable {}

    string nameUpdated;
    string symbolUpdated;

    IERC20 public paymentToken;
    uint256 public pricePerToken;
    uint256 public targetTotalSupply;

    BadgeCollection public badgeCollection;

    uint256 public constant MILESTONE1_PERCENTAGE = 20;
    uint256 public constant MILESTONE2_PERCENTAGE = 30;
    uint256 public constant MILESTONE3_PERCENTAGE = 50;

    bool milestone1Withdrawed;
    bool milestone2Withdrawed;
    bool milestone3Withdrawed;

    uint256 milestone2Timestamp;
    uint256 milestone3Timestamp;

    
    function initialize(
        ) initializer public {
        __ERC20_init("STAR", "STAR");
    }

    function setName(string memory _name, string memory _symbol) public {
        require(_isValidSigner(_msgSender()), "Invalid signer");
        nameUpdated = _name;
        symbolUpdated = _symbol;
    }

    function setPricePerToken(uint256 _pricePerToken) public {
        require(_isValidSigner(_msgSender()), "Invalid signer");
        pricePerToken = _pricePerToken;
    }

    function setPaymentToken(address _paymentToken) public {
        require(_isValidSigner(_msgSender()), "Invalid signer");
        paymentToken = IERC20(_paymentToken);
    }

    function setMilestones(uint256 _milestone2Timestamp, uint256 _milestone3Timestamp) public {
        require(_isValidSigner(_msgSender()), "Invalid signer");
        milestone2Timestamp = _milestone2Timestamp;
        milestone3Timestamp = _milestone3Timestamp;
    }

    function setTargetTotalSupply(uint256 _targetTotalSupply) public {
        require(_isValidSigner(_msgSender()), "Invalid signer");
        targetTotalSupply = _targetTotalSupply;
    }

    function name() public view override returns (string memory) {
        return nameUpdated;
    }

    function symbol() public view override returns (string memory) {
        return symbolUpdated;
    }





    function setBadgeCollection(address _badgeCollection) public {
        require(_isValidSigner(_msgSender()), "Invalid signer");
        badgeCollection = BadgeCollection(_badgeCollection);
    }

    function buyTokens(uint256 _amount, address _to) public {
        require(paymentToken.transferFrom(msg.sender, address(this), _amount * pricePerToken), "Transfer failed");
        require(totalSupply() + _amount <= targetTotalSupply, "Exceeds total supply");

        badgeCollection.mint(_to);
        _mint(_to, _amount);
    }

    function executeWithdrawMilestone1() public {
        require(!milestone1Withdrawed, "Already withdrawed");
        require(_isValidSigner(_msgSender()), "Invalid signer");
        uint256 amount = paymentToken.balanceOf(address(this)) * MILESTONE1_PERCENTAGE / 100;
        milestone1Withdrawed = true;

        require(paymentToken.transfer(_msgSender(), amount), "Transfer failed");
    }

    function executeWithdrawMilestone2() public {
        require(milestone1Withdrawed && !milestone2Withdrawed, "Not allowed");
        require(_isValidSigner(_msgSender()), "Invalid signer");
        require(block.timestamp >= milestone2Timestamp, "Too early");
        uint256 amount = paymentToken.balanceOf(address(this)) * MILESTONE2_PERCENTAGE / 100;
        milestone2Withdrawed = true;

        require(paymentToken.transfer(_msgSender(), amount), "Transfer failed");
    }

    function executeWithdrawMilestone3() public {
        require(milestone1Withdrawed && milestone2Withdrawed && !milestone3Withdrawed, "Not allowed");
        require(_isValidSigner(_msgSender()), "Invalid signer");
        require(block.timestamp >= milestone3Timestamp, "Too early");
        uint256 amount = paymentToken.balanceOf(address(this)) * MILESTONE3_PERCENTAGE / 100;
        milestone3Withdrawed = true;

        require(paymentToken.transfer(_msgSender(), amount), "Transfer failed");
    }



    function isValidSignature(
        bytes32 hash,
        bytes memory signature
    ) external view returns (bytes4 magicValue) {
        bool isValid = SignatureChecker.isValidSignatureNow(
            owner(),
            hash,
            signature
        );

        if (isValid) {
            return IERC1271.isValidSignature.selector;
        }

        return "";
    }

    function token() public view returns (uint256, address, uint256) {
        bytes memory footer = new bytes(0x60);

        assembly {
            extcodecopy(address(), add(footer, 0x20), 0x4d, 0x60)
        }

        return abi.decode(footer, (uint256, address, uint256));
    }

    function owner() public view returns (address) {
        (uint256 chainId, address tokenContract, uint256 tokenId) = token();
        if (chainId != block.chainid) return address(0);

        return IERC721(tokenContract).ownerOf(tokenId);
    }

    function _isValidSigner(address signer) internal view returns (bool) {
        return signer == owner();
    }

    function supportsInterface(
    bytes4 interfaceId
  ) public view virtual returns (bool) {
    return
      interfaceId == type(IERC20).interfaceId ||
      interfaceId == type(IERC165).interfaceId;
  }

    function executeCall(
        address to,
        uint256 value,
        bytes calldata data
    ) external payable override returns (bytes memory) {}

    function nonce() external view override returns (uint256) {}

}