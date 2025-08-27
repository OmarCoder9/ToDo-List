import { useContext, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { AddTodayTaskContext } from "../../services/contexts/AddTodayTaskContext";

const Today = () => {
  const { todayTasks, AddTask } = useContext(AddTodayTaskContext);
  const [value, setValue] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      AddTask({ name: value.trim(), checked: false });
      setValue("");
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Today</h1>
      <section className="rounded-tasks border border-tasks-border p-6 md:p-7 w-full h-full max-h-full flex flex-col">
        <h2 className="text-3xl font-semibold mb-4">Today</h2>

        <div className="mb-5">
          <div className="flex items-center gap-3 rounded-xl border border-tasks-border px-4 py-2">
            <span>
              <MdAddCircleOutline />
            </span>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleEnter}
              placeholder="Add new task"
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>
        </div>

        <ul className="text-sm flex-1 overflow-y-auto max-h-full">
          {todayTasks.map((t, i) => (
            <li
              key={`${t.name}-${i}`}
              className="flex items-center gap-3 py-3 border-b border-tasks-border"
            >
              <input
                type="checkbox"
                className="accent-black"
                defaultChecked={t.checked}
              />
              <span>{t.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Today;
