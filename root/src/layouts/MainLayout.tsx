import { Outlet } from "react-router";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";

export function MainLayout() {
  return (
    <div className="pb-34">
      <NavBar />
      <Outlet />
    </div>
  )
}