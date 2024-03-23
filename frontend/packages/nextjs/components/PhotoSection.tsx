// import { useNavigate } from 'react-router-dom';
import { FaRedo } from 'react-icons/fa';
import { RxViewGrid } from "react-icons/rx";

export function PhotoSection({pictures, loading} : 
    {pictures: string[], loading: boolean}) {

    // const navigator = useNavigate();

    return (
        <div className=" bg-transparent rounded-xl overflow-hidden cursor-pointer">
            {loading ? 
            // Refazer o loading depois com algo um pouco melhor
            <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:grid-flow-col lg:grid-cols-4 lg:grid-flow-col">
                {/* <FaRedo size={20} color='white' className="animate-spin"/> */}
            </div>
            :
            <div className="relative grid grid-cols-1 gap-2 md:grid-cols-4 md:grid-flow-col lg:grid-cols-4 lg:grid-flow-col">
                {pictures.slice(0, 5).map((picture, index) => (
                    <img
                        className={`object-cover aspect-[3/2] hover:brightness-90 ${index === 0 ? 'col-span-2 row-span-2 h-full' : 'col-span-1 row-span-1'}`}
                        key={index}
                        src={picture}
                        alt={`Property image ${index + 1}`}
                    />
                ))}
                <div className='absolute bottom-4 right-4'>
                    <button 
                        className="inline-flex items-center text-sm h-8 py-2 px-4 bg-white text-primary-text rounded-lg shadow focus:outline-none hover:bg-gray-100"
                    >
                        <RxViewGrid className="mr-2"/>
                        <p>Show all photos</p>
                    </button>
                </div>
            </div>
            }
        </div>
    );
};