import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { 
  JobsWrapper,
  JobsCenter,
  ButtonContainer,
  JobButton,
  JobInfo,
  JobDate,
  JobDesc,
  JobIcon,
  CVButton,

} from "../elements"

const query = graphql`
{
  allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
    nodes {
      id
      company
      position
      date
      desc {
        id
        name
      }
    }
  }
}
`


const Jobs = () => {
  
  const data = useStaticQuery(query)
  console.log(data)

  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  console.log(jobs)
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log(company, position, date, desc)


  
  return (
    <JobsWrapper>
      <Title title="erfarenhet" />
      <JobsCenter>
        {/* btn container */}
        <ButtonContainer>
          {jobs.map((item, index) => {
            return (
              <JobButton
                key={item.strapiId}
                onClick={() => setValue(index)}
                //className={`job-btn ${index === value && "active-btn"}`}
                isActive={index === value && "true"}
              >
                {item.company}
              </JobButton>
            )
          })}
        </ButtonContainer>
        {/* job info */}
        <JobInfo>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <JobDate>{date}</JobDate>
          {desc.map(item => {
            return (
              <JobDesc key={item.id}>
                <FaAngleDoubleRight style={JobIcon}></FaAngleDoubleRight>
                <p>{item.name}</p>
              </JobDesc>
            )
          })}
        </JobInfo>
      </JobsCenter>
      <CVButton to="/about">
        Mitt CV
      </CVButton>
    </JobsWrapper>
  )
}


export default Jobs
