// // SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.13;

// import "forge-std/Script.sol";
// import "forge-std/console.sol";

// import "../src/ERC6551Registry.sol";
// import "../src/ProjectAccount.sol";
// import "../src/Rentals.sol";
// import "../src/BlockEstate.sol";
// import "../src/MockERC20.sol";
// import "../src/BeaconERC20.sol";

// contract Deploy is Script {
//     ERC6551Registry public registry;
//     Rentals public rentalsImplementation;
//     BeaconERC20 public beacon;
//     ProjectAccount public projectAccountImplementation;
//     BlockEstate public blockEstate;
//     MockERC20 public paymentToken;

//     function setUp() public {}

//     function run() external {
//         vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
//         rentalsImplementation = new Rentals();
//         registry = new ERC6551Registry(); 

//         beacon = new BeaconERC20(address(rentalsImplementation)); //rentals
//         projectAccountImplementation = new ProjectAccount();

//         paymentToken = new MockERC20("USD Coin", "USDC");

//         blockEstate = new BlockEstate(address(registry), address(projectAccountImplementation), 
//                 address(paymentToken), address(beacon));

//         paymentToken.mint(msg.sender, 10000000000000 ether);
//         blockEstate.mintProject("PROJECT1", "PRJ1", 100 ether, 20 ether, 500000 ether, block.timestamp + 30 days);

//         blockEstate.mintProject("PROJECT2", "PRJ2", 100 ether, 20 ether, 500000 ether, block.timestamp + 30 days);
//         blockEstate.mintProject("PROJECT3", "PRJ3", 100 ether, 20 ether, 500000 ether, block.timestamp + 30 days);
//         blockEstate.mintProject("PROJECT4", "PRJ4", 100 ether, 20 ether, 500000 ether, block.timestamp + 30 days);
//         blockEstate.mintProject("PROJECT5", "PRJ5", 100 ether, 20 ether, 500000 ether, block.timestamp + 30 days);
//         blockEstate.mintProject("PROJECT6", "PRJ6", 100 ether, 20 ether, 500000 ether, block.timestamp + 30 days);

//         console.log("BlockEstate deployed at: ", address(blockEstate));
//         console.log("Payment Token deployed at: ", address(paymentToken));
//         console.log("ERC6551Registry deployed at: ", address(registry));
//         console.log("Rentals implementation deployed at: ", address(rentalsImplementation));
//         console.log("Beacon deployed at: ", address(beacon));
//         console.log("ProjectAccount implementation deployed at: ", address(projectAccountImplementation));

//         vm.stopBroadcast();
        
//     }
// }
