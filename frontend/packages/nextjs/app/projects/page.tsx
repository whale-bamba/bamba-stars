"use client";

// import Link from "next/link";
import type { NextPage } from "next";
import Link from "next/link";
// import { Address } from "~~/components/scaffold-eth";

import { useEffect } from "react";
import { creatorFundingData } from "~~/utils/mock";
import { CreatorFundingType } from "~~/utils/type";
import { CardProject } from "~~/components/CardProject";
import { useRouter } from 'next/router';


const Projects: NextPage = () => {
  //   const { address: connectedAddress } = useAccount();

  return (
    <div className='w-[100%] h-[100%]'>
      <div className="p-6 w-full md:p-12 lg:p-12">
        <div className='grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2'>
          {creatorFundingData
            .map((card, index) => (
              <CardProject
                key={index}
                id={card.id}
                creatorName={card.creatorName}
                projectName={card.projectName}
                projectDescription={card.projectDescription}
                motivation={card.motivation}
                quantityToFund={card.quantityToFund}
                quantityRaised={card.quantityRaised}
                pplFunding={card.pplFunding}
                currency={card.currency}
                imageNFT={card.imageNFT}
                projectImages={card.projectImages}
                projectLinks={card.projectLinks}
                loading={false} // Set loading to false or provide loading logic here
              />
            ))}
        </div>
        {/* <div className='h-[500px] w-full'></div> */}
      </div>
    </div>
  );
};

export default Projects;
