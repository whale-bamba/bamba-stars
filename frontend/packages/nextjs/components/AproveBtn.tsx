import { useState } from "react"
// import { parseEther } from "viem";
// import { useAccount } from "wagmi";
// import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export default function AproveBtn() {

    const [aproveAmount, setAproveAmount] = useState(0);
    // const { address: connectedAddress } = useAccount();

    // const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    //     contractName: "PaymentToken",
    //     functionName: "mint",


    //     args: [connectedAddress, parseEther(String(aproveAmount))],
    //     blockConfirmations: 1,
    //     value: 0,
    //     onBlockConfirmation: (txnReceipt: any) => {
    //       console.log("Transaction blockHash", txnReceipt.blockHash);
    //     },
    //   } as never);

    return (

        <div className="flex items-center mx-2">
            <input
                type="text"
                placeholder="amount"
                className="border w-28 h-full bg-opacity-15 bg-white border-yellow-300 px-3 py-1 rounded-l-md focus:outline-none focus:border-yellow-400"
                onChange={(e) => setAproveAmount(parseInt(e.target.value))}
            />
            <button
                className="px-2 h-full bg-yellow-600 hover:bg-yellow-700 rounded-r-md py-1"
                // onClick={() => writeAsync()}
            >
                Approve Invest
            </button>
        </div>


    )
}