import React from "react"
import { useTranslation } from "react-i18next"
import Home from "./pages/home"
import Header from "./layout/header"
import Footer from "./layout/footer"
import EnglishThroughFootball from "./pages/englishThroughFootball"
import FootballTour from "./pages/footballTour"
import SummperCamp from "./pages/summerCamp"
import AboutUs from "./pages/aboutUs"

function App() {
  const { t } = useTranslation()

  return (
    <div className="App-container">
      <Header t={t} />
      {/* <EnglishThroughFootball t={t} /> */}
      {/* <FootballTour t={t} /> */}
      {/* <SummperCamp t={t} /> */}
      <AboutUs t={t} />
      {/* <Home t={t} /> */}
      <Footer t={t} />
    </div>
  )
}

export default App
