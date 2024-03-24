const StarAccountByteCode = {
    "abi": [
        {
            "type": "receive",
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "MILESTONE1_PERCENTAGE",
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
            "name": "MILESTONE2_PERCENTAGE",
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
            "name": "MILESTONE3_PERCENTAGE",
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
            "name": "badgeCollection",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract BadgeCollection"
                }
            ],
            "stateMutability": "view"
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
            "name": "buyTokens",
            "inputs": [
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_to",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
            "name": "executeCall",
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
                },
                {
                    "name": "data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "executeWithdrawMilestone1",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "executeWithdrawMilestone2",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "executeWithdrawMilestone3",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "isValidSignature",
            "inputs": [
                {
                    "name": "hash",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "signature",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "magicValue",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "stateMutability": "view"
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
            "name": "nonce",
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
            "name": "pricePerToken",
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
            "name": "setBadgeCollection",
            "inputs": [
                {
                    "name": "_badgeCollection",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setMilestones",
            "inputs": [
                {
                    "name": "_milestone2Timestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_milestone3Timestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setName",
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
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setPaymentToken",
            "inputs": [
                {
                    "name": "_paymentToken",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setPricePerToken",
            "inputs": [
                {
                    "name": "_pricePerToken",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setTargetTotalSupply",
            "inputs": [
                {
                    "name": "_targetTotalSupply",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
            "name": "targetTotalSupply",
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
            "name": "token",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
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
            "name": "Initialized",
            "inputs": [
                {
                    "name": "version",
                    "type": "uint64",
                    "indexed": false,
                    "internalType": "uint64"
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
        },
        {
            "type": "error",
            "name": "InvalidInitialization",
            "inputs": []
        },
        {
            "type": "error",
            "name": "NotInitializing",
            "inputs": []
        }
    ],
    "bytecode": {
        "object": "0x608060405234801561001057600080fd5b50612b36806100206000396000f3fe6080604052600436106102025760003560e01c80637b1b1de61161011d578063affed0e0116100b0578063dd62ed3e1161007f578063f45e15c111610064578063f45e15c114610690578063f5a7a4bf146106a5578063fc0c546a146106ba57600080fd5b8063dd62ed3e14610609578063e5927b8f1461067b57600080fd5b8063affed0e0146105a0578063b210e2c1146105b4578063c625e9b1146105d4578063d8fa86e0146105f457600080fd5b806395d89b41116100ec57806395d89b41146105265780639e5d4c491461053b578063a366ee5814610553578063a9059cbb1461058057600080fd5b80637b1b1de6146104d05780637e3e0461146104e65780638129fc1c146104fc5780638da5cb5b1461051157600080fd5b8063313ce5671161019557806370a082311161016457806370a0823114610424578063748aa91c14610486578063770b74ba1461049b5780637980a891146104bb57600080fd5b8063313ce567146103a8578063412eade6146103c45780635c707f07146103e45780636a326ab11461040457600080fd5b806318160ddd116101d157806318160ddd146102d657806323b872dd146103145780632bf2762f146103345780633013ce291461035657600080fd5b806301ffc9a71461020e57806306fdde0314610243578063095ea7b3146102655780631626ba7e1461028557600080fd5b3661020957005b600080fd5b34801561021a57600080fd5b5061022e610229366004612389565b6106ff565b60405190151581526020015b60405180910390f35b34801561024f57600080fd5b50610258610798565b60405161023a9190612439565b34801561027157600080fd5b5061022e61028036600461246e565b61082a565b34801561029157600080fd5b506102a56102a036600461255d565b610842565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161023a565b3480156102e257600080fd5b507f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace02545b60405190815260200161023a565b34801561032057600080fd5b5061022e61032f3660046125b8565b610892565b34801561034057600080fd5b5061035461034f3660046125f9565b6108b8565b005b34801561036257600080fd5b506002546103839073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161023a565b3480156103b457600080fd5b506040516012815260200161023a565b3480156103d057600080fd5b506103546103df366004612612565b610931565b3480156103f057600080fd5b506103546103ff366004612654565b6109ab565b34801561041057600080fd5b5061035461041f3660046126ae565b610a38565b34801561043057600080fd5b5061030661043f3660046126ae565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00602052604090205490565b34801561049257600080fd5b50610354610aee565b3480156104a757600080fd5b506103546104b63660046126ae565b610eb2565b3480156104c757600080fd5b50610354610f68565b3480156104dc57600080fd5b5061030660035481565b3480156104f257600080fd5b5061030660045481565b34801561050857600080fd5b50610354611170565b34801561051d57600080fd5b5061038361135a565b34801561053257600080fd5b50610258611416565b6102586105493660046126cb565b6060949350505050565b34801561055f57600080fd5b506005546103839073ffffffffffffffffffffffffffffffffffffffff1681565b34801561058c57600080fd5b5061022e61059b36600461246e565b611425565b3480156105ac57600080fd5b506000610306565b3480156105c057600080fd5b506103546105cf3660046125f9565b611433565b3480156105e057600080fd5b506103546105ef366004612754565b6114a7565b34801561060057600080fd5b50610306601e81565b34801561061557600080fd5b50610306610624366004612784565b73ffffffffffffffffffffffffffffffffffffffff91821660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace016020908152604080832093909416825291909152205490565b34801561068757600080fd5b50610306603281565b34801561069c57600080fd5b5061035461170e565b3480156106b157600080fd5b50610306601481565b3480156106c657600080fd5b506106cf6119aa565b6040805193845273ffffffffffffffffffffffffffffffffffffffff90921660208401529082015260600161023a565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f36372b0700000000000000000000000000000000000000000000000000000000148061079257507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b6060600080546107a7906127b2565b80601f01602080910402602001604051908101604052809291908181526020018280546107d3906127b2565b80156108205780601f106107f557610100808354040283529160200191610820565b820191906000526020600020905b81548152906001019060200180831161080357829003601f168201915b5050505050905090565b6000336108388185856119fd565b5060019392505050565b60008061085761085061135a565b8585611a0a565b9050801561088857507f1626ba7e000000000000000000000000000000000000000000000000000000009050610792565b5060009392505050565b6000336108a0858285611aa5565b6108ab858585611b93565b60019150505b9392505050565b6108c133611c3e565b61092c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e657200000000000000000000000000000000000060448201526064015b60405180910390fd5b600355565b61093a33611c3e565b6109a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600691909155600755565b6109b433611c3e565b610a1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b6000610a268382612855565b506001610a338282612855565b505050565b610a4133611c3e565b610aa7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60055474010000000000000000000000000000000000000000900460ff168015610b3357506005547501000000000000000000000000000000000000000000900460ff165b8015610b5c5750600554760100000000000000000000000000000000000000000000900460ff16155b610bc2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420616c6c6f7765640000000000000000000000000000000000000000006044820152606401610923565b610bcb33611c3e565b610c31576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600754421015610c9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f546f6f206561726c7900000000000000000000000000000000000000000000006044820152606401610923565b6002546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009160649160329173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610d12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d36919061296f565b610d4091906129b7565b610d4a91906129ce565b600580547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff1676010000000000000000000000000000000000000000000017905560025490915073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb610db33390565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602481018490526044016020604051808303816000875af1158015610e25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e499190612a09565b610eaf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610923565b50565b610ebb33611c3e565b610f21576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60055474010000000000000000000000000000000000000000900460ff1615610fed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f416c7265616479207769746864726177656400000000000000000000000000006044820152606401610923565b610ff633611c3e565b61105c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b6002546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009160649160149173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156110d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f5919061296f565b6110ff91906129b7565b61110991906129ce565b600580547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000017905560025490915073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb610db33390565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff166000811580156111bb5750825b905060008267ffffffffffffffff1660011480156111d85750303b155b9050811580156111e6575080155b1561121d576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000166001178555831561127e5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b6112f26040518060400160405280600481526020017f53544152000000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f5354415200000000000000000000000000000000000000000000000000000000815250611c7d565b83156113535784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050565b6000806000806113686119aa565b92509250925046831461137f576000935050505090565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff831690636352211e90602401602060405180830381865afa1580156113ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061140e9190612a2b565b935050505090565b6060600180546107a7906127b2565b600033610838818585611b93565b61143c33611c3e565b6114a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600455565b60025460035473ffffffffffffffffffffffffffffffffffffffff909116906323b872dd90339030906114da90876129b7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff938416600482015292909116602483015260448201526064016020604051808303816000875af1158015611553573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115779190612a09565b6115dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610923565b600454826116097f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace025490565b6116139190612a48565b111561167b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4578636565647320746f74616c20737570706c790000000000000000000000006044820152606401610923565b6005546040517f6a62784200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015290911690636a62784290602401600060405180830381600087803b1580156116e857600080fd5b505af11580156116fc573d6000803e3d6000fd5b5050505061170a8183611c8f565b5050565b60055474010000000000000000000000000000000000000000900460ff16801561175457506005547501000000000000000000000000000000000000000000900460ff16155b6117ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420616c6c6f7765640000000000000000000000000000000000000000006044820152606401610923565b6117c333611c3e565b611829576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600654421015611895576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f546f6f206561726c7900000000000000000000000000000000000000000000006044820152606401610923565b6002546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600091606491601e9173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561190a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061192e919061296f565b61193891906129b7565b61194291906129ce565b600580547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff16750100000000000000000000000000000000000000000017905560025490915073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb610db33390565b60408051606080825260808201909252600091829182918291906020820181803683370190505090506060604d60208301303c808060200190518101906119f19190612a5b565b93509350935050909192565b610a338383836001611ceb565b60008373ffffffffffffffffffffffffffffffffffffffff163b600003611a9357600080611a388585611e57565b5090925090506000816003811115611a5257611a52612a94565b148015611a8a57508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b925050506108b1565b611a9e848484611ea4565b90506108b1565b73ffffffffffffffffffffffffffffffffffffffff83811660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611b8d5781811015611b7e576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024810182905260448101839052606401610923565b611b8d84848484036000611ceb565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611be3576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610923565b73ffffffffffffffffffffffffffffffffffffffff8216611c33576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610923565b610a33838383611ff2565b6000611c4861135a565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b611c856121c3565b61170a828261222c565b73ffffffffffffffffffffffffffffffffffffffff8216611cdf576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610923565b61170a60008383611ff2565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0073ffffffffffffffffffffffffffffffffffffffff8516611d5c576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610923565b73ffffffffffffffffffffffffffffffffffffffff8416611dac576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610923565b73ffffffffffffffffffffffffffffffffffffffff808616600090815260018301602090815260408083209388168352929052208390558115611353578373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92585604051611e4891815260200190565b60405180910390a35050505050565b60008060008351604103611e915760208401516040850151606086015160001a611e838882858561228f565b955095509550505050611e9d565b50508151600091506002905b9250925092565b60008060008573ffffffffffffffffffffffffffffffffffffffff168585604051602401611ed3929190612ac3565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f1626ba7e0000000000000000000000000000000000000000000000000000000017905251611f549190612ae4565b600060405180830381855afa9150503d8060008114611f8f576040519150601f19603f3d011682016040523d82523d6000602084013e611f94565b606091505b5091509150818015611fa857506020815110155b8015611fe8575080517f1626ba7e0000000000000000000000000000000000000000000000000000000090611fe6908301602090810190840161296f565b145b9695505050505050565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0073ffffffffffffffffffffffffffffffffffffffff841661204d57818160020160008282546120429190612a48565b909155506120ff9050565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260208290526040902054828110156120d3576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861660048201526024810182905260448101849052606401610923565b73ffffffffffffffffffffffffffffffffffffffff851660009081526020839052604090209083900390555b73ffffffffffffffffffffffffffffffffffffffff831661212a576002810180548390039055612156565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020829052604090208054830190555b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516121b591815260200190565b60405180910390a350505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff1661222a576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6122346121c3565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace007f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace036122808482612855565b5060048101611b8d8382612855565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156122ca575060009150600390508261237f565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa15801561231e573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166123755750600092506001915082905061237f565b9250600091508190505b9450945094915050565b60006020828403121561239b57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146108b157600080fd5b60005b838110156123e65781810151838201526020016123ce565b50506000910152565b600081518084526124078160208601602086016123cb565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006108b160208301846123ef565b73ffffffffffffffffffffffffffffffffffffffff81168114610eaf57600080fd5b6000806040838503121561248157600080fd5b823561248c8161244c565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff808411156124e4576124e461249a565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561252a5761252a61249a565b8160405280935085815286868601111561254357600080fd5b858560208301376000602087830101525050509392505050565b6000806040838503121561257057600080fd5b82359150602083013567ffffffffffffffff81111561258e57600080fd5b8301601f8101851361259f57600080fd5b6125ae858235602084016124c9565b9150509250929050565b6000806000606084860312156125cd57600080fd5b83356125d88161244c565b925060208401356125e88161244c565b929592945050506040919091013590565b60006020828403121561260b57600080fd5b5035919050565b6000806040838503121561262557600080fd5b50508035926020909101359150565b600082601f83011261264557600080fd5b6108b1838335602085016124c9565b6000806040838503121561266757600080fd5b823567ffffffffffffffff8082111561267f57600080fd5b61268b86838701612634565b935060208501359150808211156126a157600080fd5b506125ae85828601612634565b6000602082840312156126c057600080fd5b81356108b18161244c565b600080600080606085870312156126e157600080fd5b84356126ec8161244c565b935060208501359250604085013567ffffffffffffffff8082111561271057600080fd5b818701915087601f83011261272457600080fd5b81358181111561273357600080fd5b88602082850101111561274557600080fd5b95989497505060200194505050565b6000806040838503121561276757600080fd5b8235915060208301356127798161244c565b809150509250929050565b6000806040838503121561279757600080fd5b82356127a28161244c565b915060208301356127798161244c565b600181811c908216806127c657607f821691505b6020821081036127ff577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f821115610a33576000816000526020600020601f850160051c8101602086101561282e5750805b601f850160051c820191505b8181101561284d5782815560010161283a565b505050505050565b815167ffffffffffffffff81111561286f5761286f61249a565b6128838161287d84546127b2565b84612805565b602080601f8311600181146128d657600084156128a05750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b17855561284d565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561292357888601518255948401946001909101908401612904565b508582101561295f57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561298157600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808202811582820484141761079257610792612988565b600082612a04577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600060208284031215612a1b57600080fd5b815180151581146108b157600080fd5b600060208284031215612a3d57600080fd5b81516108b18161244c565b8082018082111561079257610792612988565b600080600060608486031215612a7057600080fd5b835192506020840151612a828161244c565b80925050604084015190509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b828152604060208201526000612adc60408301846123ef565b949350505050565b60008251612af68184602087016123cb565b919091019291505056fea2646970667358221220d136c67e1c22b8f6865412c46d359304bbb7ce61e25d90ded72385a68c70abbe64736f6c63430008180033",
        "sourceMap": "633:5380:66:-:0;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052600436106102025760003560e01c80637b1b1de61161011d578063affed0e0116100b0578063dd62ed3e1161007f578063f45e15c111610064578063f45e15c114610690578063f5a7a4bf146106a5578063fc0c546a146106ba57600080fd5b8063dd62ed3e14610609578063e5927b8f1461067b57600080fd5b8063affed0e0146105a0578063b210e2c1146105b4578063c625e9b1146105d4578063d8fa86e0146105f457600080fd5b806395d89b41116100ec57806395d89b41146105265780639e5d4c491461053b578063a366ee5814610553578063a9059cbb1461058057600080fd5b80637b1b1de6146104d05780637e3e0461146104e65780638129fc1c146104fc5780638da5cb5b1461051157600080fd5b8063313ce5671161019557806370a082311161016457806370a0823114610424578063748aa91c14610486578063770b74ba1461049b5780637980a891146104bb57600080fd5b8063313ce567146103a8578063412eade6146103c45780635c707f07146103e45780636a326ab11461040457600080fd5b806318160ddd116101d157806318160ddd146102d657806323b872dd146103145780632bf2762f146103345780633013ce291461035657600080fd5b806301ffc9a71461020e57806306fdde0314610243578063095ea7b3146102655780631626ba7e1461028557600080fd5b3661020957005b600080fd5b34801561021a57600080fd5b5061022e610229366004612389565b6106ff565b60405190151581526020015b60405180910390f35b34801561024f57600080fd5b50610258610798565b60405161023a9190612439565b34801561027157600080fd5b5061022e61028036600461246e565b61082a565b34801561029157600080fd5b506102a56102a036600461255d565b610842565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161023a565b3480156102e257600080fd5b507f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace02545b60405190815260200161023a565b34801561032057600080fd5b5061022e61032f3660046125b8565b610892565b34801561034057600080fd5b5061035461034f3660046125f9565b6108b8565b005b34801561036257600080fd5b506002546103839073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161023a565b3480156103b457600080fd5b506040516012815260200161023a565b3480156103d057600080fd5b506103546103df366004612612565b610931565b3480156103f057600080fd5b506103546103ff366004612654565b6109ab565b34801561041057600080fd5b5061035461041f3660046126ae565b610a38565b34801561043057600080fd5b5061030661043f3660046126ae565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00602052604090205490565b34801561049257600080fd5b50610354610aee565b3480156104a757600080fd5b506103546104b63660046126ae565b610eb2565b3480156104c757600080fd5b50610354610f68565b3480156104dc57600080fd5b5061030660035481565b3480156104f257600080fd5b5061030660045481565b34801561050857600080fd5b50610354611170565b34801561051d57600080fd5b5061038361135a565b34801561053257600080fd5b50610258611416565b6102586105493660046126cb565b6060949350505050565b34801561055f57600080fd5b506005546103839073ffffffffffffffffffffffffffffffffffffffff1681565b34801561058c57600080fd5b5061022e61059b36600461246e565b611425565b3480156105ac57600080fd5b506000610306565b3480156105c057600080fd5b506103546105cf3660046125f9565b611433565b3480156105e057600080fd5b506103546105ef366004612754565b6114a7565b34801561060057600080fd5b50610306601e81565b34801561061557600080fd5b50610306610624366004612784565b73ffffffffffffffffffffffffffffffffffffffff91821660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace016020908152604080832093909416825291909152205490565b34801561068757600080fd5b50610306603281565b34801561069c57600080fd5b5061035461170e565b3480156106b157600080fd5b50610306601481565b3480156106c657600080fd5b506106cf6119aa565b6040805193845273ffffffffffffffffffffffffffffffffffffffff90921660208401529082015260600161023a565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f36372b0700000000000000000000000000000000000000000000000000000000148061079257507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b6060600080546107a7906127b2565b80601f01602080910402602001604051908101604052809291908181526020018280546107d3906127b2565b80156108205780601f106107f557610100808354040283529160200191610820565b820191906000526020600020905b81548152906001019060200180831161080357829003601f168201915b5050505050905090565b6000336108388185856119fd565b5060019392505050565b60008061085761085061135a565b8585611a0a565b9050801561088857507f1626ba7e000000000000000000000000000000000000000000000000000000009050610792565b5060009392505050565b6000336108a0858285611aa5565b6108ab858585611b93565b60019150505b9392505050565b6108c133611c3e565b61092c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e657200000000000000000000000000000000000060448201526064015b60405180910390fd5b600355565b61093a33611c3e565b6109a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600691909155600755565b6109b433611c3e565b610a1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b6000610a268382612855565b506001610a338282612855565b505050565b610a4133611c3e565b610aa7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60055474010000000000000000000000000000000000000000900460ff168015610b3357506005547501000000000000000000000000000000000000000000900460ff165b8015610b5c5750600554760100000000000000000000000000000000000000000000900460ff16155b610bc2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420616c6c6f7765640000000000000000000000000000000000000000006044820152606401610923565b610bcb33611c3e565b610c31576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600754421015610c9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f546f6f206561726c7900000000000000000000000000000000000000000000006044820152606401610923565b6002546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009160649160329173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610d12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d36919061296f565b610d4091906129b7565b610d4a91906129ce565b600580547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff1676010000000000000000000000000000000000000000000017905560025490915073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb610db33390565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602481018490526044016020604051808303816000875af1158015610e25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e499190612a09565b610eaf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610923565b50565b610ebb33611c3e565b610f21576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60055474010000000000000000000000000000000000000000900460ff1615610fed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f416c7265616479207769746864726177656400000000000000000000000000006044820152606401610923565b610ff633611c3e565b61105c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b6002546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009160649160149173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156110d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f5919061296f565b6110ff91906129b7565b61110991906129ce565b600580547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000017905560025490915073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb610db33390565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff166000811580156111bb5750825b905060008267ffffffffffffffff1660011480156111d85750303b155b9050811580156111e6575080155b1561121d576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000166001178555831561127e5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b6112f26040518060400160405280600481526020017f53544152000000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f5354415200000000000000000000000000000000000000000000000000000000815250611c7d565b83156113535784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050565b6000806000806113686119aa565b92509250925046831461137f576000935050505090565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff831690636352211e90602401602060405180830381865afa1580156113ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061140e9190612a2b565b935050505090565b6060600180546107a7906127b2565b600033610838818585611b93565b61143c33611c3e565b6114a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600455565b60025460035473ffffffffffffffffffffffffffffffffffffffff909116906323b872dd90339030906114da90876129b7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff938416600482015292909116602483015260448201526064016020604051808303816000875af1158015611553573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115779190612a09565b6115dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610923565b600454826116097f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace025490565b6116139190612a48565b111561167b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4578636565647320746f74616c20737570706c790000000000000000000000006044820152606401610923565b6005546040517f6a62784200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015290911690636a62784290602401600060405180830381600087803b1580156116e857600080fd5b505af11580156116fc573d6000803e3d6000fd5b5050505061170a8183611c8f565b5050565b60055474010000000000000000000000000000000000000000900460ff16801561175457506005547501000000000000000000000000000000000000000000900460ff16155b6117ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e6f7420616c6c6f7765640000000000000000000000000000000000000000006044820152606401610923565b6117c333611c3e565b611829576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610923565b600654421015611895576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f546f6f206561726c7900000000000000000000000000000000000000000000006044820152606401610923565b6002546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600091606491601e9173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561190a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061192e919061296f565b61193891906129b7565b61194291906129ce565b600580547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff16750100000000000000000000000000000000000000000017905560025490915073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb610db33390565b60408051606080825260808201909252600091829182918291906020820181803683370190505090506060604d60208301303c808060200190518101906119f19190612a5b565b93509350935050909192565b610a338383836001611ceb565b60008373ffffffffffffffffffffffffffffffffffffffff163b600003611a9357600080611a388585611e57565b5090925090506000816003811115611a5257611a52612a94565b148015611a8a57508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b925050506108b1565b611a9e848484611ea4565b90506108b1565b73ffffffffffffffffffffffffffffffffffffffff83811660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611b8d5781811015611b7e576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024810182905260448101839052606401610923565b611b8d84848484036000611ceb565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611be3576040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260006004820152602401610923565b73ffffffffffffffffffffffffffffffffffffffff8216611c33576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610923565b610a33838383611ff2565b6000611c4861135a565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b611c856121c3565b61170a828261222c565b73ffffffffffffffffffffffffffffffffffffffff8216611cdf576040517fec442f0500000000000000000000000000000000000000000000000000000000815260006004820152602401610923565b61170a60008383611ff2565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0073ffffffffffffffffffffffffffffffffffffffff8516611d5c576040517fe602df0500000000000000000000000000000000000000000000000000000000815260006004820152602401610923565b73ffffffffffffffffffffffffffffffffffffffff8416611dac576040517f94280d6200000000000000000000000000000000000000000000000000000000815260006004820152602401610923565b73ffffffffffffffffffffffffffffffffffffffff808616600090815260018301602090815260408083209388168352929052208390558115611353578373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92585604051611e4891815260200190565b60405180910390a35050505050565b60008060008351604103611e915760208401516040850151606086015160001a611e838882858561228f565b955095509550505050611e9d565b50508151600091506002905b9250925092565b60008060008573ffffffffffffffffffffffffffffffffffffffff168585604051602401611ed3929190612ac3565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f1626ba7e0000000000000000000000000000000000000000000000000000000017905251611f549190612ae4565b600060405180830381855afa9150503d8060008114611f8f576040519150601f19603f3d011682016040523d82523d6000602084013e611f94565b606091505b5091509150818015611fa857506020815110155b8015611fe8575080517f1626ba7e0000000000000000000000000000000000000000000000000000000090611fe6908301602090810190840161296f565b145b9695505050505050565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0073ffffffffffffffffffffffffffffffffffffffff841661204d57818160020160008282546120429190612a48565b909155506120ff9050565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260208290526040902054828110156120d3576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861660048201526024810182905260448101849052606401610923565b73ffffffffffffffffffffffffffffffffffffffff851660009081526020839052604090209083900390555b73ffffffffffffffffffffffffffffffffffffffff831661212a576002810180548390039055612156565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020829052604090208054830190555b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516121b591815260200190565b60405180910390a350505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff1661222a576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6122346121c3565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace007f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace036122808482612855565b5060048101611b8d8382612855565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156122ca575060009150600390508261237f565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa15801561231e573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166123755750600092506001915082905061237f565b9250600091508190505b9450945094915050565b60006020828403121561239b57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146108b157600080fd5b60005b838110156123e65781810151838201526020016123ce565b50506000910152565b600081518084526124078160208601602086016123cb565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006108b160208301846123ef565b73ffffffffffffffffffffffffffffffffffffffff81168114610eaf57600080fd5b6000806040838503121561248157600080fd5b823561248c8161244c565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff808411156124e4576124e461249a565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561252a5761252a61249a565b8160405280935085815286868601111561254357600080fd5b858560208301376000602087830101525050509392505050565b6000806040838503121561257057600080fd5b82359150602083013567ffffffffffffffff81111561258e57600080fd5b8301601f8101851361259f57600080fd5b6125ae858235602084016124c9565b9150509250929050565b6000806000606084860312156125cd57600080fd5b83356125d88161244c565b925060208401356125e88161244c565b929592945050506040919091013590565b60006020828403121561260b57600080fd5b5035919050565b6000806040838503121561262557600080fd5b50508035926020909101359150565b600082601f83011261264557600080fd5b6108b1838335602085016124c9565b6000806040838503121561266757600080fd5b823567ffffffffffffffff8082111561267f57600080fd5b61268b86838701612634565b935060208501359150808211156126a157600080fd5b506125ae85828601612634565b6000602082840312156126c057600080fd5b81356108b18161244c565b600080600080606085870312156126e157600080fd5b84356126ec8161244c565b935060208501359250604085013567ffffffffffffffff8082111561271057600080fd5b818701915087601f83011261272457600080fd5b81358181111561273357600080fd5b88602082850101111561274557600080fd5b95989497505060200194505050565b6000806040838503121561276757600080fd5b8235915060208301356127798161244c565b809150509250929050565b6000806040838503121561279757600080fd5b82356127a28161244c565b915060208301356127798161244c565b600181811c908216806127c657607f821691505b6020821081036127ff577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f821115610a33576000816000526020600020601f850160051c8101602086101561282e5750805b601f850160051c820191505b8181101561284d5782815560010161283a565b505050505050565b815167ffffffffffffffff81111561286f5761286f61249a565b6128838161287d84546127b2565b84612805565b602080601f8311600181146128d657600084156128a05750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b17855561284d565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561292357888601518255948401946001909101908401612904565b508582101561295f57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561298157600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808202811582820484141761079257610792612988565b600082612a04577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600060208284031215612a1b57600080fd5b815180151581146108b157600080fd5b600060208284031215612a3d57600080fd5b81516108b18161244c565b8082018082111561079257610792612988565b600080600060608486031215612a7057600080fd5b835192506020840151612a828161244c565b80925050604084015190509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b828152604060208201526000612adc60408301846123ef565b949350505050565b60008251612af68184602087016123cb565b919091019291505056fea2646970667358221220d136c67e1c22b8f6865412c46d359304bbb7ce61e25d90ded72385a68c70abbe64736f6c63430008180033",
        "sourceMap": "633:5380:66:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5585:203;;;;;;;;;;-1:-1:-1;5585:203:66;;;;;:::i;:::-;;:::i;:::-;;;516:14:70;;509:22;491:41;;479:2;464:18;5585:203:66;;;;;;;;2414:96;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;5210:186:26:-;;;;;;;;;;-1:-1:-1;5210:186:26;;;;;:::i;:::-;;:::i;4549:377:66:-;;;;;;;;;;-1:-1:-1;4549:377:66;;;;;:::i;:::-;;:::i;:::-;;;3417:66:70;3405:79;;;3387:98;;3375:2;3360:18;4549:377:66;3243:248:70;3896:152:26;;;;;;;;;;-1:-1:-1;4027:14:26;;3896:152;;;3642:25:70;;;3630:2;3615:18;3896:152:26;3496:177:70;5988:244:26;;;;;;;;;;-1:-1:-1;5988:244:26;;;;;:::i;:::-;;:::i;1597:169:66:-;;;;;;;;;;-1:-1:-1;1597:169:66;;;;;:::i;:::-;;:::i;:::-;;803:26;;;;;;;;;;-1:-1:-1;803:26:66;;;;;;;;;;;4516:42:70;4504:55;;;4486:74;;4474:2;4459:18;803:26:66;4324:242:70;3754:82:26;;;;;;;;;;-1:-1:-1;3754:82:26;;3827:2;4713:36:70;;4701:2;4686:18;3754:82:26;4571:184:70;1951:266:66;;;;;;;;;;-1:-1:-1;1951:266:66;;;;;:::i;:::-;;:::i;1389:202::-;;;;;;;;;;-1:-1:-1;1389:202:66;;;;;:::i;:::-;;:::i;1772:173::-;;;;;;;;;;-1:-1:-1;1772:173:66;;;;;:::i;:::-;;:::i;4106:171:26:-;;;;;;;;;;-1:-1:-1;4106:171:26;;;;;:::i;:::-;4250:20;;4171:7;4250:20;;;2064;4250;;;;;;;4106:171;4039:502:66;;;;;;;;;;;;;:::i;2622:194::-;;;;;;;;;;-1:-1:-1;2622:194:66;;;;;:::i;:::-;;:::i;3158:391::-;;;;;;;;;;;;;:::i;835:28::-;;;;;;;;;;;;;;;;869:32;;;;;;;;;;;;;;;;1288:95;;;;;;;;;;;;;:::i;5218:245::-;;;;;;;;;;;;;:::i;2516:100::-;;;;;;;;;;;;;:::i;5794:150::-;;;;;;:::i;:::-;5928:12;5794:150;;;;;;;908:38;;;;;;;;;;-1:-1:-1;908:38:66;;;;;;;;4472:178:26;;;;;;;;;;-1:-1:-1;4472:178:26;;;;;:::i;:::-;;:::i;5950:60:66:-;;;;;;;;;;-1:-1:-1;5999:7:66;5950:60;;2223:185;;;;;;;;;;-1:-1:-1;2223:185:66;;;;;:::i;:::-;;:::i;2822:330::-;;;;;;;;;;-1:-1:-1;2822:330:66;;;;;:::i;:::-;;:::i;1009:50::-;;;;;;;;;;;;1057:2;1009:50;;4708:195:26;;;;;;;;;;-1:-1:-1;4708:195:26;;;;;:::i;:::-;4867:20;;;;4788:7;4867:20;;;:13;:20;;;;;;;;:29;;;;;;;;;;;;;4708:195;1065:50:66;;;;;;;;;;;;1113:2;1065:50;;3555:478;;;;;;;;;;;;;:::i;953:50::-;;;;;;;;;;;;1001:2;953:50;;4932:280;;;;;;;;;;;;;:::i;:::-;;;;8463:25:70;;;8536:42;8524:55;;;8519:2;8504:18;;8497:83;8596:18;;;8589:34;8451:2;8436:18;4932:280:66;8261:368:70;5585:203:66;5669:4;5694:39;;;5709:24;5694:39;;:89;;-1:-1:-1;5743:40:66;;;5758:25;5743:40;5694:89;5681:102;5585:203;-1:-1:-1;;5585:203:66:o;2414:96::-;2460:13;2492:11;2485:18;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2414:96;:::o;5210:186:26:-;5283:4;966:10:28;5337:31:26;966:10:28;5353:7:26;5362:5;5337:8;:31::i;:::-;-1:-1:-1;5385:4:26;;5210:186;-1:-1:-1;;;5210:186:26:o;4549:377:66:-;4658:17;4687:12;4702:108;4752:7;:5;:7::i;:::-;4773:4;4791:9;4702:36;:108::i;:::-;4687:123;;4825:7;4821:79;;;-1:-1:-1;4855:34:66;;-1:-1:-1;4848:41:66;;4821:79;-1:-1:-1;4910:9:66;;4549:377;-1:-1:-1;;;4549:377:66:o;5988:244:26:-;6075:4;966:10:28;6131:37:26;6147:4;966:10:28;6162:5:26;6131:15;:37::i;:::-;6178:26;6188:4;6194:2;6198:5;6178:9;:26::i;:::-;6221:4;6214:11;;;5988:244;;;;;;:::o;1597:169:66:-;1672:28;966:10:28;1672:14:66;:28::i;:::-;1664:55;;;;;;;9278:2:70;1664:55:66;;;9260:21:70;9317:2;9297:18;;;9290:30;9356:16;9336:18;;;9329:44;9390:18;;1664:55:66;;;;;;;;;1729:13;:30;1597:169::o;1951:266::-;2059:28;966:10:28;1672:14:66;:28::i;2059:::-;2051:55;;;;;;;9278:2:70;2051:55:66;;;9260:21:70;9317:2;9297:18;;;9290:30;9356:16;9336:18;;;9329:44;9390:18;;2051:55:66;9076:338:70;2051:55:66;2116:19;:42;;;;2168:19;:42;1951:266::o;1389:202::-;1475:28;966:10:28;1672:14:66;:28::i;1475:::-;1467:55;;;;;;;9278:2:70;1467:55:66;;;9260:21:70;9317:2;9297:18;;;9290:30;9356:16;9336:18;;;9329:44;9390:18;;1467:55:66;9076:338:70;1467:55:66;1532:11;:19;1546:5;1532:11;:19;:::i;:::-;-1:-1:-1;1561:13:66;:23;1577:7;1561:13;:23;:::i;:::-;;1389:202;;:::o;1772:173::-;1845:28;966:10:28;1672:14:66;:28::i;1845:::-;1837:55;;;;;;;9278:2:70;1837:55:66;;;9260:21:70;9317:2;9297:18;;;9290:30;9356:16;9336:18;;;9329:44;9390:18;;1837:55:66;9076:338:70;1837:55:66;1902:12;:36;;;;;;;;;;;;;;;1772:173::o;4039:502::-;4101:20;;;;;;;:44;;;;-1:-1:-1;4125:20:66;;;;;;;4101:44;:69;;;;-1:-1:-1;4150:20:66;;;;;;;4149:21;4101:69;4093:93;;;;;;;11995:2:70;4093:93:66;;;11977:21:70;12034:2;12014:18;;;12007:30;12073:13;12053:18;;;12046:41;12104:18;;4093:93:66;11793:335:70;4093:93:66;4204:28;966:10:28;1672:14:66;:28::i;4204:::-;4196:55;;;;;;;9278:2:70;4196:55:66;;;9260:21:70;9317:2;9297:18;;;9290:30;9356:16;9336:18;;;9329:44;9390:18;;4196:55:66;9076:338:70;4196:55:66;4288:19;;4269:15;:38;;4261:60;;;;;;;12335:2:70;4261:60:66;;;12317:21:70;12374:1;12354:18;;;12347:29;12412:11;12392:18;;;12385:39;12441:18;;4261:60:66;12133:332:70;4261:60:66;4348:12;;:37;;;;;4379:4;4348:37;;;4486:74:70;4331:14:66;;4412:3;;1113:2;;4348:12;;;:22;;4459:18:70;;4348:37:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:61;;;;:::i;:::-;:67;;;;:::i;:::-;4425:20;:27;;;;;;;;4471:12;;4331:84;;-1:-1:-1;4471:12:66;;:21;4493:12;966:10:28;;887:96;4493:12:66;4471:43;;;;;;;;;;13504:42:70;13492:55;;;4471:43:66;;;13474:74:70;13564:18;;;13557:34;;;13447:18;;4471:43:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4463:71;;;;;;;14086:2:70;4463:71:66;;;14068:21:70;14125:2;14105:18;;;14098:30;14164:17;14144:18;;;14137:45;14199:18;;4463:71:66;13884:339:70;4463:71:66;4083:458;4039:502::o;2622:194::-;2701:28;966:10:28;1672:14:66;:28::i;2701:::-;2693:55;;;;;;;9278:2:70;2693:55:66;;;9260:21:70;9317:2;9297:18;;;9290:30;9356:16;9336:18;;;9329:44;9390:18;;2693:55:66;9076:338:70;2693:55:66;2758:15;:51;;;;;;;;;;;;;;;2622:194::o;3158:391::-;3221:20;;;;;;;3220:21;3212:52;;;;;;;14430:2:70;3212:52:66;;;14412:21:70;14469:2;14449:18;;;14442:30;14508:20;14488:18;;;14481:48;14546:18;;3212:52:66;14228:342:70;3212:52:66;3282:28;966:10:28;1672:14:66;:28::i;3282:::-;3274:55;;;;;;;9278:2:70;3274:55:66;;;9260:21:70;9317:2;9297:18;;;9290:30;9356:16;9336:18;;;9329:44;9390:18;;3274:55:66;9076:338:70;3274:55:66;3356:12;;:37;;;;;3387:4;3356:37;;;4486:74:70;3339:14:66;;3420:3;;1001:2;;3356:12;;;:22;;4459:18:70;;3356:37:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:61;;;;:::i;:::-;:67;;;;:::i;:::-;3433:20;:27;;;;;;;;3479:12;;3339:84;;-1:-1:-1;3479:12:66;;:21;3501:12;966:10:28;;887:96;1288:95:66;8870:21:25;4302:15;;;;;;;4301:16;;4348:14;;4158:30;4726:16;;:34;;;;;4746:14;4726:34;4706:54;;4770:17;4790:11;:16;;4805:1;4790:16;:50;;;;-1:-1:-1;4818:4:25;4810:25;:30;4790:50;4770:70;;4856:12;4855:13;:30;;;;;4873:12;4872:13;4855:30;4851:91;;;4908:23;;;;;;;;;;;;;;4851:91;4951:18;;;;4968:1;4951:18;;;4979:67;;;;5013:22;;;;;;;;4979:67;1348:28:66::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;::::0;:12:::1;:28::i;:::-;5070:14:25::0;5066:101;;;5100:23;;;;;;5142:14;;-1:-1:-1;14728:50:70;;5142:14:25;;14716:2:70;14701:18;5142:14:25;;;;;;;5066:101;4092:1081;;;;;1288:95:66:o;5218:245::-;5256:7;5276:15;5293:21;5316:15;5335:7;:5;:7::i;:::-;5275:67;;;;;;5367:13;5356:7;:24;5352:47;;5397:1;5382:17;;;;;5218:245;:::o;5352:47::-;5417:39;;;;;;;;3642:25:70;;;5417:30:66;;;;;;3615:18:70;;5417:39:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5410:46;;;;;5218:245;:::o;2516:100::-;2564:13;2596;2589:20;;;;;:::i;4472:178:26:-;4541:4;966:10:28;4595:27:26;966:10:28;4612:2:26;4616:5;4595:9;:27::i;2223:185:66:-;2306:28;966:10:28;1672:14:66;:28::i;2306:::-;2298:55;;;;;;;9278:2:70;2298:55:66;;;9260:21:70;9317:2;9297:18;;;9290:30;9356:16;9336:18;;;9329:44;9390:18;;2298:55:66;9076:338:70;2298:55:66;2363:17;:38;2223:185::o;2822:330::-;2896:12;;2959:13;;2896:12;;;;;:25;;2922:10;;2942:4;;2949:23;;:7;:23;:::i;:::-;2896:77;;;;;;;;;;15257:42:70;15326:15;;;2896:77:66;;;15308:34:70;15378:15;;;;15358:18;;;15351:43;15410:18;;;15403:34;15220:18;;2896:77:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2888:105;;;;;;;14086:2:70;2888:105:66;;;14068:21:70;14125:2;14105:18;;;14098:30;14164:17;14144:18;;;14137:45;14199:18;;2888:105:66;13884:339:70;2888:105:66;3038:17;;3027:7;3011:13;4027:14:26;;;3896:152;3011:13:66;:23;;;;:::i;:::-;:44;;3003:77;;;;;;;15780:2:70;3003:77:66;;;15762:21:70;15819:2;15799:18;;;15792:30;15858:22;15838:18;;;15831:50;15898:18;;3003:77:66;15578:344:70;3003:77:66;3091:15;;:25;;;;;:15;4504:55:70;;;3091:25:66;;;4486:74:70;3091:15:66;;;;:20;;4459:18:70;;3091:25:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3126:19;3132:3;3137:7;3126:5;:19::i;:::-;2822:330;;:::o;3555:478::-;3617:20;;;;;;;:45;;;;-1:-1:-1;3642:20:66;;;;;;;3641:21;3617:45;3609:69;;;;;;;11995:2:70;3609:69:66;;;11977:21:70;12034:2;12014:18;;;12007:30;12073:13;12053:18;;;12046:41;12104:18;;3609:69:66;11793:335:70;3609:69:66;3696:28;966:10:28;1672:14:66;:28::i;3696:::-;3688:55;;;;;;;9278:2:70;3688:55:66;;;9260:21:70;9317:2;9297:18;;;9290:30;9356:16;9336:18;;;9329:44;9390:18;;3688:55:66;9076:338:70;3688:55:66;3780:19;;3761:15;:38;;3753:60;;;;;;;12335:2:70;3753:60:66;;;12317:21:70;12374:1;12354:18;;;12347:29;12412:11;12392:18;;;12385:39;12441:18;;3753:60:66;12133:332:70;3753:60:66;3840:12;;:37;;;;;3871:4;3840:37;;;4486:74:70;3823:14:66;;3904:3;;1057:2;;3840:12;;;:22;;4459:18:70;;3840:37:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:61;;;;:::i;:::-;:67;;;;:::i;:::-;3917:20;:27;;;;;;;;3963:12;;3823:84;;-1:-1:-1;3963:12:66;;:21;3985:12;966:10:28;;887:96;4932:280:66;5029:15;;;5039:4;5029:15;;;;;;;;;4970:7;;;;;;;;5029:15;;;;;;;;;;;-1:-1:-1;5029:15:66;5007:37;;5126:4;5120;5113;5105:6;5101:17;5090:9;5078:53;5169:6;5158:47;;;;;;;;;;;;:::i;:::-;5151:54;;;;;;;4932:280;;;:::o;10001:128:26:-;10085:37;10094:5;10101:7;10110:5;10117:4;10085:8;:37::i;1041:429:54:-;1147:4;1167:6;:18;;;1189:1;1167:23;1163:301;;1207:17;1226:22;1254:33;1271:4;1277:9;1254:16;:33::i;:::-;-1:-1:-1;1206:81:54;;-1:-1:-1;1206:81:54;-1:-1:-1;1315:26:54;1308:3;:33;;;;;;;;:::i;:::-;;:56;;;;;1358:6;1345:19;;:9;:19;;;1308:56;1301:63;;;;;;1163:301;1402:51;1429:6;1437:4;1443:9;1402:26;:51::i;:::-;1395:58;;;;11745:477:26;4867:20;;;;11844:24;4867:20;;;:13;:20;;;;;;;;:29;;;;;;;;;;11930:17;11910:37;;11906:310;;11986:5;11967:16;:24;11963:130;;;12018:60;;;;;16734:42:70;16722:55;;12018:60:26;;;16704:74:70;16794:18;;;16787:34;;;16837:18;;;16830:34;;;16677:18;;12018:60:26;16502:368:70;11963:130:26;12134:57;12143:5;12150:7;12178:5;12159:16;:24;12185:5;12134:8;:57::i;:::-;11834:388;11745:477;;;:::o;6605:300::-;6688:18;;;6684:86;;6729:30;;;;;6756:1;6729:30;;;4486:74:70;4459:18;;6729:30:26;4324:242:70;6684:86:26;6783:16;;;6779:86;;6822:32;;;;;6851:1;6822:32;;;4486:74:70;4459:18;;6822:32:26;4324:242:70;6779:86:26;6874:24;6882:4;6888:2;6892:5;6874:7;:24::i;5469:110:66:-;5532:4;5565:7;:5;:7::i;:::-;5555:17;;:6;:17;;;5548:24;;5469:110;;;:::o;2282:147:26:-;6931:20:25;:18;:20::i;:::-;2384:38:26::1;2407:5;2414:7;2384:22;:38::i;8733:208::-:0;8803:21;;;8799:91;;8847:32;;;;;8876:1;8847:32;;;4486:74:70;4459:18;;8847:32:26;4324:242:70;8799:91:26;8899:35;8915:1;8919:7;8928:5;8899:7;:35::i;10976:487::-;2064:20;11141:19;;;11137:89;;11183:32;;;;;11212:1;11183:32;;;4486:74:70;4459:18;;11183:32:26;4324:242:70;11137:89:26;11239:21;;;11235:90;;11283:31;;;;;11311:1;11283:31;;;4486:74:70;4459:18;;11283:31:26;4324:242:70;11235:90:26;11334:20;;;;;;;;:13;;;:20;;;;;;;;:29;;;;;;;;;:37;;;11381:76;;;;11431:7;11415:31;;11424:5;11415:31;;;11440:5;11415:31;;;;3642:25:70;;3630:2;3615:18;;3496:177;11415:31:26;;;;;;;;11074:389;10976:487;;;;:::o;2129:766:53:-;2210:7;2219:12;2233:7;2256:9;:16;2276:2;2256:22;2252:637;;2592:4;2577:20;;2571:27;2641:4;2626:20;;2620:27;2698:4;2683:20;;2677:27;2294:9;2669:36;2739:25;2750:4;2669:36;2571:27;2620;2739:10;:25::i;:::-;2732:32;;;;;;;;;;;2252:637;-1:-1:-1;;2860:16:53;;2811:1;;-1:-1:-1;2815:35:53;;2252:637;2129:766;;;;;:::o;1877:458:54:-;2020:4;2037:12;2051:19;2074:6;:17;;2148:4;2154:9;2105:60;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;2074:101;;;2105:60;2074:101;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2036:139;;;;2193:7;:42;;;;;2233:2;2216:6;:13;:19;;2193:42;:134;;;;-1:-1:-1;2251:29:54;;2292:34;;2251:29;;;;;;;;;;;;:::i;:::-;:76;2193:134;2185:143;1877:458;-1:-1:-1;;;;;;1877:458:54:o;7220:1170:26:-;2064:20;7362:18;;;7358:546;;7516:5;7498:1;:14;;;:23;;;;;;;:::i;:::-;;;;-1:-1:-1;7358:546:26;;-1:-1:-1;7358:546:26;;7574:17;;;7552:19;7574:17;;;;;;;;;;;7609:19;;;7605:115;;;7655:50;;;;;16734:42:70;16722:55;;7655:50:26;;;16704:74:70;16794:18;;;16787:34;;;16837:18;;;16830:34;;;16677:18;;7655:50:26;16502:368:70;7605:115:26;7840:17;;;:11;:17;;;;;;;;;;7860:19;;;;7840:39;;7358:546;7918:16;;;7914:429;;8081:14;;;:23;;;;;;;7914:429;;;8294:15;;;:11;:15;;;;;;;;;;:24;;;;;;7914:429;8373:2;8358:25;;8367:4;8358:25;;;8377:5;8358:25;;;;3642::70;;3630:2;3615:18;;3496:177;8358:25:26;;;;;;;;7295:1095;7220:1170;;;:::o;7084:141:25:-;8870:21;8560:40;;;;;;7146:73;;7191:17;;;;;;;;;;;;;;7146:73;7084:141::o;2435:216:26:-;6931:20:25;:18;:20::i;:::-;2064::26;2600:7;:15:::1;2610:5:::0;2600:7;:15:::1;:::i;:::-;-1:-1:-1::0;2625:9:26::1;::::0;::::1;:19;2637:7:::0;2625:9;:19:::1;:::i;5140:1530:53:-:0;5266:7;;;6199:66;6186:79;;6182:164;;;-1:-1:-1;6297:1:53;;-1:-1:-1;6301:30:53;;-1:-1:-1;6333:1:53;6281:54;;6182:164;6457:24;;;6440:14;6457:24;;;;;;;;;17877:25:70;;;17950:4;17938:17;;17918:18;;;17911:45;;;;17972:18;;;17965:34;;;18015:18;;;18008:34;;;6457:24:53;;17849:19:70;;6457:24:53;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;6457:24:53;;;;;;-1:-1:-1;;6495:20:53;;;6491:113;;-1:-1:-1;6547:1:53;;-1:-1:-1;6551:29:53;;-1:-1:-1;6547:1:53;;-1:-1:-1;6531:62:53;;6491:113;6622:6;-1:-1:-1;6630:20:53;;-1:-1:-1;6630:20:53;;-1:-1:-1;5140:1530:53;;;;;;;;;:::o;14:332:70:-;72:6;125:2;113:9;104:7;100:23;96:32;93:52;;;141:1;138;131:12;93:52;180:9;167:23;230:66;223:5;219:78;212:5;209:89;199:117;;312:1;309;302:12;543:250;628:1;638:113;652:6;649:1;646:13;638:113;;;728:11;;;722:18;709:11;;;702:39;674:2;667:10;638:113;;;-1:-1:-1;;785:1:70;767:16;;760:27;543:250::o;798:330::-;840:3;878:5;872:12;905:6;900:3;893:19;921:76;990:6;983:4;978:3;974:14;967:4;960:5;956:16;921:76;:::i;:::-;1042:2;1030:15;1047:66;1026:88;1017:98;;;;1117:4;1013:109;;798:330;-1:-1:-1;;798:330:70:o;1133:220::-;1282:2;1271:9;1264:21;1245:4;1302:45;1343:2;1332:9;1328:18;1320:6;1302:45;:::i;1358:154::-;1444:42;1437:5;1433:54;1426:5;1423:65;1413:93;;1502:1;1499;1492:12;1517:315;1585:6;1593;1646:2;1634:9;1625:7;1621:23;1617:32;1614:52;;;1662:1;1659;1652:12;1614:52;1701:9;1688:23;1720:31;1745:5;1720:31;:::i;:::-;1770:5;1822:2;1807:18;;;;1794:32;;-1:-1:-1;;;1517:315:70:o;1837:184::-;1889:77;1886:1;1879:88;1986:4;1983:1;1976:15;2010:4;2007:1;2000:15;2026:690;2090:5;2120:18;2161:2;2153:6;2150:14;2147:40;;;2167:18;;:::i;:::-;2301:2;2295:9;2367:2;2355:15;;2206:66;2351:24;;;2377:2;2347:33;2343:42;2331:55;;;2401:18;;;2421:22;;;2398:46;2395:72;;;2447:18;;:::i;:::-;2487:10;2483:2;2476:22;2516:6;2507:15;;2546:6;2538;2531:22;2586:3;2577:6;2572:3;2568:16;2565:25;2562:45;;;2603:1;2600;2593:12;2562:45;2653:6;2648:3;2641:4;2633:6;2629:17;2616:44;2708:1;2701:4;2692:6;2684;2680:19;2676:30;2669:41;;;;2026:690;;;;;:::o;2721:517::-;2798:6;2806;2859:2;2847:9;2838:7;2834:23;2830:32;2827:52;;;2875:1;2872;2865:12;2827:52;2911:9;2898:23;2888:33;;2972:2;2961:9;2957:18;2944:32;2999:18;2991:6;2988:30;2985:50;;;3031:1;3028;3021:12;2985:50;3054:22;;3107:4;3099:13;;3095:27;-1:-1:-1;3085:55:70;;3136:1;3133;3126:12;3085:55;3159:73;3224:7;3219:2;3206:16;3201:2;3197;3193:11;3159:73;:::i;:::-;3149:83;;;2721:517;;;;;:::o;3678:456::-;3755:6;3763;3771;3824:2;3812:9;3803:7;3799:23;3795:32;3792:52;;;3840:1;3837;3830:12;3792:52;3879:9;3866:23;3898:31;3923:5;3898:31;:::i;:::-;3948:5;-1:-1:-1;4005:2:70;3990:18;;3977:32;4018:33;3977:32;4018:33;:::i;:::-;3678:456;;4070:7;;-1:-1:-1;;;4124:2:70;4109:18;;;;4096:32;;3678:456::o;4139:180::-;4198:6;4251:2;4239:9;4230:7;4226:23;4222:32;4219:52;;;4267:1;4264;4257:12;4219:52;-1:-1:-1;4290:23:70;;4139:180;-1:-1:-1;4139:180:70:o;4760:248::-;4828:6;4836;4889:2;4877:9;4868:7;4864:23;4860:32;4857:52;;;4905:1;4902;4895:12;4857:52;-1:-1:-1;;4928:23:70;;;4998:2;4983:18;;;4970:32;;-1:-1:-1;4760:248:70:o;5013:221::-;5056:5;5109:3;5102:4;5094:6;5090:17;5086:27;5076:55;;5127:1;5124;5117:12;5076:55;5149:79;5224:3;5215:6;5202:20;5195:4;5187:6;5183:17;5149:79;:::i;5239:543::-;5327:6;5335;5388:2;5376:9;5367:7;5363:23;5359:32;5356:52;;;5404:1;5401;5394:12;5356:52;5444:9;5431:23;5473:18;5514:2;5506:6;5503:14;5500:34;;;5530:1;5527;5520:12;5500:34;5553:50;5595:7;5586:6;5575:9;5571:22;5553:50;:::i;:::-;5543:60;;5656:2;5645:9;5641:18;5628:32;5612:48;;5685:2;5675:8;5672:16;5669:36;;;5701:1;5698;5691:12;5669:36;;5724:52;5768:7;5757:8;5746:9;5742:24;5724:52;:::i;5787:247::-;5846:6;5899:2;5887:9;5878:7;5874:23;5870:32;5867:52;;;5915:1;5912;5905:12;5867:52;5954:9;5941:23;5973:31;5998:5;5973:31;:::i;6270:794::-;6358:6;6366;6374;6382;6435:2;6423:9;6414:7;6410:23;6406:32;6403:52;;;6451:1;6448;6441:12;6403:52;6490:9;6477:23;6509:31;6534:5;6509:31;:::i;:::-;6559:5;-1:-1:-1;6611:2:70;6596:18;;6583:32;;-1:-1:-1;6666:2:70;6651:18;;6638:32;6689:18;6719:14;;;6716:34;;;6746:1;6743;6736:12;6716:34;6784:6;6773:9;6769:22;6759:32;;6829:7;6822:4;6818:2;6814:13;6810:27;6800:55;;6851:1;6848;6841:12;6800:55;6891:2;6878:16;6917:2;6909:6;6906:14;6903:34;;;6933:1;6930;6923:12;6903:34;6978:7;6973:2;6964:6;6960:2;6956:15;6952:24;6949:37;6946:57;;;6999:1;6996;6989:12;6946:57;6270:794;;;;-1:-1:-1;;7030:2:70;7022:11;;-1:-1:-1;;;6270:794:70:o;7548:315::-;7616:6;7624;7677:2;7665:9;7656:7;7652:23;7648:32;7645:52;;;7693:1;7690;7683:12;7645:52;7729:9;7716:23;7706:33;;7789:2;7778:9;7774:18;7761:32;7802:31;7827:5;7802:31;:::i;:::-;7852:5;7842:15;;;7548:315;;;;;:::o;7868:388::-;7936:6;7944;7997:2;7985:9;7976:7;7972:23;7968:32;7965:52;;;8013:1;8010;8003:12;7965:52;8052:9;8039:23;8071:31;8096:5;8071:31;:::i;:::-;8121:5;-1:-1:-1;8178:2:70;8163:18;;8150:32;8191:33;8150:32;8191:33;:::i;8634:437::-;8713:1;8709:12;;;;8756;;;8777:61;;8831:4;8823:6;8819:17;8809:27;;8777:61;8884:2;8876:6;8873:14;8853:18;8850:38;8847:218;;8921:77;8918:1;8911:88;9022:4;9019:1;9012:15;9050:4;9047:1;9040:15;8847:218;;8634:437;;;:::o;9545:543::-;9647:2;9642:3;9639:11;9636:446;;;9683:1;9707:5;9704:1;9697:16;9751:4;9748:1;9738:18;9821:2;9809:10;9805:19;9802:1;9798:27;9792:4;9788:38;9857:4;9845:10;9842:20;9839:47;;;-1:-1:-1;9880:4:70;9839:47;9935:2;9930:3;9926:12;9923:1;9919:20;9913:4;9909:31;9899:41;;9990:82;10008:2;10001:5;9998:13;9990:82;;;10053:17;;;10034:1;10023:13;9990:82;;;9994:3;;;9545:543;;;:::o;10324:1464::-;10450:3;10444:10;10477:18;10469:6;10466:30;10463:56;;;10499:18;;:::i;:::-;10528:97;10618:6;10578:38;10610:4;10604:11;10578:38;:::i;:::-;10572:4;10528:97;:::i;:::-;10680:4;;10737:2;10726:14;;10754:1;10749:782;;;;11575:1;11592:6;11589:89;;;-1:-1:-1;11644:19:70;;;11638:26;11589:89;10230:66;10221:1;10217:11;;;10213:84;10209:89;10199:100;10305:1;10301:11;;;10196:117;11691:81;;10719:1063;;10749:782;9492:1;9485:14;;;9529:4;9516:18;;10797:66;10785:79;;;10962:236;10976:7;10973:1;10970:14;10962:236;;;11065:19;;;11059:26;11044:42;;11157:27;;;;11125:1;11113:14;;;;10992:19;;10962:236;;;10966:3;11226:6;11217:7;11214:19;11211:261;;;11287:19;;;11281:26;11388:66;11370:1;11366:14;;;11382:3;11362:24;11358:97;11354:102;11339:118;11324:134;;11211:261;-1:-1:-1;;;;;11518:1:70;11502:14;;;11498:22;11485:36;;-1:-1:-1;10324:1464:70:o;12470:184::-;12540:6;12593:2;12581:9;12572:7;12568:23;12564:32;12561:52;;;12609:1;12606;12599:12;12561:52;-1:-1:-1;12632:16:70;;12470:184;-1:-1:-1;12470:184:70:o;12659:::-;12711:77;12708:1;12701:88;12808:4;12805:1;12798:15;12832:4;12829:1;12822:15;12848:168;12921:9;;;12952;;12969:15;;;12963:22;;12949:37;12939:71;;12990:18;;:::i;13021:274::-;13061:1;13087;13077:189;;13122:77;13119:1;13112:88;13223:4;13220:1;13213:15;13251:4;13248:1;13241:15;13077:189;-1:-1:-1;13280:9:70;;13021:274::o;13602:277::-;13669:6;13722:2;13710:9;13701:7;13697:23;13693:32;13690:52;;;13738:1;13735;13728:12;13690:52;13770:9;13764:16;13823:5;13816:13;13809:21;13802:5;13799:32;13789:60;;13845:1;13842;13835:12;14789:251;14859:6;14912:2;14900:9;14891:7;14887:23;14883:32;14880:52;;;14928:1;14925;14918:12;14880:52;14960:9;14954:16;14979:31;15004:5;14979:31;:::i;15448:125::-;15513:9;;;15534:10;;;15531:36;;;15547:18;;:::i;15927:381::-;16023:6;16031;16039;16092:2;16080:9;16071:7;16067:23;16063:32;16060:52;;;16108:1;16105;16098:12;16060:52;16137:9;16131:16;16121:26;;16190:2;16179:9;16175:18;16169:25;16203:31;16228:5;16203:31;:::i;:::-;16253:5;16243:15;;;16298:2;16287:9;16283:18;16277:25;16267:35;;15927:381;;;;;:::o;16313:184::-;16365:77;16362:1;16355:88;16462:4;16459:1;16452:15;16486:4;16483:1;16476:15;16875:289;17050:6;17039:9;17032:25;17093:2;17088;17077:9;17073:18;17066:30;17013:4;17113:45;17154:2;17143:9;17139:18;17131:6;17113:45;:::i;:::-;17105:53;16875:289;-1:-1:-1;;;;16875:289:70:o;17169:287::-;17298:3;17336:6;17330:13;17352:66;17411:6;17406:3;17399:4;17391:6;17387:17;17352:66;:::i;:::-;17434:16;;;;;17169:287;-1:-1:-1;;17169:287:70:o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "MILESTONE1_PERCENTAGE()": "f5a7a4bf",
        "MILESTONE2_PERCENTAGE()": "d8fa86e0",
        "MILESTONE3_PERCENTAGE()": "e5927b8f",
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "badgeCollection()": "a366ee58",
        "balanceOf(address)": "70a08231",
        "buyTokens(uint256,address)": "c625e9b1",
        "decimals()": "313ce567",
        "executeCall(address,uint256,bytes)": "9e5d4c49",
        "executeWithdrawMilestone1()": "7980a891",
        "executeWithdrawMilestone2()": "f45e15c1",
        "executeWithdrawMilestone3()": "748aa91c",
        "initialize()": "8129fc1c",
        "isValidSignature(bytes32,bytes)": "1626ba7e",
        "name()": "06fdde03",
        "nonce()": "affed0e0",
        "owner()": "8da5cb5b",
        "paymentToken()": "3013ce29",
        "pricePerToken()": "7b1b1de6",
        "setBadgeCollection(address)": "770b74ba",
        "setMilestones(uint256,uint256)": "412eade6",
        "setName(string,string)": "5c707f07",
        "setPaymentToken(address)": "6a326ab1",
        "setPricePerToken(uint256)": "2bf2762f",
        "setTargetTotalSupply(uint256)": "b210e2c1",
        "supportsInterface(bytes4)": "01ffc9a7",
        "symbol()": "95d89b41",
        "targetTotalSupply()": "7e3e0461",
        "token()": "fc0c546a",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSpender\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MILESTONE1_PERCENTAGE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MILESTONE2_PERCENTAGE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MILESTONE3_PERCENTAGE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"badgeCollection\",\"outputs\":[{\"internalType\":\"contract BadgeCollection\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"buyTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"executeCall\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"executeWithdrawMilestone1\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"executeWithdrawMilestone2\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"executeWithdrawMilestone3\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"hash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"signature\",\"type\":\"bytes\"}],\"name\":\"isValidSignature\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"magicValue\",\"type\":\"bytes4\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nonce\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paymentToken\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pricePerToken\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_badgeCollection\",\"type\":\"address\"}],\"name\":\"setBadgeCollection\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_milestone2Timestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_milestone3Timestamp\",\"type\":\"uint256\"}],\"name\":\"setMilestones\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_paymentToken\",\"type\":\"address\"}],\"name\":\"setPaymentToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pricePerToken\",\"type\":\"uint256\"}],\"name\":\"setPricePerToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_targetTotalSupply\",\"type\":\"uint256\"}],\"name\":\"setTargetTotalSupply\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetTotalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"errors\":{\"ERC20InsufficientAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\",\"params\":{\"allowance\":\"Amount of tokens a `spender` is allowed to operate with.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC20InsufficientBalance(address,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC20InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC20InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidSpender(address)\":[{\"details\":\"Indicates a failure with the `spender` to be approved. Used in approvals.\",\"params\":{\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"executeCall(address,uint256,bytes)\":{\"details\":\"Executes `call` on address `to`, with value `value` and calldata `data`. MUST revert and bubble up errors if call fails. By default, token bound accounts MUST allow the owner of the ERC-721 token which owns the account to execute arbitrary calls using `executeCall`. Token bound accounts MAY implement additional authorization mechanisms which limit the ability of the ERC-721 token holder to execute calls. Token bound accounts MAY implement additional execution functions which grant execution permissions to other non-owner accounts.\",\"returns\":{\"_0\":\"The result of the call\"}},\"isValidSignature(bytes32,bytes)\":{\"details\":\"Should return whether the signature provided is valid for the provided data\",\"params\":{\"hash\":\"Hash of the data to be signed\",\"signature\":\"Signature byte array associated with _data\"}},\"name()\":{\"details\":\"Returns the name of the token.\"},\"nonce()\":{\"details\":\"Returns a nonce value that is updated on every successful transaction\",\"returns\":{\"_0\":\"The current account nonce\"}},\"owner()\":{\"details\":\"Returns the owner of the ERC-721 token which controls the account if the token exists. This is value is obtained by calling `ownerOf` on the ERC-721 contract.\",\"returns\":{\"_0\":\"Address of the owner of the ERC-721 token which owns the account\"}},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"token()\":{\"details\":\"Returns identifier of the ERC-721 token which owns the account The return value of this function MUST be constant - it MUST NOT change over time.\",\"returns\":{\"_0\":\"The EIP-155 ID of the chain the ERC-721 token exists on\",\"_1\":\"The contract address of the ERC-721 token\",\"_2\":\"The ID of the ERC-721 token\"}},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Skips emitting an {Approval} event indicating an allowance update. This is not required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve]. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/StarAccount.sol\":\"StarAccount\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/forge-std/src/console.sol\":{\"keccak256\":\"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70\",\"dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol\":{\"keccak256\":\"0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6\",\"dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol\":{\"keccak256\":\"0x5a5f22721ffb66d3e1ecc568c0d37c91f91223d8663c8a5e78396e780b849c72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bdd108133c98ea251513424bf17905090c8a7e0755562a6d12a81b8bccbd6152\",\"dweb:/ipfs/QmahpnB63Up9aVx4jDqxEgry5BRN5itHRvy9rwBvMT2yqL\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol\":{\"keccak256\":\"0xb85949d5e4c55ec1e5426390424631ac6d125aefe2ce539a49f1dc897856ce53\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9012d7103fed6a41dd81c0d80d7d239257c2a80fc8af46bbe1101bdf64a86ad5\",\"dweb:/ipfs/QmNgyB7nPaVLwsZcjMBqfw3x1B7yPS4UHPwdrDRz4hXLVk\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/introspection/ERC165Upgradeable.sol\":{\"keccak256\":\"0xddfe0afa85367153020524d383fe0bc9a1545f343019ddf33f98f392887047f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://62f3df350ce83190e81673e424dd47d9ee8ffb121a6f72994c75c8ae3fc9dded\",\"dweb:/ipfs/QmaA2CMuqESmdgVao4XzCL4aRwcZW1xjUXpY7RqHZfQoAV\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x0a7e89ffa57127a2e75931be926a11094b6ee2955632a5dce0228f3d8e98eb02\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ca02052cca6c00d760253f74519e6d7460dfaaf4efb3c004bf9c811ad7791d40\",\"dweb:/ipfs/QmSfzCXbsALfzo6Joqte5oyJxi7h27VqhDmcMJhmNGX2GJ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x9cac1f97ecc92043dd19235d6677e40cf6bac382886a94f7a80a957846b24229\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a1e0c924e0edfdfd4abceeb552d99f1cd95c0d387b38ccb1f67c583607e3d155\",\"dweb:/ipfs/QmZAi6qKa66zuS3jyEhsQR9bBNnZe1wSognYqw9nvseyUz\"]},\"lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06bd04b0d6af06424c58c24ad861ac4fbe68ae729c199127f4b64361a0629510\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8a9228dd927facb9a400333848e8cf616c7a7f30693563d98a963266dc8ae28a\",\"dweb:/ipfs/Qmehe5JAWCK7g8A9VkS9LpfiNkYzXkrxnXfpvtuqbrA9BA\"]},\"lib/openzeppelin-contracts/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol\":{\"keccak256\":\"0x25052a8e6c783ab01f98a9ac7f521649be60b9963f352e2453997ba8fbc2d285\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://94ba3d98053a310582febe79742e566a36073f1f2645ddc772c638c84ae93b88\",\"dweb:/ipfs/QmTHUMHniPNJ9H2Ui2zgk35CZDSThg2nQ8j5sNXaNarL9D\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xee2337af2dc162a973b4be6d3f7c16f06298259e0af48c5470d2839bfa8a22f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30c476b4b2f405c1bb3f0bae15b006d129c80f1bfd9d0f2038160a3bb9745009\",\"dweb:/ipfs/Qmb3VcuDufv6xbHeVgksC4tHpc5gKYVqBEwjEXW72XzSvN\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x88f7b6f070ad1de2bf899da6978ed74b5038eac78c01b7359b92b60c3d965c28\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c436edb6733a036607c6f17cc590e8ee351363a8cb4c564a98d9a66392c89323\",\"dweb:/ipfs/QmcJvJR2K3EtYcKEXVpQ1WqT6TvAbVem5HR1FirAsqEXFR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x4e7a30dafa83254008b02982696931abb1bcd762e201bba1d8ae77cb7654b62d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dc64b74b4ef44f669a75edf93cadaf24ae390846751f60c3b38bf9ceba115c7\",\"dweb:/ipfs/QmZA2GuNXgf8832j532kctoFgrK679yHUr6ZJngUQySF6d\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xe0e3a2099f2e2ce3579dd35548f613928739642058dfec95b1745f93364ce3de\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36a3930518e5c4a3c83839aaa136b863af513e6eeee6a3654e8f910f8007f827\",\"dweb:/ipfs/QmcU1b6SYYUMiXJ6jd5HY6sgYjJLdBu4smak1X1FDgkoaA\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xcac5b2622b9876529ca71f56b08a2786e960f0a738a9fcc456b2b8740170f89b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36ec9bacdaa2003a4b68d078f55887e7ec763e83d2027aaa1478578ae71c9b66\",\"dweb:/ipfs/QmbXfAcgockJRxMxKe5mt1pQyeafwCJuUpxce6a2ehB8bt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02\",\"dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol\":{\"keccak256\":\"0xc16b69d1bc7365dc56a239b446d9773b3972ef48399156c00bb27a4e958e990c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://328e833bf49432109091e495c79681796c7ee9dce848a2a05c4daf4f6bd17fa5\",\"dweb:/ipfs/QmX1xbdfnGenQeZmxu3d6rM98E8YHEdHkgKkDvMHPvVAy5\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0x80b4189de089dc632b752b365a16c5063b58cc24da0dd38b82f2c25f56d25c84\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://81e2717e78844156a86733f1cada84dba906ffe03e4957de12ca219c65e9191b\",\"dweb:/ipfs/QmW8vg3AafPJRo7EC75RQJTtjiaYmfPa4U4sqmEuBXXzaP\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Errors.sol\":{\"keccak256\":\"0x1b0625096e82d06abdcf1844172ef78ef54a5e878761f4d905fda07eaf098424\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5cd99f1a4836c07461cb3ea023ae2f6d1d01e80694b764a87623aa7252754756\",\"dweb:/ipfs/QmNPNDuiNU6TJatZcdBcrwixBoo5MSXNDq4kaXhpJLWGpB\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0x29074fe5a74bb024c57b3570abf6c74d8bceed3438694d470fd0166a3ecd196a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f4f8435ccbc56e384f4cc9ac9ff491cf30a82f2beac00e33ccc2cf8af3f77cc3\",\"dweb:/ipfs/QmUKJXxTe6nn1qfgnX8xbnboNNAPUuEmJyGqMZCKNiFBgn\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x70d9a9cf8d5cc830d7396505ef8eb9686bd0c60a29c6644bd6cc278f9bab8ebe\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://719abb402c11be12355088da587ffd971fee1b035b5aa6b1ba3b1a9493d3c1d7\",\"dweb:/ipfs/QmanHMFVDqVtZAFFaH1CeGQWoHWsFnWHH75fCrguwi77Hq\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xa548dd62e9e17616ae80a1e7ac7b1447ae377efc27fb9f7b4f4fbf5c0b0a1dfb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d27e9ae3e67eb229444cd43d49db5be57c586155fd1d363b3b1f9bb1b7bb0087\",\"dweb:/ipfs/QmT2GFnpXsTWBs8bkeVJtQ4VNX7f3igxwB77JBCr4mDXb3\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0x3583c2609d961607b0938ba8b19d8c348eea2bdfe79605d54b1a54b03564730d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://667624dfb350b124c1d2e77268e1e5bb97b1259a2e27c39f1a08530cd95cbc20\",\"dweb:/ipfs/QmNMLeuwnaX9cbty9zEHj5vKsJP5VFmBKibPKDqMJzkZsx\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x6fac27fb1885a1d9fd2ce3f8fac4e44a6596ca4d44207c9ef2541ba8c941291e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2079378abdb36baec15c23bc2353b73a3d28d1d0610b436b0c1c4e6fa61d65c9\",\"dweb:/ipfs/QmVZkRFMzKW7sLaugKSTbMNnUBKWF3QDsoMi5uoQFyVMjf\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xc859863e3bda7ec3cddf6dafe2ffe91bcbe648d1395b856b839c32ee9617c44c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a9d5417888b873cf2225ed5d50b2a67be97c1504134a2a580512168d587ad82e\",\"dweb:/ipfs/QmNr5fTb2heFW658NZn7dDnofZgFvQTnNxKRJ3wdnR1skX\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x6fe40ce2addf1fe91a86c334b51ef5abe9c3b831d5d4d74ecae1d9c7d06cdccb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5027588e408027935ac78e32d9e813fda6bf33349b8a5be5c6c936273743369f\",\"dweb:/ipfs/QmZwSzs94V9u7VSdhw2bhbrogWZ37wvrQFBz6QNJTmKokE\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x8cd59334ed58b8884cd1f775afc9400db702e674e5d6a7a438c655b9de788d7e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://99e62c7de7318f413b6352e3f2704ca23e7725ff144e43c8bd574d12dbf29047\",\"dweb:/ipfs/QmSEXG2rBx1VxU2uFTWdiChjDvA4osEY2mesjmoVeVhHko\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x519e2c9d9c4dfd63311fb98663e55ba465772897cd4a98e3a5406a1f5959811f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c4718d121f448f8fce3b28a276fd194014597319a4133696793893ae13c6e512\",\"dweb:/ipfs/QmaQyHiKokgyWq9nREub6xGUAEYiGTiv4caigjGCiWZTjZ\"]},\"src/BadgeCollection.sol\":{\"keccak256\":\"0xd2095c383c67261c3138a604177b006f1923439b8dd7c15951c04f1b7587773d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://78d6659bede2eb9bb785b8569780769026a13f120e534160a400bbe97e271212\",\"dweb:/ipfs/QmaBuGXfVXZkTvTck1GvYEnnGwVZ98epgRnaLDh7mnz9Xx\"]},\"src/BambaStars.sol\":{\"keccak256\":\"0xea5b0fa0c9052ace6415949b778aba59dd2e3fa574ad0985b1752ff50f9211b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://377d1d72dd852d802c1d979d9c15fcb2eda2e1c8f2054779504de3f735595061\",\"dweb:/ipfs/QmRD24GeWQe7TUqbQosF9DEBQkJRkBsBwiCJYgFbJ5Bcxt\"]},\"src/StarAccount.sol\":{\"keccak256\":\"0xbcbbd1fb72c92a8b1273ca58667bfd5066c527a697160240e83ed27573078d47\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1bc8d1abaf2351a0483c64c231c09a6578879895ca39eebe4e13e6f233ba91f8\",\"dweb:/ipfs/QmPDetbNw5Zz7cB8VxkncDY5m5Mex7bD2oa1CCLjogACLR\"]},\"src/interfaces/IERC6551Account.sol\":{\"keccak256\":\"0x17094454fd93bf100f335d11f20f452948927b2b42115dbfc2c0f80aebbd4e78\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2d47f0000326a60c902afb4d02ad0747aefb49933a5a6f02677528dde73bd55f\",\"dweb:/ipfs/QmRjGCTZ1iARxxnsjfBLLvH6Chkag97jhxUDYtQBE7rKrC\"]},\"src/interfaces/IERC6551Registry.sol\":{\"keccak256\":\"0x3f9743c931db0bf287bd3ba762f1b2371af614e7eb3c2ce3318a49ed1a15411a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30fb28b4c7f4290600bec069c8b7cf3d3e41c0cc02f0c8c7bb4b37a3489a6d39\",\"dweb:/ipfs/QmPVpGADyuytD9TgN5THddUXjigz34YQALAsBNk8z6SNxG\"]}},\"version\":1}",
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
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidInitialization"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "NotInitializing"
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
                            "internalType": "uint64",
                            "name": "version",
                            "type": "uint64",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Initialized",
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "MILESTONE1_PERCENTAGE",
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
                    "name": "MILESTONE2_PERCENTAGE",
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
                    "name": "MILESTONE3_PERCENTAGE",
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "badgeCollection",
                    "outputs": [
                        {
                            "internalType": "contract BadgeCollection",
                            "name": "",
                            "type": "address"
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
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "_to",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "buyTokens"
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
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes",
                            "name": "data",
                            "type": "bytes"
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "executeCall",
                    "outputs": [
                        {
                            "internalType": "bytes",
                            "name": "",
                            "type": "bytes"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "executeWithdrawMilestone1"
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "executeWithdrawMilestone2"
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "executeWithdrawMilestone3"
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "initialize"
                },
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "hash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes",
                            "name": "signature",
                            "type": "bytes"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isValidSignature",
                    "outputs": [
                        {
                            "internalType": "bytes4",
                            "name": "magicValue",
                            "type": "bytes4"
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
                    "name": "nonce",
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
                    "name": "pricePerToken",
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
                            "name": "_badgeCollection",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setBadgeCollection"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_milestone2Timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_milestone3Timestamp",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setMilestones"
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
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setName"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_paymentToken",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setPaymentToken"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_pricePerToken",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setPricePerToken"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_targetTotalSupply",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setTargetTotalSupply"
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "targetTotalSupply",
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
                    "name": "token",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
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
                },
                {
                    "inputs": [],
                    "stateMutability": "payable",
                    "type": "receive"
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
                    "executeCall(address,uint256,bytes)": {
                        "details": "Executes `call` on address `to`, with value `value` and calldata `data`. MUST revert and bubble up errors if call fails. By default, token bound accounts MUST allow the owner of the ERC-721 token which owns the account to execute arbitrary calls using `executeCall`. Token bound accounts MAY implement additional authorization mechanisms which limit the ability of the ERC-721 token holder to execute calls. Token bound accounts MAY implement additional execution functions which grant execution permissions to other non-owner accounts.",
                        "returns": {
                            "_0": "The result of the call"
                        }
                    },
                    "isValidSignature(bytes32,bytes)": {
                        "details": "Should return whether the signature provided is valid for the provided data",
                        "params": {
                            "hash": "Hash of the data to be signed",
                            "signature": "Signature byte array associated with _data"
                        }
                    },
                    "name()": {
                        "details": "Returns the name of the token."
                    },
                    "nonce()": {
                        "details": "Returns a nonce value that is updated on every successful transaction",
                        "returns": {
                            "_0": "The current account nonce"
                        }
                    },
                    "owner()": {
                        "details": "Returns the owner of the ERC-721 token which controls the account if the token exists. This is value is obtained by calling `ownerOf` on the ERC-721 contract.",
                        "returns": {
                            "_0": "Address of the owner of the ERC-721 token which owns the account"
                        }
                    },
                    "supportsInterface(bytes4)": {
                        "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
                    },
                    "symbol()": {
                        "details": "Returns the symbol of the token, usually a shorter version of the name."
                    },
                    "token()": {
                        "details": "Returns identifier of the ERC-721 token which owns the account The return value of this function MUST be constant - it MUST NOT change over time.",
                        "returns": {
                            "_0": "The EIP-155 ID of the chain the ERC-721 token exists on",
                            "_1": "The contract address of the ERC-721 token",
                            "_2": "The ID of the ERC-721 token"
                        }
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
                "src/StarAccount.sol": "StarAccount"
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
    "id": 66
}


export const StarAccountAbi = StarAccountByteCode["abi"];