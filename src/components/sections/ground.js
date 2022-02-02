import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import img1 from "../../statics/images/ground.png"
import img2 from "../../statics/images/football-ground.png"
import img3 from "../../statics/images/camp.png"
import img4 from "../../statics/images/football-team.png"
import img5 from "../../statics/images/see-img.png"



const SLIDERIMG = [
  {
    text: "visit_major_cities",
    image: img1,
  },
  {
    text: "visit_major_cities",
    image: img2,
  },
  {
    text: "visit_major_cities",
    image: img3,
  },
  {
    text: "visit_major_cities",
    image: img4,
  },
  {
    text: "visit_major_cities",
    image: img5,
  }
]

function Ground({ t }) {
  return (
<Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
         {SLIDERIMG.map((item) => (
           <div className="ground-section" style={{ backgroundImage: `url(${item.image})` }}>
           <div className="ground-text"
               dangerouslySetInnerHTML={{ __html: t(item.text) }}
           />
           
         </div>
        ))}

  
    </Carousel>

  )
}
export default Ground

