import React from "react"
import { TitleWrap } from "../elements"

const Title = ({title}) => {
  
  return (
  <TitleWrap>
      <h2>{title || "Title"}</h2>
    <div></div>
  </TitleWrap>
  )
}

export default Title
