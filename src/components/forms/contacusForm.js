import React from "react"
import Button from "../../layout/buttons"

function ContactUs({ t, heading, buttonText }) {
  return (
    <div className="contact-us-container">
      <p>{t(heading)}</p>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="email" />
      <input type="number" placeholder="Phone Number" />
      <Button buttonText={buttonText} />
    </div>
  )
}
export default ContactUs
