// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "forge-std/console.sol";

import "../src/BadgeCollection.sol";
import "../src/BambaStars.sol";
import "../src/MockERC20.sol";
import "../src/StarAccount.sol";
import "../src/BeaconBadge.sol";
import "../src/ERC6551Registry.sol";



contract BamaStarsTest is Test {

    address owner = vm.addr(1);

    BadgeCollection badgeCollection;
    BambaStars bambaStars;
    MockERC20 paymentToken;
    StarAccount starAccountImplementation;
    BeaconBadge beaconBadge;
    ERC6551Registry registry;


    function setUp() public {
        vm.prank(owner);
        BadgeCollection badgeImplementation = new BadgeCollection();
        vm.prank(owner);
        registry = new ERC6551Registry(); 

        vm.prank(owner);
        beaconBadge = new BeaconBadge(address(badgeImplementation)); //rentals
        vm.prank(owner);
        starAccountImplementation = new StarAccount();

        vm.prank(owner);
        paymentToken = new MockERC20("USD TEST", "TEST");
        vm.prank(owner);
        bambaStars = new  BambaStars(address(registry), address(starAccountImplementation), 
                address(paymentToken), address(beaconBadge));
    }

    function testMintProject() public {

        vm.prank(vm.addr(3));
        uint256 tokenId = bambaStars.mint("Bamba", "BAMBA", 2, address(paymentToken), 0, 0, 1e9 ether, "https://bamba.io");

        assertTrue(tokenId == 0);
        assertTrue(bambaStars.ownerOf(tokenId) == vm.addr(3), "Owner should be this contract");
    }

    function testInvest() public {
        vm.prank(vm.addr(2));
        uint256 tokenId = bambaStars.mint("Bamba", "BAMBA", 2, address(paymentToken), 0, 0, 1e9 ether, "https://bamba.io");

        console.log("sender", msg.sender);
        console.log("addr 3", vm.addr(3));
        console.log("this", address(this));

        paymentToken.mint(address(this), 100 ether);
        console.log("USD Balance:", paymentToken.balanceOf(address(this)));
        paymentToken.approve(address(bambaStars.starsAccounts(tokenId)), 100 ether);
        
        console.log("test", StarAccount(payable(bambaStars.starsAccounts(tokenId))).return2());

        console.log("allowance", StarAccount(payable(bambaStars.starsAccounts(tokenId))).allowance(address(this), address(bambaStars.starsAccounts(tokenId))));
        StarAccount(payable(bambaStars.starsAccounts(tokenId))).buyTokens(50 ether, address(address(this)));

        console.log("USD Balance:", paymentToken.balanceOf(address(this)));
        console.log("BambaStars balance: ", StarAccount(payable(bambaStars.starsAccounts(tokenId))).balanceOf(address(this)));
        console.log("USD Balance Star Account: ", paymentToken.balanceOf(address(bambaStars.starsAccounts(tokenId))));

        assertTrue(StarAccount(payable(bambaStars.starsAccounts(tokenId))).balanceOf(address(this)) == 50 ether, "BambaStars should have 100 ether");
        assertTrue(BadgeCollection(payable(bambaStars.badgesCollections(tokenId))).ownerOf(0) == address(this), "BadgeCollection should have 1 badge");
    }
}