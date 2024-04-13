import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../ui/page/LoginPage";
import SignUpPage from "../ui/page/SignUpPage";
import UploadPage from "../ui/page/UploadPage";
import GeneratingPage from "../ui/page/GeneratingPage";
import ResultPage from "../ui/page/ResultPage";

import StableDiffusionPage from "../ui/page/StableDiffusionPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
        // errorElement: <LoginPage/>
    },
    {
        path: "/signup",
        element: <SignUpPage/>
    },
    {
        path:"/gen",
        element:<StableDiffusionPage/>
    },
    {
        path: "/upload",
        element: <UploadPage/>
    },
    {
        path: "/generating",
        element: <GeneratingPage/>
    },
    {
        path: "/result",
        element: <ResultPage/>
    }
])