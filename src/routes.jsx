import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Welcoming from "./components/home/Welcoming";
import UpComing from "./components/upcoming/UpComing";
import Today from "./components/today/Today";
import Calendar from "./components/calendar/Calendar";
import GettingStarted from "./components/gettingStarted/GettingStarted";
import SignIn from "./components/signIn/SignIn";
import Register from "./components/register/Register";
import { AddTodayTaskProvider } from "./services/contexts/AddTodayTaskContext";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>Error</div>,
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <GettingStarted />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/home",
    errorElement: <div>Error</div>,
    element: (
      <AddTodayTaskProvider>
        <HomePage />
      </AddTodayTaskProvider>
    ),
    children: [
      {
        index: true,
        element: <Welcoming />,
      },
      {
        path: "upcoming",
        element: <UpComing />,
      },
      {
        path: "today",
        element: <Today />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
]);
export default routes;
