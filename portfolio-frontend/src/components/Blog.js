import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import {
  BlogArticle,
  BlogImage,
  BlogCard,
  BlogFooter
} from "../elements"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <BlogArticle>
        {/* if image is not supplied, instead of breaking, dont show any image */}
        {image && (
          <BlogImage fluid={image.childImageSharp.fluid} />
        )}
        <BlogCard>
          {/* if title is not supplied, set a defualt title */}
          <h4>{title || "Ariklar"}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </BlogCard>
      </BlogArticle>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Blog
