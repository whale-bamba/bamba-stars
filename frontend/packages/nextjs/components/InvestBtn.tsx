import { useState } from "react"
import { parseEther } from "viem";
import { useAccount, useContractWrite } from "wagmi";
import { StarAccountAbi } from "~~/contracts/artifacts/StarAccount";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";


export default function InvestBtn({id} : any) {

    const [investAmount, setInvestAmount] = useState(0);

    const { address: connectedAddress } = useAccount();

    const {data: depositAccount} = useScaffoldContractRead({
        contractName: "BambaStars",
        functionName: "starsAccounts",
        args: [id],
    } as never);

    const {data, isLoading, isSuccess, write} = useContractWrite({
        address: depositAccount,
        abi: StarAccountAbi,
        functionName: "buyTokens",
        args: [parseEther(String(investAmount)), connectedAddress],
    });
    

    return (

        <div className="flex items-center mx-2">
            <input
                type="text"
                placeholder="amount"
                className="border w-28 h-full bg-opacity-15 bg-white border-yellow-300 px-3 py-1 rounded-l-md focus:outline-none focus:border-yellow-400"
                onChange={(e) => setInvestAmount(parseInt(e.target.value))}
            />
            <button
                className="px-2 h-full bg-yellow-600 hover:bg-yellow-700 rounded-r-md py-1"
                onClick={() => write()}
            >
                Invest
            </button>
        </div>


    )
}