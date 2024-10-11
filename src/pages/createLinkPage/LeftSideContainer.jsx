/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import img from '../../assets/mobilemockup.jpg';
import { Github, Youtube, Twitter   } from 'lucide-react';

const LeftSideContainer = ({ state }) => {
    // console.log(state);
    return (
            <div className="flex flex-col items-center">
             <div className="mb-4 relative">
                <img
                  src={img} 
                  alt="Profile"
                  className="h-[670px] w-[500px] mt-5"
                />
                <div className='absolute -mt-[430px] ml-36'>
                {state.map((item) => (
            item.platform === 'github' || item.platform === 'youtube' || item.platform === 'twitter' ? (
            <div key={item.id} className="space-y-2 text-center mt-5 space-x-5">
                <div className="text-lg font-semibold text-black">
                   
                </div>
                {/* Platform and link section */}
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
            </div>
            ) : null 
                ))}
                </div>
              </div>
        
             
             


            </div>
    );
};

export default LeftSideContainer;