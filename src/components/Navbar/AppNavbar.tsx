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
          to="/circuits"
          className={`link ${
            pathname.includes("/circuits") ? "active-tab" : ""
          }`}
        >
          Circuits
        </Link>
        <Link
          to="/drivers"
          className={`link ${
            pathname.includes("/drivers") ? "active-tab" : ""
          }`}
        >
          Drivers
        </Link>
        <Link
          to="/teams"
          className={`link ${pathname.includes("/teams") ? "active-tab" : ""}`}
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
