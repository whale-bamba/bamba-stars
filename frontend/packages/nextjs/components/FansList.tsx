import React from 'react';
import { pplFundingType } from '~~/utils/type';

interface FansListProps {
    fans: pplFundingType[];
}

const FansList: React.FC<FansListProps> = ({ fans }) => {
    return (
        <div className="divide-y divide-gray-200">
            {fans.map((fan, index) => (
                <div key={index} className="py-4 flex items-center justify-between">
                    <div>
                        <p className="text-lg font-semibold">{fan.name}</p>
                        <p className="text-sm text-gray-500">Funded: {fan.quantityInvested}</p>
                    </div>
                    {/* You can add additional elements/icons here if needed */}
                </div>
            ))}
        </div>
    );
};

export default FansList;
