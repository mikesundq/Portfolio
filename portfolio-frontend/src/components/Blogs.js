import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import {
  CenterButton,
  BlogsWrap,
  BlogsCenter,
} from "../elements"

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <BlogsWrap className="section">
      <Title title={title} />
      <BlogsCenter>
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </BlogsCenter>
      {/* If the showLink is undefined, dont show any link, otherwise show link */}
      {showLink && (
        <CenterButton to="/blog">
          Alla artiklar
        </CenterButton>
      )}
    </BlogsWrap>
  )
}
export default Blogs
