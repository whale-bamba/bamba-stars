"use client";

import { PhotoSection } from "~~/components/PhotoSection"
import { creatorFundingData } from "~~/utils/mock"
import { MdShare, MdFavorite, MdStar } from "react-icons/md"
import { useEffect, useState } from "react"
import { CreatorFundingType } from "~~/utils/type"
import FansList from "~~/components/FansList";

export default function ProjectDetails({ params }: any) {

    const id = params.id
    const [project, setProject] = useState<CreatorFundingType | null>(null)
    const [loading, setLoading] = useState<boolean>(true);

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
        <div className='w-[100vw] h-[100vh]'>
            {(project && !loading) ?
                <div className="p-6 w-full md:p-12 md:px-30 lg:py-12 lg:px-48 text-primary-text">

                    {/* Title Section, where is the title and the buttons to share and save */}

                    <div className="flex flex-row pb-6 space-x-4">
                        <div className="flex-1 flex flex-row items-center">
                            <h1 className="text-2xl font-semibold">{project.projectName}</h1>
                            <div className="mx-6 text-sm text-primary-600 border-[1px] border-primary-600 py-1 px-3 rounded-full">Project</div>
                        </div>
                        {/* make as component */}
                        <button
                            className="inline-flex items-center text-sm h-8 py-2 px-4 bg-transparent text-primary-text rounded-lg shadow focus:outline-none hover:bg-gray-100"
                        >
                            <MdShare/>
                            <p>Share</p>
                        </button>
                        <button
                            className="inline-flex items-center text-sm h-8 py-2 px-4 bg-transparent text-primary-text rounded-lg shadow focus:outline-none hover:bg-gray-100"
                        >
                            <MdFavorite/>
                            <p>Save</p>
                        </button>
                    </div>

                    {/* Photo Section, where are the pictures of the project */}

                    <PhotoSection pictures={project.projectImages} loading={loading} />

                    {/* Region with Description and Reserve Section */}

                    <div className="flex flex-col justify-between pt-6 md:flex-row md:space-x-6">
                        <div className="w-[80%]">
                            {/* <FundraiserSection id={propertyId} price={project.price} raised={project.raised} totalTokens={project.totalTokens} status={project.status} holders={project.holders} loading={loading} /> */}

                            <div className="">
                                <h2 className="text-xl font-semibold">Description</h2>
                                <p className="mt-4">{project.projectDescription}</p>
                            </div>
                        </div>
                        {/* separation bar */}
                        <div className="hidden md:block w-[1px] bg-gray-300 h-[80%]"></div>
                        <div className="w-[20%]">
                            <p className="text-xl font-semibold">Star Fans:<MdStar/></p>
                            <FansList fans={project.pplFunding as any}/>
                        </div>
                    </div>
                </div>
                :
                <></>}
        </div>
    )
}