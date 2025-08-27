import { useState, useContext } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { AddTodayTaskContext } from "../../services/contexts/AddTodayTaskContext";

const TodayTask = () => {
  const { todayTasks, AddTask } = useContext(AddTodayTaskContext);
  const [addTodayTask, setAddTodayTask] = useState("");

  const handleAddOnEnter = (e) => {
    if (e.key === 'Enter' && addTodayTask.trim() !== '') {
      const newTask = { name: addTodayTask.trim(), checked: false };
      AddTask(newTask);
      setAddTodayTask("");
    }
  };

  return (
    <section className="rounded-tasks border border-tasks-border p-6 w-full h-full pb-10 ">
      <h2 className="text-3xl font-semibold mb-4">Today</h2>

      <div className="mb-5">
        <div className="flex items-center gap-3 rounded-xl border border-tasks-border px-4 py-2">
          <span>
            <MdAddCircleOutline />
          </span>
          <input
            type="text"
            onChange={(e) => setAddTodayTask(e.target.value)}
            value={addTodayTask}
            onKeyDown={handleAddOnEnter}
            placeholder="Add new task"
            className="w-full outline-none bg-transparent text-sm"
          />
        </div>
      </div>

      <ul className="text-sm">
        {todayTasks.map((t, i) => (
          <li key={`${t.name}-${i}`} className="flex items-center gap-3 py-3 border-b border-tasks-border">
            <input type="checkbox" className="accent-black" defaultChecked={t.checked} />
            <span>{t.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodayTask;
