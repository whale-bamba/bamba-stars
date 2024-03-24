

function handleClick(){
    console.log('MyNearWallet')
}

export default function NearBtn() {
    return (
        <div className="flex items-center mx-2">
            <button
                className="btn btn-secondary btn-sm px-2 rounded-full"
                onClick={() => handleClick()}
            >
                MyNearWallet
            </button>
        </div>
    )
}