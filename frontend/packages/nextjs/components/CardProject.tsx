// import { useRouter } from 'next/router';
import { FaRedo } from 'react-icons/fa';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { CreatorFundingType } from "~~/utils/type";
import ProgressBar from '../components/ProgressBar';

// import { Progress } from "@/components/ui/progress";

export function CardProject({ id, creatorName, projectName, projectDescription, motivation, quantityToFund, quantityRaised, pplFunding, currency, imageNFT, projectImages, projectLinks, loading }:
    { id: number, creatorName: string, projectName: string, projectDescription: string, motivation: string, quantityToFund: number, quantityRaised: number, pplFunding: object, currency: string[], imageNFT: string, projectImages: string[], projectLinks: string[], loading: boolean }) {

    const [isHidden, setIsHidden] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [progress, setProgress] = useState(0);

    // const router = useRouter();

    const goToPrevImage = () => {
        setIsTransitioning(true);
        const newIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
        setCurrentImageIndex(newIndex);
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    const goToNextImage = () => {
        setIsTransitioning(true);
        const newIndex = (currentImageIndex + 1) % projectImages.length;
        setCurrentImageIndex(newIndex);
        setTimeout(() => setIsTransitioning(false), 1000);
    };

    useEffect(() => {
        const timer = setTimeout(() => setProgress((quantityRaised / quantityToFund * 100)), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="aspect-[21/9] flex bg-opacity-5 bg-black rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105">
            {loading ?
                <div className="bg-gray-200 aspect-square rounded-xl object-cover w-full flex flex-col justify-center items-center">
                    {/* <FaRedo size={20} color='white' className="animate-spin" /> */}
                </div>
                :
                <div className='flex items-start'>

                    <div className="aspect-square w-[40%] h-full rounded-xl overflow-hidden">
                        <img src={projectImages[0]} alt="Project Image" className="object-cover w-full h-full" />
                    </div>

                    <div className="w-[60%] px-4 flex items-start">
                        <div className="py-2">
                            <div className='flex justify-between items-center'>
                                <h1 className="font-semibold text-2xl text-primary-text">{projectName}</h1>
                                <p className="text-md font-semibold text-primary-text m-0 p-0">${quantityRaised / 1000}/${quantityToFund / 1000} k</p>
                            </div>
                            <ProgressBar quantityToFund={quantityToFund} quantityRaised={quantityRaised} />
                            <p className="text-sm text-secondary-text">{projectDescription}</p>
                            <h2 className="text-sm text-secondary-text">{creatorName}</h2>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
