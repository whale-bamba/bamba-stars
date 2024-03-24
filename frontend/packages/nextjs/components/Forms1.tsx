import React from 'react';

export default function Forms1(props: any) {
    return (
        <div>
            <div className='max-h-[50vh]'>

                <div className="mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="name">
                        Creator Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='My name is...'
                        value={props.creatorName}
                        onChange={(e) => props.setcreatorName(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="projectName">
                        Project Name
                    </label>
                    <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        placeholder='My dream project...'
                        value={props.projectName}
                        onChange={(e) => props.setprojectName(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2 text-gray-700" htmlFor="projectDescription">
                        Project Description
                    </label>
                    <input
                        type="projectDescription"
                        id="projectDescription"
                        name="projectDescription"
                        placeholder='Embark on a journey through...'
                        value={props.projectDescription}
                        onChange={(e) => props.setprojectDescription(e.target.value)}
                        className="w-full border bg-[white] border-primary-color p-2"
                    />
                </div>
            </div>
        </div>
    );
}