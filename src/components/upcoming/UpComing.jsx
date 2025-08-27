import TodayTask from "./TodayTask"
import Tomorrow from "./Tomorrow"
import Week from "./Week"

const UpComing = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Upcoming</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-8">
          <div className="col-span-2">
              <TodayTask/>
          </div>
          <div>
              <Tomorrow/>
          </div>
          <div>
              <Week/>
          </div>
      </div>
    </div>
  )
}

export default UpComing