import { Link } from "react-router-dom";
import img from '../../assets/mobilemockup.jpg';
import { Github, Youtube, Twitter } from 'lucide-react';
import { useContext, useEffect } from "react";
import { LinkContext } from "@/context/CreateLinkProvider";

const ProfileLeftSideContainer = () => {
    const { state } = useContext(LinkContext); 

    // console.log('from profile', state);
    useEffect(() => {
        console.log("State data: ", state);
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
    
    return (
        <div className="flex flex-col items-center">
           
            
            <div className="mb-4 relative">
                <img
                    src={img} 
                    alt="Profile"
                    className="h-[670px] w-[500px] mt-5"
                />
                 <div className="absolute -mt-[440px] ml-[170px]">
                    {state.length > 0 && state.map((item, index) => (
                        item.firstName && item.lastName && item.email ? (
                            <div key={index} className="text-lg font-semibold text-black mt-5 space-y-1">
                               <p className="text-sm font-semibold text-center"> {item.firstName} {item.lastName}</p>
                               <p className="text-gray-500 text-xs"> {item.email}</p>
                            </div>
                        ) : null
                    ))}
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
