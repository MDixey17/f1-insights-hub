import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { LoadingProvider } from "./contexts/LoadingContext"
import { AppNavbar } from "./components/Navbar/AppNavbar"
import { Home } from "./pages/Home/Home"
import { Car } from "./pages/Car/Car"
import { Drivers } from "./pages/Drivers/Drivers"
import { Circuits } from "./pages/Circuits/Circuits"
import { Teams } from "./pages/Teams/Teams"
import { Footer } from "./components/Footer/Footer"
import { Circuit } from "./components/Circuit/Circuit"
import { Driver } from "./components/Driver/Driver"
import { Team } from "./components/Team/Team"

function App() {
  return (
    <BrowserRouter basename="/f1-insights-hub">
      <LoadingProvider>
        <>
          <AppNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/car" element={<Car />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/drivers/:driver" element={<Driver />} />
            <Route path="/circuits" element={<Circuits />} />
            <Route path="/circuits/:circuit" element={<Circuit />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:team" element={<Team />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App
