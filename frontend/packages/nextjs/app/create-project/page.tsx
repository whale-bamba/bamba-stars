"use client";

import React, { useState } from 'react';
import Forms1 from '~~/components/Forms1';
import Forms2 from '~~/components/Forms2';


interface Modules {
    id: number;
    quantityToFund: string;
    link: string;
    details: string;
}


const CreateProject = () => {
    const [step, setStep] = React.useState(1);

    const [creatorName, setcreatorName] = React.useState('');
    const [projectName, setprojectName] = React.useState('');
    const [projectDescription, setprojectDescription] = React.useState('');
    const [motivation, setmotivation] = React.useState('');
    const [quantityToFund, setQuantityToFund] = React.useState('');
    const [currency, setCurrency] = React.useState('');
    const [imageNFT, setImageNFT] = React.useState('');
    const [projectImages, setProjectImages] = React.useState([] as string[]);
    const [projectLinks, setProjectLinks] = React.useState([] as string[]);

    // const [modules, setModules] = React.useState<Modules[]>([]);
    // const [inputTitle, setInputTitle] = React.useState('');
    // const [inputLink, setInputLink] = React.useState('');
    // const [inputDetails, setInputDetails] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const [formData, setFormData] = useState({
        creatorName: '',
        projectName: '',
        projectDescription: '',
        motivation: '',
        quantityToFund: '',
        currency: '',
        imageNFT: '',
        projectImages: [] as string[],
        projectLinks: [] as string[],
    });

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

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    // const handleChange = (e: any) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    function handleSubmit() {

        const body = {
            "creatorName": creatorName,
            "projectName": projectName,
            "projectDescription": projectDescription,
            "motivation": motivation,
            "quantityToFund": quantityToFund,
            "currency": currency,
            "imageNFT": imageNFT,
            "projectImages": projectImages,
            "projectLinks": projectLinks,
        }

        console.log(body);

        // const url = '';
        // axios.post(url, body)
        // .then(async (response: any) => {

        //     console.log(response);})
        // .catch((data: any) => {
        //     window.alert("Error")
        //     console.log(data);
        // });
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-md w-full lg:max-w-xl">
                <h2 className="text-lg font-medium mb-4">Step {step} of 2</h2>
                <div className="flex mb-4">
                    <div
                        className={`w-1/2 border-r border-gray-400 ${step === 1 ? "bg-yellow-500 text-white" : "bg-gray-200"
                            } p-2 text-center cursor-pointer`}
                        onClick={() => setStep(1)}
                    >
                        Part 1
                    </div>
                    <div
                        className={`w-1/2 ${step === 2 ? "bg-yellow-500 text-white" : "bg-gray-200"
                            } p-2 text-center cursor-pointer`}
                        onClick={() => setStep(2)}
                    >
                        Part 2
                    </div>
                </div>
                {step === 1 ?
                    <Forms1
                        creatorName={creatorName}
                        setcreatorName={setcreatorName}
                        projectName={projectName}
                        setprojectName={setprojectName}
                        projectDescription={projectDescription}
                        setprojectDescription={setprojectDescription}
                        motivation={motivation}
                        setmotivation={setmotivation}
                    /> :
                    <Forms2
                        quantityToFund={quantityToFund}
                        setQuantityToFund={setQuantityToFund}
                        currency={currency}
                        setCurrency={setCurrency}
                        imageNFT={imageNFT}
                        setImageNFT={setImageNFT}
                        projectImages={projectImages}
                        setProjectImages={setProjectImages}
                        projectLinks={projectLinks}
                        setProjectLinks={setProjectLinks}
                        // modules={modules}
                        // setModules={setModules}
                        // inputLink={inputLink}
                        // setInputLink={setInputLink}
                        // inputDetails={inputDetails}
                        // setInputDetails={setInputDetails}
                        // handleAddModule={handleAddModule}
                        // handleDeleteModule={handleDeleteModule}
                    />
                }
                <div className="flex justify-between mt-6">
                    {step > 1 && (
                        <>
                            <button
                                className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
                                onClick={handleBack}
                            >
                                Back
                            </button>
                            <button
                                className="bg-yellow-500 px-6 py-1.5 rounded-lg text-white hover:bg-secondary-color"
                                onClick={handleSubmit}
                            >
                                Submit

                            </button>
                        </>
                    )}
                    {step < 2 && (
                        <button
                            className="bg-yellow-500 px-6 py-1.5 rounded-lg text-white hover:bg-secondary-color"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateProject;
