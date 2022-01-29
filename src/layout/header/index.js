import React, { useState } from "react"
import LanguageSelector from "../../components/languages"
import logo from "../../statics/images/logo.png"
import { ThreeBars } from "@styled-icons/octicons/ThreeBars"
import { WindowClose } from "@styled-icons/fa-solid/WindowClose"

const NAN_ITEM = [
  {
    menu: "home",
    href: "/",
  },
  {
    menu: "english_through_football",
    href: "/",
  },
  {
    menu: "football_tours",
    href: "/",
  },
  {
    menu: "summer_camps",
    href: "/",
  },
  {
    menu: "about_us",
    href: "/",
  },
]

function Header({ t }) {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => setToggle(!toggle)

  return (
    <div className="header-bg">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt={t("logo")} />
        </div>
        <div className={toggle ? 'nav-options active nav-container' : 'nav-container nav-options'} >
          <ul >
            {NAN_ITEM.map(({ menu, href }, key) => (
              <li key={key} >
                <a href={href} >{t(menu)}</a>
              </li>
            ))}
          </ul>
          <LanguageSelector />
        </div>
        <div className="mobile-menu" onClick={handleToggle}>
        {toggle ? <WindowClose /> : <ThreeBars />}
      </div>
      </div>
      
    </div>
  )
}
export default Header
