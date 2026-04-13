import { NavLink } from "react-router";
import homeIcon from '../../assets/icons/home_icon.svg'
import standingsIcon from '../../assets/icons/standings_icon.svg'
import teamsIcon from '../../assets/icons/teams_icon.svg'

export function NavBar() {
  return (
    <nav className="fixed bottom-0 w-full">
      <ul className="grid grid-cols-3 align-middle w-full md:flex md:gap-4 bg-blue-700 text-white p-4">
        <li className="flex justify-center">
          <NavLink to="/" className='flex flex-col justify-center text-center'><img src={homeIcon} alt="Home" className="w-16 h-16"/><h2> Home</h2></NavLink>
        </li>
        <li className="flex justify-center">
          <NavLink to="/standings" className='flex flex-col justify-center text-center'><img src={standingsIcon} alt="Standings" className="w-16 h-16"/><h2> Standings</h2></NavLink>
        </li>
        <li className="flex justify-center">
          <NavLink to="/teams" className='flex flex-col justify-center text-center'><img src={teamsIcon} alt="Teams" className="w-16 h-16"/><h2> Teams</h2></NavLink>
        </li>
      </ul>
    </nav>
  )
}