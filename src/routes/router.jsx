
import App from "@/App";
import CreateLinkPage from "@/pages/createLinkPage/CreateLinkPage";
import Preview from "@/pages/Preview/Preview";
import CreateProfile from "@/pages/profileDetailsPage/CreateProfile";
import {createBrowserRouter,} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <CreateLinkPage />
            },
            {
                path: 'profileDetails',
                element: <CreateProfile />
            },
            {
                path: 'preview',
                element: <Preview />
            }
        ]
    },
]);