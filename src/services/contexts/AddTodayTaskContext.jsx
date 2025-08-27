import { createContext, useState } from "react";

export const AddTodayTaskContext = createContext([]);

export function AddTodayTaskProvider({children}){
    const initialTasks = [
    { name: "Database create for company", checked: false },
    { name: "Website templates", checked: false },
    { name: "Meet work team", checked: false },
  ];
    const [todayTasks, setTodayTasks] = useState(initialTasks)
    function AddTask(task){
        setTodayTasks((prev) => [task, ...prev])
    }
    return (
        <AddTodayTaskContext.Provider value={{todayTasks, AddTask}}>
            {children}
        </AddTodayTaskContext.Provider>
    );
}