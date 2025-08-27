import { FaRegCalendar, FaStickyNote } from "react-icons/fa";
import { GrTextAlignCenter } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { MdAddCircleOutline, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { TfiAlignJustify, TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router";

const ASideBar = () => {
  let upComingTasks = 15;
  let todayTasks = 8;
  return (
    <aside className="bg-home rounded-aside shadow-sm px-5 py-6 h-full min-h-fit flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Menu</h2>
          <button>
            <TfiAlignJustify />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 bg-search-bg rounded-full px-3 py-2 text-sm text-search-text">
            <span>
              <IoSearchOutline />
            </span>
            <input
              className="bg-transparent outline-none w-full"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm text-black mb-2">Tasks</h3>
          <ul className="space-y-2 text-sm">
            <Link to={"upcoming"}>
              <li className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-aside-hover">
                <div className="flex items-center gap-3 text-aside-main">
                  <span>
                    <MdKeyboardDoubleArrowRight />
                  </span>
                  <span>Upcoming</span>
                </div>
                <span className="text-search-text text-xs">
                  {upComingTasks}
                </span>
              </li>
            </Link>
            <Link to={"today"}>
              <li className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-aside-hover">
                <div className="flex items-center gap-3 text-aside-main">
                  <span>
                    <TfiMenuAlt />
                  </span>
                  <span>Today</span>
                </div>
                <span className="text-search-text text-xs">{todayTasks}</span>
              </li>
            </Link>
            <li className="flex items-center gap-3 px-3 py-2 rounded-xl text-aside-main hover:bg-aside-hover">
              <span>
                <FaRegCalendar />
              </span>
              <span>Calendar</span>
            </li>
            <li className="flex items-center gap-3 px-3 py-2 rounded-xl text-aside-main hover:bg-aside-hover">
              <span>
                <FaStickyNote />
              </span>
              <span>Sticky Wall</span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-sm text-black mb-2">Lists</h3>
          <ul className="space-y-2 text-sm text-aside-main">
            <li className="flex items-center bg-list-bg gap-3 px-3 py-2 rounded-xl hover:bg-list-hover">
              <span className="w-4 h-2.5 rounded-full bg-red-500 inline-block" />
              <span>Work</span>
            </li>
            <li className="flex items-center bg-list-bg gap-3 px-3 py-2 rounded-xl hover:bg-list-hover">
              <span className="w-4 h-2.5 rounded-full bg-lime-400 inline-block" />
              <span>Personal</span>
            </li>
            <li className="flex items-center bg-list-bg gap-3 px-3 py-2 rounded-xl hover:bg-list-hover">
              <span className="w-4 h-2.5 rounded-full bg-blue-500 inline-block" />
              <span>Study</span>
            </li>
            <li className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50">
              <span>
                <MdAddCircleOutline />
              </span>
              <span>Add new list</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-3 text-sm text-aside-main">
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-aside-hover">
          <span>
            <GrTextAlignCenter />
          </span>
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-aside-hover">
          <span>
            <PiSignOutBold />
          </span>
          <span>Sign Out</span>
        </div>
      </div>
    </aside>
  );
};

export default ASideBar;
