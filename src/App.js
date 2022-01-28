import React from "react"
import { useTranslation } from "react-i18next"
import Home from "./components/home"
import Header from "./layout/header"

function App() {
  const day = 10
  const { t } = useTranslation()

  return (
    <div className="App">
      <Header t={t} />
      <Home t={t} />
    </div>
  )
}

export default App
