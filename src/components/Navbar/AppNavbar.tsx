import { Navbar } from "blue-titanium-ui"
import { Link, useLocation } from "react-router-dom"
import "./AppNavbar.css"

export const AppNavbar = () => {
  const { pathname } = useLocation()

  const NavbarLeft = () => {
    return (
      <Link to="/" className="link-appname">
        F1 Insights Hub
      </Link>
    )
  }

  const NavbarMiddle = () => {
    return (
      <>
        <Link to="/" className={`link ${pathname === "/" ? "active-tab" : ""}`}>
          Home
        </Link>
        <Link
          to="/races"
          className={`link ${pathname === "/races" ? "active-tab" : ""}`}
        >
          Races
        </Link>
        <Link
          to="/drivers"
          className={`link ${pathname === "/drivers" ? "active-tab" : ""}`}
        >
          Drivers
        </Link>
        <Link
          to="/teams"
          className={`link ${pathname === "/teams" ? "active-tab" : ""}`}
        >
          Teams
        </Link>
      </>
    )
  }

  return (
    <Navbar left={<NavbarLeft />} middle={<NavbarMiddle />} right={<></>} />
  )
}
