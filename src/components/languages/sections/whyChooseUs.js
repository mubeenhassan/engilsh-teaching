import React from "react"
import development from '../../../statics/images/icons/development.png'
import effective from '../../../statics/images/icons/effective.png'
import engagement from '../../../statics/images/icons/engagement.png'
import personlized from '../../../statics/images/icons/personlized.png'
import selective from '../../../statics/images/icons/selective.png'


const ADVANTAGE = [
  {
    icon : development,
    heading : "Professionally developed system",
    description : "A selective team of experienced teachers and qualified football coaches have developed the course content"
  },
  {
    icon : engagement,
    heading : "Engagement in the online classroom",
    description : "The context of football in an engaging and motivating enviroment encourages our students to achieve faster results"
  },
  {
    icon : effective,
    heading : "Effective methods",
    description : "Our method focuses on our student's ability and confidence with spoken English, we apply a system of repetition and interactive, visual activites"
  },
  {
    icon : selective,
    heading : "Selective team of teachers",
    description : "We have a talented team of native, qualified teachers who create energy and fun in the online classroom"
  },
  {
    icon : personlized,
    heading : "Personalised service",
    description : "Our selective team are here to personally respond and look after you throughout the process"
  }
]

function WhyChooseUs({t}) {
  return (
    <div className="why-choose-us">
      <h1><span><hr /></span>Why choose us <span><hr  /></span></h1>
      
      <div className="advantage-contaner">
      {ADVANTAGE.map((item, key)=>(
        <div key={key} className="advantage">
            <img src={item.icon} />
            <h2>{item.heading}</h2>
            <p>{item.description}</p>
        </div>)
      )
      }
      </div>
     
    </div>
  )
}
export default WhyChooseUs
