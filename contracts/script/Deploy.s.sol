// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/BadgeCollection.sol";
import "../src/BambaStars.sol";
import "../src/MockERC20.sol";
import "../src/StarAccount.sol";
import "../src/BeaconBadge.sol";
import "../src/ERC6551Registry.sol";

contract Deploy is Script {
    ERC6551Registry public registry;
    BadgeCollection public badgeCollectionImplementation;
    BeaconBadge public beacon;
    StarAccount public starAccountImplementation;
    BambaStars public bambaStars;
    MockERC20 public paymentToken;

    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
        badgeCollectionImplementation = new BadgeCollection();
        registry = new ERC6551Registry(); 

        beacon = new BeaconBadge(address(badgeCollectionImplementation)); //BadgeCollection
        starAccountImplementation = new StarAccount();

        paymentToken = new MockERC20("USD Coin", "USDC");

        bambaStars = new BambaStars(address(registry), address(starAccountImplementation), 
                address(paymentToken), address(beacon));

        paymentToken.mint(msg.sender, 10000000000000 ether);
        
        

        console.log("BambaStars deployed at: ", address(bambaStars));
        console.log("Payment Token deployed at: ", address(paymentToken));
        console.log("ERC6551Registry deployed at: ", address(registry));
        console.log("BadgeCollection implementation deployed at: ", address(badgeCollectionImplementation));
        console.log("Beacon deployed at: ", address(beacon));
        console.log("StarAccount implementation deployed at: ", address(starAccountImplementation));

        vm.stopBroadcast();
        
    }
}
