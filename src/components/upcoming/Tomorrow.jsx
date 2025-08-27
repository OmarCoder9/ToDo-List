import { useState } from "react"
import { MdAddCircleOutline } from "react-icons/md"

const Tomorrow = () => {
  const initial = [
    { name: "Work team", checked: false },
    { name: "Job interview", checked: false },
  ]
  const [tasks, setTasks] = useState(initial)
  const [value, setValue] = useState("")

  const handleEnter = (e) => {
    if (e.key === 'Enter' && value.trim() !== '') {
      const newTask = { name: value.trim(), checked: false }
      setTasks([newTask, ...tasks])
      setValue("")
    }
  }
  return (
    <section className="rounded-tasks border border-tasks-border p-6 md:p-7 w-full h-full max-h-full flex flex-col">
      <h2 className="text-3xl font-semibold mb-4">Tomorrow</h2>

      <div className="mb-5">
        <div className="flex items-center gap-3 rounded-xl border border-tasks-border px-4 py-2">
          <span><MdAddCircleOutline /></span>
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
        {tasks.map((t, i) => (
          <li key={`${t.name}-${i}`} className="flex items-center gap-3 py-3 border-b border-tasks-border">
            <input type="checkbox" className="accent-black" defaultChecked={t.checked} />
            <span>{t.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tomorrow