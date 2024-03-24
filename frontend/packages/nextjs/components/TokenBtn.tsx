import { useState } from "react"

function handleClick() {
    console.log('Mint Token')
}

export default function TokenBtn() {

    const [mintAmount, setMintAmount] = useState(0)

    return (

        <div className="flex items-center mx-2">
            <input
                type="text"
                placeholder="amount"
                className="border w-28 h-full bg-opacity-15 bg-white border-yellow-300 px-3 py-1 rounded-l-md focus:outline-none focus:border-yellow-400"
                onChange={(e) => setMintAmount(parseInt(e.target.value))}
            />
            <button
                className="px-2 h-full bg-yellow-600 hover:bg-yellow-700 rounded-r-md py-1"
                onClick={() => handleClick()}
            >
                Mint Tokens
            </button>
        </div>


    )
}