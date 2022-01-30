import React from "react"
import homeBg from "../../../statics/images/home-background.png"
import ContactUsForm from '../../forms/contacusForm'

function HomeSection({ t }) {
  return (
    <div className="home-section" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="home-text">
        <h2>{t("summer_football_camps")}</h2>
        <h1>in English.</h1>
        <span className="home-val-text">Valencia </span>
        <span className="home-text-date">, June-July 2022</span>
      </div>
      <ContactUsForm 
      t={t}
      heading="reserve_your_space_now" 
      buttonText="Send your details and we will contact you."
      />
    </div>
  )
}
export default HomeSection
