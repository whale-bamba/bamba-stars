import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";
import { BambaStarsAbi } from "./artifacts/BambaStars";
import { MockERC20Abi } from "./artifacts/MockERC20";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
    534351: {
        BambaStars: {
            address: "0x5F1933923909C6a65a6769fA0d6F157857e33c48",
            abi: BambaStarsAbi
        },
        PaymentToken: {
            address: "0x9d8F28B52504112A8C89df9095ca3BF346286787",
            abi: MockERC20Abi
        }
    }
} as const;

export default externalContracts;
