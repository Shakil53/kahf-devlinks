import { LinkContext } from "@/context/CreateLinkProvider";
import { useContext, useState } from "react";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CreateProfileInfo = () => {
    const { state, dispatch } = useContext(LinkContext);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();



    const handleProfileInfo = (e) => {
        e.preventDefault();

        const createdProfile = {
            
            firstName: firstName,
            lastName: lastName,
            email: email,
        };
        // console.log(createdProfile);
        dispatch({ type: 'createProfile', payload: createdProfile });
    };

    return (
        <div>
        <div className="py-2 p-4 bg-white">
                <form className="grid sm:grid-cols-12 gap-2" onSubmit={handleProfileInfo}>
                    <div className="sm:col-span-6 items-center gap-4">
                        <Label htmlFor='' className="text-right text-md">
                        First name
                        </Label>
                        <Input
                            onChange={(e) => setFirstName(e.target.value)}
                            id='firstName'
                            name='firstName'
                            className="w-full"
                        />
                        </div>
                        <div className="sm:col-span-6 items-center gap-4">
                        <Label htmlFor='' className="text-right text-md">
                        Last name
                        </Label>
                        <Input
                            onChange={(e) => setLastName(e.target.value)}
                            id='lastName'
                            name='lastName'
                            className="w-full"
                        />
                        </div>
                        <div className="sm:col-span-12 items-center gap-4">
                        <Label htmlFor='' className="text-right text-md ">
                        Email
                        </Label>
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            id='email'
                            name='email'
                            className="w-full"
                        />
                        </div>
                        <div className="flex justify-end sm:col-span-12 items-center mt-8">
                           <button type="submit" className="px-3 py-1.5 font-semibold rounded bg-blue-500 text-white">Save</button>
                        </div>


                </form>           
        </div>
    </div>
    );
};

export default CreateProfileInfo;