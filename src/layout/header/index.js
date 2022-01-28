import React from "react"
import LanguageSelector from "../../components/languages"
import logo from "../../statics/images/logo.png"

const NAN_ITEM =[{
  name: 'home',
  href: '#'
},
{
  name: 'english_through_football',
  href: '#'
},
{
  name: 'football_tours',
  href: '#'
},
{
  name: 'summer_camps',
  href: '#'
},
{
  name: 'about_us',
  href: '#'
},
]

function Header({t}) { 
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt={t('logo')} />
      </div>
      <div className="nav-container">
        <ul>
          {NAN_ITEM.map(({name, href}, key)=>(
             <li key={key}><a href={href}>{t(name)}</a></li>
          ))
           }
        </ul>
      </div>
      <LanguageSelector />
    </div>
  )
}
export default Header