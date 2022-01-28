import React from "react"
import i18next from "i18next"
import Cookies from "js-cookie"

const languages = [
  {
    code: "en",
    name: "english",
    countery_code: "gb",
  },
  {
    code: "fr",
    name: "French",
    countery_code: "fr",
  },
]

function LanguageSelector() {
  const currentLanguageCode = Cookies.get("i18next") || "en"
  return (
    <div className="lang-container">
      <div className="dropdown-container">
       <span className="lang-selector">ho</span>
        {languages.map(({ code, name, countery_code }) => (
          <button
            key={countery_code}
            onClick={() => i18next.changeLanguage(code)}
            disabled={code === currentLanguageCode}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSelector
