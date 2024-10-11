import { Button } from "@/components/ui/button";
import { LinkContext } from "@/context/CreateLinkProvider";
import { Github, Twitter, Youtube } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Preview = () => {
    const { state } = useContext(LinkContext);
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        const loadImagePreview = () => {
            // Get the first file (assuming only one profile picture exists)
            const fileItem = state.find(item => item.file && item.file.length > 0);
            
            if (fileItem && fileItem.file && fileItem.file.length > 0) {
                const file = fileItem.file[0];
                if (file instanceof File) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setImagePreview(reader.result); // base64 string
                    };
                    reader.readAsDataURL(file); // Read the file as Data URL
                }
            }
        };

        loadImagePreview();
    }, [state]);

    return (
        <div className="bg-blue-600 h-96 rounded-b-3xl relative">
            <div className="absolute flex justify-between w-full items-center mt-5 bg-white rounded p-2">
                <Button className="bg-white text-black border border-blue-500 ml-5 hover:bg-white">
                    <Link to='/profileDetails'>Back to Editor</Link>
                </Button>
                <Button className="bg-blue-500 text-white border border-blue-500 ml-5 hover:bg-blue-500">
                    Share link
                </Button>
            </div>

            <div className="absolute bg-white w-80 h-96 shadow rounded-3xl mt-64" style={{ marginLeft: "550px" }}>
                {/* Image Preview */}
                {imagePreview ? (
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className="size-24 object-cover rounded-full items-center flex mx-auto mt-1"
                    />
                ) : ''}

                {/* User Data */}
                {state.length > 0 ? (
                    state.map(item => (
                        <div key={item.id}>
                            {item.firstName && (
                                <p className="text-lg font-semibold text-center">{item.firstName} {item.lastName}</p>
                            )}
                            {item.email && (
                                <p className="text-gray-500 text-center text-xs">{item.email}</p>
                            )}
                        </div>
                    ))
                ) : null}

                {/* Platform Links */}
                <div className='absolute mt-2 mx-auto items-center ml-12'>
                    {state.map((item) => (
                        (item.platform === 'github' || item.platform === 'youtube' || item.platform === 'twitter') ? (
                            <div key={item.id} className=" text-center mt-5 space-x-5">
                                <div className="text-lg font-semibold text-black"></div>
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
                                        {item.platform === 'github' && <Github />}
                                        {item.platform === 'youtube' && <Youtube />}
                                        {item.platform === 'twitter' && <Twitter />}
                                        {item.platform.charAt(0).toUpperCase() + item.platform.slice(1)}
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

export default Preview;
