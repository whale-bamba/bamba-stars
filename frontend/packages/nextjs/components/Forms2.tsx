import React from 'react';

export default function Forms2(props: any) {


    return (
        <div>
            <div className='max-h-[50vh] overflow-y-scroll pr-2'>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="totalSupply">
                        Total Supply of Tokens
                    </label>
                    <input
                        type="text"
                        id="totalSupply"
                        name="totalSupply"
                        placeholder='1000'
                        value={props.totalSupply}
                        onChange={(e) => props.setTotalSupply(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="pricePerToken">
                        Price per Token (in USDC)
                    </label>
                    <input
                        type="text"
                        id="pricePerToken"
                        name="pricePerToken"
                        placeholder='1000'
                        value={props.pricePerToken}
                        onChange={(e) => props.setPricePerToken(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="imageNFT">
                        Badge NFT Image
                    </label>
                    <input
                        type="text"
                        id="imageNFT"
                        name="imageNFT"
                        placeholder="insert link here..."
                        value={props.imageNFT}
                        onChange={(e) => props.setImageNFT(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2"
                    />
                </div>
    
            </div>
        </div>
    );
}