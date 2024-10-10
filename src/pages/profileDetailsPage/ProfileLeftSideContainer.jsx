import { Link } from "react-router-dom";
import img from '../../assets/mobilemockup.jpg';
import { Github, Youtube, Twitter   } from 'lucide-react';


const ProfileLeftSideContainer = ({ state, getFileIcon, handleDelete }) => {
    console.log('see from profile', state);
    return (
        <div className="flex flex-col items-center">
        <div className="mb-4 relative">
           <img
             src={img} 
             alt="Profile"
             className="h-[670px] w-[500px] mt-5"
           />
           <div className='absolute -mt-[480px] ml-44'>
               {state.map((item) => (
               <div key={item.id} className="space-y-2 text-center mt-5 space-x-5">
                   
                   <div
                   className={`flex justify-between items-center py-3 px-5 rounded-lg text-white border p-2 w-full max-w-md mx-auto ${
                       item.platform === 'github'
                       ? 'bg-black'
                       : item.platform === 'youtube'
                       ? 'bg-red-500'
                       : item.platform === 'twitter'
                       ? 'bg-blue-400'
                       : 'bg-gray-300'
                   }`}
                   >
               {/* icon----- */}
               <span className="text-lg font-semibold capitalize flex items-center justify-center gap-2">
                    {item.platform ? (
                        <>
                            {item.platform === 'github' && <Github />}
                            {item.platform === 'youtube' && <Youtube />}
                            {item.platform === 'twitter' && <Twitter />}
                            {item.platform.charAt(0).toUpperCase() + item.platform.slice(1)}
                        </>
                    ) : (
                        <span>Unknown Platform</span> 
                    )}
                </span>

                   {/* Link ----*/}
                   <Link to={item.link} className="text-lg font-bold">
                       →
                   </Link>
                   </div>
               </div>
               ))}
           </div>
         </div>
   
        
        


       </div>
    );
};

export default ProfileLeftSideContainer;