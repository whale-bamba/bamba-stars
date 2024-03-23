export type CreatorFundingType = {
    id: number;
    creatorName: string;
    projectName: string;
    projectDescription: string;
    motivation: string;
    quantityToFund: number;
    quantityRaised: number;
    currency: string[];
    imageNFT: string;
    projectImages: string[];
    pplFunding: { name: string; quantityInvested: number }[];
    projectLinks: string[];
};

export type pplFundingType = {
    name: string;
    quantityInvested: number;
};
