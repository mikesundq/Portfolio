import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import {
  BlogTempletWrap,
  BlogTempCenter,
  CenterButton
} from "../elements"


const ComponentName = ({ data }) => {
  console.log(data)
  const { content, title, desc } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <BlogTempletWrap>
        <BlogTempCenter>
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <CenterButton to="/blog">
            Alla artiklar
          </CenterButton>
        </BlogTempCenter>
      </BlogTempletWrap>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName
