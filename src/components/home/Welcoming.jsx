import { Link } from "react-router";

const Welcoming = () => {
  return (
    <div className="bg-home rounded-aside shadow-sm p-10 pr-0 min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-semibold tracking-wide mb-6">
        Welcome to ToDoPy
      </h1>
      <p className="text-gray-600 leading-6 mb-8 p-9">
        A to-do app is a simple, user-friendly digital tool designed to help
        individuals and teams organize tasks and manage their daily activities
        efficiently. Users can create, edit, and prioritize tasks, set deadlines
        or reminders, categorize items, and track their progress, all within an
        intuitive and accessible interface. These apps are essential for
        improving productivity, reducing stress, and ensuring that important
        responsibilities are not forgotten.
      </p>
      <Link to={"upcoming"}>
      <button className="px-6 py-3 bg-btn-gr hover:bg-btn-gr-hover text-black rounded-xl font-semibold transition-colors cursor-pointer">
        Go to tasks
      </button>
      </Link>
    </div>
  );
};

export default Welcoming;
