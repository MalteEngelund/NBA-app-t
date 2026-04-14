import { Outlet } from "react-router";
import { NavBar } from "../components/NavBar/NavBar";

export function MainLayout() {
  return (
    <div className="pb-34">
      <NavBar />
      <Outlet />
    </div>
  )
}