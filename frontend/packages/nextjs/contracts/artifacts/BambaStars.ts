const BambaStarsByteCode = {
    "abi": [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_erc6551Registry",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_erc6551Implementation",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_paymentToken",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_proxyImplementation",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "approve",
            "inputs": [
                {
                    "name": "to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "badgesCollections",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "balanceOf",
            "inputs": [
                {
                    "name": "owner",
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
            "name": "erc6551Implementation",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "erc6551Registry",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC6551Registry"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getApproved",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "images",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
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
            "name": "isApprovedForAll",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "mint",
            "inputs": [
                {
                    "name": "_name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_symbol",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_pricePerToken",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_paymentToken",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_milestone2Timestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_milestone3Timestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_targetTotalSupply",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "img",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
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
            "name": "owner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "ownerOf",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "paymentToken",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC20"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "proxyImplementation",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "renounceOwnership",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
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
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "safeTransferFrom",
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
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setApprovalForAll",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "starsAccounts",
            "inputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "inputs": [
                {
                    "name": "interfaceId",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
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
            "name": "tokenURI",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
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
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferOwnership",
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
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
                    "name": "approved",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "ApprovalForAll",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "operator",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "approved",
                    "type": "bool",
                    "indexed": false,
                    "internalType": "bool"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Minted",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "badgeCollection",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "starAccount",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "OwnershipTransferred",
            "inputs": [
                {
                    "name": "previousOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
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
                    "name": "tokenId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "ERC721IncorrectOwner",
            "inputs": [
                {
                    "name": "sender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InsufficientApproval",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidApprover",
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
            "name": "ERC721InvalidOperator",
            "inputs": [
                {
                    "name": "operator",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidOwner",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "ERC721InvalidReceiver",
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
            "name": "ERC721InvalidSender",
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
            "name": "ERC721NonexistentToken",
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "OwnableInvalidOwner",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "OwnableUnauthorizedAccount",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        }
    ],
    "bytecode": {
        "object": "0x60806040523480156200001157600080fd5b5060405162002f4138038062002f41833981016040819052620000349162000199565b336040518060400160405280600b81526020016a426c6f636b45737461746560a81b81525060405180604001604052806006815260200165084989e8696b60d31b81525081600090816200008991906200029d565b5060016200009882826200029d565b5050506001600160a01b038116620000ca57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000d5816200012a565b50600780546001600160a01b039586166001600160a01b03199182161790915560088054948616948216949094179093556009805492851692841692909217909155600a805491909316911617905562000369565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b03811681146200019457600080fd5b919050565b60008060008060808587031215620001b057600080fd5b620001bb856200017c565b9350620001cb602086016200017c565b9250620001db604086016200017c565b9150620001eb606086016200017c565b905092959194509250565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200022157607f821691505b6020821081036200024257634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000298576000816000526020600020601f850160051c81016020861015620002735750805b601f850160051c820191505b8181101562000294578281556001016200027f565b5050505b505050565b81516001600160401b03811115620002b957620002b9620001f6565b620002d181620002ca84546200020c565b8462000248565b602080601f831160018114620003095760008415620002f05750858301515b600019600386901b1c1916600185901b17855562000294565b600085815260208120601f198616915b828110156200033a5788860151825594840194600190910190840162000319565b5085821015620003595787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b612bc880620003796000396000f3fe60806040523480156200001157600080fd5b5060043610620001b95760003560e01c80638485648211620000f5578063b3dd12a21162000097578063c87b56dd116200006e578063c87b56dd1462000449578063e985e9c51462000460578063f2fde38b14620004ac57600080fd5b8063b3dd12a214620003fa578063b68b6e00146200041b578063b88d4fde146200043257600080fd5b80639625e8df11620000cc5780639625e8df1462000371578063a22cb46514620003aa578063a5c2373814620003c157600080fd5b80638485648214620003315780638da5cb5b146200034857806395d89b41146200036757600080fd5b806323b872dd116200015f5780636352211e11620001365780636352211e14620002ea57806370a082311462000301578063715018a6146200032757600080fd5b806323b872dd146200029b5780633013ce2914620002b257806342842e0e14620002d357600080fd5b8063081812fc1162000194578063081812fc146200024a578063095ea7b314620002615780630c870f91146200027a57600080fd5b806301ffc9a714620001be578063056d5afe14620001ea57806306fdde031462000231575b600080fd5b620001d5620001cf36600462001d63565b620004c3565b60405190151581526020015b60405180910390f35b6007546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001620001e1565b6200023b620005aa565b604051620001e1919062001df5565b6200020b6200025b36600462001e0a565b62000644565b620002786200027236600462001e59565b6200067d565b005b600a546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b62000278620002ac36600462001e88565b6200068e565b6009546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b62000278620002e436600462001e88565b62000789565b6200020b620002fb36600462001e0a565b620007ab565b620003186200031236600462001ece565b620007b8565b604051908152602001620001e1565b6200027862000835565b6200023b6200034236600462001e0a565b6200084d565b60065473ffffffffffffffffffffffffffffffffffffffff166200020b565b6200023b620008ef565b6200020b6200038236600462001e0a565b600d6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b62000278620003bb36600462001eee565b62000900565b6200020b620003d236600462001e0a565b600c6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6008546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b620003186200042c3660046200201d565b6200090d565b6200027862000443366004620020e9565b62000f60565b6200023b6200045a36600462001e0a565b62000f7c565b620001d56200047136600462002172565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b62000278620004bd36600462001ece565b62000ffa565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806200055757507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b80620005a457507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060008054620005bb90620021a5565b80601f0160208091040260200160405190810160405280929190818152602001828054620005e990620021a5565b80156200063a5780601f106200060e576101008083540402835291602001916200063a565b820191906000526020600020905b8154815290600101906020018083116200061c57829003601f168201915b5050505050905090565b6000620006518262001064565b5060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff16620005a4565b6200068a828233620010c5565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216620006e4576040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b6000620006f3838333620010d4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000783576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80861660048301526024820184905282166044820152606401620006db565b50505050565b620007a68383836040518060200160405280600081525062000f60565b505050565b6000620005a48262001064565b600073ffffffffffffffffffffffffffffffffffffffff82166200080c576040517f89c62b6400000000000000000000000000000000000000000000000000000000815260006004820152602401620006db565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6200083f62001258565b6200084b6000620012ad565b565b600b60205260009081526040902080546200086890620021a5565b80601f01602080910402602001604051908101604052809291908181526020018280546200089690620021a5565b8015620008e75780601f10620008bb57610100808354040283529160200191620008e7565b820191906000526020600020905b815481529060010190602001808311620008c957829003601f168201915b505050505081565b606060018054620005bb90620021a5565b6200068a33838362001324565b600e80546000918190836200092283620021fa565b919050555062000933308262001423565b6007546008546040805160048082526024820183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f8129fc1c0000000000000000000000000000000000000000000000000000000017905291517fda7323b300000000000000000000000000000000000000000000000000000000815260009473ffffffffffffffffffffffffffffffffffffffff9081169463da7323b394620009f0949190921692469230928a928a92016200225a565b6020604051808303816000875af115801562000a10573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a369190620022b3565b6040517f5c707f0700000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff821690635c707f079062000a8f908e908e90600401620022d3565b600060405180830381600087803b15801562000aaa57600080fd5b505af115801562000abf573d6000803e3d6000fd5b50506040517f2bf2762f000000000000000000000000000000000000000000000000000000008152600481018c905273ffffffffffffffffffffffffffffffffffffffff84169250632bf2762f9150602401600060405180830381600087803b15801562000b2c57600080fd5b505af115801562000b41573d6000803e3d6000fd5b50506040517f6a326ab100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b8116600483015284169250636a326ab19150602401600060405180830381600087803b15801562000baf57600080fd5b505af115801562000bc4573d6000803e3d6000fd5b50506040517f412eade6000000000000000000000000000000000000000000000000000000008152600481018a90526024810189905273ffffffffffffffffffffffffffffffffffffffff8416925063412eade69150604401600060405180830381600087803b15801562000c3857600080fd5b505af115801562000c4d573d6000803e3d6000fd5b50506040517fb210e2c10000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff8416925063b210e2c19150602401600060405180830381600087803b15801562000cba57600080fd5b505af115801562000ccf573d6000803e3d6000fd5b5050600a546040516000935073ffffffffffffffffffffffffffffffffffffffff90911691507fe6a07063000000000000000000000000000000000000000000000000000000009062000d2d908f908f9087908b9060240162002305565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090941693909317909252905162000db79062001d26565b62000dc49291906200236b565b604051809103906000f08015801562000de1573d6000803e3d6000fd5b506040517f770b74ba00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192509083169063770b74ba90602401600060405180830381600087803b15801562000e5057600080fd5b505af115801562000e65573d6000803e3d6000fd5b5050505062000e7d3062000e763390565b85620014da565b6000838152600d60209081526040808320805473ffffffffffffffffffffffffffffffffffffffff8087167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255600c8452828520805492881692909116919091179055600b909152902062000ef98682620023e8565b506040805184815273ffffffffffffffffffffffffffffffffffffffff838116602083015284168183015290517f5758c4c0a4d007ca9768a0a574eedc39af88c4423f4ad0f8895b1b8fd1e761339181900360600190a150909a9950505050505050505050565b62000f6d8484846200068e565b6200078333858585856200161e565b606062000f898262001064565b50600062000fa260408051602081019091526000815290565b9050600081511162000fc4576040518060200160405280600081525062000ff3565b8062000fd08462001824565b60405160200162000fe39291906200250f565b6040516020818303038152906040525b9392505050565b6200100462001258565b73ffffffffffffffffffffffffffffffffffffffff811662001056576040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152602401620006db565b6200106181620012ad565b50565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff1680620005a4576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101849052602401620006db565b620007a68383836001620018e9565b60008281526002602052604081205473ffffffffffffffffffffffffffffffffffffffff9081169083161562001111576200111181848662001abd565b73ffffffffffffffffffffffffffffffffffffffff8116156200118a576200113e600085600080620018e9565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff851615620011d45773ffffffffffffffffffffffffffffffffffffffff85166000908152600360205260409020805460010190555b60008481526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff89811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b60065473ffffffffffffffffffffffffffffffffffffffff1633146200084b576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401620006db565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff82166200138b576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152602401620006db565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff821662001475576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260006004820152602401620006db565b60006200148583836000620010d4565b905073ffffffffffffffffffffffffffffffffffffffff811615620007a6576040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260006004820152602401620006db565b73ffffffffffffffffffffffffffffffffffffffff82166200152c576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260006004820152602401620006db565b60006200153c83836000620010d4565b905073ffffffffffffffffffffffffffffffffffffffff811662001590576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101839052602401620006db565b8373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000783576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80861660048301526024820184905282166044820152606401620006db565b73ffffffffffffffffffffffffffffffffffffffff83163b156200181d576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a02906200169690889088908790879060040162002542565b6020604051808303816000875af1925050508015620016f2575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252620016ef918101906200258d565b60015b62001786573d80801562001723576040519150601f19603f3d011682016040523d82523d6000602084013e62001728565b606091505b5080516000036200177e576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401620006db565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a0200000000000000000000000000000000000000000000000000000000146200181b576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401620006db565b505b5050505050565b60606000620018338362001b73565b600101905060008167ffffffffffffffff81111562001856576200185662001f30565b6040519080825280601f01601f19166020018201604052801562001881576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846200188b57509392505050565b80806200190b575073ffffffffffffffffffffffffffffffffffffffff821615155b1562001a685760006200191e8462001064565b905073ffffffffffffffffffffffffffffffffffffffff8316158015906200197257508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015620019b2575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209387168352929052205460ff16155b1562001a03576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84166004820152602401620006db565b811562001a6657838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b62001aca83838362001c5c565b620007a65773ffffffffffffffffffffffffffffffffffffffff831662001b21576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101829052602401620006db565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316600482015260248101829052604401620006db565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831062001bbd577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831062001bea576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831062001c0957662386f26fc10000830492506010015b6305f5e100831062001c22576305f5e100830492506008015b612710831062001c3757612710830492506004015b6064831062001c4a576064830492506002015b600a8310620005a45760010192915050565b600073ffffffffffffffffffffffffffffffffffffffff83161580159062001d1e57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148062001cec575073ffffffffffffffffffffffffffffffffffffffff80851660009081526005602090815260408083209387168352929052205460ff165b8062001d1e575060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b6105e580620025ae83390190565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146200106157600080fd5b60006020828403121562001d7657600080fd5b813562000ff38162001d34565b60005b8381101562001da057818101518382015260200162001d86565b50506000910152565b6000815180845262001dc381602086016020860162001d83565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600062000ff3602083018462001da9565b60006020828403121562001e1d57600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff811681146200106157600080fd5b803562001e548162001e24565b919050565b6000806040838503121562001e6d57600080fd5b823562001e7a8162001e24565b946020939093013593505050565b60008060006060848603121562001e9e57600080fd5b833562001eab8162001e24565b9250602084013562001ebd8162001e24565b929592945050506040919091013590565b60006020828403121562001ee157600080fd5b813562000ff38162001e24565b6000806040838503121562001f0257600080fd5b823562001f0f8162001e24565b91506020830135801515811462001f2557600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff8084111562001f7d5762001f7d62001f30565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171562001fc65762001fc662001f30565b8160405280935085815286868601111562001fe057600080fd5b858560208301376000602087830101525050509392505050565b600082601f8301126200200c57600080fd5b62000ff38383356020850162001f5f565b600080600080600080600080610100898b0312156200203b57600080fd5b883567ffffffffffffffff808211156200205457600080fd5b620020628c838d0162001ffa565b995060208b01359150808211156200207957600080fd5b620020878c838d0162001ffa565b985060408b013597506200209e60608c0162001e47565b965060808b0135955060a08b0135945060c08b0135935060e08b0135915080821115620020ca57600080fd5b50620020d98b828c0162001ffa565b9150509295985092959890939650565b600080600080608085870312156200210057600080fd5b84356200210d8162001e24565b935060208501356200211f8162001e24565b925060408501359150606085013567ffffffffffffffff8111156200214357600080fd5b8501601f810187136200215557600080fd5b620021668782356020840162001f5f565b91505092959194509250565b600080604083850312156200218657600080fd5b8235620021938162001e24565b9150602083013562001f258162001e24565b600181811c90821680620021ba57607f821691505b602082108103620021f4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362002253577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015280871660408401525084606083015283608083015260c060a0830152620022a760c083018462001da9565b98975050505050505050565b600060208284031215620022c657600080fd5b815162000ff38162001e24565b604081526000620022e8604083018562001da9565b8281036020840152620022fc818562001da9565b95945050505050565b6080815260006200231a608083018762001da9565b82810360208401526200232e818762001da9565b905073ffffffffffffffffffffffffffffffffffffffff85166040840152828103606084015262002360818562001da9565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600062001d1e604083018462001da9565b601f821115620007a6576000816000526020600020601f850160051c81016020861015620023c75750805b601f850160051c820191505b818110156200181b57828155600101620023d3565b815167ffffffffffffffff81111562002405576200240562001f30565b6200241d81620024168454620021a5565b846200239c565b602080601f8311600181146200247357600084156200243c5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556200181b565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015620024c257888601518255948401946001909101908401620024a1565b5085821015620024ff57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b600083516200252381846020880162001d83565b8351908301906200253981836020880162001d83565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015262002583608083018462001da9565b9695505050505050565b600060208284031215620025a057600080fd5b815162000ff38162001d3456fe60a06040526040516105e53803806105e583398101604081905261002291610387565b61002c828261003e565b506001600160a01b031660805261047e565b610047826100fe565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a28051156100f2576100ed826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e79190610447565b82610211565b505050565b6100fa610288565b5050565b806001600160a01b03163b60000361013957604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b81529051600092841691635c60da1b9160048083019260209291908290030181865afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610447565b9050806001600160a01b03163b6000036100fa57604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610130565b6060600080846001600160a01b03168460405161022e9190610462565b600060405180830381855af49150503d8060008114610269576040519150601f19603f3d011682016040523d82523d6000602084013e61026e565b606091505b50909250905061027f8583836102a9565b95945050505050565b34156102a75760405163b398979f60e01b815260040160405180910390fd5b565b6060826102be576102b982610308565b610301565b81511580156102d557506001600160a01b0384163b155b156102fe57604051639996b31560e01b81526001600160a01b0385166004820152602401610130565b50805b9392505050565b8051156103185780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b80516001600160a01b038116811461034857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561037e578181015183820152602001610366565b50506000910152565b6000806040838503121561039a57600080fd5b6103a383610331565b60208401519092506001600160401b03808211156103c057600080fd5b818501915085601f8301126103d457600080fd5b8151818111156103e6576103e661034d565b604051601f8201601f19908116603f0116810190838211818310171561040e5761040e61034d565b8160405282815288602084870101111561042757600080fd5b610438836020830160208801610363565b80955050505050509250929050565b60006020828403121561045957600080fd5b61030182610331565b60008251610474818460208701610363565b9190910192915050565b60805161014d61049860003960006024015261014d6000f3fe608060405261000c61000e565b005b61001e610019610020565b6100b6565b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b191906100da565b905090565b3660008037600080366000845af43d6000803e8080156100d5573d6000f35b3d6000fd5b6000602082840312156100ec57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461011057600080fd5b939250505056fea264697066735822122052dc7d6193a3d510a122b2aff7d9675fe5a2816416fa263de04131e22077324664736f6c63430008180033a26469706673582212202b37bf431c7779ec7db76734f2d2ebae72c5c4470574cc973a7a4f0cf0dce98e64736f6c63430008180033",
        "sourceMap": "397:2587:62:-:0;;;866:432;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;735:10:47;1380:113:41;;;;;;;;;;;;;-1:-1:-1;;;1380:113:41;;;;;;;;;;;;;;;;-1:-1:-1;;;1380:113:41;;;1454:5;1446;:13;;;;;;:::i;:::-;-1:-1:-1;1469:7:41;:17;1479:7;1469;:17;:::i;:::-;-1:-1:-1;;;;;;;;1273:26:30;;1269:95;;1322:31;;-1:-1:-1;;;1322:31:30;;1350:1;1322:31;;;3523:51:70;3496:18;;1322:31:30;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;1083:15:62::2;:53:::0;;-1:-1:-1;;;;;1083:53:62;;::::2;-1:-1:-1::0;;;;;;1083:53:62;;::::2;;::::0;;;1146:21:::2;:46:::0;;;;::::2;::::0;;::::2;::::0;;;::::2;::::0;;;1202:12:::2;:36:::0;;;;::::2;::::0;;::::2;::::0;;;::::2;::::0;;;1248:19:::2;:42:::0;;;;;::::2;::::0;::::2;;::::0;;397:2587;;2912:187:30;3004:6;;;-1:-1:-1;;;;;3020:17:30;;;-1:-1:-1;;;;;;3020:17:30;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;14:177:70:-;93:13;;-1:-1:-1;;;;;135:31:70;;125:42;;115:70;;181:1;178;171:12;115:70;14:177;;;:::o;196:464::-;293:6;301;309;317;370:3;358:9;349:7;345:23;341:33;338:53;;;387:1;384;377:12;338:53;410:40;440:9;410:40;:::i;:::-;400:50;;469:49;514:2;503:9;499:18;469:49;:::i;:::-;459:59;;537:49;582:2;571:9;567:18;537:49;:::i;:::-;527:59;;605:49;650:2;639:9;635:18;605:49;:::i;:::-;595:59;;196:464;;;;;;;:::o;665:127::-;726:10;721:3;717:20;714:1;707:31;757:4;754:1;747:15;781:4;778:1;771:15;797:380;876:1;872:12;;;;919;;;940:61;;994:4;986:6;982:17;972:27;;940:61;1047:2;1039:6;1036:14;1016:18;1013:38;1010:161;;1093:10;1088:3;1084:20;1081:1;1074:31;1128:4;1125:1;1118:15;1156:4;1153:1;1146:15;1010:161;;797:380;;;:::o;1308:543::-;1410:2;1405:3;1402:11;1399:446;;;1446:1;1470:5;1467:1;1460:16;1514:4;1511:1;1501:18;1584:2;1572:10;1568:19;1565:1;1561:27;1555:4;1551:38;1620:4;1608:10;1605:20;1602:47;;;-1:-1:-1;1643:4:70;1602:47;1698:2;1693:3;1689:12;1686:1;1682:20;1676:4;1672:31;1662:41;;1753:82;1771:2;1764:5;1761:13;1753:82;;;1816:17;;;1797:1;1786:13;1753:82;;;1757:3;;;1399:446;1308:543;;;:::o;2027:1345::-;2147:10;;-1:-1:-1;;;;;2169:30:70;;2166:56;;;2202:18;;:::i;:::-;2231:97;2321:6;2281:38;2313:4;2307:11;2281:38;:::i;:::-;2275:4;2231:97;:::i;:::-;2383:4;;2440:2;2429:14;;2457:1;2452:663;;;;3159:1;3176:6;3173:89;;;-1:-1:-1;3228:19:70;;;3222:26;3173:89;-1:-1:-1;;1984:1:70;1980:11;;;1976:24;1972:29;1962:40;2008:1;2004:11;;;1959:57;3275:81;;2422:944;;2452:663;1255:1;1248:14;;;1292:4;1279:18;;-1:-1:-1;;2488:20:70;;;2606:236;2620:7;2617:1;2614:14;2606:236;;;2709:19;;;2703:26;2688:42;;2801:27;;;;2769:1;2757:14;;;;2636:19;;2606:236;;;2610:3;2870:6;2861:7;2858:19;2855:201;;;2931:19;;;2925:26;-1:-1:-1;;3014:1:70;3010:14;;;3026:3;3006:24;3002:37;2998:42;2983:58;2968:74;;2855:201;-1:-1:-1;;;;;3102:1:70;3086:14;;;3082:22;3069:36;;-1:-1:-1;2027:1345:70:o;3377:203::-;397:2587:62;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x60806040523480156200001157600080fd5b5060043610620001b95760003560e01c80638485648211620000f5578063b3dd12a21162000097578063c87b56dd116200006e578063c87b56dd1462000449578063e985e9c51462000460578063f2fde38b14620004ac57600080fd5b8063b3dd12a214620003fa578063b68b6e00146200041b578063b88d4fde146200043257600080fd5b80639625e8df11620000cc5780639625e8df1462000371578063a22cb46514620003aa578063a5c2373814620003c157600080fd5b80638485648214620003315780638da5cb5b146200034857806395d89b41146200036757600080fd5b806323b872dd116200015f5780636352211e11620001365780636352211e14620002ea57806370a082311462000301578063715018a6146200032757600080fd5b806323b872dd146200029b5780633013ce2914620002b257806342842e0e14620002d357600080fd5b8063081812fc1162000194578063081812fc146200024a578063095ea7b314620002615780630c870f91146200027a57600080fd5b806301ffc9a714620001be578063056d5afe14620001ea57806306fdde031462000231575b600080fd5b620001d5620001cf36600462001d63565b620004c3565b60405190151581526020015b60405180910390f35b6007546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001620001e1565b6200023b620005aa565b604051620001e1919062001df5565b6200020b6200025b36600462001e0a565b62000644565b620002786200027236600462001e59565b6200067d565b005b600a546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b62000278620002ac36600462001e88565b6200068e565b6009546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b62000278620002e436600462001e88565b62000789565b6200020b620002fb36600462001e0a565b620007ab565b620003186200031236600462001ece565b620007b8565b604051908152602001620001e1565b6200027862000835565b6200023b6200034236600462001e0a565b6200084d565b60065473ffffffffffffffffffffffffffffffffffffffff166200020b565b6200023b620008ef565b6200020b6200038236600462001e0a565b600d6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b62000278620003bb36600462001eee565b62000900565b6200020b620003d236600462001e0a565b600c6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6008546200020b9073ffffffffffffffffffffffffffffffffffffffff1681565b620003186200042c3660046200201d565b6200090d565b6200027862000443366004620020e9565b62000f60565b6200023b6200045a36600462001e0a565b62000f7c565b620001d56200047136600462002172565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b62000278620004bd36600462001ece565b62000ffa565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806200055757507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b80620005a457507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060008054620005bb90620021a5565b80601f0160208091040260200160405190810160405280929190818152602001828054620005e990620021a5565b80156200063a5780601f106200060e576101008083540402835291602001916200063a565b820191906000526020600020905b8154815290600101906020018083116200061c57829003601f168201915b5050505050905090565b6000620006518262001064565b5060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff16620005a4565b6200068a828233620010c5565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216620006e4576040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b6000620006f3838333620010d4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000783576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80861660048301526024820184905282166044820152606401620006db565b50505050565b620007a68383836040518060200160405280600081525062000f60565b505050565b6000620005a48262001064565b600073ffffffffffffffffffffffffffffffffffffffff82166200080c576040517f89c62b6400000000000000000000000000000000000000000000000000000000815260006004820152602401620006db565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6200083f62001258565b6200084b6000620012ad565b565b600b60205260009081526040902080546200086890620021a5565b80601f01602080910402602001604051908101604052809291908181526020018280546200089690620021a5565b8015620008e75780601f10620008bb57610100808354040283529160200191620008e7565b820191906000526020600020905b815481529060010190602001808311620008c957829003601f168201915b505050505081565b606060018054620005bb90620021a5565b6200068a33838362001324565b600e80546000918190836200092283620021fa565b919050555062000933308262001423565b6007546008546040805160048082526024820183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f8129fc1c0000000000000000000000000000000000000000000000000000000017905291517fda7323b300000000000000000000000000000000000000000000000000000000815260009473ffffffffffffffffffffffffffffffffffffffff9081169463da7323b394620009f0949190921692469230928a928a92016200225a565b6020604051808303816000875af115801562000a10573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a369190620022b3565b6040517f5c707f0700000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff821690635c707f079062000a8f908e908e90600401620022d3565b600060405180830381600087803b15801562000aaa57600080fd5b505af115801562000abf573d6000803e3d6000fd5b50506040517f2bf2762f000000000000000000000000000000000000000000000000000000008152600481018c905273ffffffffffffffffffffffffffffffffffffffff84169250632bf2762f9150602401600060405180830381600087803b15801562000b2c57600080fd5b505af115801562000b41573d6000803e3d6000fd5b50506040517f6a326ab100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b8116600483015284169250636a326ab19150602401600060405180830381600087803b15801562000baf57600080fd5b505af115801562000bc4573d6000803e3d6000fd5b50506040517f412eade6000000000000000000000000000000000000000000000000000000008152600481018a90526024810189905273ffffffffffffffffffffffffffffffffffffffff8416925063412eade69150604401600060405180830381600087803b15801562000c3857600080fd5b505af115801562000c4d573d6000803e3d6000fd5b50506040517fb210e2c10000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff8416925063b210e2c19150602401600060405180830381600087803b15801562000cba57600080fd5b505af115801562000ccf573d6000803e3d6000fd5b5050600a546040516000935073ffffffffffffffffffffffffffffffffffffffff90911691507fe6a07063000000000000000000000000000000000000000000000000000000009062000d2d908f908f9087908b9060240162002305565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090941693909317909252905162000db79062001d26565b62000dc49291906200236b565b604051809103906000f08015801562000de1573d6000803e3d6000fd5b506040517f770b74ba00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192509083169063770b74ba90602401600060405180830381600087803b15801562000e5057600080fd5b505af115801562000e65573d6000803e3d6000fd5b5050505062000e7d3062000e763390565b85620014da565b6000838152600d60209081526040808320805473ffffffffffffffffffffffffffffffffffffffff8087167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255600c8452828520805492881692909116919091179055600b909152902062000ef98682620023e8565b506040805184815273ffffffffffffffffffffffffffffffffffffffff838116602083015284168183015290517f5758c4c0a4d007ca9768a0a574eedc39af88c4423f4ad0f8895b1b8fd1e761339181900360600190a150909a9950505050505050505050565b62000f6d8484846200068e565b6200078333858585856200161e565b606062000f898262001064565b50600062000fa260408051602081019091526000815290565b9050600081511162000fc4576040518060200160405280600081525062000ff3565b8062000fd08462001824565b60405160200162000fe39291906200250f565b6040516020818303038152906040525b9392505050565b6200100462001258565b73ffffffffffffffffffffffffffffffffffffffff811662001056576040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260006004820152602401620006db565b6200106181620012ad565b50565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff1680620005a4576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101849052602401620006db565b620007a68383836001620018e9565b60008281526002602052604081205473ffffffffffffffffffffffffffffffffffffffff9081169083161562001111576200111181848662001abd565b73ffffffffffffffffffffffffffffffffffffffff8116156200118a576200113e600085600080620018e9565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff851615620011d45773ffffffffffffffffffffffffffffffffffffffff85166000908152600360205260409020805460010190555b60008481526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff89811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b60065473ffffffffffffffffffffffffffffffffffffffff1633146200084b576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401620006db565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff82166200138b576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152602401620006db565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff821662001475576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260006004820152602401620006db565b60006200148583836000620010d4565b905073ffffffffffffffffffffffffffffffffffffffff811615620007a6576040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260006004820152602401620006db565b73ffffffffffffffffffffffffffffffffffffffff82166200152c576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260006004820152602401620006db565b60006200153c83836000620010d4565b905073ffffffffffffffffffffffffffffffffffffffff811662001590576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101839052602401620006db565b8373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000783576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80861660048301526024820184905282166044820152606401620006db565b73ffffffffffffffffffffffffffffffffffffffff83163b156200181d576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a02906200169690889088908790879060040162002542565b6020604051808303816000875af1925050508015620016f2575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252620016ef918101906200258d565b60015b62001786573d80801562001723576040519150601f19603f3d011682016040523d82523d6000602084013e62001728565b606091505b5080516000036200177e576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401620006db565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a0200000000000000000000000000000000000000000000000000000000146200181b576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401620006db565b505b5050505050565b60606000620018338362001b73565b600101905060008167ffffffffffffffff81111562001856576200185662001f30565b6040519080825280601f01601f19166020018201604052801562001881576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846200188b57509392505050565b80806200190b575073ffffffffffffffffffffffffffffffffffffffff821615155b1562001a685760006200191e8462001064565b905073ffffffffffffffffffffffffffffffffffffffff8316158015906200197257508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015620019b2575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209387168352929052205460ff16155b1562001a03576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84166004820152602401620006db565b811562001a6657838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b62001aca83838362001c5c565b620007a65773ffffffffffffffffffffffffffffffffffffffff831662001b21576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101829052602401620006db565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316600482015260248101829052604401620006db565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831062001bbd577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831062001bea576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831062001c0957662386f26fc10000830492506010015b6305f5e100831062001c22576305f5e100830492506008015b612710831062001c3757612710830492506004015b6064831062001c4a576064830492506002015b600a8310620005a45760010192915050565b600073ffffffffffffffffffffffffffffffffffffffff83161580159062001d1e57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148062001cec575073ffffffffffffffffffffffffffffffffffffffff80851660009081526005602090815260408083209387168352929052205460ff165b8062001d1e575060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b6105e580620025ae83390190565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146200106157600080fd5b60006020828403121562001d7657600080fd5b813562000ff38162001d34565b60005b8381101562001da057818101518382015260200162001d86565b50506000910152565b6000815180845262001dc381602086016020860162001d83565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600062000ff3602083018462001da9565b60006020828403121562001e1d57600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff811681146200106157600080fd5b803562001e548162001e24565b919050565b6000806040838503121562001e6d57600080fd5b823562001e7a8162001e24565b946020939093013593505050565b60008060006060848603121562001e9e57600080fd5b833562001eab8162001e24565b9250602084013562001ebd8162001e24565b929592945050506040919091013590565b60006020828403121562001ee157600080fd5b813562000ff38162001e24565b6000806040838503121562001f0257600080fd5b823562001f0f8162001e24565b91506020830135801515811462001f2557600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff8084111562001f7d5762001f7d62001f30565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171562001fc65762001fc662001f30565b8160405280935085815286868601111562001fe057600080fd5b858560208301376000602087830101525050509392505050565b600082601f8301126200200c57600080fd5b62000ff38383356020850162001f5f565b600080600080600080600080610100898b0312156200203b57600080fd5b883567ffffffffffffffff808211156200205457600080fd5b620020628c838d0162001ffa565b995060208b01359150808211156200207957600080fd5b620020878c838d0162001ffa565b985060408b013597506200209e60608c0162001e47565b965060808b0135955060a08b0135945060c08b0135935060e08b0135915080821115620020ca57600080fd5b50620020d98b828c0162001ffa565b9150509295985092959890939650565b600080600080608085870312156200210057600080fd5b84356200210d8162001e24565b935060208501356200211f8162001e24565b925060408501359150606085013567ffffffffffffffff8111156200214357600080fd5b8501601f810187136200215557600080fd5b620021668782356020840162001f5f565b91505092959194509250565b600080604083850312156200218657600080fd5b8235620021938162001e24565b9150602083013562001f258162001e24565b600181811c90821680620021ba57607f821691505b602082108103620021f4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362002253577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015280871660408401525084606083015283608083015260c060a0830152620022a760c083018462001da9565b98975050505050505050565b600060208284031215620022c657600080fd5b815162000ff38162001e24565b604081526000620022e8604083018562001da9565b8281036020840152620022fc818562001da9565b95945050505050565b6080815260006200231a608083018762001da9565b82810360208401526200232e818762001da9565b905073ffffffffffffffffffffffffffffffffffffffff85166040840152828103606084015262002360818562001da9565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600062001d1e604083018462001da9565b601f821115620007a6576000816000526020600020601f850160051c81016020861015620023c75750805b601f850160051c820191505b818110156200181b57828155600101620023d3565b815167ffffffffffffffff81111562002405576200240562001f30565b6200241d81620024168454620021a5565b846200239c565b602080601f8311600181146200247357600084156200243c5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556200181b565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015620024c257888601518255948401946001909101908401620024a1565b5085821015620024ff57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b600083516200252381846020880162001d83565b8351908301906200253981836020880162001d83565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015262002583608083018462001da9565b9695505050505050565b600060208284031215620025a057600080fd5b815162000ff38162001d3456fe60a06040526040516105e53803806105e583398101604081905261002291610387565b61002c828261003e565b506001600160a01b031660805261047e565b610047826100fe565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a28051156100f2576100ed826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e79190610447565b82610211565b505050565b6100fa610288565b5050565b806001600160a01b03163b60000361013957604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b81529051600092841691635c60da1b9160048083019260209291908290030181865afa1580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610447565b9050806001600160a01b03163b6000036100fa57604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610130565b6060600080846001600160a01b03168460405161022e9190610462565b600060405180830381855af49150503d8060008114610269576040519150601f19603f3d011682016040523d82523d6000602084013e61026e565b606091505b50909250905061027f8583836102a9565b95945050505050565b34156102a75760405163b398979f60e01b815260040160405180910390fd5b565b6060826102be576102b982610308565b610301565b81511580156102d557506001600160a01b0384163b155b156102fe57604051639996b31560e01b81526001600160a01b0385166004820152602401610130565b50805b9392505050565b8051156103185780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b80516001600160a01b038116811461034857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561037e578181015183820152602001610366565b50506000910152565b6000806040838503121561039a57600080fd5b6103a383610331565b60208401519092506001600160401b03808211156103c057600080fd5b818501915085601f8301126103d457600080fd5b8151818111156103e6576103e661034d565b604051601f8201601f19908116603f0116810190838211818310171561040e5761040e61034d565b8160405282815288602084870101111561042757600080fd5b610438836020830160208801610363565b80955050505050509250929050565b60006020828403121561045957600080fd5b61030182610331565b60008251610474818460208701610363565b9190910192915050565b60805161014d61049860003960006024015261014d6000f3fe608060405261000c61000e565b005b61001e610019610020565b6100b6565b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b191906100da565b905090565b3660008037600080366000845af43d6000803e8080156100d5573d6000f35b3d6000fd5b6000602082840312156100ec57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461011057600080fd5b939250505056fea264697066735822122052dc7d6193a3d510a122b2aff7d9675fe5a2816416fa263de04131e22077324664736f6c63430008180033a26469706673582212202b37bf431c7779ec7db76734f2d2ebae72c5c4470574cc973a7a4f0cf0dce98e64736f6c63430008180033",
        "sourceMap": "397:2587:62:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1560:300:41;;;;;;:::i;:::-;;:::i;:::-;;;611:14:70;;604:22;586:41;;574:2;559:18;1560:300:41;;;;;;;;443:39:62;;;;;;;;;;;;840:42:70;828:55;;;810:74;;798:2;783:18;443:39:62;638:252:70;2364:89:41;;;:::i;:::-;;;;;;;:::i;3496:154::-;;;;;;:::i;:::-;;:::i;3322:113::-;;;;;;:::i;:::-;;:::i;:::-;;562:34:62;;;;;;;;;4142:578:41;;;;;;:::i;:::-;;:::i;530:26:62:-;;;;;;;;;4786:132:41;;;;;;:::i;:::-;;:::i;2184:118::-;;;;;;:::i;:::-;;:::i;1919:208::-;;;;;;:::i;:::-;;:::i;:::-;;;3850:25:70;;;3838:2;3823:18;1919:208:41;3704:177:70;2293:101:30;;;:::i;603:40:62:-;;;;;;:::i;:::-;;:::i;1638:85:30:-;1710:6;;;;1638:85;;2517:93:41;;;:::i;703:52:62:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;3717:144:41;;;;;;:::i;:::-;;:::i;649:48:62:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;488:36;;;;;;;;;1305:1671;;;;;;:::i;:::-;;:::i;4984:233:41:-;;;;;;:::i;:::-;;:::i;2676:255::-;;;;;;:::i;:::-;;:::i;3927:153::-;;;;;;:::i;:::-;4038:25;;;;4015:4;4038:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;3927:153;2543:215:30;;;;;;:::i;:::-;;:::i;1560:300:41:-;1662:4;1697:40;;;1712:25;1697:40;;:104;;-1:-1:-1;1753:48:41;;;1768:33;1753:48;1697:104;:156;;;-1:-1:-1;877:25:55;862:40;;;;1817:36:41;1678:175;1560:300;-1:-1:-1;;1560:300:41:o;2364:89::-;2409:13;2441:5;2434:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2364:89;:::o;3496:154::-;3563:7;3582:22;3596:7;3582:13;:22::i;:::-;-1:-1:-1;6033:7:41;6059:24;;;:15;:24;;;;;;;;3622:21;5963:127;3322:113;3393:35;3402:2;3406:7;735:10:47;3393:8:41;:35::i;:::-;3322:113;;:::o;4142:578::-;4236:16;;;4232:87;;4275:33;;;;;4305:1;4275:33;;;810:74:70;783:18;;4275:33:41;;;;;;;;4232:87;4537:21;4561:34;4569:2;4573:7;735:10:47;4561:7:41;:34::i;:::-;4537:58;;4626:4;4609:21;;:13;:21;;;4605:109;;4653:50;;;;;8365:42:70;8434:15;;;4653:50:41;;;8416:34:70;8466:18;;;8459:34;;;8529:15;;8509:18;;;8502:43;8328:18;;4653:50:41;8153:398:70;4605:109:41;4222:498;4142:578;;;:::o;4786:132::-;4872:39;4889:4;4895:2;4899:7;4872:39;;;;;;;;;;;;:16;:39::i;:::-;4786:132;;;:::o;2184:118::-;2247:7;2273:22;2287:7;2273:13;:22::i;1919:208::-;1982:7;2005:19;;;2001:87;;2047:30;;;;;2074:1;2047:30;;;810:74:70;783:18;;2047:30:41;638:252:70;2001:87:41;-1:-1:-1;2104:16:41;;;;;;:9;:16;;;;;;;1919:208::o;2293:101:30:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;603:40:62:-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2517:93:41:-;2564:13;2596:7;2589:14;;;;;:::i;3717:144::-;3802:52;735:10:47;3835:8:41;3845;3802:18;:52::i;1305:1671:62:-;1587:7;;;1550;;1587;;1550;1605:9;1587:7;1605:9;:::i;:::-;;;;;;1625:29;1639:4;1646:7;1625:5;:29::i;:::-;1687:15;;1738:21;;1864:67;;;;;;;;;;;;;;;;;;;1887:43;1864:67;;;1687:254;;;;;1665:19;;1687:15;;;;;:29;;:254;;1738:21;;;;;1774:13;;1809:4;;1828:7;;1665:19;;1687:254;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1952:57;;;;;1665:276;;-1:-1:-1;1952:41:62;;;;;;:57;;1994:5;;2001:7;;1952:57;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2019:66:62;;;;;;;;3850:25:70;;;2019:50:62;;;;-1:-1:-1;2019:50:62;;-1:-1:-1;3823:18:70;;2019:66:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2095:64:62;;;;;:49;828:55:70;;;2095:64:62;;;810:74:70;2095:49:62;;;-1:-1:-1;2095:49:62;;-1:-1:-1;783:18:70;;2095:64:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2169:91:62;;;;;;;;10397:25:70;;;10438:18;;;10431:34;;;2169:47:62;;;;-1:-1:-1;2169:47:62;;-1:-1:-1;10370:18:70;;2169:91:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2270:74:62;;;;;;;;3850:25:70;;;2270:54:62;;;;-1:-1:-1;2270:54:62;;-1:-1:-1;3823:18:70;;2270:74:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2409:19:62;;2442:126;;2363:27;;-1:-1:-1;2409:19:62;;;;;-1:-1:-1;2465:47:62;;2442:126;;2527:5;;2534:7;;2551:11;;2564:3;;2442:126;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2393:185;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2589:78:62;;;;;:52;828:55:70;;;2589:78:62;;;810:74:70;2363:215:62;;-1:-1:-1;2589:52:62;;;;;;783:18:70;;2589:78:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2677:47;2695:4;2702:12;735:10:47;;656:96;2702:12:62;2716:7;2677:9;:47::i;:::-;2735:26;;;;:17;:26;;;;;;;;:53;;;;;;;;;;;;;;2798:13;:22;;;;;:36;;;;;;;;;;;;;;;2845:6;:15;;;;;:21;2863:3;2845:15;:21;:::i;:::-;-1:-1:-1;2882:63:62;;;14068:25:70;;;14112:42;14190:15;;;14185:2;14170:18;;14163:43;14242:15;;14222:18;;;14215:43;2882:63:62;;;;;;;14056:2:70;2882:63:62;;;-1:-1:-1;2962:7:62;;1305:1671;-1:-1:-1;;;;;;;;;;1305:1671:62:o;4984:233:41:-;5097:31;5110:4;5116:2;5120:7;5097:12;:31::i;:::-;5138:72;735:10:47;5186:4:41;5192:2;5196:7;5205:4;5138:33;:72::i;2676:255::-;2740:13;2765:22;2779:7;2765:13;:22::i;:::-;;2798:21;2822:10;3249:9;;;;;;;;;-1:-1:-1;3249:9:41;;;3173:92;2822:10;2798:34;;2873:1;2855:7;2849:21;:25;:75;;;;;;;;;;;;;;;;;2891:7;2900:18;:7;:16;:18::i;:::-;2877:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2849:75;2842:82;2676:255;-1:-1:-1;;;2676:255:41:o;2543:215:30:-;1531:13;:11;:13::i;:::-;2627:22:::1;::::0;::::1;2623:91;;2672:31;::::0;::::1;::::0;;2700:1:::1;2672:31;::::0;::::1;810:74:70::0;783:18;;2672:31:30::1;638:252:70::0;2623:91:30::1;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;16214:241:41:-;16277:7;5824:16;;;:7;:16;;;;;;;;;16339:88;;16385:31;;;;;;;;3850:25:70;;;3823:18;;16385:31:41;3704:177:70;14494:120:41;14574:33;14583:2;14587:7;14596:4;14602;14574:8;:33::i;8863:795::-;8949:7;5824:16;;;:7;:16;;;;;;;;;;;9060:18;;;9056:86;;9094:37;9111:4;9117;9123:7;9094:16;:37::i;:::-;9186:18;;;;9182:256;;9302:48;9319:1;9323:7;9340:1;9344:5;9302:8;:48::i;:::-;9393:15;;;;;;;:9;:15;;;;;:20;;;;;;9182:256;9452:16;;;;9448:107;;9512:13;;;;;;;:9;:13;;;;;:18;;9529:1;9512:18;;;9448:107;9565:16;;;;:7;:16;;;;;;:21;;;;;;;;;;;;;;9602:27;;9565:16;;9602:27;;;;;;;9647:4;8863:795;-1:-1:-1;;;;8863:795:41:o;1796:162:30:-;1710:6;;1855:23;1710:6;735:10:47;1855:23:30;1851:101;;1901:40;;;;;735:10:47;1901:40:30;;;810:74:70;783:18;;1901:40:30;638:252:70;2912:187:30;3004:6;;;;3020:17;;;;;;;;;;;3052:40;;3004:6;;;3020:17;3004:6;;3052:40;;2985:16;;3052:40;2975:124;2912:187;:::o;15667:312:41:-;15774:22;;;15770:91;;15819:31;;;;;840:42:70;828:55;;15819:31:41;;;810:74:70;783:18;;15819:31:41;638:252:70;15770:91:41;15870:25;;;;;;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;:46;;;;;;;;;;;;;15931:41;;586::70;;;15931::41;;559:18:70;15931:41:41;;;;;;;15667:312;;;:::o;9980:327::-;10047:16;;;10043:87;;10086:33;;;;;10116:1;10086:33;;;810:74:70;783:18;;10086:33:41;638:252:70;10043:87:41;10139:21;10163:32;10171:2;10175:7;10192:1;10163:7;:32::i;:::-;10139:56;-1:-1:-1;10209:27:41;;;;10205:96;;10259:31;;;;;10287:1;10259:31;;;810:74:70;783:18;;10259:31:41;638:252:70;12063:460:41;12148:16;;;12144:87;;12187:33;;;;;12217:1;12187:33;;;810:74:70;783:18;;12187:33:41;638:252:70;12144:87:41;12240:21;12264:32;12272:2;12276:7;12293:1;12264:7;:32::i;:::-;12240:56;-1:-1:-1;12310:27:41;;;12306:211;;12360:31;;;;;;;;3850:25:70;;;3823:18;;12360:31:41;3704:177:70;12306:211:41;12429:4;12412:21;;:13;:21;;;12408:109;;12456:50;;;;;8365:42:70;8434:15;;;12456:50:41;;;8416:34:70;8466:18;;;8459:34;;;8529:15;;8509:18;;;8502:43;8328:18;;12456:50:41;8153:398:70;870:963:45;1050:14;;;;:18;1046:781;;1088:67;;;;;:36;;;;;;:67;;1125:8;;1135:4;;1141:7;;1150:4;;1088:67;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1088:67:45;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1084:733;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1445:6;:13;1462:1;1445:18;1441:362;;1549:39;;;;;840:42:70;828:55;;1549:39:45;;;810:74:70;783:18;;1549:39:45;638:252:70;1441:362:45;1755:6;1749:13;1740:6;1736:2;1732:15;1725:38;1084:733;1202:51;;;1212:41;1202:51;1198:182;;1322:39;;;;;840:42:70;828:55;;1322:39:45;;;810:74:70;783:18;;1322:39:45;638:252:70;1198:182:45;1156:238;1084:733;870:963;;;;;:::o;637:698:52:-;693:13;742:14;759:17;770:5;759:10;:17::i;:::-;779:1;759:21;742:38;;794:20;828:6;817:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;817:18:52;-1:-1:-1;794:41:52;-1:-1:-1;955:28:52;;;971:2;955:28;1010:282;1041:5;;1180:10;1175:2;1164:14;;1159:32;1041:5;1146:46;1236:2;1227:11;;;-1:-1:-1;1256:21:52;1010:282;1256:21;-1:-1:-1;1312:6:52;637:698;-1:-1:-1;;;637:698:52:o;14796:662:41:-;14956:9;:31;;;-1:-1:-1;14969:18:41;;;;;14956:31;14952:460;;;15003:13;15019:22;15033:7;15019:13;:22::i;:::-;15003:38;-1:-1:-1;15169:18:41;;;;;;;:35;;;15200:4;15191:13;;:5;:13;;;;15169:35;:69;;;;-1:-1:-1;4038:25:41;;;;4015:4;4038:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;15208:30;15169:69;15165:142;;;15265:27;;;;;840:42:70;828:55;;15265:27:41;;;810:74:70;783:18;;15265:27:41;638:252:70;15165:142:41;15325:9;15321:81;;;15379:7;15375:2;15359:28;;15368:5;15359:28;;;;;;;;;;;;15321:81;14989:423;14952:460;-1:-1:-1;;15422:24:41;;;;:15;:24;;;;;:29;;;;;;;;;;;;;;;14796:662::o;7107:368::-;7219:38;7233:5;7240:7;7249;7219:13;:38::i;:::-;7214:255;;7277:19;;;7273:186;;7323:31;;;;;;;;3850:25:70;;;3823:18;;7323:31:41;3704:177:70;7273:186:41;7400:44;;;;;15934:42:70;15922:55;;7400:44:41;;;15904:74:70;15994:18;;;15987:34;;;15877:18;;7400:44:41;15730:297:70;23954:916:57;24007:7;;24091:8;24082:17;;24078:103;;24128:8;24119:17;;;-1:-1:-1;24164:2:57;24154:12;24078:103;24207:8;24198:5;:17;24194:103;;24244:8;24235:17;;;-1:-1:-1;24280:2:57;24270:12;24194:103;24323:8;24314:5;:17;24310:103;;24360:8;24351:17;;;-1:-1:-1;24396:2:57;24386:12;24310:103;24439:7;24430:5;:16;24426:100;;24475:7;24466:16;;;-1:-1:-1;24510:1:57;24500:11;24426:100;24552:7;24543:5;:16;24539:100;;24588:7;24579:16;;;-1:-1:-1;24623:1:57;24613:11;24539:100;24665:7;24656:5;:16;24652:100;;24701:7;24692:16;;;-1:-1:-1;24736:1:57;24726:11;24652:100;24778:7;24769:5;:16;24765:66;;24815:1;24805:11;24857:6;23954:916;-1:-1:-1;;23954:916:57:o;6401:272:41:-;6504:4;6539:21;;;;;;;:127;;;6586:7;6577:16;;:5;:16;;;:52;;;-1:-1:-1;4038:25:41;;;;4015:4;4038:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;6597:32;6577:88;;;-1:-1:-1;6033:7:41;6059:24;;;:15;:24;;;;;;6633:32;;;;6059:24;;6633:32;6577:88;6520:146;6401:272;-1:-1:-1;;;;6401:272:41:o;-1:-1:-1:-;;;;;;;;:::o;14:177:70:-;99:66;92:5;88:78;81:5;78:89;68:117;;181:1;178;171:12;196:245;254:6;307:2;295:9;286:7;282:23;278:32;275:52;;;323:1;320;313:12;275:52;362:9;349:23;381:30;405:5;381:30;:::i;895:250::-;980:1;990:113;1004:6;1001:1;998:13;990:113;;;1080:11;;;1074:18;1061:11;;;1054:39;1026:2;1019:10;990:113;;;-1:-1:-1;;1137:1:70;1119:16;;1112:27;895:250::o;1150:330::-;1192:3;1230:5;1224:12;1257:6;1252:3;1245:19;1273:76;1342:6;1335:4;1330:3;1326:14;1319:4;1312:5;1308:16;1273:76;:::i;:::-;1394:2;1382:15;1399:66;1378:88;1369:98;;;;1469:4;1365:109;;1150:330;-1:-1:-1;;1150:330:70:o;1485:220::-;1634:2;1623:9;1616:21;1597:4;1654:45;1695:2;1684:9;1680:18;1672:6;1654:45;:::i;1710:180::-;1769:6;1822:2;1810:9;1801:7;1797:23;1793:32;1790:52;;;1838:1;1835;1828:12;1790:52;-1:-1:-1;1861:23:70;;1710:180;-1:-1:-1;1710:180:70:o;2126:154::-;2212:42;2205:5;2201:54;2194:5;2191:65;2181:93;;2270:1;2267;2260:12;2285:134;2353:20;;2382:31;2353:20;2382:31;:::i;:::-;2285:134;;;:::o;2424:315::-;2492:6;2500;2553:2;2541:9;2532:7;2528:23;2524:32;2521:52;;;2569:1;2566;2559:12;2521:52;2608:9;2595:23;2627:31;2652:5;2627:31;:::i;:::-;2677:5;2729:2;2714:18;;;;2701:32;;-1:-1:-1;;;2424:315:70:o;2744:456::-;2821:6;2829;2837;2890:2;2878:9;2869:7;2865:23;2861:32;2858:52;;;2906:1;2903;2896:12;2858:52;2945:9;2932:23;2964:31;2989:5;2964:31;:::i;:::-;3014:5;-1:-1:-1;3071:2:70;3056:18;;3043:32;3084:33;3043:32;3084:33;:::i;:::-;2744:456;;3136:7;;-1:-1:-1;;;3190:2:70;3175:18;;;;3162:32;;2744:456::o;3452:247::-;3511:6;3564:2;3552:9;3543:7;3539:23;3535:32;3532:52;;;3580:1;3577;3570:12;3532:52;3619:9;3606:23;3638:31;3663:5;3638:31;:::i;3886:416::-;3951:6;3959;4012:2;4000:9;3991:7;3987:23;3983:32;3980:52;;;4028:1;4025;4018:12;3980:52;4067:9;4054:23;4086:31;4111:5;4086:31;:::i;:::-;4136:5;-1:-1:-1;4193:2:70;4178:18;;4165:32;4235:15;;4228:23;4216:36;;4206:64;;4266:1;4263;4256:12;4206:64;4289:7;4279:17;;;3886:416;;;;;:::o;4307:184::-;4359:77;4356:1;4349:88;4456:4;4453:1;4446:15;4480:4;4477:1;4470:15;4496:691;4561:5;4591:18;4632:2;4624:6;4621:14;4618:40;;;4638:18;;:::i;:::-;4772:2;4766:9;4838:2;4826:15;;4677:66;4822:24;;;4848:2;4818:33;4814:42;4802:55;;;4872:18;;;4892:22;;;4869:46;4866:72;;;4918:18;;:::i;:::-;4958:10;4954:2;4947:22;4987:6;4978:15;;5017:6;5009;5002:22;5057:3;5048:6;5043:3;5039:16;5036:25;5033:45;;;5074:1;5071;5064:12;5033:45;5124:6;5119:3;5112:4;5104:6;5100:17;5087:44;5179:1;5172:4;5163:6;5155;5151:19;5147:30;5140:41;;;;4496:691;;;;;:::o;5192:222::-;5235:5;5288:3;5281:4;5273:6;5269:17;5265:27;5255:55;;5306:1;5303;5296:12;5255:55;5328:80;5404:3;5395:6;5382:20;5375:4;5367:6;5363:17;5328:80;:::i;5419:1094::-;5571:6;5579;5587;5595;5603;5611;5619;5627;5680:3;5668:9;5659:7;5655:23;5651:33;5648:53;;;5697:1;5694;5687:12;5648:53;5737:9;5724:23;5766:18;5807:2;5799:6;5796:14;5793:34;;;5823:1;5820;5813:12;5793:34;5846:50;5888:7;5879:6;5868:9;5864:22;5846:50;:::i;:::-;5836:60;;5949:2;5938:9;5934:18;5921:32;5905:48;;5978:2;5968:8;5965:16;5962:36;;;5994:1;5991;5984:12;5962:36;6017:52;6061:7;6050:8;6039:9;6035:24;6017:52;:::i;:::-;6007:62;;6116:2;6105:9;6101:18;6088:32;6078:42;;6139:38;6173:2;6162:9;6158:18;6139:38;:::i;:::-;6129:48;;6224:3;6213:9;6209:19;6196:33;6186:43;;6276:3;6265:9;6261:19;6248:33;6238:43;;6328:3;6317:9;6313:19;6300:33;6290:43;;6386:3;6375:9;6371:19;6358:33;6342:49;;6416:2;6406:8;6403:16;6400:36;;;6432:1;6429;6422:12;6400:36;;6455:52;6499:7;6488:8;6477:9;6473:24;6455:52;:::i;:::-;6445:62;;;5419:1094;;;;;;;;;;;:::o;6518:795::-;6613:6;6621;6629;6637;6690:3;6678:9;6669:7;6665:23;6661:33;6658:53;;;6707:1;6704;6697:12;6658:53;6746:9;6733:23;6765:31;6790:5;6765:31;:::i;:::-;6815:5;-1:-1:-1;6872:2:70;6857:18;;6844:32;6885:33;6844:32;6885:33;:::i;:::-;6937:7;-1:-1:-1;6991:2:70;6976:18;;6963:32;;-1:-1:-1;7046:2:70;7031:18;;7018:32;7073:18;7062:30;;7059:50;;;7105:1;7102;7095:12;7059:50;7128:22;;7181:4;7173:13;;7169:27;-1:-1:-1;7159:55:70;;7210:1;7207;7200:12;7159:55;7233:74;7299:7;7294:2;7281:16;7276:2;7272;7268:11;7233:74;:::i;:::-;7223:84;;;6518:795;;;;;;;:::o;7318:388::-;7386:6;7394;7447:2;7435:9;7426:7;7422:23;7418:32;7415:52;;;7463:1;7460;7453:12;7415:52;7502:9;7489:23;7521:31;7546:5;7521:31;:::i;:::-;7571:5;-1:-1:-1;7628:2:70;7613:18;;7600:32;7641:33;7600:32;7641:33;:::i;7711:437::-;7790:1;7786:12;;;;7833;;;7854:61;;7908:4;7900:6;7896:17;7886:27;;7854:61;7961:2;7953:6;7950:14;7930:18;7927:38;7924:218;;7998:77;7995:1;7988:88;8099:4;8096:1;8089:15;8127:4;8124:1;8117:15;7924:218;;7711:437;;;:::o;8556:349::-;8595:3;8626:66;8619:5;8616:77;8613:257;;8726:77;8723:1;8716:88;8827:4;8824:1;8817:15;8855:4;8852:1;8845:15;8613:257;-1:-1:-1;8897:1:70;8886:13;;8556:349::o;8910:664::-;9168:4;9197:42;9278:2;9270:6;9266:15;9255:9;9248:34;9318:6;9313:2;9302:9;9298:18;9291:34;9373:2;9365:6;9361:15;9356:2;9345:9;9341:18;9334:43;;9413:6;9408:2;9397:9;9393:18;9386:34;9457:6;9451:3;9440:9;9436:19;9429:35;9501:3;9495;9484:9;9480:19;9473:32;9522:46;9563:3;9552:9;9548:19;9540:6;9522:46;:::i;:::-;9514:54;8910:664;-1:-1:-1;;;;;;;;8910:664:70:o;9579:251::-;9649:6;9702:2;9690:9;9681:7;9677:23;9673:32;9670:52;;;9718:1;9715;9708:12;9670:52;9750:9;9744:16;9769:31;9794:5;9769:31;:::i;9835:383::-;10032:2;10021:9;10014:21;9995:4;10058:45;10099:2;10088:9;10084:18;10076:6;10058:45;:::i;:::-;10151:9;10143:6;10139:22;10134:2;10123:9;10119:18;10112:50;10179:33;10205:6;10197;10179:33;:::i;:::-;10171:41;9835:383;-1:-1:-1;;;;;9835:383:70:o;10476:668::-;10749:3;10738:9;10731:22;10712:4;10776:46;10817:3;10806:9;10802:19;10794:6;10776:46;:::i;:::-;10870:9;10862:6;10858:22;10853:2;10842:9;10838:18;10831:50;10904:33;10930:6;10922;10904:33;:::i;:::-;10890:47;;10985:42;10977:6;10973:55;10968:2;10957:9;10953:18;10946:83;11077:9;11069:6;11065:22;11060:2;11049:9;11045:18;11038:50;11105:33;11131:6;11123;11105:33;:::i;:::-;11097:41;10476:668;-1:-1:-1;;;;;;;10476:668:70:o;11149:338::-;11336:42;11328:6;11324:55;11313:9;11306:74;11416:2;11411;11400:9;11396:18;11389:30;11287:4;11436:45;11477:2;11466:9;11462:18;11454:6;11436:45;:::i;11618:543::-;11720:2;11715:3;11712:11;11709:446;;;11756:1;11780:5;11777:1;11770:16;11824:4;11821:1;11811:18;11894:2;11882:10;11878:19;11875:1;11871:27;11865:4;11861:38;11930:4;11918:10;11915:20;11912:47;;;-1:-1:-1;11953:4:70;11912:47;12008:2;12003:3;11999:12;11996:1;11992:20;11986:4;11982:31;11972:41;;12063:82;12081:2;12074:5;12071:13;12063:82;;;12126:17;;;12107:1;12096:13;12063:82;;12397:1464;12523:3;12517:10;12550:18;12542:6;12539:30;12536:56;;;12572:18;;:::i;:::-;12601:97;12691:6;12651:38;12683:4;12677:11;12651:38;:::i;:::-;12645:4;12601:97;:::i;:::-;12753:4;;12810:2;12799:14;;12827:1;12822:782;;;;13648:1;13665:6;13662:89;;;-1:-1:-1;13717:19:70;;;13711:26;13662:89;12303:66;12294:1;12290:11;;;12286:84;12282:89;12272:100;12378:1;12374:11;;;12269:117;13764:81;;12792:1063;;12822:782;11565:1;11558:14;;;11602:4;11589:18;;12870:66;12858:79;;;13035:236;13049:7;13046:1;13043:14;13035:236;;;13138:19;;;13132:26;13117:42;;13230:27;;;;13198:1;13186:14;;;;13065:19;;13035:236;;;13039:3;13299:6;13290:7;13287:19;13284:261;;;13360:19;;;13354:26;13461:66;13443:1;13439:14;;;13455:3;13435:24;13431:97;13427:102;13412:118;13397:134;;13284:261;-1:-1:-1;;;;;13591:1:70;13575:14;;;13571:22;13558:36;;-1:-1:-1;12397:1464:70:o;14269:496::-;14448:3;14486:6;14480:13;14502:66;14561:6;14556:3;14549:4;14541:6;14537:17;14502:66;:::i;:::-;14631:13;;14590:16;;;;14653:70;14631:13;14590:16;14700:4;14688:17;;14653:70;:::i;:::-;14739:20;;14269:496;-1:-1:-1;;;;14269:496:70:o;14770:512::-;14964:4;14993:42;15074:2;15066:6;15062:15;15051:9;15044:34;15126:2;15118:6;15114:15;15109:2;15098:9;15094:18;15087:43;;15166:6;15161:2;15150:9;15146:18;15139:34;15209:3;15204:2;15193:9;15189:18;15182:31;15230:46;15271:3;15260:9;15256:19;15248:6;15230:46;:::i;:::-;15222:54;14770:512;-1:-1:-1;;;;;;14770:512:70:o;15287:249::-;15356:6;15409:2;15397:9;15388:7;15384:23;15380:32;15377:52;;;15425:1;15422;15415:12;15377:52;15457:9;15451:16;15476:30;15500:5;15476:30;:::i",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "approve(address,uint256)": "095ea7b3",
        "badgesCollections(uint256)": "9625e8df",
        "balanceOf(address)": "70a08231",
        "erc6551Implementation()": "b3dd12a2",
        "erc6551Registry()": "056d5afe",
        "getApproved(uint256)": "081812fc",
        "images(uint256)": "84856482",
        "isApprovedForAll(address,address)": "e985e9c5",
        "mint(string,string,uint256,address,uint256,uint256,uint256,string)": "b68b6e00",
        "name()": "06fdde03",
        "owner()": "8da5cb5b",
        "ownerOf(uint256)": "6352211e",
        "paymentToken()": "3013ce29",
        "proxyImplementation()": "0c870f91",
        "renounceOwnership()": "715018a6",
        "safeTransferFrom(address,address,uint256)": "42842e0e",
        "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
        "setApprovalForAll(address,bool)": "a22cb465",
        "starsAccounts(uint256)": "a5c23738",
        "supportsInterface(bytes4)": "01ffc9a7",
        "symbol()": "95d89b41",
        "tokenURI(uint256)": "c87b56dd",
        "transferFrom(address,address,uint256)": "23b872dd",
        "transferOwnership(address)": "f2fde38b"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_erc6551Registry\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_erc6551Implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_paymentToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_proxyImplementation\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"badgeCollection\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"starAccount\",\"type\":\"address\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"badgesCollections\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc6551Implementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc6551Registry\",\"outputs\":[{\"internalType\":\"contract IERC6551Registry\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"images\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_pricePerToken\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_paymentToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_milestone2Timestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_milestone3Timestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_targetTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"img\",\"type\":\"string\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paymentToken\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"proxyImplementation\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"starsAccounts\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/BambaStars.sol\":\"BambaStars\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/forge-std/src/console.sol\":{\"keccak256\":\"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70\",\"dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol\":{\"keccak256\":\"0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6\",\"dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol\":{\"keccak256\":\"0x5a5f22721ffb66d3e1ecc568c0d37c91f91223d8663c8a5e78396e780b849c72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bdd108133c98ea251513424bf17905090c8a7e0755562a6d12a81b8bccbd6152\",\"dweb:/ipfs/QmahpnB63Up9aVx4jDqxEgry5BRN5itHRvy9rwBvMT2yqL\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol\":{\"keccak256\":\"0xb85949d5e4c55ec1e5426390424631ac6d125aefe2ce539a49f1dc897856ce53\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9012d7103fed6a41dd81c0d80d7d239257c2a80fc8af46bbe1101bdf64a86ad5\",\"dweb:/ipfs/QmNgyB7nPaVLwsZcjMBqfw3x1B7yPS4UHPwdrDRz4hXLVk\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/introspection/ERC165Upgradeable.sol\":{\"keccak256\":\"0xddfe0afa85367153020524d383fe0bc9a1545f343019ddf33f98f392887047f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://62f3df350ce83190e81673e424dd47d9ee8ffb121a6f72994c75c8ae3fc9dded\",\"dweb:/ipfs/QmaA2CMuqESmdgVao4XzCL4aRwcZW1xjUXpY7RqHZfQoAV\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x0a7e89ffa57127a2e75931be926a11094b6ee2955632a5dce0228f3d8e98eb02\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ca02052cca6c00d760253f74519e6d7460dfaaf4efb3c004bf9c811ad7791d40\",\"dweb:/ipfs/QmSfzCXbsALfzo6Joqte5oyJxi7h27VqhDmcMJhmNGX2GJ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x9cac1f97ecc92043dd19235d6677e40cf6bac382886a94f7a80a957846b24229\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a1e0c924e0edfdfd4abceeb552d99f1cd95c0d387b38ccb1f67c583607e3d155\",\"dweb:/ipfs/QmZAi6qKa66zuS3jyEhsQR9bBNnZe1wSognYqw9nvseyUz\"]},\"lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06bd04b0d6af06424c58c24ad861ac4fbe68ae729c199127f4b64361a0629510\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8a9228dd927facb9a400333848e8cf616c7a7f30693563d98a963266dc8ae28a\",\"dweb:/ipfs/Qmehe5JAWCK7g8A9VkS9LpfiNkYzXkrxnXfpvtuqbrA9BA\"]},\"lib/openzeppelin-contracts/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol\":{\"keccak256\":\"0x25052a8e6c783ab01f98a9ac7f521649be60b9963f352e2453997ba8fbc2d285\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://94ba3d98053a310582febe79742e566a36073f1f2645ddc772c638c84ae93b88\",\"dweb:/ipfs/QmTHUMHniPNJ9H2Ui2zgk35CZDSThg2nQ8j5sNXaNarL9D\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xee2337af2dc162a973b4be6d3f7c16f06298259e0af48c5470d2839bfa8a22f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30c476b4b2f405c1bb3f0bae15b006d129c80f1bfd9d0f2038160a3bb9745009\",\"dweb:/ipfs/Qmb3VcuDufv6xbHeVgksC4tHpc5gKYVqBEwjEXW72XzSvN\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x88f7b6f070ad1de2bf899da6978ed74b5038eac78c01b7359b92b60c3d965c28\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c436edb6733a036607c6f17cc590e8ee351363a8cb4c564a98d9a66392c89323\",\"dweb:/ipfs/QmcJvJR2K3EtYcKEXVpQ1WqT6TvAbVem5HR1FirAsqEXFR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x4e7a30dafa83254008b02982696931abb1bcd762e201bba1d8ae77cb7654b62d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dc64b74b4ef44f669a75edf93cadaf24ae390846751f60c3b38bf9ceba115c7\",\"dweb:/ipfs/QmZA2GuNXgf8832j532kctoFgrK679yHUr6ZJngUQySF6d\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xe0e3a2099f2e2ce3579dd35548f613928739642058dfec95b1745f93364ce3de\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36a3930518e5c4a3c83839aaa136b863af513e6eeee6a3654e8f910f8007f827\",\"dweb:/ipfs/QmcU1b6SYYUMiXJ6jd5HY6sgYjJLdBu4smak1X1FDgkoaA\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xcac5b2622b9876529ca71f56b08a2786e960f0a738a9fcc456b2b8740170f89b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36ec9bacdaa2003a4b68d078f55887e7ec763e83d2027aaa1478578ae71c9b66\",\"dweb:/ipfs/QmbXfAcgockJRxMxKe5mt1pQyeafwCJuUpxce6a2ehB8bt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02\",\"dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol\":{\"keccak256\":\"0xc16b69d1bc7365dc56a239b446d9773b3972ef48399156c00bb27a4e958e990c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://328e833bf49432109091e495c79681796c7ee9dce848a2a05c4daf4f6bd17fa5\",\"dweb:/ipfs/QmX1xbdfnGenQeZmxu3d6rM98E8YHEdHkgKkDvMHPvVAy5\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0x80b4189de089dc632b752b365a16c5063b58cc24da0dd38b82f2c25f56d25c84\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://81e2717e78844156a86733f1cada84dba906ffe03e4957de12ca219c65e9191b\",\"dweb:/ipfs/QmW8vg3AafPJRo7EC75RQJTtjiaYmfPa4U4sqmEuBXXzaP\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Errors.sol\":{\"keccak256\":\"0x1b0625096e82d06abdcf1844172ef78ef54a5e878761f4d905fda07eaf098424\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5cd99f1a4836c07461cb3ea023ae2f6d1d01e80694b764a87623aa7252754756\",\"dweb:/ipfs/QmNPNDuiNU6TJatZcdBcrwixBoo5MSXNDq4kaXhpJLWGpB\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0x29074fe5a74bb024c57b3570abf6c74d8bceed3438694d470fd0166a3ecd196a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f4f8435ccbc56e384f4cc9ac9ff491cf30a82f2beac00e33ccc2cf8af3f77cc3\",\"dweb:/ipfs/QmUKJXxTe6nn1qfgnX8xbnboNNAPUuEmJyGqMZCKNiFBgn\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x70d9a9cf8d5cc830d7396505ef8eb9686bd0c60a29c6644bd6cc278f9bab8ebe\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://719abb402c11be12355088da587ffd971fee1b035b5aa6b1ba3b1a9493d3c1d7\",\"dweb:/ipfs/QmanHMFVDqVtZAFFaH1CeGQWoHWsFnWHH75fCrguwi77Hq\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xa548dd62e9e17616ae80a1e7ac7b1447ae377efc27fb9f7b4f4fbf5c0b0a1dfb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d27e9ae3e67eb229444cd43d49db5be57c586155fd1d363b3b1f9bb1b7bb0087\",\"dweb:/ipfs/QmT2GFnpXsTWBs8bkeVJtQ4VNX7f3igxwB77JBCr4mDXb3\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0x3583c2609d961607b0938ba8b19d8c348eea2bdfe79605d54b1a54b03564730d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://667624dfb350b124c1d2e77268e1e5bb97b1259a2e27c39f1a08530cd95cbc20\",\"dweb:/ipfs/QmNMLeuwnaX9cbty9zEHj5vKsJP5VFmBKibPKDqMJzkZsx\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x6fac27fb1885a1d9fd2ce3f8fac4e44a6596ca4d44207c9ef2541ba8c941291e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2079378abdb36baec15c23bc2353b73a3d28d1d0610b436b0c1c4e6fa61d65c9\",\"dweb:/ipfs/QmVZkRFMzKW7sLaugKSTbMNnUBKWF3QDsoMi5uoQFyVMjf\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xc859863e3bda7ec3cddf6dafe2ffe91bcbe648d1395b856b839c32ee9617c44c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a9d5417888b873cf2225ed5d50b2a67be97c1504134a2a580512168d587ad82e\",\"dweb:/ipfs/QmNr5fTb2heFW658NZn7dDnofZgFvQTnNxKRJ3wdnR1skX\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x6fe40ce2addf1fe91a86c334b51ef5abe9c3b831d5d4d74ecae1d9c7d06cdccb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5027588e408027935ac78e32d9e813fda6bf33349b8a5be5c6c936273743369f\",\"dweb:/ipfs/QmZwSzs94V9u7VSdhw2bhbrogWZ37wvrQFBz6QNJTmKokE\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x8cd59334ed58b8884cd1f775afc9400db702e674e5d6a7a438c655b9de788d7e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://99e62c7de7318f413b6352e3f2704ca23e7725ff144e43c8bd574d12dbf29047\",\"dweb:/ipfs/QmSEXG2rBx1VxU2uFTWdiChjDvA4osEY2mesjmoVeVhHko\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x519e2c9d9c4dfd63311fb98663e55ba465772897cd4a98e3a5406a1f5959811f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c4718d121f448f8fce3b28a276fd194014597319a4133696793893ae13c6e512\",\"dweb:/ipfs/QmaQyHiKokgyWq9nREub6xGUAEYiGTiv4caigjGCiWZTjZ\"]},\"src/BadgeCollection.sol\":{\"keccak256\":\"0xd2095c383c67261c3138a604177b006f1923439b8dd7c15951c04f1b7587773d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://78d6659bede2eb9bb785b8569780769026a13f120e534160a400bbe97e271212\",\"dweb:/ipfs/QmaBuGXfVXZkTvTck1GvYEnnGwVZ98epgRnaLDh7mnz9Xx\"]},\"src/BambaStars.sol\":{\"keccak256\":\"0xea5b0fa0c9052ace6415949b778aba59dd2e3fa574ad0985b1752ff50f9211b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://377d1d72dd852d802c1d979d9c15fcb2eda2e1c8f2054779504de3f735595061\",\"dweb:/ipfs/QmRD24GeWQe7TUqbQosF9DEBQkJRkBsBwiCJYgFbJ5Bcxt\"]},\"src/StarAccount.sol\":{\"keccak256\":\"0xbcbbd1fb72c92a8b1273ca58667bfd5066c527a697160240e83ed27573078d47\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1bc8d1abaf2351a0483c64c231c09a6578879895ca39eebe4e13e6f233ba91f8\",\"dweb:/ipfs/QmPDetbNw5Zz7cB8VxkncDY5m5Mex7bD2oa1CCLjogACLR\"]},\"src/interfaces/IERC6551Account.sol\":{\"keccak256\":\"0x17094454fd93bf100f335d11f20f452948927b2b42115dbfc2c0f80aebbd4e78\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2d47f0000326a60c902afb4d02ad0747aefb49933a5a6f02677528dde73bd55f\",\"dweb:/ipfs/QmRjGCTZ1iARxxnsjfBLLvH6Chkag97jhxUDYtQBE7rKrC\"]},\"src/interfaces/IERC6551Registry.sol\":{\"keccak256\":\"0x3f9743c931db0bf287bd3ba762f1b2371af614e7eb3c2ce3318a49ed1a15411a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30fb28b4c7f4290600bec069c8b7cf3d3e41c0cc02f0c8c7bb4b37a3489a6d39\",\"dweb:/ipfs/QmPVpGADyuytD9TgN5THddUXjigz34YQALAsBNk8z6SNxG\"]}},\"version\":1}",
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
                            "internalType": "address",
                            "name": "_erc6551Registry",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_erc6551Implementation",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_paymentToken",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_proxyImplementation",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
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
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721IncorrectOwner"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InsufficientApproval"
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
                    "name": "ERC721InvalidApprover"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidOperator"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721InvalidOwner"
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
                    "name": "ERC721InvalidReceiver"
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
                    "name": "ERC721InvalidSender"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "ERC721NonexistentToken"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "OwnableInvalidOwner"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "OwnableUnauthorizedAccount"
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
                            "name": "approved",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256",
                            "indexed": true
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
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "ApprovalForAll",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256",
                            "indexed": false
                        },
                        {
                            "internalType": "address",
                            "name": "badgeCollection",
                            "type": "address",
                            "indexed": false
                        },
                        {
                            "internalType": "address",
                            "name": "starAccount",
                            "type": "address",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Minted",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "previousOwner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "OwnershipTransferred",
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
                            "name": "tokenId",
                            "type": "uint256",
                            "indexed": true
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
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "approve"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "badgesCollections",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
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
                    "name": "erc6551Implementation",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "erc6551Registry",
                    "outputs": [
                        {
                            "internalType": "contract IERC6551Registry",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getApproved",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "images",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
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
                            "name": "operator",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isApprovedForAll",
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
                            "internalType": "string",
                            "name": "_name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "_symbol",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_pricePerToken",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "_paymentToken",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_milestone2Timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_milestone3Timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_targetTotalSupply",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "img",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "mint",
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
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "ownerOf",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "paymentToken",
                    "outputs": [
                        {
                            "internalType": "contract IERC20",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "proxyImplementation",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "renounceOwnership"
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
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "safeTransferFrom"
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
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes",
                            "name": "data",
                            "type": "bytes"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "safeTransferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "approved",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setApprovalForAll"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "starsAccounts",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes4",
                            "name": "interfaceId",
                            "type": "bytes4"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "supportsInterface",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
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
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "tokenURI",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
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
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFrom"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferOwnership"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "approve(address,uint256)": {
                        "details": "See {IERC721-approve}."
                    },
                    "balanceOf(address)": {
                        "details": "See {IERC721-balanceOf}."
                    },
                    "getApproved(uint256)": {
                        "details": "See {IERC721-getApproved}."
                    },
                    "isApprovedForAll(address,address)": {
                        "details": "See {IERC721-isApprovedForAll}."
                    },
                    "name()": {
                        "details": "See {IERC721Metadata-name}."
                    },
                    "owner()": {
                        "details": "Returns the address of the current owner."
                    },
                    "ownerOf(uint256)": {
                        "details": "See {IERC721-ownerOf}."
                    },
                    "renounceOwnership()": {
                        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
                    },
                    "safeTransferFrom(address,address,uint256)": {
                        "details": "See {IERC721-safeTransferFrom}."
                    },
                    "safeTransferFrom(address,address,uint256,bytes)": {
                        "details": "See {IERC721-safeTransferFrom}."
                    },
                    "setApprovalForAll(address,bool)": {
                        "details": "See {IERC721-setApprovalForAll}."
                    },
                    "supportsInterface(bytes4)": {
                        "details": "See {IERC165-supportsInterface}."
                    },
                    "symbol()": {
                        "details": "See {IERC721Metadata-symbol}."
                    },
                    "tokenURI(uint256)": {
                        "details": "See {IERC721Metadata-tokenURI}."
                    },
                    "transferFrom(address,address,uint256)": {
                        "details": "See {IERC721-transferFrom}."
                    },
                    "transferOwnership(address)": {
                        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
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
                "src/BambaStars.sol": "BambaStars"
            },
            "evmVersion": "paris",
            "libraries": {}
        },
        "sources": {
            "lib/forge-std/src/console.sol": {
                "keccak256": "0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba",
                "urls": [
                    "bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70",
                    "dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol": {
                "keccak256": "0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a",
                "urls": [
                    "bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6",
                    "dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol": {
                "keccak256": "0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b",
                "urls": [
                    "bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609",
                    "dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol": {
                "keccak256": "0x5a5f22721ffb66d3e1ecc568c0d37c91f91223d8663c8a5e78396e780b849c72",
                "urls": [
                    "bzz-raw://bdd108133c98ea251513424bf17905090c8a7e0755562a6d12a81b8bccbd6152",
                    "dweb:/ipfs/QmahpnB63Up9aVx4jDqxEgry5BRN5itHRvy9rwBvMT2yqL"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts-upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol": {
                "keccak256": "0xb85949d5e4c55ec1e5426390424631ac6d125aefe2ce539a49f1dc897856ce53",
                "urls": [
                    "bzz-raw://9012d7103fed6a41dd81c0d80d7d239257c2a80fc8af46bbe1101bdf64a86ad5",
                    "dweb:/ipfs/QmNgyB7nPaVLwsZcjMBqfw3x1B7yPS4UHPwdrDRz4hXLVk"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol": {
                "keccak256": "0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397",
                "urls": [
                    "bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9",
                    "dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts-upgradeable/contracts/utils/introspection/ERC165Upgradeable.sol": {
                "keccak256": "0xddfe0afa85367153020524d383fe0bc9a1545f343019ddf33f98f392887047f0",
                "urls": [
                    "bzz-raw://62f3df350ce83190e81673e424dd47d9ee8ffb121a6f72994c75c8ae3fc9dded",
                    "dweb:/ipfs/QmaA2CMuqESmdgVao4XzCL4aRwcZW1xjUXpY7RqHZfQoAV"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
                "keccak256": "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
                "urls": [
                    "bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
                    "dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol": {
                "keccak256": "0x0a7e89ffa57127a2e75931be926a11094b6ee2955632a5dce0228f3d8e98eb02",
                "urls": [
                    "bzz-raw://ca02052cca6c00d760253f74519e6d7460dfaaf4efb3c004bf9c811ad7791d40",
                    "dweb:/ipfs/QmSfzCXbsALfzo6Joqte5oyJxi7h27VqhDmcMJhmNGX2GJ"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                "keccak256": "0x9cac1f97ecc92043dd19235d6677e40cf6bac382886a94f7a80a957846b24229",
                "urls": [
                    "bzz-raw://a1e0c924e0edfdfd4abceeb552d99f1cd95c0d387b38ccb1f67c583607e3d155",
                    "dweb:/ipfs/QmZAi6qKa66zuS3jyEhsQR9bBNnZe1wSognYqw9nvseyUz"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Utils.sol": {
                "keccak256": "0x06bd04b0d6af06424c58c24ad861ac4fbe68ae729c199127f4b64361a0629510",
                "urls": [
                    "bzz-raw://8a9228dd927facb9a400333848e8cf616c7a7f30693563d98a963266dc8ae28a",
                    "dweb:/ipfs/Qmehe5JAWCK7g8A9VkS9LpfiNkYzXkrxnXfpvtuqbrA9BA"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/proxy/Proxy.sol": {
                "keccak256": "0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd",
                "urls": [
                    "bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac",
                    "dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol": {
                "keccak256": "0x25052a8e6c783ab01f98a9ac7f521649be60b9963f352e2453997ba8fbc2d285",
                "urls": [
                    "bzz-raw://94ba3d98053a310582febe79742e566a36073f1f2645ddc772c638c84ae93b88",
                    "dweb:/ipfs/QmTHUMHniPNJ9H2Ui2zgk35CZDSThg2nQ8j5sNXaNarL9D"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol": {
                "keccak256": "0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c",
                "urls": [
                    "bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa",
                    "dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM"
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
            "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol": {
                "keccak256": "0x4e7a30dafa83254008b02982696931abb1bcd762e201bba1d8ae77cb7654b62d",
                "urls": [
                    "bzz-raw://3dc64b74b4ef44f669a75edf93cadaf24ae390846751f60c3b38bf9ceba115c7",
                    "dweb:/ipfs/QmZA2GuNXgf8832j532kctoFgrK679yHUr6ZJngUQySF6d"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol": {
                "keccak256": "0xe0e3a2099f2e2ce3579dd35548f613928739642058dfec95b1745f93364ce3de",
                "urls": [
                    "bzz-raw://36a3930518e5c4a3c83839aaa136b863af513e6eeee6a3654e8f910f8007f827",
                    "dweb:/ipfs/QmcU1b6SYYUMiXJ6jd5HY6sgYjJLdBu4smak1X1FDgkoaA"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol": {
                "keccak256": "0xcac5b2622b9876529ca71f56b08a2786e960f0a738a9fcc456b2b8740170f89b",
                "urls": [
                    "bzz-raw://36ec9bacdaa2003a4b68d078f55887e7ec763e83d2027aaa1478578ae71c9b66",
                    "dweb:/ipfs/QmbXfAcgockJRxMxKe5mt1pQyeafwCJuUpxce6a2ehB8bt"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol": {
                "keccak256": "0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1",
                "urls": [
                    "bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02",
                    "dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol": {
                "keccak256": "0xc16b69d1bc7365dc56a239b446d9773b3972ef48399156c00bb27a4e958e990c",
                "urls": [
                    "bzz-raw://328e833bf49432109091e495c79681796c7ee9dce848a2a05c4daf4f6bd17fa5",
                    "dweb:/ipfs/QmX1xbdfnGenQeZmxu3d6rM98E8YHEdHkgKkDvMHPvVAy5"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0x80b4189de089dc632b752b365a16c5063b58cc24da0dd38b82f2c25f56d25c84",
                "urls": [
                    "bzz-raw://81e2717e78844156a86733f1cada84dba906ffe03e4957de12ca219c65e9191b",
                    "dweb:/ipfs/QmW8vg3AafPJRo7EC75RQJTtjiaYmfPa4U4sqmEuBXXzaP"
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
            "lib/openzeppelin-contracts/contracts/utils/Errors.sol": {
                "keccak256": "0x1b0625096e82d06abdcf1844172ef78ef54a5e878761f4d905fda07eaf098424",
                "urls": [
                    "bzz-raw://5cd99f1a4836c07461cb3ea023ae2f6d1d01e80694b764a87623aa7252754756",
                    "dweb:/ipfs/QmNPNDuiNU6TJatZcdBcrwixBoo5MSXNDq4kaXhpJLWGpB"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Panic.sol": {
                "keccak256": "0x29074fe5a74bb024c57b3570abf6c74d8bceed3438694d470fd0166a3ecd196a",
                "urls": [
                    "bzz-raw://f4f8435ccbc56e384f4cc9ac9ff491cf30a82f2beac00e33ccc2cf8af3f77cc3",
                    "dweb:/ipfs/QmUKJXxTe6nn1qfgnX8xbnboNNAPUuEmJyGqMZCKNiFBgn"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol": {
                "keccak256": "0x70d9a9cf8d5cc830d7396505ef8eb9686bd0c60a29c6644bd6cc278f9bab8ebe",
                "urls": [
                    "bzz-raw://719abb402c11be12355088da587ffd971fee1b035b5aa6b1ba3b1a9493d3c1d7",
                    "dweb:/ipfs/QmanHMFVDqVtZAFFaH1CeGQWoHWsFnWHH75fCrguwi77Hq"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
                "keccak256": "0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792",
                "urls": [
                    "bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453",
                    "dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol": {
                "keccak256": "0xa548dd62e9e17616ae80a1e7ac7b1447ae377efc27fb9f7b4f4fbf5c0b0a1dfb",
                "urls": [
                    "bzz-raw://d27e9ae3e67eb229444cd43d49db5be57c586155fd1d363b3b1f9bb1b7bb0087",
                    "dweb:/ipfs/QmT2GFnpXsTWBs8bkeVJtQ4VNX7f3igxwB77JBCr4mDXb3"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol": {
                "keccak256": "0x3583c2609d961607b0938ba8b19d8c348eea2bdfe79605d54b1a54b03564730d",
                "urls": [
                    "bzz-raw://667624dfb350b124c1d2e77268e1e5bb97b1259a2e27c39f1a08530cd95cbc20",
                    "dweb:/ipfs/QmNMLeuwnaX9cbty9zEHj5vKsJP5VFmBKibPKDqMJzkZsx"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
                "keccak256": "0x6fac27fb1885a1d9fd2ce3f8fac4e44a6596ca4d44207c9ef2541ba8c941291e",
                "urls": [
                    "bzz-raw://2079378abdb36baec15c23bc2353b73a3d28d1d0610b436b0c1c4e6fa61d65c9",
                    "dweb:/ipfs/QmVZkRFMzKW7sLaugKSTbMNnUBKWF3QDsoMi5uoQFyVMjf"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
                "keccak256": "0xc859863e3bda7ec3cddf6dafe2ffe91bcbe648d1395b856b839c32ee9617c44c",
                "urls": [
                    "bzz-raw://a9d5417888b873cf2225ed5d50b2a67be97c1504134a2a580512168d587ad82e",
                    "dweb:/ipfs/QmNr5fTb2heFW658NZn7dDnofZgFvQTnNxKRJ3wdnR1skX"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
                "keccak256": "0x6fe40ce2addf1fe91a86c334b51ef5abe9c3b831d5d4d74ecae1d9c7d06cdccb",
                "urls": [
                    "bzz-raw://5027588e408027935ac78e32d9e813fda6bf33349b8a5be5c6c936273743369f",
                    "dweb:/ipfs/QmZwSzs94V9u7VSdhw2bhbrogWZ37wvrQFBz6QNJTmKokE"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol": {
                "keccak256": "0x8cd59334ed58b8884cd1f775afc9400db702e674e5d6a7a438c655b9de788d7e",
                "urls": [
                    "bzz-raw://99e62c7de7318f413b6352e3f2704ca23e7725ff144e43c8bd574d12dbf29047",
                    "dweb:/ipfs/QmSEXG2rBx1VxU2uFTWdiChjDvA4osEY2mesjmoVeVhHko"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
                "keccak256": "0x519e2c9d9c4dfd63311fb98663e55ba465772897cd4a98e3a5406a1f5959811f",
                "urls": [
                    "bzz-raw://c4718d121f448f8fce3b28a276fd194014597319a4133696793893ae13c6e512",
                    "dweb:/ipfs/QmaQyHiKokgyWq9nREub6xGUAEYiGTiv4caigjGCiWZTjZ"
                ],
                "license": "MIT"
            },
            "src/BadgeCollection.sol": {
                "keccak256": "0xd2095c383c67261c3138a604177b006f1923439b8dd7c15951c04f1b7587773d",
                "urls": [
                    "bzz-raw://78d6659bede2eb9bb785b8569780769026a13f120e534160a400bbe97e271212",
                    "dweb:/ipfs/QmaBuGXfVXZkTvTck1GvYEnnGwVZ98epgRnaLDh7mnz9Xx"
                ],
                "license": "MIT"
            },
            "src/BambaStars.sol": {
                "keccak256": "0xea5b0fa0c9052ace6415949b778aba59dd2e3fa574ad0985b1752ff50f9211b8",
                "urls": [
                    "bzz-raw://377d1d72dd852d802c1d979d9c15fcb2eda2e1c8f2054779504de3f735595061",
                    "dweb:/ipfs/QmRD24GeWQe7TUqbQosF9DEBQkJRkBsBwiCJYgFbJ5Bcxt"
                ],
                "license": "MIT"
            },
            "src/StarAccount.sol": {
                "keccak256": "0xbcbbd1fb72c92a8b1273ca58667bfd5066c527a697160240e83ed27573078d47",
                "urls": [
                    "bzz-raw://1bc8d1abaf2351a0483c64c231c09a6578879895ca39eebe4e13e6f233ba91f8",
                    "dweb:/ipfs/QmPDetbNw5Zz7cB8VxkncDY5m5Mex7bD2oa1CCLjogACLR"
                ],
                "license": "MIT"
            },
            "src/interfaces/IERC6551Account.sol": {
                "keccak256": "0x17094454fd93bf100f335d11f20f452948927b2b42115dbfc2c0f80aebbd4e78",
                "urls": [
                    "bzz-raw://2d47f0000326a60c902afb4d02ad0747aefb49933a5a6f02677528dde73bd55f",
                    "dweb:/ipfs/QmRjGCTZ1iARxxnsjfBLLvH6Chkag97jhxUDYtQBE7rKrC"
                ],
                "license": "MIT"
            },
            "src/interfaces/IERC6551Registry.sol": {
                "keccak256": "0x3f9743c931db0bf287bd3ba762f1b2371af614e7eb3c2ce3318a49ed1a15411a",
                "urls": [
                    "bzz-raw://30fb28b4c7f4290600bec069c8b7cf3d3e41c0cc02f0c8c7bb4b37a3489a6d39",
                    "dweb:/ipfs/QmPVpGADyuytD9TgN5THddUXjigz34YQALAsBNk8z6SNxG"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "id": 62
}


export const BambaStarsAbi = BambaStarsByteCode["abi"];