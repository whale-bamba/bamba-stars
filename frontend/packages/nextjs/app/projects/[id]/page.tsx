"use client";

import { PhotoSection } from "~~/components/PhotoSection"
import { creatorFundingData } from "~~/utils/mock"
import { MdShare, MdFavorite, MdStar, MdCurrencyBitcoin, MdArrowRight } from "react-icons/md"
import { useEffect, useState } from "react"
import { CreatorFundingType } from "~~/utils/type"
import FansList from "~~/components/FansList";
import ProgressBar from "~~/components/ProgressBar";
import Link from "next/link";
import WithdrawBtn from "~~/components/WithdrawBtn";
import AproveBtn from "~~/components/AproveBtn";
import InvestBtn from "~~/components/InvestBtn";

import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import externalContracts from "~~/contracts/externalContracts";
import { StarAccountAbi } from "~~/contracts/artifacts/StarAccount";
import { BadgeCollectionAbi } from "~~/contracts/artifacts/BadgeCollection";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useContractRead } from 'wagmi';


export default function ProjectDetails({ params }: any) {

    const id = params.id
    const [project, setProject] = useState<CreatorFundingType | null>(null)
    const [loading, setLoading] = useState<boolean>(true);

    //const [depositAccount, setDepositAccount] = useState<string>('');
    //const [badgesCollection, setBadgesCollection] = useState<string>('');
    //const [projectName, setProjectName] = useState<string>('');
    //const [pricePerToken, setPricePerToken] = useState<number>(0);

    const {address: connectedAddress} = useAccount();

    const {data: creatorAddress} = useScaffoldContractRead({
        contractName: "BambaStars",
        functionName: "ownerOf",
        args: [id],
    } as never);

        const {data: depositAccount} = useScaffoldContractRead({
            contractName: "BambaStars",
            functionName: "starsAccounts",
            args: [id],
        } as never);

        const {data: badgesCollection} = useScaffoldContractRead({
            contractName: "BambaStars",
            functionName: "badgesCollections",
            args: [id],
        } as never);


        const {data: projectName} = useContractRead({
            address: depositAccount,
            abi: StarAccountAbi,
            functionName: "name",
        });

        const {data: pricePerToken} = useContractRead({
            address: depositAccount,
            abi: StarAccountAbi,
            functionName: "pricePerToken"
        });

        const {data:totalSupply} = useContractRead({
            address: depositAccount,
            abi: StarAccountAbi,
            functionName: "totalSupply"
        })

        const {data: targetSupply} = useContractRead({
            address: depositAccount,
            abi: StarAccountAbi,
            functionName: "targetTotalSupply"
        });

        const {data: imageNFT} = useScaffoldContractRead({
            contractName: "BambaStars",
            functionName: "images",
            args: [id],
        } as never);

        console.log("totalSupply", totalSupply);



    async function fetchFundingData() {
        try {
            const project = creatorFundingData.find((project) => project.id === parseInt(id))
            setProject(project || null)


        } catch (error) {
            console.error("There was an error fetching the data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFundingData();
    }, [id]);

    return (
        <div className='h-auto'>
            {(project && !loading) ?
                <div className="p-6 w-full md:p-12 md:px-30 lg:py-12 lg:px-48 text-primary-text">

                    <Link href="/projects">
                        &#8592; Back to Projects
                    </Link>

                    {/* Title Section, where is the title and the buttons to share and save */}

                    <div className="flex flex-row pb-6 space-x-4 mt-2">
                        <div className="flex-1 flex flex-row items-center">
                            <h1 className="text-2xl font-semibold">{String(projectName)}</h1>
                            <div className="mx-6 text-sm text-primary-600 border-[1px] border-primary-600 py-1 px-3 rounded-full">Creator: <Address address={creatorAddress} /></div>
                        </div>
                        {/* make as component */}
                        <button
                            className="inline-flex items-center text-sm h-8 py-2 px-4 bg-transparent text-primary-text rounded-lg shadow focus:outline-none hover:bg-gray-100"
                        >
                            <MdShare />
                            <p>Share</p>
                        </button>
                        <button
                            className="inline-flex items-center text-sm h-8 py-2 px-4 bg-transparent text-primary-text rounded-lg shadow focus:outline-none hover:bg-gray-100"
                        >
                            <MdFavorite />
                            <p>Save</p>
                        </button>
                    </div>

                    {/* Photo Section, where are the pictures of the project */}

                    {/* <PhotoSection pictures={project.projectImages} loading={loading} /> */}
                    <img className="w-full" src={project.projectImages[0]} alt={String(projectName)} />

                    {/* Region with Description and Reserve Section */}

                    <div className="flex flex-col justify-between pt-6 md:flex-row md:space-x-6">
                        <div className="w-[80%]">
                            {/* <FundraiserSection id={propertyId} price={project.price} raised={project.raised} totalTokens={project.totalTokens} status={project.status} holders={project.holders} loading={loading} /> */}
                            <div className="w-full flex flex-row items-end justify-between">
                                <div className="flex flex-row items-end">
                                    <p className="text-5xl font-semibold">${Number(totalSupply)}</p>
                                    {/* <p className="text-xl ml-4">{numHolders} Holder{numHolders !== 1 ? 's' : ''}</p> */}
                                </div>
                                <p className="text-2xl font-semibold">{(Number(totalSupply) / (Number(targetSupply) + 0.00001) * 100).toFixed(2)}% of ${Number(targetSupply)} goal</p>
                            </div>
                            <div className="w-full mb-4">
                                <ProgressBar quantityToFund={Number(targetSupply)} quantityRaised={Number(totalSupply)} />
                            </div>

                            <div className="">
                                <h2 className="text-xl font-semibold">Description</h2>
                                <p className="mt-4">Deposit Account <Address address={depositAccount}/></p>
                                <p className="mt-4">Badge Collection <Address address={badgesCollection}/></p>
                                <p className="mt-4">{project.projectDescription}</p>
                            </div>

                            <div className="">
                                <h2 className="text-xl font-semibold">Motivation</h2>
                                <p className="mt-4">{project.motivation}</p>
                            </div>
                            <div className="">
                                <h2 className="text-xl font-semibold">Project Links</h2>
                                <div className="mt-4 flex flex-col">
                                    {project.projectLinks.map((link, index) => (
                                        <a key={index} href={link} className="text-primary-600 mb-2 hover:underline">{link}</a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-center flex-col py-4 my-2">
                                <h2 className="font-semibold text-3xl py-2">Withdraw Milestones</h2>
                                <div className="flex items-center justify-center">
                                    <WithdrawBtn milestoneNum={1} />
                                    <MdArrowRight className="mx-1" />
                                    <WithdrawBtn milestoneNum={2} />
                                    <MdArrowRight className="mx-1" />
                                    <WithdrawBtn milestoneNum={3} />
                                </div>
                            </div>

                            <div className="flex items-center justify-center flex-col py-4 my-2">
                                {/* <h2 className="font-semibold text-3xl py-2">Withdraw Milestones</h2> */}
                                <div className="flex items-center justify-center">
                                    <AproveBtn 
                                    id={id}/>
                                    {/* <MdArrowRight className="mx-1" /> */}
                                    <InvestBtn id={id}/>
                                </div>
                            </div>

                        </div>
                        {/* separation bar */}
                        <div className="hidden md:block w-[1px] bg-gray-300 h-[80%]"></div>
                        <div className="w-[20%]">
                            <div className="mt-4">
                                <p className="text-xl font-semibold flex items-center">
                                    <MdCurrencyBitcoin />Currency List:
                                </p>
                                <ul className="list-disc pl-6">
                                    {project.currency.map((currency, index) => (
                                        <li key={index} className="mt-1">{currency}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6">
                                <p className="text-xl font-semibold flex items-center">
                                    <MdStar className="mr-2" />Star Fans:
                                </p>
                                <FansList fans={project.pplFunding as any} />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <>
                    <h1>LOADING...</h1>
                </>
            }
        </div>
    )
}