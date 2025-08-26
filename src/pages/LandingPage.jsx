import SidePic from "../components/shared/sidePic/SidePic";
import { Outlet } from "react-router";

const LandingPage = () => {
  return (
    <div className="grid grid-cols-2 gap-6 min-h-screen bg-secondary-body-color py-14 px-12">
      {/* Left Section - Visual Background */}
      <div className="flex items-center justify-center">
        <SidePic />
      </div>
      {/* Right Section - UI Panel */}
      <div className="flex items-center">
        <Outlet/>
      </div>
    </div>
  );
};

export default LandingPage;
