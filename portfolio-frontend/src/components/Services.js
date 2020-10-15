import React from "react"
import Title from "./Title"
import services from "../constants/services"
import {
  ServicesSection,
  ServicesCenter,
  Service,
  ServiceUnderline
} from "../elements"

const Services = () => {
  return (
    <ServicesSection>
      <Title title="Tjänster" />
      {/* <div className="section-center services-center"> */}
      <ServicesCenter>
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <Service key={id}>
              {icon}
              <h4>{title}</h4>
              <ServiceUnderline></ServiceUnderline>
              <p>{text}</p>
            </Service>
          )
        })}
      {/* </div> */}
       </ServicesCenter>
    </ServicesSection>
  )
}

export default Services
