import React from 'react';

// interface Modules {
//     id: number;
//     quantityToFund: string;
//     link: string;
//     details: string;
// }

export default function Forms2(props: any) {

    // const [modules, setModules] = React.useState<Modules[]>([]);
    // const [inputTitle, setInputTitle] = React.useState('');
    // const [inputLink, setInputLink] = React.useState('');
    // const [inputDetails, setInputDetails] = React.useState('');

    // const handleAddModule = () => {
    //     if (inputTitle.trim() !== '' && inputLink.trim() !== '' && inputDetails.trim() !== '') {
    //         const newModule: Modules = {
    //             id: Date.now(),
    //             quantityToFund: inputTitle,
    //             link: inputLink,
    //             details: inputDetails
    //         };

    //         setModules([...modules, newModule]);
    //         setInputTitle('');
    //         setInputLink('');
    //         setInputDetails('');
    //     }
    // };

    // const handleDeleteModule = (id: number) => {
    //     setModules(modules.filter(module => module.id !== id));
    // };

    return (
        <div>
            <div className='max-h-[50vh] overflow-y-scroll pr-2'>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="quantityToFund">
                        Quantity To Fund
                    </label>
                    <input
                        type="text"
                        id="quantityToFund"
                        name="quantityToFund"
                        placeholder='1000'
                        value={props.quantityToFund}
                        onChange={(e) => props.setQuantityToFund(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="currency">
                        Currency
                    </label>
                    <input
                        type="text"
                        id="currency"
                        name="currency"
                        placeholder='USDC, USDT, ETH, MATIC, PINK, etc.'
                        value={props.currency}
                        onChange={(e) => props.setCurrency(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="imageNFT">
                        Image NFT
                    </label>
                    <input
                        type="file"
                        id="imageNFT"
                        name="imageNFT"
                        accept="image/*"
                        onChange={(e) => props.setImageNFT(e.target.files)}
                        className="w-full border bg-[white] border-primary-color p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="projectImages">
                        Project Images
                    </label>
                    <input
                        type="file"
                        id="projectImages"
                        name="projectImages"
                        accept="image/*"
                        // multiple
                        onChange={(e) => props.setProjectImages(e.target.files)}
                        className="w-full border bg-[white] border-primary-color p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="projectLink">
                        Project Link
                    </label>
                    <input
                        type="text"
                        id="projectLink"
                        name="projectLink"
                        placeholder="https://example.com"
                        value={props.projectLink}
                        onChange={(e) => props.setProjectLink(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2"
                    />
                </div>


                {/* 
                <p className="block font-medium mb-2 text-gray-700 border-t-2 pt-2">
                    Modules Section
                </p>

                <div className="flex flex-col p-4 border mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="moduleTitle">
                        Module Quantity To Fund
                    </label>
                    <input
                        type="text"
                        id='moduleTitle'
                        name='moduleTitle'
                        value={props.inputTitle}
                        onChange={(e) => props.setInputTitle(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2 mb-2"
                        placeholder="Add a new module..."
                    />
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="link">
                        Link
                    </label>
                    <input
                        type="text"
                        id='link'
                        name='link'
                        value={props.inputLink}
                        onChange={(e) => props.setInputLink(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2 mb-2"
                        placeholder="add a link..."
                    />
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="Details">
                        Module Details
                    </label>
                    <input
                        type="text"
                        id='Details'
                        name='Details'
                        value={props.inputDetails}
                        onChange={(e) => props.setInputDetails(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2 mb-2"
                        placeholder="Add module detail..."
                    />
                    <button
                        onClick={props.handleAddModule}
                        className="bg-primary-color text-white px-4 hover:bg-secondary-color focus:outline-none"
                    >
                        Add Module
                    </button>
                </div>
                <ul className="space-y-2">
                    {props.modules.map((module:any) => (
                        <li
                            key={module.id}
                            className='flex items-center bg-primary-color p-3 rounded-md text-white '
                        >
                            <span className="flex-grow">{`Quantity To Fund: ${module.quantityToFund}`}</span>
                            <button
                                onClick={() => props.handleDeleteModule(module.id)}
                                className="text-red-500 hover:text-red-600 ml-2 focus:outline-none"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
}