
function handleClick({milestoneNum}:any){
    console.log('Withdraw', milestoneNum)
}

export default function WithdrawBtn({milestoneNum}:any) {
    return (
        <div className="flex items-center mx-2 rounded-full">
            <button
                className="btn btn-secondary btn-sm px-2 w-40 rounded-full font-bold"
                onClick={() => handleClick({milestoneNum})}
            >
                {milestoneNum}
            </button>
        </div>
    )
}   