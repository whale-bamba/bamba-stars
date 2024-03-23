"use client";

import { useEffect, useState } from 'react';

const ProgressBar = ({ quantityToFund, quantityRaised }: { quantityToFund: number, quantityRaised: number }) => {
    // Calculate the percentage of progress
    const [progress, setProgress] = useState((quantityRaised / quantityToFund * 100));

    // useEffect(() => {
    //     const timer = setTimeout(() => setProgress((quantityRaised / quantityToFund * 100)), 500)
    //     return () => clearTimeout(timer)
    // }, [])

    return (
        <div className='w-full flex items-center justify-between'>
            <div className="w-[90%] h-4 bg-gray-200 rounded-full overflow-hidden border-blue-500 border-2">
                <div
                    className="h-full bg-blue-500"
                    style={{ width: `${progress}%` }}
                ></div>
                {/* <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                {quantityRaised}/{quantityToFund}
            </div> */}
            </div>
            <p className="text-sm text-primary-600 p-0 m-0">{progress.toFixed(0)}%</p>
        </div>
    );
};

export default ProgressBar;