const MockERC20ByteCode = {
    "abi": [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "symbol",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "allowance",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "approve",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "decimals",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "mint",
            "inputs": [
                {
                    "name": "_to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "name",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "symbol",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "totalSupply",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "transfer",
            "inputs": [
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferFrom",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "Approval",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "spender",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Transfer",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "to",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "ERC20InsufficientAllowance",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "allowance",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "needed",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InsufficientBalance",
            "inputs": [
                {
                    "name": "sender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "balance",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "needed",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InvalidApprover",
            "inputs": [
                {
                    "name": "approver",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InvalidReceiver",
            "inputs": [
                {
                    "name": "receiver",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InvalidSender",
            "inputs": [
                {
                    "name": "sender",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC20InvalidSpender",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        }
    ],
    "bytecode": {
        "object": "0x60806040523480156200001157600080fd5b5060405162000e8c38038062000e8c8339810160408190526200003491620002ba565b81816003620000448382620003b5565b506004620000538282620003b5565b50505062000075336c0c9f2c9cd04674edea400000006200007d60201b60201c565b5050620004a9565b6001600160a01b038216620000ad5760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b620000bb60008383620000bf565b5050565b6001600160a01b038316620000ee578060026000828254620000e2919062000481565b90915550620001629050565b6001600160a01b03831660009081526020819052604090205481811015620001435760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000a4565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821662000180576002805482900390556200019f565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001e591815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200021a57600080fd5b81516001600160401b0380821115620002375762000237620001f2565b604051601f8301601f19908116603f01168101908282118183101715620002625762000262620001f2565b81604052838152602092508660208588010111156200028057600080fd5b600091505b83821015620002a4578582018301518183018401529082019062000285565b6000602085830101528094505050505092915050565b60008060408385031215620002ce57600080fd5b82516001600160401b0380821115620002e657600080fd5b620002f48683870162000208565b935060208501519150808211156200030b57600080fd5b506200031a8582860162000208565b9150509250929050565b600181811c908216806200033957607f821691505b6020821081036200035a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003b0576000816000526020600020601f850160051c810160208610156200038b5750805b601f850160051c820191505b81811015620003ac5782815560010162000397565b5050505b505050565b81516001600160401b03811115620003d157620003d1620001f2565b620003e981620003e2845462000324565b8462000360565b602080601f831160018114620004215760008415620004085750858301515b600019600386901b1c1916600185901b178555620003ac565b600085815260208120601f198616915b82811015620004525788860151825594840194600190910190840162000431565b5085821015620004715787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620004a357634e487b7160e01b600052601160045260246000fd5b92915050565b6109d380620004b96000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c806340c10f191161007657806395d89b411161005b57806395d89b4114610183578063a9059cbb1461018b578063dd62ed3e1461019e57600080fd5b806340c10f191461013857806370a082311461014d57600080fd5b806318160ddd116100a757806318160ddd1461010457806323b872dd14610116578063313ce5671461012957600080fd5b806306fdde03146100c3578063095ea7b3146100e1575b600080fd5b6100cb6101e4565b6040516100d891906107bf565b60405180910390f35b6100f46100ef366004610855565b610276565b60405190151581526020016100d8565b6002545b6040519081526020016100d8565b6100f461012436600461087f565b610290565b604051601281526020016100d8565b61014b610146366004610855565b6102b4565b005b61010861015b3660046108bb565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100cb6102c2565b6100f4610199366004610855565b6102d1565b6101086101ac3660046108dd565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f390610910565b80601f016020809104026020016040519081016040528092919081815260200182805461021f90610910565b801561026c5780601f106102415761010080835404028352916020019161026c565b820191906000526020600020905b81548152906001019060200180831161024f57829003601f168201915b5050505050905090565b6000336102848185856102df565b60019150505b92915050565b60003361029e8582856102f1565b6102a98585856103c5565b506001949350505050565b6102be8282610470565b5050565b6060600480546101f390610910565b6000336102848185856103c5565b6102ec83838360016104cc565b505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146103bf57818110156103b0576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260248101829052604481018390526064015b60405180910390fd5b6103bf848484840360006104cc565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610415576040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff8216610465576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b6102ec838383610614565b73ffffffffffffffffffffffffffffffffffffffff82166104c0576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b6102be60008383610614565b73ffffffffffffffffffffffffffffffffffffffff841661051c576040517fe602df05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff831661056c576040517f94280d62000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020908152604080832093871683529290522082905580156103bf578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161060691815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff831661064c5780600260008282546106419190610963565b909155506106fe9050565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054818110156106d2576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260248101829052604481018390526064016103a7565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020819052604090209082900390555b73ffffffffffffffffffffffffffffffffffffffff821661072757600280548290039055610753565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090208054820190555b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516107b291815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156107ed578581018301518582016040015282016107d1565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461085057600080fd5b919050565b6000806040838503121561086857600080fd5b6108718361082c565b946020939093013593505050565b60008060006060848603121561089457600080fd5b61089d8461082c565b92506108ab6020850161082c565b9150604084013590509250925092565b6000602082840312156108cd57600080fd5b6108d68261082c565b9392505050565b600080604083850312156108f057600080fd5b6108f98361082c565b91506109076020840161082c565b90509250929050565b600181811c9082168061092457607f821691505b60208210810361095d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8082018082111561028a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212204da53e95deac7bfd4f3614ff6d5c3b1a1d4225be17d680a0bfece4ca1ff32c2d64736f6c63430008180033",
        "sourceMap": "116:258:64:-:0;;;150:128;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;210:4;216:6;1667:5:37;:13;210:4:64;1667:5:37;:13;:::i;:::-;-1:-1:-1;1690:7:37;:17;1700:7;1690;:17;:::i;:::-;;1601:113;;233:38:64::1;239:10;251:19;233:5;;;:38;;:::i;:::-;150:128:::0;;116:258;;7458:208:37;-1:-1:-1;;;;;7528:21:37;;7524:91;;7572:32;;-1:-1:-1;;;7572:32:37;;7601:1;7572:32;;;4288:51:69;4261:18;;7572:32:37;;;;;;;;7524:91;7624:35;7640:1;7644:7;7653:5;7624:7;:35::i;:::-;7458:208;;:::o;6008:1107::-;-1:-1:-1;;;;;6097:18:37;;6093:540;;6249:5;6233:12;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;6093:540:37;;-1:-1:-1;6093:540:37;;-1:-1:-1;;;;;6307:15:37;;6285:19;6307:15;;;;;;;;;;;6340:19;;;6336:115;;;6386:50;;-1:-1:-1;;;6386:50:37;;-1:-1:-1;;;;;4797:32:69;;6386:50:37;;;4779:51:69;4846:18;;;4839:34;;;4889:18;;;4882:34;;;4752:18;;6386:50:37;4577:345:69;6336:115:37;-1:-1:-1;;;;;6571:15:37;;:9;:15;;;;;;;;;;6589:19;;;;6571:37;;6093:540;-1:-1:-1;;;;;6647:16:37;;6643:425;;6810:12;:21;;;;;;;6643:425;;;-1:-1:-1;;;;;7021:13:37;;:9;:13;;;;;;;;;;:22;;;;;;6643:425;7098:2;-1:-1:-1;;;;;7083:25:37;7092:4;-1:-1:-1;;;;;7083:25:37;;7102:5;7083:25;;;;5073::69;;5061:2;5046:18;;4927:177;7083:25:37;;;;;;;;6008:1107;;;:::o;14:127:69:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:844;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;294:13;;-1:-1:-1;;;;;356:10:69;;;353:36;;;369:18;;:::i;:::-;444:2;438:9;412:2;498:13;;-1:-1:-1;;494:22:69;;;518:2;490:31;486:40;474:53;;;542:18;;;562:22;;;539:46;536:72;;;588:18;;:::i;:::-;628:10;624:2;617:22;663:2;655:6;648:18;685:4;675:14;;732:3;725:4;720:2;712:6;708:15;704:26;701:35;698:55;;;749:1;746;739:12;698:55;771:1;762:10;;781:133;795:2;792:1;789:9;781:133;;;883:14;;;879:23;;873:30;852:14;;;848:23;;841:63;806:10;;;;781:133;;;958:1;951:4;946:2;938:6;934:15;930:26;923:37;978:6;969:15;;;;;;146:844;;;;:::o;995:562::-;1094:6;1102;1155:2;1143:9;1134:7;1130:23;1126:32;1123:52;;;1171:1;1168;1161:12;1123:52;1198:16;;-1:-1:-1;;;;;1263:14:69;;;1260:34;;;1290:1;1287;1280:12;1260:34;1313:61;1366:7;1357:6;1346:9;1342:22;1313:61;:::i;:::-;1303:71;;1420:2;1409:9;1405:18;1399:25;1383:41;;1449:2;1439:8;1436:16;1433:36;;;1465:1;1462;1455:12;1433:36;;1488:63;1543:7;1532:8;1521:9;1517:24;1488:63;:::i;:::-;1478:73;;;995:562;;;;;:::o;1562:380::-;1641:1;1637:12;;;;1684;;;1705:61;;1759:4;1751:6;1747:17;1737:27;;1705:61;1812:2;1804:6;1801:14;1781:18;1778:38;1775:161;;1858:10;1853:3;1849:20;1846:1;1839:31;1893:4;1890:1;1883:15;1921:4;1918:1;1911:15;1775:161;;1562:380;;;:::o;2073:543::-;2175:2;2170:3;2167:11;2164:446;;;2211:1;2235:5;2232:1;2225:16;2279:4;2276:1;2266:18;2349:2;2337:10;2333:19;2330:1;2326:27;2320:4;2316:38;2385:4;2373:10;2370:20;2367:47;;;-1:-1:-1;2408:4:69;2367:47;2463:2;2458:3;2454:12;2451:1;2447:20;2441:4;2437:31;2427:41;;2518:82;2536:2;2529:5;2526:13;2518:82;;;2581:17;;;2562:1;2551:13;2518:82;;;2522:3;;;2164:446;2073:543;;;:::o;2792:1345::-;2912:10;;-1:-1:-1;;;;;2934:30:69;;2931:56;;;2967:18;;:::i;:::-;2996:97;3086:6;3046:38;3078:4;3072:11;3046:38;:::i;:::-;3040:4;2996:97;:::i;:::-;3148:4;;3205:2;3194:14;;3222:1;3217:663;;;;3924:1;3941:6;3938:89;;;-1:-1:-1;3993:19:69;;;3987:26;3938:89;-1:-1:-1;;2749:1:69;2745:11;;;2741:24;2737:29;2727:40;2773:1;2769:11;;;2724:57;4040:81;;3187:944;;3217:663;2020:1;2013:14;;;2057:4;2044:18;;-1:-1:-1;;3253:20:69;;;3371:236;3385:7;3382:1;3379:14;3371:236;;;3474:19;;;3468:26;3453:42;;3566:27;;;;3534:1;3522:14;;;;3401:19;;3371:236;;;3375:3;3635:6;3626:7;3623:19;3620:201;;;3696:19;;;3690:26;-1:-1:-1;;3779:1:69;3775:14;;;3791:3;3771:24;3767:37;3763:42;3748:58;3733:74;;3620:201;-1:-1:-1;;;;;3867:1:69;3851:14;;;3847:22;3834:36;;-1:-1:-1;2792:1345:69:o;4350:222::-;4415:9;;;4436:10;;;4433:133;;;4488:10;4483:3;4479:20;4476:1;4469:31;4523:4;4520:1;4513:15;4551:4;4548:1;4541:15;4433:133;4350:222;;;;:::o;4927:177::-;116:258:64;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106100be5760003560e01c806340c10f191161007657806395d89b411161005b57806395d89b4114610183578063a9059cbb1461018b578063dd62ed3e1461019e57600080fd5b806340c10f191461013857806370a082311461014d57600080fd5b806318160ddd116100a757806318160ddd1461010457806323b872dd14610116578063313ce5671461012957600080fd5b806306fdde03146100c3578063095ea7b3146100e1575b600080fd5b6100cb6101e4565b6040516100d891906107bf565b60405180910390f35b6100f46100ef366004610855565b610276565b60405190151581526020016100d8565b6002545b6040519081526020016100d8565b6100f461012436600461087f565b610290565b604051601281526020016100d8565b61014b610146366004610855565b6102b4565b005b61010861015b3660046108bb565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100cb6102c2565b6100f4610199366004610855565b6102d1565b6101086101ac3660046108dd565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f390610910565b80601f016020809104026020016040519081016040528092919081815260200182805461021f90610910565b801561026c5780601f106102415761010080835404028352916020019161026c565b820191906000526020600020905b81548152906001019060200180831161024f57829003601f168201915b5050505050905090565b6000336102848185856102df565b60019150505b92915050565b60003361029e8582856102f1565b6102a98585856103c5565b506001949350505050565b6102be8282610470565b5050565b6060600480546101f390610910565b6000336102848185856103c5565b6102ec83838360016104cc565b505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146103bf57818110156103b0576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260248101829052604481018390526064015b60405180910390fd5b6103bf848484840360006104cc565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610415576040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff8216610465576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b6102ec838383610614565b73ffffffffffffffffffffffffffffffffffffffff82166104c0576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b6102be60008383610614565b73ffffffffffffffffffffffffffffffffffffffff841661051c576040517fe602df05000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff831661056c576040517f94280d62000000000000000000000000000000000000000000000000000000008152600060048201526024016103a7565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020908152604080832093871683529290522082905580156103bf578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161060691815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff831661064c5780600260008282546106419190610963565b909155506106fe9050565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054818110156106d2576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260248101829052604481018390526064016103a7565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020819052604090209082900390555b73ffffffffffffffffffffffffffffffffffffffff821661072757600280548290039055610753565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090208054820190555b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516107b291815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156107ed578581018301518582016040015282016107d1565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461085057600080fd5b919050565b6000806040838503121561086857600080fd5b6108718361082c565b946020939093013593505050565b60008060006060848603121561089457600080fd5b61089d8461082c565b92506108ab6020850161082c565b9150604084013590509250925092565b6000602082840312156108cd57600080fd5b6108d68261082c565b9392505050565b600080604083850312156108f057600080fd5b6108f98361082c565b91506109076020840161082c565b90509250929050565b600181811c9082168061092457607f821691505b60208210810361095d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8082018082111561028a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212204da53e95deac7bfd4f3614ff6d5c3b1a1d4225be17d680a0bfece4ca1ff32c2d64736f6c63430008180033",
        "sourceMap": "116:258:64:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1779:89:37;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3998:186;;;;;;:::i;:::-;;:::i;:::-;;;1251:14:69;;1244:22;1226:41;;1214:2;1199:18;3998:186:37;1086:187:69;2849:97:37;2927:12;;2849:97;;;1424:25:69;;;1412:2;1397:18;2849:97:37;1278:177:69;4776:244:37;;;;;;:::i;:::-;;:::i;2707:82::-;;;2780:2;1935:36:69;;1923:2;1908:18;2707:82:37;1793:184:69;284:87:64;;;;;;:::i;:::-;;:::i;:::-;;3004:116:37;;;;;;:::i;:::-;3095:18;;3069:7;3095:18;;;;;;;;;;;;3004:116;1981:93;;;:::i;3315:178::-;;;;;;:::i;:::-;;:::i;3551:140::-;;;;;;:::i;:::-;3657:18;;;;3631:7;3657:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3551:140;1779:89;1824:13;1856:5;1849:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1779:89;:::o;3998:186::-;4071:4;735:10:46;4125:31:37;735:10:46;4141:7:37;4150:5;4125:8;:31::i;:::-;4173:4;4166:11;;;3998:186;;;;;:::o;4776:244::-;4863:4;735:10:46;4919:37:37;4935:4;735:10:46;4950:5:37;4919:15;:37::i;:::-;4966:26;4976:4;4982:2;4986:5;4966:9;:26::i;:::-;-1:-1:-1;5009:4:37;;4776:244;-1:-1:-1;;;;4776:244:37:o;284:87:64:-;345:19;351:3;356:7;345:5;:19::i;:::-;284:87;;:::o;1981:93:37:-;2028:13;2060:7;2053:14;;;;;:::i;3315:178::-;3384:4;735:10:46;3438:27:37;735:10:46;3455:2:37;3459:5;3438:9;:27::i;8726:128::-;8810:37;8819:5;8826:7;8835:5;8842:4;8810:8;:37::i;:::-;8726:128;;;:::o;10415:477::-;3657:18;;;;10514:24;3657:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;10600:17;10580:37;;10576:310;;10656:5;10637:16;:24;10633:130;;;10688:60;;;;;3112:42:69;3100:55;;10688:60:37;;;3082:74:69;3172:18;;;3165:34;;;3215:18;;;3208:34;;;3055:18;;10688:60:37;;;;;;;;10633:130;10804:57;10813:5;10820:7;10848:5;10829:16;:24;10855:5;10804:8;:57::i;:::-;10504:388;10415:477;;;:::o;5393:300::-;5476:18;;;5472:86;;5517:30;;;;;5544:1;5517:30;;;3399:74:69;3372:18;;5517:30:37;3253:226:69;5472:86:37;5571:16;;;5567:86;;5610:32;;;;;5639:1;5610:32;;;3399:74:69;3372:18;;5610:32:37;3253:226:69;5567:86:37;5662:24;5670:4;5676:2;5680:5;5662:7;:24::i;7458:208::-;7528:21;;;7524:91;;7572:32;;;;;7601:1;7572:32;;;3399:74:69;3372:18;;7572:32:37;3253:226:69;7524:91:37;7624:35;7640:1;7644:7;7653:5;7624:7;:35::i;9701:432::-;9813:19;;;9809:89;;9855:32;;;;;9884:1;9855:32;;;3399:74:69;3372:18;;9855:32:37;3253:226:69;9809:89:37;9911:21;;;9907:90;;9955:31;;;;;9983:1;9955:31;;;3399:74:69;3372:18;;9955:31:37;3253:226:69;9907:90:37;10006:18;;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;:35;;;10051:76;;;;10101:7;10085:31;;10094:5;10085:31;;;10110:5;10085:31;;;;1424:25:69;;1412:2;1397:18;;1278:177;10085:31:37;;;;;;;;9701:432;;;;:::o;6008:1107::-;6097:18;;;6093:540;;6249:5;6233:12;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;6093:540:37;;-1:-1:-1;6093:540:37;;6307:15;;;6285:19;6307:15;;;;;;;;;;;6340:19;;;6336:115;;;6386:50;;;;;3112:42:69;3100:55;;6386:50:37;;;3082:74:69;3172:18;;;3165:34;;;3215:18;;;3208:34;;;3055:18;;6386:50:37;2880:368:69;6336:115:37;6571:15;;;:9;:15;;;;;;;;;;6589:19;;;;6571:37;;6093:540;6647:16;;;6643:425;;6810:12;:21;;;;;;;6643:425;;;7021:13;;;:9;:13;;;;;;;;;;:22;;;;;;6643:425;7098:2;7083:25;;7092:4;7083:25;;;7102:5;7083:25;;;;1424::69;;1412:2;1397:18;;1278:177;7083:25:37;;;;;;;;6008:1107;;;:::o;14:607:69:-;126:4;155:2;184;173:9;166:21;216:6;210:13;259:6;254:2;243:9;239:18;232:34;284:1;294:140;308:6;305:1;302:13;294:140;;;403:14;;;399:23;;393:30;369:17;;;388:2;365:26;358:66;323:10;;294:140;;;298:3;483:1;478:2;469:6;458:9;454:22;450:31;443:42;612:2;542:66;537:2;529:6;525:15;521:88;510:9;506:104;502:113;494:121;;;;14:607;;;;:::o;626:196::-;694:20;;754:42;743:54;;733:65;;723:93;;812:1;809;802:12;723:93;626:196;;;:::o;827:254::-;895:6;903;956:2;944:9;935:7;931:23;927:32;924:52;;;972:1;969;962:12;924:52;995:29;1014:9;995:29;:::i;:::-;985:39;1071:2;1056:18;;;;1043:32;;-1:-1:-1;;;827:254:69:o;1460:328::-;1537:6;1545;1553;1606:2;1594:9;1585:7;1581:23;1577:32;1574:52;;;1622:1;1619;1612:12;1574:52;1645:29;1664:9;1645:29;:::i;:::-;1635:39;;1693:38;1727:2;1716:9;1712:18;1693:38;:::i;:::-;1683:48;;1778:2;1767:9;1763:18;1750:32;1740:42;;1460:328;;;;;:::o;1982:186::-;2041:6;2094:2;2082:9;2073:7;2069:23;2065:32;2062:52;;;2110:1;2107;2100:12;2062:52;2133:29;2152:9;2133:29;:::i;:::-;2123:39;1982:186;-1:-1:-1;;;1982:186:69:o;2173:260::-;2241:6;2249;2302:2;2290:9;2281:7;2277:23;2273:32;2270:52;;;2318:1;2315;2308:12;2270:52;2341:29;2360:9;2341:29;:::i;:::-;2331:39;;2389:38;2423:2;2412:9;2408:18;2389:38;:::i;:::-;2379:48;;2173:260;;;;;:::o;2438:437::-;2517:1;2513:12;;;;2560;;;2581:61;;2635:4;2627:6;2623:17;2613:27;;2581:61;2688:2;2680:6;2677:14;2657:18;2654:38;2651:218;;2725:77;2722:1;2715:88;2826:4;2823:1;2816:15;2854:4;2851:1;2844:15;2651:218;;2438:437;;;:::o;3484:279::-;3549:9;;;3570:10;;;3567:190;;;3613:77;3610:1;3603:88;3714:4;3711:1;3704:15;3742:4;3739:1;3732:15",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "decimals()": "313ce567",
        "mint(address,uint256)": "40c10f19",
        "name()": "06fdde03",
        "symbol()": "95d89b41",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSpender\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC20InsufficientAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\",\"params\":{\"allowance\":\"Amount of tokens a `spender` is allowed to operate with.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC20InsufficientBalance(address,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC20InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC20InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidSpender(address)\":[{\"details\":\"Indicates a failure with the `spender` to be approved. Used in approvals.\",\"params\":{\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Skips emitting an {Approval} event indicating an allowance update. This is not required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve]. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/MockERC20.sol\":\"MockERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x9cac1f97ecc92043dd19235d6677e40cf6bac382886a94f7a80a957846b24229\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a1e0c924e0edfdfd4abceeb552d99f1cd95c0d387b38ccb1f67c583607e3d155\",\"dweb:/ipfs/QmZAi6qKa66zuS3jyEhsQR9bBNnZe1wSognYqw9nvseyUz\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc61b3530214f6729db70cc02ffacf6218e601a5e351dd25e369a03c6ca201cfb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://48b897a0323b8d04464848832b364ecfd6c002fd15c53a86304ca1eec1475d12\",\"dweb:/ipfs/QmV1S2GmZgU9bDEfdXFyCe1HhDy4nND3z4Jyy4iBvh5wu2\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xee2337af2dc162a973b4be6d3f7c16f06298259e0af48c5470d2839bfa8a22f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30c476b4b2f405c1bb3f0bae15b006d129c80f1bfd9d0f2038160a3bb9745009\",\"dweb:/ipfs/Qmb3VcuDufv6xbHeVgksC4tHpc5gKYVqBEwjEXW72XzSvN\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x88f7b6f070ad1de2bf899da6978ed74b5038eac78c01b7359b92b60c3d965c28\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c436edb6733a036607c6f17cc590e8ee351363a8cb4c564a98d9a66392c89323\",\"dweb:/ipfs/QmcJvJR2K3EtYcKEXVpQ1WqT6TvAbVem5HR1FirAsqEXFR\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"src/MockERC20.sol\":{\"keccak256\":\"0xda5e8df439d375aee1b8682852aaeeafbd9e1dd61ec23aae0418aa1da0c6109f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f147f15d2b799f27f44621e1c88fb2b011a39afca3cb14e4df3d164d413ef0d3\",\"dweb:/ipfs/QmWPjH12DK3vGtySKWftY8ND9wDbg344bcjoAywfbzDsSq\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.24+commit.e11b9ed9"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "symbol",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "allowance",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "needed",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InsufficientAllowance"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "sender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "balance",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "needed",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InsufficientBalance"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "approver",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InvalidApprover"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "receiver",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InvalidReceiver"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "sender",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InvalidSender"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC20InvalidSpender"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Transfer",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "allowance",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "approve",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "decimals",
                    "outputs": [
                        {
                            "internalType": "uint8",
                            "name": "",
                            "type": "uint8"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "mint"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "name",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "symbol",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "totalSupply",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transfer",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFrom",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "allowance(address,address)": {
                        "details": "See {IERC20-allowance}."
                    },
                    "approve(address,uint256)": {
                        "details": "See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
                    },
                    "balanceOf(address)": {
                        "details": "See {IERC20-balanceOf}."
                    },
                    "decimals()": {
                        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
                    },
                    "name()": {
                        "details": "Returns the name of the token."
                    },
                    "symbol()": {
                        "details": "Returns the symbol of the token, usually a shorter version of the name."
                    },
                    "totalSupply()": {
                        "details": "See {IERC20-totalSupply}."
                    },
                    "transfer(address,uint256)": {
                        "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`."
                    },
                    "transferFrom(address,address,uint256)": {
                        "details": "See {IERC20-transferFrom}. Skips emitting an {Approval} event indicating an allowance update. This is not required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve]. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`."
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/=lib/openzeppelin-contracts/",
                "@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "@upgradeable/=lib/openzeppelin-contracts-upgradeable/",
                "ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 20000
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "src/MockERC20.sol": "MockERC20"
            },
            "evmVersion": "paris",
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x9cac1f97ecc92043dd19235d6677e40cf6bac382886a94f7a80a957846b24229",
                "urls": [
                    "bzz-raw://a1e0c924e0edfdfd4abceeb552d99f1cd95c0d387b38ccb1f67c583607e3d155",
                    "dweb:/ipfs/QmZAi6qKa66zuS3jyEhsQR9bBNnZe1wSognYqw9nvseyUz"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                "keccak256": "0xc61b3530214f6729db70cc02ffacf6218e601a5e351dd25e369a03c6ca201cfb",
                "urls": [
                    "bzz-raw://48b897a0323b8d04464848832b364ecfd6c002fd15c53a86304ca1eec1475d12",
                    "dweb:/ipfs/QmV1S2GmZgU9bDEfdXFyCe1HhDy4nND3z4Jyy4iBvh5wu2"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xee2337af2dc162a973b4be6d3f7c16f06298259e0af48c5470d2839bfa8a22f4",
                "urls": [
                    "bzz-raw://30c476b4b2f405c1bb3f0bae15b006d129c80f1bfd9d0f2038160a3bb9745009",
                    "dweb:/ipfs/Qmb3VcuDufv6xbHeVgksC4tHpc5gKYVqBEwjEXW72XzSvN"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                "keccak256": "0x88f7b6f070ad1de2bf899da6978ed74b5038eac78c01b7359b92b60c3d965c28",
                "urls": [
                    "bzz-raw://c436edb6733a036607c6f17cc590e8ee351363a8cb4c564a98d9a66392c89323",
                    "dweb:/ipfs/QmcJvJR2K3EtYcKEXVpQ1WqT6TvAbVem5HR1FirAsqEXFR"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            },
            "src/MockERC20.sol": {
                "keccak256": "0xda5e8df439d375aee1b8682852aaeeafbd9e1dd61ec23aae0418aa1da0c6109f",
                "urls": [
                    "bzz-raw://f147f15d2b799f27f44621e1c88fb2b011a39afca3cb14e4df3d164d413ef0d3",
                    "dweb:/ipfs/QmWPjH12DK3vGtySKWftY8ND9wDbg344bcjoAywfbzDsSq"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "id": 64
}




export const MockERC20Abi = MockERC20ByteCode["abi"];