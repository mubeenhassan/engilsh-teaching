import React from "react"
import { useTranslation } from "react-i18next"
import Home from "./pages/home"
import Header from "./layout/header"
import Footer from "./layout/footer"
import EnglishThroughFootball from "./pages/englishThroughFootball"

function App() {
  const { t } = useTranslation()

  return (
    <div className="App-container">
      <Header t={t} />
      <EnglishThroughFootball t={t} />
      {/* <Home t={t} /> */}
      <Footer t={t} />
    </div>
  )
}

export default App
