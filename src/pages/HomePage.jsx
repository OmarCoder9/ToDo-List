import ASideBar from '../components/shared/aSideBar/ASideBar'
import { Outlet } from 'react-router'

const HomePage = () => {
  return (
    <div className="min-h-fill bg-white p-6 m-0">
      <div className=" mx-auto px-29 grid grid-cols-3 gap-7">
        <div className="w-full">
          <ASideBar />
        </div>
        <div className="col-span-2">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default HomePage