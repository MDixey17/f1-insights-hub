import { Navbar } from "blue-titanium-ui"
import { Link } from "react-router-dom"
import "./AppNavbar.css"
import { useAppContext } from "../../contexts/AppContext"

const NavbarLeft = () => {
  return <p>F1 Insights Hub</p>
}

const NavbarMiddle = () => {
  const [activeTab] = useAppContext()

  return (
    <>
      <Link
        to="/"
        className={`link ${activeTab === "home" ? "active-tab" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/races"
        className={`link ${activeTab === "races" ? "active-tab" : ""}`}
      >
        Races
      </Link>
      <Link
        to="/drivers"
        className={`link ${activeTab === "drivers" ? "active-tab" : ""}`}
      >
        Drivers
      </Link>
      <Link
        to="/teams"
        className={`link ${activeTab === "teams" ? "active-tab" : ""}`}
      >
        Teams
      </Link>
    </>
  )
}

const NavbarRight = () => {
  return <></>
}

export const AppNavbar = () => {
  return (
    <Navbar
      left={<NavbarLeft />}
      middle={<NavbarMiddle />}
      right={<NavbarRight />}
    />
  )
}
