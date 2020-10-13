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
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </JobsCenter>
      <Link to="/about" className="btn center-btn">
        Mitt CV
      </Link>
    </JobsWrapper>
  )
}


export default Jobs
