const BadgeCollectionBytecode = {
    "abi": [
        {
            "type": "constructor",
            "inputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "DOMAIN_SEPARATOR",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "stateMutability": "view"
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
            "name": "bambaAccount",
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
            "name": "collectionImage",
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
            "name": "counter",
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
            "name": "initialize",
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
                    "name": "_bambaAccount",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_collectionImage",
                    "type": "string",
                    "internalType": "string"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
        "object": "0x608060405234801561001057600080fd5b5061001961001e565b6100d0565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161561006e5760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100cd5780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b611e16806100df6000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806361bc221a116100cd578063a22cb46511610081578063c87b56dd11610066578063c87b56dd146102b4578063e6a07063146102c7578063e985e9c5146102da57600080fd5b8063a22cb4651461028e578063b88d4fde146102a157600080fd5b80636a627842116100b25780636a6278421461026057806370a082311461027357806395d89b411461028657600080fd5b806361bc221a146102445780636352211e1461024d57600080fd5b8063095ea7b3116101245780633644e515116101095780633644e5151461021357806342842e0e14610229578063555306141461023c57600080fd5b8063095ea7b3146101eb57806323b872dd1461020057600080fd5b806301ffc9a71461015657806303edb4d01461017e57806306fdde03146101c3578063081812fc146101d8575b600080fd5b61016961016436600461175e565b610342565b60405190151581526020015b60405180910390f35b60045461019e9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610175565b6101cb610427565b60405161017591906117df565b61019e6101e63660046117f2565b6104dd565b6101fe6101f9366004611834565b610532565b005b6101fe61020e36600461185e565b610541565b61021b610637565b604051908152602001610175565b6101fe61023736600461185e565b610656565b6101cb610676565b61021b60005481565b61019e61025b3660046117f2565b610704565b6101fe61026e36600461189a565b61070f565b61021b61028136600461189a565b6107ef565b6101cb610890565b6101fe61029c3660046118b5565b6108e1565b6101fe6102af3660046119b4565b6108ec565b6101cb6102c23660046117f2565b610904565b6101fe6102d5366004611a79565b610921565b6101696102e8366004611b33565b73ffffffffffffffffffffffffffffffffffffffff91821660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793056020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806103d557507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061042157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079300805460609190819061045990611b66565b80601f016020809104026020016040519081016040528092919081815260200182805461048590611b66565b80156104d25780601f106104a7576101008083540402835291602001916104d2565b820191906000526020600020905b8154815290600101906020018083116104b557829003601f168201915b505050505091505090565b60006104e882610b6c565b5060008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079304602052604090205473ffffffffffffffffffffffffffffffffffffffff16610421565b61053d828233610bea565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610596576040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b60006105a3838333610bf7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610631576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8086166004830152602482018490528216604482015260640161058d565b50505050565b6000600154461461064f5761064a610dbc565b905090565b5060025490565b610671838383604051806020016040528060008152506108ec565b505050565b6003805461068390611b66565b80601f01602080910402602001604051908101604052809291908181526020018280546106af90611b66565b80156106fc5780601f106106d1576101008083540402835291602001916106fc565b820191906000526020600020905b8154815290600101906020018083116106df57829003601f168201915b505050505081565b600061042182610b6c565b60045473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4261646765733a2063616c6c6572206973206e6f7420746865206d616e61676560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161058d565b6107d881600054610e51565b6000805490806107e783611bb9565b919050555050565b60007f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930073ffffffffffffffffffffffffffffffffffffffff8316610862576040517f89c62b640000000000000000000000000000000000000000000000000000000081526000600482015260240161058d565b73ffffffffffffffffffffffffffffffffffffffff9092166000908152600390920160205250604090205490565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930180546060917f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793009161045990611b66565b61053d338383610f02565b6108f7848484610541565b6106313385858585611023565b606061090f82610b6c565b50600061091a61121c565b9392505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff1660008115801561096c5750825b905060008267ffffffffffffffff1660011480156109895750303b155b905081158015610997575080155b156109ce576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610a2f5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b610aa28b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8f018190048102820181019092528d815292508d91508c90819084018382808284376000920191909152506112ae92505050565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff89161790556003610aee8782611c60565b5046600155610afb610dbc565b6002558315610b5f5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050505050505050565b60008181527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079302602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610421576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810184905260240161058d565b61067183838360016112c0565b60008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930260205260408120547f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793009073ffffffffffffffffffffffffffffffffffffffff90811690841615610c7257610c728185876114cc565b73ffffffffffffffffffffffffffffffffffffffff811615610cea57610c9c6000866000806112c0565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600383016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff861615610d355773ffffffffffffffffffffffffffffffffffffffff861660009081526003830160205260409020805460010190555b600085815260028301602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8a811691821790925591518893918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a495945050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610de7610427565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b73ffffffffffffffffffffffffffffffffffffffff8216610ea1576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240161058d565b6000610eaf83836000610bf7565b905073ffffffffffffffffffffffffffffffffffffffff811615610671576040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526000600482015260240161058d565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930073ffffffffffffffffffffffffffffffffffffffff8316610f88576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240161058d565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260058401602090815260408083209488168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001687151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff83163b15611215576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a0290611098908890889087908790600401611d7a565b6020604051808303816000875af19250505080156110f1575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526110ee91810190611dc3565b60015b611180573d80801561111f576040519150601f19603f3d011682016040523d82523d6000602084013e611124565b606091505b508051600003611178576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161058d565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a020000000000000000000000000000000000000000000000000000000014611213576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161058d565b505b5050505050565b60606003805461122b90611b66565b80601f016020809104026020016040519081016040528092919081815260200182805461125790611b66565b80156112a45780601f10611279576101008083540402835291602001916112a4565b820191906000526020600020905b81548152906001019060200180831161128757829003601f168201915b5050505050905090565b6112b661157c565b61053d82826115e5565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793008180611302575073ffffffffffffffffffffffffffffffffffffffff831615155b1561147657600061131285610b6c565b905073ffffffffffffffffffffffffffffffffffffffff84161580159061136557508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156113c3575073ffffffffffffffffffffffffffffffffffffffff80821660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079305602090815260408083209388168352929052205460ff16155b15611412576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161058d565b821561147457848673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b600093845260040160205250506040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6114d7838383611628565b6106715773ffffffffffffffffffffffffffffffffffffffff831661152b576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810182905260240161058d565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024810182905260440161058d565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff166115e3576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6115ed61157c565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079300806116198482611c60565b50600181016106318382611c60565b600073ffffffffffffffffffffffffffffffffffffffff83161580159061172557508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806116d5575073ffffffffffffffffffffffffffffffffffffffff80851660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079305602090815260408083209387168352929052205460ff165b80611725575060008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079304602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461175b57600080fd5b50565b60006020828403121561177057600080fd5b813561091a8161172d565b6000815180845260005b818110156117a157602081850181015186830182015201611785565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152600061091a602083018461177b565b60006020828403121561180457600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461182f57600080fd5b919050565b6000806040838503121561184757600080fd5b6118508361180b565b946020939093013593505050565b60008060006060848603121561187357600080fd5b61187c8461180b565b925061188a6020850161180b565b9150604084013590509250925092565b6000602082840312156118ac57600080fd5b61091a8261180b565b600080604083850312156118c857600080fd5b6118d18361180b565b9150602083013580151581146118e657600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff8084111561193b5761193b6118f1565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611981576119816118f1565b8160405280935085815286868601111561199a57600080fd5b858560208301376000602087830101525050509392505050565b600080600080608085870312156119ca57600080fd5b6119d38561180b565b93506119e16020860161180b565b925060408501359150606085013567ffffffffffffffff811115611a0457600080fd5b8501601f81018713611a1557600080fd5b611a2487823560208401611920565b91505092959194509250565b60008083601f840112611a4257600080fd5b50813567ffffffffffffffff811115611a5a57600080fd5b602083019150836020828501011115611a7257600080fd5b9250929050565b60008060008060008060808789031215611a9257600080fd5b863567ffffffffffffffff80821115611aaa57600080fd5b611ab68a838b01611a30565b90985096506020890135915080821115611acf57600080fd5b611adb8a838b01611a30565b9096509450849150611aef60408a0161180b565b93506060890135915080821115611b0557600080fd5b508701601f81018913611b1757600080fd5b611b2689823560208401611920565b9150509295509295509295565b60008060408385031215611b4657600080fd5b611b4f8361180b565b9150611b5d6020840161180b565b90509250929050565b600181811c90821680611b7a57607f821691505b602082108103611bb3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611c11577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b601f821115610671576000816000526020600020601f850160051c81016020861015611c415750805b601f850160051c820191505b8181101561121357828155600101611c4d565b815167ffffffffffffffff811115611c7a57611c7a6118f1565b611c8e81611c888454611b66565b84611c18565b602080601f831160018114611ce15760008415611cab5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555611213565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015611d2e57888601518255948401946001909101908401611d0f565b5085821015611d6a57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152611db9608083018461177b565b9695505050505050565b600060208284031215611dd557600080fd5b815161091a8161172d56fea2646970667358221220c32850908b8c996d99f98230a36dcf5676d89348550082603a0ec417772d6ff064736f6c63430008180033",
        "sourceMap": "394:1914:61:-:0;;;788:52;;;;;;;;;-1:-1:-1;811:22:61;:20;:22::i;:::-;394:1914;;7711:422:25;8870:21;7900:15;;;;;;;7896:76;;;7938:23;;-1:-1:-1;;;7938:23:25;;;;;;;;;;;7896:76;7985:14;;-1:-1:-1;;;;;7985:14:25;;;:34;7981:146;;8035:33;;-1:-1:-1;;;;;;8035:33:25;-1:-1:-1;;;;;8035:33:25;;;;;8087:29;;158:50:70;;;8087:29:25;;146:2:70;131:18;8087:29:25;;;;;;;7981:146;7760:373;7711:422::o;14:200:70:-;394:1914:61;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106101515760003560e01c806361bc221a116100cd578063a22cb46511610081578063c87b56dd11610066578063c87b56dd146102b4578063e6a07063146102c7578063e985e9c5146102da57600080fd5b8063a22cb4651461028e578063b88d4fde146102a157600080fd5b80636a627842116100b25780636a6278421461026057806370a082311461027357806395d89b411461028657600080fd5b806361bc221a146102445780636352211e1461024d57600080fd5b8063095ea7b3116101245780633644e515116101095780633644e5151461021357806342842e0e14610229578063555306141461023c57600080fd5b8063095ea7b3146101eb57806323b872dd1461020057600080fd5b806301ffc9a71461015657806303edb4d01461017e57806306fdde03146101c3578063081812fc146101d8575b600080fd5b61016961016436600461175e565b610342565b60405190151581526020015b60405180910390f35b60045461019e9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610175565b6101cb610427565b60405161017591906117df565b61019e6101e63660046117f2565b6104dd565b6101fe6101f9366004611834565b610532565b005b6101fe61020e36600461185e565b610541565b61021b610637565b604051908152602001610175565b6101fe61023736600461185e565b610656565b6101cb610676565b61021b60005481565b61019e61025b3660046117f2565b610704565b6101fe61026e36600461189a565b61070f565b61021b61028136600461189a565b6107ef565b6101cb610890565b6101fe61029c3660046118b5565b6108e1565b6101fe6102af3660046119b4565b6108ec565b6101cb6102c23660046117f2565b610904565b6101fe6102d5366004611a79565b610921565b6101696102e8366004611b33565b73ffffffffffffffffffffffffffffffffffffffff91821660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793056020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806103d557507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061042157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079300805460609190819061045990611b66565b80601f016020809104026020016040519081016040528092919081815260200182805461048590611b66565b80156104d25780601f106104a7576101008083540402835291602001916104d2565b820191906000526020600020905b8154815290600101906020018083116104b557829003601f168201915b505050505091505090565b60006104e882610b6c565b5060008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079304602052604090205473ffffffffffffffffffffffffffffffffffffffff16610421565b61053d828233610bea565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610596576040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b60006105a3838333610bf7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610631576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8086166004830152602482018490528216604482015260640161058d565b50505050565b6000600154461461064f5761064a610dbc565b905090565b5060025490565b610671838383604051806020016040528060008152506108ec565b505050565b6003805461068390611b66565b80601f01602080910402602001604051908101604052809291908181526020018280546106af90611b66565b80156106fc5780601f106106d1576101008083540402835291602001916106fc565b820191906000526020600020905b8154815290600101906020018083116106df57829003601f168201915b505050505081565b600061042182610b6c565b60045473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4261646765733a2063616c6c6572206973206e6f7420746865206d616e61676560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161058d565b6107d881600054610e51565b6000805490806107e783611bb9565b919050555050565b60007f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930073ffffffffffffffffffffffffffffffffffffffff8316610862576040517f89c62b640000000000000000000000000000000000000000000000000000000081526000600482015260240161058d565b73ffffffffffffffffffffffffffffffffffffffff9092166000908152600390920160205250604090205490565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930180546060917f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793009161045990611b66565b61053d338383610f02565b6108f7848484610541565b6106313385858585611023565b606061090f82610b6c565b50600061091a61121c565b9392505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff1660008115801561096c5750825b905060008267ffffffffffffffff1660011480156109895750303b155b905081158015610997575080155b156109ce576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610a2f5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b610aa28b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8f018190048102820181019092528d815292508d91508c90819084018382808284376000920191909152506112ae92505050565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff89161790556003610aee8782611c60565b5046600155610afb610dbc565b6002558315610b5f5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050505050505050565b60008181527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079302602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610421576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810184905260240161058d565b61067183838360016112c0565b60008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930260205260408120547f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793009073ffffffffffffffffffffffffffffffffffffffff90811690841615610c7257610c728185876114cc565b73ffffffffffffffffffffffffffffffffffffffff811615610cea57610c9c6000866000806112c0565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600383016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff861615610d355773ffffffffffffffffffffffffffffffffffffffff861660009081526003830160205260409020805460010190555b600085815260028301602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8a811691821790925591518893918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a495945050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f610de7610427565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b73ffffffffffffffffffffffffffffffffffffffff8216610ea1576040517f64a0ae920000000000000000000000000000000000000000000000000000000081526000600482015260240161058d565b6000610eaf83836000610bf7565b905073ffffffffffffffffffffffffffffffffffffffff811615610671576040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526000600482015260240161058d565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930073ffffffffffffffffffffffffffffffffffffffff8316610f88576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240161058d565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260058401602090815260408083209488168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001687151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff83163b15611215576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063150b7a0290611098908890889087908790600401611d7a565b6020604051808303816000875af19250505080156110f1575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526110ee91810190611dc3565b60015b611180573d80801561111f576040519150601f19603f3d011682016040523d82523d6000602084013e611124565b606091505b508051600003611178576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161058d565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a020000000000000000000000000000000000000000000000000000000014611213576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161058d565b505b5050505050565b60606003805461122b90611b66565b80601f016020809104026020016040519081016040528092919081815260200182805461125790611b66565b80156112a45780601f10611279576101008083540402835291602001916112a4565b820191906000526020600020905b81548152906001019060200180831161128757829003601f168201915b5050505050905090565b6112b661157c565b61053d82826115e5565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793008180611302575073ffffffffffffffffffffffffffffffffffffffff831615155b1561147657600061131285610b6c565b905073ffffffffffffffffffffffffffffffffffffffff84161580159061136557508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156113c3575073ffffffffffffffffffffffffffffffffffffffff80821660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079305602090815260408083209388168352929052205460ff16155b15611412576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161058d565b821561147457848673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b600093845260040160205250506040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6114d7838383611628565b6106715773ffffffffffffffffffffffffffffffffffffffff831661152b576040517f7e2732890000000000000000000000000000000000000000000000000000000081526004810182905260240161058d565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024810182905260440161058d565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff166115e3576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6115ed61157c565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079300806116198482611c60565b50600181016106318382611c60565b600073ffffffffffffffffffffffffffffffffffffffff83161580159061172557508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806116d5575073ffffffffffffffffffffffffffffffffffffffff80851660009081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079305602090815260408083209387168352929052205460ff165b80611725575060008281527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079304602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461175b57600080fd5b50565b60006020828403121561177057600080fd5b813561091a8161172d565b6000815180845260005b818110156117a157602081850181015186830182015201611785565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152600061091a602083018461177b565b60006020828403121561180457600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461182f57600080fd5b919050565b6000806040838503121561184757600080fd5b6118508361180b565b946020939093013593505050565b60008060006060848603121561187357600080fd5b61187c8461180b565b925061188a6020850161180b565b9150604084013590509250925092565b6000602082840312156118ac57600080fd5b61091a8261180b565b600080604083850312156118c857600080fd5b6118d18361180b565b9150602083013580151581146118e657600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff8084111561193b5761193b6118f1565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611981576119816118f1565b8160405280935085815286868601111561199a57600080fd5b858560208301376000602087830101525050509392505050565b600080600080608085870312156119ca57600080fd5b6119d38561180b565b93506119e16020860161180b565b925060408501359150606085013567ffffffffffffffff811115611a0457600080fd5b8501601f81018713611a1557600080fd5b611a2487823560208401611920565b91505092959194509250565b60008083601f840112611a4257600080fd5b50813567ffffffffffffffff811115611a5a57600080fd5b602083019150836020828501011115611a7257600080fd5b9250929050565b60008060008060008060808789031215611a9257600080fd5b863567ffffffffffffffff80821115611aaa57600080fd5b611ab68a838b01611a30565b90985096506020890135915080821115611acf57600080fd5b611adb8a838b01611a30565b9096509450849150611aef60408a0161180b565b93506060890135915080821115611b0557600080fd5b508701601f81018913611b1757600080fd5b611b2689823560208401611920565b9150509295509295509295565b60008060408385031215611b4657600080fd5b611b4f8361180b565b9150611b5d6020840161180b565b90509250929050565b600181811c90821680611b7a57607f821691505b602082108103611bb3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611c11577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b601f821115610671576000816000526020600020601f850160051c81016020861015611c415750805b601f850160051c820191505b8181101561121357828155600101611c4d565b815167ffffffffffffffff811115611c7a57611c7a6118f1565b611c8e81611c888454611b66565b84611c18565b602080601f831160018114611ce15760008415611cab5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555611213565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015611d2e57888601518255948401946001909101908401611d0f565b5085821015611d6a57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152611db9608083018461177b565b9695505050505050565b600060208284031215611dd557600080fd5b815161091a8161172d56fea2646970667358221220c32850908b8c996d99f98230a36dcf5676d89348550082603a0ec417772d6ff064736f6c63430008180033",
        "sourceMap": "394:1914:61:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2673:311:27;;;;;;:::i;:::-;;:::i;:::-;;;611:14:70;;604:22;586:41;;574:2;559:18;2673:311:27;;;;;;;;598:27:61;;;;;;;;;;;;814:42:70;802:55;;;784:74;;772:2;757:18;598:27:61;638:226:70;3545:146:27;;;:::i;:::-;;;;;;;:::i;4791:154::-;;;;;;:::i;:::-;;:::i;4617:113::-;;;;;;:::i;:::-;;:::i;:::-;;5494:578;;;;;;:::i;:::-;;:::i;1675:177:61:-;;;:::i;:::-;;;2705:25:70;;;2693:2;2678:18;1675:177:61;2559::70;6138:132:27;;;;;;:::i;:::-;;:::i;562:29:61:-;;;:::i;447:22::-;;;;;;3365:118:27;;;;;;:::i;:::-;;:::i;1355:101:61:-;;;;;;:::i;:::-;;:::i;3043:265:27:-;;;;;;:::i;:::-;;:::i;3755:150::-;;;:::i;5012:144::-;;;;;;:::i;:::-;;:::i;6336:233::-;;;;;;:::i;:::-;;:::i;1462:187:61:-;;;;;;:::i;:::-;;:::i;846:391::-;;;;;;:::i;:::-;;:::i;5222:210:27:-;;;;;;:::i;:::-;5388:27;;;;5310:4;5388:27;;;:20;:27;;;;;;;;:37;;;;;;;;;;;;;;;5222:210;2673:311;2786:4;2821:40;;;2836:25;2821:40;;:104;;-1:-1:-1;2877:48:27;;;2892:33;2877:48;2821:104;:156;;;-1:-1:-1;1149:25:29;1134:40;;;;2941:36:27;2802:175;2673:311;-1:-1:-1;;2673:311:27:o;3545:146::-;2076:21;3670:14;;3590:13;;2076:21;;;3670:14;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3545:146;:::o;4791:154::-;4858:7;4877:22;4891:7;4877:13;:22::i;:::-;-1:-1:-1;7442:7:27;7523:26;;;:17;:26;;;;;;;;4917:21;7372:184;4617:113;4688:35;4697:2;4701:7;966:10:28;4688:8:27;:35::i;:::-;4617:113;;:::o;5494:578::-;5588:16;;;5584:87;;5627:33;;;;;5657:1;5627:33;;;784:74:70;757:18;;5627:33:27;;;;;;;;5584:87;5889:21;5913:34;5921:2;5925:7;966:10:28;5913:7:27;:34::i;:::-;5889:58;;5978:4;5961:21;;:13;:21;;;5957:109;;6005:50;;;;;7422:42:70;7491:15;;;6005:50:27;;;7473:34:70;7523:18;;;7516:34;;;7586:15;;7566:18;;;7559:43;7385:18;;6005:50:27;7210:398:70;5957:109:27;5574:498;5494:578;;;:::o;1675:177:61:-;1732:7;1775:16;;1758:13;:33;:87;;1821:24;:22;:24::i;:::-;1751:94;;1675:177;:::o;1758:87::-;-1:-1:-1;1794:24:61;;;1675:177::o;6138:132:27:-;6224:39;6241:4;6247:2;6251:7;6224:39;;;;;;;;;;;;:16;:39::i;:::-;6138:132;;;:::o;562:29:61:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3365:118:27:-;3428:7;3454:22;3468:7;3454:13;:22::i;1355:101:61:-;713:12;;;;966:10:28;689:37:61;;;681:83;;;;;;;7815:2:70;681:83:61;;;7797:21:70;7854:2;7834:18;;;7827:30;7893:34;7873:18;;;7866:62;7964:3;7944:18;;;7937:31;7985:19;;681:83:61;7613:397:70;681:83:61;1411:19:::1;1417:3;1422:7;;1411:5;:19::i;:::-;1440:7;:9:::0;;;:7;:9:::1;::::0;::::1;:::i;:::-;;;;;;1355:101:::0;:::o;3043:265:27:-;3106:7;2076:21;3184:19;;;3180:87;;3226:30;;;;;3253:1;3226:30;;;784:74:70;757:18;;3226:30:27;638:226:70;3180:87:27;3283:18;;;;;;;;:11;;;;:18;;-1:-1:-1;3283:18:27;;;;;3043:265::o;3755:150::-;3889:9;3882:16;;3802:13;;2076:21;;3882:16;;;:::i;5012:144::-;5097:52;966:10:28;5130:8:27;5140;5097:18;:52::i;6336:233::-;6449:31;6462:4;6468:2;6472:7;6449:12;:31::i;:::-;6490:72;966:10:28;6538:4:27;6544:2;6548:7;6557:4;6490:33;:72::i;1462:187:61:-;1527:13;1552:22;1566:7;1552:13;:22::i;:::-;;1584:21;1608:10;:8;:10::i;:::-;1584:34;1462:187;-1:-1:-1;;;1462:187:61:o;846:391::-;8870:21:25;4302:15;;;;;;;4301:16;;4348:14;;4158:30;4726:16;;:34;;;;;4746:14;4726:34;4706:54;;4770:17;4790:11;:16;;4805:1;4790:16;:50;;;;-1:-1:-1;4818:4:25;4810:25;:30;4790:50;4770:70;;4856:12;4855:13;:30;;;;;4873:12;4872:13;4855:30;4851:91;;;4908:23;;;;;;;;;;;;;;4851:91;4951:18;;;;4968:1;4951:18;;;4979:67;;;;5013:22;;;;;;;;4979:67;1007:28:61::1;1021:5;;1007:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;::::0;;;;-1:-1:-1;;1007:28:61::1;::::0;;::::1;;::::0;::::1;::::0;;::::1;::::0;::::1;::::0;;;;;;;;;;;-1:-1:-1;1027:7:61;;-1:-1:-1;1027:7:61;;;;1007:28;::::1;1027:7:::0;;;;1007:28;::::1;;::::0;::::1;::::0;;;;-1:-1:-1;1007:13:61::1;::::0;-1:-1:-1;;;1007:28:61:i:1;:::-;1045:12;:28:::0;;;::::1;;::::0;::::1;;::::0;;1084:15:::1;:34;1102:16:::0;1084:15;:34:::1;:::i;:::-;-1:-1:-1::0;1156:13:61::1;1137:16;:32:::0;1206:24:::1;:22;:24::i;:::-;1179;:51:::0;5066:101:25;;;;5100:23;;;;;;5142:14;;-1:-1:-1;10896:50:70;;5142:14:25;;10884:2:70;10869:18;5142:14:25;;;;;;;5066:101;4092:1081;;;;;846:391:61;;;;;;:::o;17912:241:27:-;17975:7;7231:18;;;:9;:18;;;;;;;;;18037:88;;18083:31;;;;;;;;2705:25:70;;;2678:18;;18083:31:27;2559:177:70;16078:120:27;16158:33;16167:2;16171:7;16180:4;16186;16158:8;:33::i;10386:856::-;10472:7;7231:18;;;:9;:18;;;;;;2076:21;;7231:18;;;;;10638;;;10634:86;;10672:37;10689:4;10695;10701:7;10672:16;:37::i;:::-;10764:18;;;;10760:258;;10880:48;10897:1;10901:7;10918:1;10922:5;10880:8;:48::i;:::-;10971:17;;;;;;;:11;;;:17;;;;;:22;;;;;;10760:258;11032:16;;;;11028:109;;11092:15;;;;;;;:11;;;:15;;;;;:20;;11111:1;11092:20;;;11028:109;11147:18;;;;:9;;;:18;;;;;;:23;;;;;;;;;;;;;;11186:27;;11147:18;;11186:27;;;;;;;11231:4;10386:856;-1:-1:-1;;;;;10386:856:27:o;1858:448:61:-;1923:7;2020:95;2153:6;:4;:6::i;:::-;2137:24;;;;;;;1988:297;;;;;;11216:25:70;;;;11257:18;;;11250:34;;;;2183:14:61;11300:18:70;;;11293:34;2219:13:61;11343:18:70;;;11336:34;2262:4:61;11386:19:70;;;11379:84;11188:19;;1988:297:61;;;;;;;;;;;;1961:338;;;;;;1942:357;;1858:448;:::o;11564:327:27:-;11631:16;;;11627:87;;11670:33;;;;;11700:1;11670:33;;;784:74:70;757:18;;11670:33:27;638:226:70;11627:87:27;11723:21;11747:32;11755:2;11759:7;11776:1;11747:7;:32::i;:::-;11723:56;-1:-1:-1;11793:27:27;;;;11789:96;;11843:31;;;;;11871:1;11843:31;;;784:74:70;757:18;;11843:31:27;638:226:70;17308:369:27;2076:21;17470:22;;;17466:91;;17515:31;;;;;814:42:70;802:55;;17515:31:27;;;784:74:70;757:18;;17515:31:27;638:226:70;17466:91:27;17566:27;;;;;;;;:20;;;:27;;;;;;;;:37;;;;;;;;;;;;;:48;;;;;;;;;;;;;17629:41;;586::70;;;17629::27;;559:18:70;17629:41:27;;;;;;;17401:276;17308:369;;;:::o;870:963:45:-;1050:14;;;;:18;1046:781;;1088:67;;;;;:36;;;;;;:67;;1125:8;;1135:4;;1141:7;;1150:4;;1088:67;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1088:67:45;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1084:733;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1445:6;:13;1462:1;1445:18;1441:362;;1549:39;;;;;814:42:70;802:55;;1549:39:45;;;784:74:70;757:18;;1549:39:45;638:226:70;1441:362:45;1755:6;1749:13;1740:6;1736:2;1732:15;1725:38;1084:733;1202:51;;;1212:41;1202:51;1198:182;;1322:39;;;;;814:42:70;802:55;;1322:39:45;;;784:74:70;757:18;;1322:39:45;638:226:70;1198:182:45;1156:238;1084:733;870:963;;;;;:::o;1243:106:61:-;1295:13;1327:15;1320:22;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1243:106;:::o;2232:149:27:-;6931:20:25;:18;:20::i;:::-;2335:39:27::1;2359:5;2366:7;2335:23;:39::i;16380:719::-:0;2076:21;16595:9;;:31;;-1:-1:-1;16608:18:27;;;;;16595:31;16591:460;;;16642:13;16658:22;16672:7;16658:13;:22::i;:::-;16642:38;-1:-1:-1;16808:18:27;;;;;;;:35;;;16839:4;16830:13;;:5;:13;;;;16808:35;:69;;;;-1:-1:-1;5388:27:27;;;;5310:4;5388:27;;;:20;:27;;;;;;;;:37;;;;;;;;;;;;16847:30;16808:69;16804:142;;;16904:27;;;;;814:42:70;802:55;;16904:27:27;;;784:74:70;757:18;;16904:27:27;638:226:70;16804:142:27;16964:9;16960:81;;;17018:7;17014:2;16998:28;;17007:5;16998:28;;;;;;;;;;;;16960:81;16628:423;16591:460;17061:26;;;;:17;;:26;;-1:-1:-1;;17061:26:27;;;:31;;;;;;;;;;;;;;;16380:719::o;8573:368::-;8685:38;8699:5;8706:7;8715;8685:13;:38::i;:::-;8680:255;;8743:19;;;8739:186;;8789:31;;;;;;;;2705:25:70;;;2678:18;;8789:31:27;2559:177:70;8739:186:27;8866:44;;;;;12449:42:70;12437:55;;8866:44:27;;;12419:74:70;12509:18;;;12502:34;;;12392:18;;8866:44:27;12245:297:70;7084:141:25;8870:21;8560:40;;;;;;7146:73;;7191:17;;;;;;;;;;;;;;7146:73;7084:141::o;2387:219:27:-;6931:20:25;:18;:20::i;:::-;2076:21:27;;2555:15:::1;2565:5:::0;2076:21;2555:15:::1;:::i;:::-;-1:-1:-1::0;2580:9:27::1;::::0;::::1;:19;2592:7:::0;2580:9;:19:::1;:::i;7867:272::-:0;7970:4;8005:21;;;;;;;:127;;;8052:7;8043:16;;:5;:16;;;:52;;;-1:-1:-1;5388:27:27;;;;5310:4;5388:27;;;:20;:27;;;;;;;;:37;;;;;;;;;;;;8063:32;8043:88;;;-1:-1:-1;7442:7:27;7523:26;;;:17;:26;;;;;;8099:32;;;;7523:26;;8099:32;8043:88;7986:146;7867:272;-1:-1:-1;;;;7867:272:27:o;14:177:70:-;99:66;92:5;88:78;81:5;78:89;68:117;;181:1;178;171:12;68:117;14:177;:::o;196:245::-;254:6;307:2;295:9;286:7;282:23;278:32;275:52;;;323:1;320;313:12;275:52;362:9;349:23;381:30;405:5;381:30;:::i;869:482::-;911:3;949:5;943:12;976:6;971:3;964:19;1001:1;1011:162;1025:6;1022:1;1019:13;1011:162;;;1087:4;1143:13;;;1139:22;;1133:29;1115:11;;;1111:20;;1104:59;1040:12;1011:162;;;1015:3;1218:1;1211:4;1202:6;1197:3;1193:16;1189:27;1182:38;1340:4;1270:66;1265:2;1257:6;1253:15;1249:88;1244:3;1240:98;1236:109;1229:116;;;869:482;;;;:::o;1356:220::-;1505:2;1494:9;1487:21;1468:4;1525:45;1566:2;1555:9;1551:18;1543:6;1525:45;:::i;1581:180::-;1640:6;1693:2;1681:9;1672:7;1668:23;1664:32;1661:52;;;1709:1;1706;1699:12;1661:52;-1:-1:-1;1732:23:70;;1581:180;-1:-1:-1;1581:180:70:o;1766:196::-;1834:20;;1894:42;1883:54;;1873:65;;1863:93;;1952:1;1949;1942:12;1863:93;1766:196;;;:::o;1967:254::-;2035:6;2043;2096:2;2084:9;2075:7;2071:23;2067:32;2064:52;;;2112:1;2109;2102:12;2064:52;2135:29;2154:9;2135:29;:::i;:::-;2125:39;2211:2;2196:18;;;;2183:32;;-1:-1:-1;;;1967:254:70:o;2226:328::-;2303:6;2311;2319;2372:2;2360:9;2351:7;2347:23;2343:32;2340:52;;;2388:1;2385;2378:12;2340:52;2411:29;2430:9;2411:29;:::i;:::-;2401:39;;2459:38;2493:2;2482:9;2478:18;2459:38;:::i;:::-;2449:48;;2544:2;2533:9;2529:18;2516:32;2506:42;;2226:328;;;;;:::o;2923:186::-;2982:6;3035:2;3023:9;3014:7;3010:23;3006:32;3003:52;;;3051:1;3048;3041:12;3003:52;3074:29;3093:9;3074:29;:::i;3114:347::-;3179:6;3187;3240:2;3228:9;3219:7;3215:23;3211:32;3208:52;;;3256:1;3253;3246:12;3208:52;3279:29;3298:9;3279:29;:::i;:::-;3269:39;;3358:2;3347:9;3343:18;3330:32;3405:5;3398:13;3391:21;3384:5;3381:32;3371:60;;3427:1;3424;3417:12;3371:60;3450:5;3440:15;;;3114:347;;;;;:::o;3466:184::-;3518:77;3515:1;3508:88;3615:4;3612:1;3605:15;3639:4;3636:1;3629:15;3655:690;3719:5;3749:18;3790:2;3782:6;3779:14;3776:40;;;3796:18;;:::i;:::-;3930:2;3924:9;3996:2;3984:15;;3835:66;3980:24;;;4006:2;3976:33;3972:42;3960:55;;;4030:18;;;4050:22;;;4027:46;4024:72;;;4076:18;;:::i;:::-;4116:10;4112:2;4105:22;4145:6;4136:15;;4175:6;4167;4160:22;4215:3;4206:6;4201:3;4197:16;4194:25;4191:45;;;4232:1;4229;4222:12;4191:45;4282:6;4277:3;4270:4;4262:6;4258:17;4245:44;4337:1;4330:4;4321:6;4313;4309:19;4305:30;4298:41;;;;3655:690;;;;;:::o;4350:666::-;4445:6;4453;4461;4469;4522:3;4510:9;4501:7;4497:23;4493:33;4490:53;;;4539:1;4536;4529:12;4490:53;4562:29;4581:9;4562:29;:::i;:::-;4552:39;;4610:38;4644:2;4633:9;4629:18;4610:38;:::i;:::-;4600:48;;4695:2;4684:9;4680:18;4667:32;4657:42;;4750:2;4739:9;4735:18;4722:32;4777:18;4769:6;4766:30;4763:50;;;4809:1;4806;4799:12;4763:50;4832:22;;4885:4;4877:13;;4873:27;-1:-1:-1;4863:55:70;;4914:1;4911;4904:12;4863:55;4937:73;5002:7;4997:2;4984:16;4979:2;4975;4971:11;4937:73;:::i;:::-;4927:83;;;4350:666;;;;;;;:::o;5021:348::-;5073:8;5083:6;5137:3;5130:4;5122:6;5118:17;5114:27;5104:55;;5155:1;5152;5145:12;5104:55;-1:-1:-1;5178:20:70;;5221:18;5210:30;;5207:50;;;5253:1;5250;5243:12;5207:50;5290:4;5282:6;5278:17;5266:29;;5342:3;5335:4;5326:6;5318;5314:19;5310:30;5307:39;5304:59;;;5359:1;5356;5349:12;5304:59;5021:348;;;;;:::o;5374:1124::-;5494:6;5502;5510;5518;5526;5534;5587:3;5575:9;5566:7;5562:23;5558:33;5555:53;;;5604:1;5601;5594:12;5555:53;5644:9;5631:23;5673:18;5714:2;5706:6;5703:14;5700:34;;;5730:1;5727;5720:12;5700:34;5769:59;5820:7;5811:6;5800:9;5796:22;5769:59;:::i;:::-;5847:8;;-1:-1:-1;5743:85:70;-1:-1:-1;5935:2:70;5920:18;;5907:32;;-1:-1:-1;5951:16:70;;;5948:36;;;5980:1;5977;5970:12;5948:36;6019:61;6072:7;6061:8;6050:9;6046:24;6019:61;:::i;:::-;6099:8;;-1:-1:-1;5993:87:70;-1:-1:-1;5993:87:70;;-1:-1:-1;6153:38:70;6187:2;6172:18;;6153:38;:::i;:::-;6143:48;;6244:2;6233:9;6229:18;6216:32;6200:48;;6273:2;6263:8;6260:16;6257:36;;;6289:1;6286;6279:12;6257:36;-1:-1:-1;6312:24:70;;6367:4;6359:13;;6355:27;-1:-1:-1;6345:55:70;;6396:1;6393;6386:12;6345:55;6419:73;6484:7;6479:2;6466:16;6461:2;6457;6453:11;6419:73;:::i;:::-;6409:83;;;5374:1124;;;;;;;;:::o;6503:260::-;6571:6;6579;6632:2;6620:9;6611:7;6607:23;6603:32;6600:52;;;6648:1;6645;6638:12;6600:52;6671:29;6690:9;6671:29;:::i;:::-;6661:39;;6719:38;6753:2;6742:9;6738:18;6719:38;:::i;:::-;6709:48;;6503:260;;;;;:::o;6768:437::-;6847:1;6843:12;;;;6890;;;6911:61;;6965:4;6957:6;6953:17;6943:27;;6911:61;7018:2;7010:6;7007:14;6987:18;6984:38;6981:218;;7055:77;7052:1;7045:88;7156:4;7153:1;7146:15;7184:4;7181:1;7174:15;6981:218;;6768:437;;;:::o;8015:349::-;8054:3;8085:66;8078:5;8075:77;8072:257;;8185:77;8182:1;8175:88;8286:4;8283:1;8276:15;8314:4;8311:1;8304:15;8072:257;-1:-1:-1;8356:1:70;8345:13;;8015:349::o;8495:543::-;8597:2;8592:3;8589:11;8586:446;;;8633:1;8657:5;8654:1;8647:16;8701:4;8698:1;8688:18;8771:2;8759:10;8755:19;8752:1;8748:27;8742:4;8738:38;8807:4;8795:10;8792:20;8789:47;;;-1:-1:-1;8830:4:70;8789:47;8885:2;8880:3;8876:12;8873:1;8869:20;8863:4;8859:31;8849:41;;8940:82;8958:2;8951:5;8948:13;8940:82;;;9003:17;;;8984:1;8973:13;8940:82;;9274:1464;9400:3;9394:10;9427:18;9419:6;9416:30;9413:56;;;9449:18;;:::i;:::-;9478:97;9568:6;9528:38;9560:4;9554:11;9528:38;:::i;:::-;9522:4;9478:97;:::i;:::-;9630:4;;9687:2;9676:14;;9704:1;9699:782;;;;10525:1;10542:6;10539:89;;;-1:-1:-1;10594:19:70;;;10588:26;10539:89;9180:66;9171:1;9167:11;;;9163:84;9159:89;9149:100;9255:1;9251:11;;;9146:117;10641:81;;9669:1063;;9699:782;8442:1;8435:14;;;8479:4;8466:18;;9747:66;9735:79;;;9912:236;9926:7;9923:1;9920:14;9912:236;;;10015:19;;;10009:26;9994:42;;10107:27;;;;10075:1;10063:14;;;;9942:19;;9912:236;;;9916:3;10176:6;10167:7;10164:19;10161:261;;;10237:19;;;10231:26;10338:66;10320:1;10316:14;;;10332:3;10312:24;10308:97;10304:102;10289:118;10274:134;;10161:261;-1:-1:-1;;;;;10468:1:70;10452:14;;;10448:22;10435:36;;-1:-1:-1;9274:1464:70:o;11474:512::-;11668:4;11697:42;11778:2;11770:6;11766:15;11755:9;11748:34;11830:2;11822:6;11818:15;11813:2;11802:9;11798:18;11791:43;;11870:6;11865:2;11854:9;11850:18;11843:34;11913:3;11908:2;11897:9;11893:18;11886:31;11934:46;11975:3;11964:9;11960:19;11952:6;11934:46;:::i;:::-;11926:54;11474:512;-1:-1:-1;;;;;;11474:512:70:o;11991:249::-;12060:6;12113:2;12101:9;12092:7;12088:23;12084:32;12081:52;;;12129:1;12126;12119:12;12081:52;12161:9;12155:16;12180:30;12204:5;12180:30;:::i",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "DOMAIN_SEPARATOR()": "3644e515",
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "bambaAccount()": "03edb4d0",
        "collectionImage()": "55530614",
        "counter()": "61bc221a",
        "getApproved(uint256)": "081812fc",
        "initialize(string,string,address,string)": "e6a07063",
        "isApprovedForAll(address,address)": "e985e9c5",
        "mint(address)": "6a627842",
        "name()": "06fdde03",
        "ownerOf(uint256)": "6352211e",
        "safeTransferFrom(address,address,uint256)": "42842e0e",
        "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
        "setApprovalForAll(address,bool)": "a22cb465",
        "supportsInterface(bytes4)": "01ffc9a7",
        "symbol()": "95d89b41",
        "tokenURI(uint256)": "c87b56dd",
        "transferFrom(address,address,uint256)": "23b872dd"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"bambaAccount\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"collectionImage\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"counter\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"_bambaAccount\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_collectionImage\",\"type\":\"string\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}],\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/BadgeCollection.sol\":\"BadgeCollection\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/forge-std/src/console.sol\":{\"keccak256\":\"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70\",\"dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/access/OwnableUpgradeable.sol\":{\"keccak256\":\"0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6\",\"dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol\":{\"keccak256\":\"0x5a5f22721ffb66d3e1ecc568c0d37c91f91223d8663c8a5e78396e780b849c72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bdd108133c98ea251513424bf17905090c8a7e0755562a6d12a81b8bccbd6152\",\"dweb:/ipfs/QmahpnB63Up9aVx4jDqxEgry5BRN5itHRvy9rwBvMT2yqL\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol\":{\"keccak256\":\"0xb85949d5e4c55ec1e5426390424631ac6d125aefe2ce539a49f1dc897856ce53\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9012d7103fed6a41dd81c0d80d7d239257c2a80fc8af46bbe1101bdf64a86ad5\",\"dweb:/ipfs/QmNgyB7nPaVLwsZcjMBqfw3x1B7yPS4UHPwdrDRz4hXLVk\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"lib/openzeppelin-contracts-upgradeable/contracts/utils/introspection/ERC165Upgradeable.sol\":{\"keccak256\":\"0xddfe0afa85367153020524d383fe0bc9a1545f343019ddf33f98f392887047f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://62f3df350ce83190e81673e424dd47d9ee8ffb121a6f72994c75c8ae3fc9dded\",\"dweb:/ipfs/QmaA2CMuqESmdgVao4XzCL4aRwcZW1xjUXpY7RqHZfQoAV\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x0a7e89ffa57127a2e75931be926a11094b6ee2955632a5dce0228f3d8e98eb02\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ca02052cca6c00d760253f74519e6d7460dfaaf4efb3c004bf9c811ad7791d40\",\"dweb:/ipfs/QmSfzCXbsALfzo6Joqte5oyJxi7h27VqhDmcMJhmNGX2GJ\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x9cac1f97ecc92043dd19235d6677e40cf6bac382886a94f7a80a957846b24229\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a1e0c924e0edfdfd4abceeb552d99f1cd95c0d387b38ccb1f67c583607e3d155\",\"dweb:/ipfs/QmZAi6qKa66zuS3jyEhsQR9bBNnZe1wSognYqw9nvseyUz\"]},\"lib/openzeppelin-contracts/contracts/proxy/ERC1967/ERC1967Utils.sol\":{\"keccak256\":\"0x06bd04b0d6af06424c58c24ad861ac4fbe68ae729c199127f4b64361a0629510\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8a9228dd927facb9a400333848e8cf616c7a7f30693563d98a963266dc8ae28a\",\"dweb:/ipfs/Qmehe5JAWCK7g8A9VkS9LpfiNkYzXkrxnXfpvtuqbrA9BA\"]},\"lib/openzeppelin-contracts/contracts/proxy/Proxy.sol\":{\"keccak256\":\"0xc3f2ec76a3de8ed7a7007c46166f5550c72c7709e3fc7e8bb3111a7191cdedbd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e73efb4c2ca655882dc237c6b4f234a9bd36d97159d8fcaa837eb01171f726ac\",\"dweb:/ipfs/QmTNnnv7Gu5fs5G1ZMh7Fexp8N4XUs3XrNAngjcxgiss3e\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/BeaconProxy.sol\":{\"keccak256\":\"0x25052a8e6c783ab01f98a9ac7f521649be60b9963f352e2453997ba8fbc2d285\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://94ba3d98053a310582febe79742e566a36073f1f2645ddc772c638c84ae93b88\",\"dweb:/ipfs/QmTHUMHniPNJ9H2Ui2zgk35CZDSThg2nQ8j5sNXaNarL9D\"]},\"lib/openzeppelin-contracts/contracts/proxy/beacon/IBeacon.sol\":{\"keccak256\":\"0xc59a78b07b44b2cf2e8ab4175fca91e8eca1eee2df7357b8d2a8833e5ea1f64c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa4f07e65444784c29cd7bfcc2341b34381e4e5b5da9f0c5bd00d7f430e66fa\",\"dweb:/ipfs/QmWRMh4Q9DpaU9GvsiXmDdoNYMyyece9if7hnfLz7uqzWM\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xee2337af2dc162a973b4be6d3f7c16f06298259e0af48c5470d2839bfa8a22f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30c476b4b2f405c1bb3f0bae15b006d129c80f1bfd9d0f2038160a3bb9745009\",\"dweb:/ipfs/Qmb3VcuDufv6xbHeVgksC4tHpc5gKYVqBEwjEXW72XzSvN\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x88f7b6f070ad1de2bf899da6978ed74b5038eac78c01b7359b92b60c3d965c28\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c436edb6733a036607c6f17cc590e8ee351363a8cb4c564a98d9a66392c89323\",\"dweb:/ipfs/QmcJvJR2K3EtYcKEXVpQ1WqT6TvAbVem5HR1FirAsqEXFR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x4e7a30dafa83254008b02982696931abb1bcd762e201bba1d8ae77cb7654b62d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dc64b74b4ef44f669a75edf93cadaf24ae390846751f60c3b38bf9ceba115c7\",\"dweb:/ipfs/QmZA2GuNXgf8832j532kctoFgrK679yHUr6ZJngUQySF6d\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xe0e3a2099f2e2ce3579dd35548f613928739642058dfec95b1745f93364ce3de\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36a3930518e5c4a3c83839aaa136b863af513e6eeee6a3654e8f910f8007f827\",\"dweb:/ipfs/QmcU1b6SYYUMiXJ6jd5HY6sgYjJLdBu4smak1X1FDgkoaA\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xcac5b2622b9876529ca71f56b08a2786e960f0a738a9fcc456b2b8740170f89b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://36ec9bacdaa2003a4b68d078f55887e7ec763e83d2027aaa1478578ae71c9b66\",\"dweb:/ipfs/QmbXfAcgockJRxMxKe5mt1pQyeafwCJuUpxce6a2ehB8bt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02\",\"dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol\":{\"keccak256\":\"0xc16b69d1bc7365dc56a239b446d9773b3972ef48399156c00bb27a4e958e990c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://328e833bf49432109091e495c79681796c7ee9dce848a2a05c4daf4f6bd17fa5\",\"dweb:/ipfs/QmX1xbdfnGenQeZmxu3d6rM98E8YHEdHkgKkDvMHPvVAy5\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0x80b4189de089dc632b752b365a16c5063b58cc24da0dd38b82f2c25f56d25c84\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://81e2717e78844156a86733f1cada84dba906ffe03e4957de12ca219c65e9191b\",\"dweb:/ipfs/QmW8vg3AafPJRo7EC75RQJTtjiaYmfPa4U4sqmEuBXXzaP\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Errors.sol\":{\"keccak256\":\"0x1b0625096e82d06abdcf1844172ef78ef54a5e878761f4d905fda07eaf098424\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5cd99f1a4836c07461cb3ea023ae2f6d1d01e80694b764a87623aa7252754756\",\"dweb:/ipfs/QmNPNDuiNU6TJatZcdBcrwixBoo5MSXNDq4kaXhpJLWGpB\"]},\"lib/openzeppelin-contracts/contracts/utils/Panic.sol\":{\"keccak256\":\"0x29074fe5a74bb024c57b3570abf6c74d8bceed3438694d470fd0166a3ecd196a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f4f8435ccbc56e384f4cc9ac9ff491cf30a82f2beac00e33ccc2cf8af3f77cc3\",\"dweb:/ipfs/QmUKJXxTe6nn1qfgnX8xbnboNNAPUuEmJyGqMZCKNiFBgn\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x70d9a9cf8d5cc830d7396505ef8eb9686bd0c60a29c6644bd6cc278f9bab8ebe\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://719abb402c11be12355088da587ffd971fee1b035b5aa6b1ba3b1a9493d3c1d7\",\"dweb:/ipfs/QmanHMFVDqVtZAFFaH1CeGQWoHWsFnWHH75fCrguwi77Hq\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xa548dd62e9e17616ae80a1e7ac7b1447ae377efc27fb9f7b4f4fbf5c0b0a1dfb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d27e9ae3e67eb229444cd43d49db5be57c586155fd1d363b3b1f9bb1b7bb0087\",\"dweb:/ipfs/QmT2GFnpXsTWBs8bkeVJtQ4VNX7f3igxwB77JBCr4mDXb3\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0x3583c2609d961607b0938ba8b19d8c348eea2bdfe79605d54b1a54b03564730d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://667624dfb350b124c1d2e77268e1e5bb97b1259a2e27c39f1a08530cd95cbc20\",\"dweb:/ipfs/QmNMLeuwnaX9cbty9zEHj5vKsJP5VFmBKibPKDqMJzkZsx\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x6fac27fb1885a1d9fd2ce3f8fac4e44a6596ca4d44207c9ef2541ba8c941291e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2079378abdb36baec15c23bc2353b73a3d28d1d0610b436b0c1c4e6fa61d65c9\",\"dweb:/ipfs/QmVZkRFMzKW7sLaugKSTbMNnUBKWF3QDsoMi5uoQFyVMjf\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xc859863e3bda7ec3cddf6dafe2ffe91bcbe648d1395b856b839c32ee9617c44c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a9d5417888b873cf2225ed5d50b2a67be97c1504134a2a580512168d587ad82e\",\"dweb:/ipfs/QmNr5fTb2heFW658NZn7dDnofZgFvQTnNxKRJ3wdnR1skX\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x6fe40ce2addf1fe91a86c334b51ef5abe9c3b831d5d4d74ecae1d9c7d06cdccb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5027588e408027935ac78e32d9e813fda6bf33349b8a5be5c6c936273743369f\",\"dweb:/ipfs/QmZwSzs94V9u7VSdhw2bhbrogWZ37wvrQFBz6QNJTmKokE\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x8cd59334ed58b8884cd1f775afc9400db702e674e5d6a7a438c655b9de788d7e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://99e62c7de7318f413b6352e3f2704ca23e7725ff144e43c8bd574d12dbf29047\",\"dweb:/ipfs/QmSEXG2rBx1VxU2uFTWdiChjDvA4osEY2mesjmoVeVhHko\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x519e2c9d9c4dfd63311fb98663e55ba465772897cd4a98e3a5406a1f5959811f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c4718d121f448f8fce3b28a276fd194014597319a4133696793893ae13c6e512\",\"dweb:/ipfs/QmaQyHiKokgyWq9nREub6xGUAEYiGTiv4caigjGCiWZTjZ\"]},\"src/BadgeCollection.sol\":{\"keccak256\":\"0xd2095c383c67261c3138a604177b006f1923439b8dd7c15951c04f1b7587773d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://78d6659bede2eb9bb785b8569780769026a13f120e534160a400bbe97e271212\",\"dweb:/ipfs/QmaBuGXfVXZkTvTck1GvYEnnGwVZ98epgRnaLDh7mnz9Xx\"]},\"src/BambaStars.sol\":{\"keccak256\":\"0xea5b0fa0c9052ace6415949b778aba59dd2e3fa574ad0985b1752ff50f9211b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://377d1d72dd852d802c1d979d9c15fcb2eda2e1c8f2054779504de3f735595061\",\"dweb:/ipfs/QmRD24GeWQe7TUqbQosF9DEBQkJRkBsBwiCJYgFbJ5Bcxt\"]},\"src/StarAccount.sol\":{\"keccak256\":\"0xbcbbd1fb72c92a8b1273ca58667bfd5066c527a697160240e83ed27573078d47\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1bc8d1abaf2351a0483c64c231c09a6578879895ca39eebe4e13e6f233ba91f8\",\"dweb:/ipfs/QmPDetbNw5Zz7cB8VxkncDY5m5Mex7bD2oa1CCLjogACLR\"]},\"src/interfaces/IERC6551Account.sol\":{\"keccak256\":\"0x17094454fd93bf100f335d11f20f452948927b2b42115dbfc2c0f80aebbd4e78\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2d47f0000326a60c902afb4d02ad0747aefb49933a5a6f02677528dde73bd55f\",\"dweb:/ipfs/QmRjGCTZ1iARxxnsjfBLLvH6Chkag97jhxUDYtQBE7rKrC\"]},\"src/interfaces/IERC6551Registry.sol\":{\"keccak256\":\"0x3f9743c931db0bf287bd3ba762f1b2371af614e7eb3c2ce3318a49ed1a15411a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://30fb28b4c7f4290600bec069c8b7cf3d3e41c0cc02f0c8c7bb4b37a3489a6d39\",\"dweb:/ipfs/QmPVpGADyuytD9TgN5THddUXjigz34YQALAsBNk8z6SNxG\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.24+commit.e11b9ed9"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
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
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "DOMAIN_SEPARATOR",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
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
                    "name": "bambaAccount",
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
                    "name": "collectionImage",
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
                    "name": "counter",
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
                            "internalType": "address",
                            "name": "_bambaAccount",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "_collectionImage",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "initialize"
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
                            "internalType": "address",
                            "name": "_to",
                            "type": "address"
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
                    "ownerOf(uint256)": {
                        "details": "See {IERC721-ownerOf}."
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
                "src/BadgeCollection.sol": "BadgeCollection"
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
    "id": 61
}

export const BadgeCollectionAbi = BadgeCollectionBytecode["abi"];