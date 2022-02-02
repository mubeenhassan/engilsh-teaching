import React, { useState, useEffect } from "react"
import LanguageSelector from "../../components/languages"
import logo from "../../statics/images/logo.png"
import { ThreeBars } from "@styled-icons/octicons/ThreeBars"
import { WindowClose } from "@styled-icons/fa-solid/WindowClose"
import { Link } from "react-router-dom"


const NAN_ITEM = [
  {
    menu: "home",
    href: "/",
  },
  {
    menu: "english_through_football",
    href: "learn",
  },
  {
    menu: "football_tours",
    href: "tour",
  },
  {
    menu: "summer_camps",
    href: "summer-camp",
  },
  {
    menu: "about_us",
    href: "about",
  },
]

function Header({ t }) {
  const [toggle, setToggle] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >0) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  const handleToggle = () => setToggle(!toggle)
  return (
    <div className={`header-bg ${navbar ? 'grey': ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt={t("logo")} />
        </div>
        <div className={toggle ? 'nav-options active nav-container' : 'nav-container nav-options'} >
          <ul >
            {NAN_ITEM.map(({ menu, href }, key) => (
              <li key={key} onClick={(()=>setToggle(false))}>
                <Link to={href} >{t(menu)}</Link>
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
