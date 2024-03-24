Verify BambaStars:

forge verify-contract \ 
--constructor-args $(cast abi-encode "constructor(address,address,address,address)" 0x9586FA0a7B039531411ceAD42616c7751Ceec296 0x74Bb711D032B5Df4F63dc04EA4422807D768aC08 0x9d8F28B52504112A8C89df9095ca3BF346286787 0xa14C098C96201B303c6FC4F7aA78F4e422e05D54) \
--verifier-url https://api-sepolia.scrollscan.com/api \
--etherscan-api-key $SCROLL_TESTNET_API_KEY \
0x5F1933923909C6a65a6769fA0d6F157857e33c48 BambaStars

MockERC20:
forge verify-contract \
--constructor-args $(cast abi-encode "constructor(string memory, string memory)" "USD Coin" "USDC") \
--verifier-url https://api-sepolia.scrollscan.com/api \
--etherscan-api-key $SCROLL_TESTNET_API_KEY \
0x9d8F28B52504112A8C89df9095ca3BF346286787 ./src/MockERC20.sol:MockERC20





