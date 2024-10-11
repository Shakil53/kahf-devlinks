/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import img from '../../assets/mobilemockup.jpg';
import { Github, Youtube, Twitter } from 'lucide-react';
import { useContext, useEffect } from "react";
import { LinkContext } from "@/context/CreateLinkProvider";

const ProfileLeftSideContainer = ({getFileIcon, handleDelete, files}) => {
    const { state, dispatch } = useContext(LinkContext); 

    // console.log('from profile', state);
    useEffect(() => {
        // console.log("State data: ", state);
        if (state && state.length > 0) {
            state.forEach((item) => {
                ({
                    email: item.email,
                    firstName: item.firstName,
                    id: item.id,
                    lastName: item.lastName,
                });
            });
        }
    }, [state]);

    // file dispatch
    dispatch(files)
    
    return (
        <div className="flex flex-col items-center">
           
            
            <div className="mb-4 relative">
                <img
                    src={img} 
                    alt="Profile"
                    className="h-[670px] w-[500px] mt-5 rounded"
                />
                 <div className="absolute -mt-[440px] mx-auto ml-40">
                    {state.length > 0 && state.map((item, index) => (
                        item.firstName && item.lastName && item.email ? (
                            <div key={index} className="text-lg font-semibold text-black mt-5 space-y-1">
                               <p className="text-sm font-semibold text-center"> {item.firstName} {item.lastName}</p>
                               <p className="text-gray-500 text-xs"> {item.email}</p>
                            </div>
                        ) : null
                    ))}
                </div>
                {/* Display Uploaded Files */}
                <div  className="absolute -mt-[520px] ml-[200px] rounded-full" >
                            {files.length > 0 ? (
                                files.map((file, index) => (
                                <div key={index} className="relative rounded-full p-2 ">
                                    {file.type.startsWith("image/") ? (
                                    <img src={URL.createObjectURL(file)} alt="Selected" className="w-20 h-20 object-cover rounded-full" />
                                    ) : (
                                    <img src={getFileIcon(file.name)} alt="File Icon" className="w-10 h-10" />
                                    )}
                                    <button
                                    onClick={() => handleDelete(index)}
                                    className="absolute top-0 right-0 text-red-500 ml-3 hover:text-red-700"
                                    >
                                   
                                    </button>
                                </div>
                                        ))
                                    ) : ''}
                    </div>
                <div className='absolute -mt-[380px] ml-36'>
                    {state.map((item) => (
                        <div key={item.id} className="space-y-2 text-center mt-5 space-x-5">
                           
                           <div className="text-lg font-semibold text-black">
                           
                            </div>
                            {/* Platform and link section */}
                            {item.platform === 'github' || item.platform === 'youtube' || item.platform === 'twitter' ? (
                                <div
                                    className={`flex justify-between items-center py-3 px-5 rounded-lg text-white border w-full max-w-md mx-auto ${
                                        {
                                            github: 'bg-black',
                                            youtube: 'bg-red-500',
                                            twitter: 'bg-blue-400',
                                        }[item.platform]
                                    }`}
                                    >
                                <span className="text-lg font-semibold capitalize flex items-center justify-center gap-2">
                                    {item.platform && (
                                        <>
                                            {item.platform === 'github' && <Github />}
                                            {item.platform === 'youtube' && <Youtube />}
                                            {item.platform === 'twitter' && <Twitter />}
                                            {item.platform.charAt(0).toUpperCase() + item.platform.slice(1)}
                                        </>
                                    )}
                                </span>

                                <Link to={item.link} className="text-lg font-bold">
                                    →
                                </Link>
                                </div>
                            ) : null}
                        </div>
                     ))}
                </div>
            </div>
            </div>
    );
};

export default ProfileLeftSideContainer;