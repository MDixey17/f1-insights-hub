import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { AppProvider } from "./contexts/AppContext"
import { LoadingProvider } from "./contexts/LoadingContext"
import { AppNavbar } from "./components/Navbar/AppNavbar"
import { Home } from "./pages/Home/Home"
import { Car } from "./pages/Car/Car"
import { Drivers } from "./pages/Drivers/Drivers"
import { Races } from "./pages/Races/Races"
import { Teams } from "./pages/Teams/Teams"

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <AppProvider>
          <>
            <AppNavbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/car" element={<Car />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/races" element={<Races />} />
              <Route path="/teams" element={<Teams />} />
            </Routes>
          </>
        </AppProvider>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App
