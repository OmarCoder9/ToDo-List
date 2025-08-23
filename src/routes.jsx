import { createBrowserRouter } from "react-router";
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage";
import UpComingPage from "./pages/UpComingPage";
import HomePage from "./pages/HomePage";
import TodayPage from "./pages/TodayPage";
import LandingPage from "./pages/LandingPage"
import CalenderPage from "./pages/CalenderPage";

const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <div>Error</div>,
        element: <LandingPage/>
    },
    {
        path: "/signin",
        errorElement: <div>Error</div>,
        element: <SignInPage/>
    },
    {
        path: "/register",
        errorElement: <div>Error</div>,
        element: <RegisterPage/>
    },
    {
        path: "/upcoming",
        errorElement: <div>Error</div>,
        element: <UpComingPage/>
    },
    {
        path: "/home",
        errorElement: <div>Error</div>,
        element: <HomePage/>
    },
    {
        path: "/today",
        errorElement: <div>Error</div>,
        element: <TodayPage/>
    },
    {
        path: "/calender",
        errorElement: <div>Error</div>,
        element: <CalenderPage/>
    }
]);
export default routes;