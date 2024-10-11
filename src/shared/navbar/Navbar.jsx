/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import Container from '@/components/ui/Container';
import { Unlink, Link2, UserPen, Eye } from 'lucide-react';

const Navbar = () => {
    return (
        <Container>
            <div className='flex bg-white items-center justify-between mt-4'>
                {/* Icon section */}
                <div className='flex items-center gap-1'>
                    <Unlink className='size-6 bg-blue-500 text-white p-1 rounded-full'></Unlink>
                    <p className='text-3xl font-bold font-abc'>devlinks</p>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-2">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => 
                            `flex rounded p-2 items-center font-semibold ${isActive ? "bg-blue-200 text-blue-700" : "bg-blue-50 text-black"}`
                        }
                    >
                        <Link2 className="size-5" />
                        <span className="hidden md:block lg:block">Links</span>
                    </NavLink>

                    <NavLink
                        to="/profileDetails"
                        className={({ isActive }) =>
                            `flex rounded p-2 items-center font-semibold ${isActive ? "bg-blue-200 text-blue-700" : "bg-blue-50 text-black"}`
                        }
                    >
                        <UserPen className="size-5" />
                        <span className="hidden md:block lg:block">Profile Details</span>
                    </NavLink>

                    <NavLink
                        to="/preview"
                        className={({ isActive }) =>
                            `text-blue-500 border hover:bg-gray-50 bg-white border-blue-500 px-3 py-2 rounded lg:ml-96 md:ml-30 ml-10 space-x-1 mr-5 md:mr-0 lg:mr-0 ${isActive ? "bg-blue-200" : ""}`
                        }
                    >
                        <Eye className="size-5 block md:hidden" />
                        <span className="hidden md:block lg:block">Preview</span>
                    </NavLink>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
