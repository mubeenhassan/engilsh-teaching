import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import images from "../../statics/images/camp.png"
import { QuoteRight } from "@styled-icons/boxicons-solid/QuoteRight"

const REVIEWS = [
  {
    name: "mubeen",
    label: "freelance",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: images,
  },
  {
    name: "Asad",
    label: "freelance",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: images,
  },
]

const Testimonials = () => {
  return (
    <div className="review-slider-container">
      <h1>Testimonials</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {REVIEWS.map((item) => (
          <div>
            <img src={item.image} />
            <div className="myCarousel">
              <h3>{item.name}</h3>
              <h4>{item.label}</h4>
              <p>{item.desc}</p>
              <QuoteRight />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default Testimonials
