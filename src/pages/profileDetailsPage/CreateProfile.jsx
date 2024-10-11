import Container from "@/components/ui/Container";
import { useContext, useState } from "react";
import { LinkContext } from "@/context/CreateLinkProvider";
import uploadIcon from '../../assets/upload.png';
import { FileUploader } from "react-drag-drop-files";
import jpgIcon from '../../assets/jpgIcon.png';
import pngIcon from '../../assets/png.png';
import ProfileLeftSideContainer from "./ProfileLeftSideContainer";
import CreateProfileInfo from "./CreateProfileInfo";


const fileIcons = {
    JPG: jpgIcon,
    PNG: pngIcon,
    JPEG: jpgIcon
  };
const fileTypes = ["JPG", "PNG", "JPEG"];


const CreateProfile = () => {
        
    const [platform, setPlatform] = useState('');
    const [link, setLink] = useState('');

    const [files, setFiles] = useState([]);
   

    const { state, dispatch } = useContext(LinkContext);

    const id = Math.random().toString(36).substring(2, 7);

    const handleSubmit = (e) => {
        e.preventDefault();

        const createdLink = {
            id: id,
            platform: platform,
            link: link,
            
        };
        console.log(handleSubmit);
        dispatch({ type: 'createLink', payload: createdLink });
    };
    // --------------------------
    const handleChange = (newFiles) => {
        setFiles([...files, ...newFiles]);
      };
    
      const getFileIcon = (fileName) => {
        const fileExtension = fileName.split('.').pop().toUpperCase();
        return fileIcons[fileExtension] || null;
        };
    
        
        const handleTypeError = (error) => {
            console.log("Type error:", error);
        };
    
        const handleSizeError = (file) => {
            console.log("Size error:", file);
        };
    
        const handleDrop = (file) => {
            console.log("Dropped file:", file);
        };
    
        const handleSelect = (file) => {
            dispatch({
                type: 'createLink', 
                payload: {
                    id: new Date().getTime(), 
                    file: file, 
                },
            });
        };
    
      const handleDelete = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
      };

    // --------------------------

    return (
        <Container>
               <div className="flex mt-5 mx-auto gap-4">
                {/* left side container */}
                <div className="flex-[2] hidden md:block">
                    <ProfileLeftSideContainer getFileIcon={getFileIcon} files={files} handleDelete={handleDelete}></ProfileLeftSideContainer>
                </div>
                  


                {/* right side container */}
                <div className="bg-white mt-5 flex-[3] p-4">
                    <p className="text-3xl font-bold">Profile Details</p>
                    <p>Add your details to create a personal touch to your profile</p>
                
                    {/* Drag and drop here ---- */}

                    <FileUploader
                            multiple={true}
                            handleChange={handleChange}
                            name="myFiles"
                            label="Upload or drop files right here"
                            required={true}
                            disabled={false}
                            classes="w-[40%] mt-5 flex flex-col items-center justify-center border border-dashed border-[#139FAD]"
                            types={fileTypes}
                            maxSize={20} // 20MB
                            onTypeError={handleTypeError}
                            onSizeError={handleSizeError}
                            onDrop={handleDrop}
                            onSelect={handleSelect}
                            dropMessageStyle={{ backgroundColor: 'red' }}
                        >
                            {/* Custom children to replace default design */}
                            <div className="flex flex-col items-center justify-center min-h-[60px] sm:min-h-[60px]">
                            <img src={uploadIcon} alt="Upload Icon" />
                            <p className="text-sm  font-bold">Drag and drop image</p>
                            
                            </div>
                    </FileUploader>
                    <div className="mt-10 bg-gray-100 rounded">
                        <CreateProfileInfo />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CreateProfile;