import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const SubFooter = () => {
  return (
    <div className="container">
      <div className="link-list">
        <div className="link-wrapper">
          <div className="link 1">
            <Link to="/about">
              <h3>About me</h3>
            </Link>
          </div>
          <div className="link 2">
            <a href="https://www.linkedin.com/in/connerhunihan">
              <h3>LinkedIn</h3>
            </a>
          </div>
          <div className="link 3">
            <a href="https://github.com/connerhunihan">
              <h3>GitHub</h3>
            </a>
          </div>
          <div className="link 4">
            <a href="https://www.instagram.com/connercticut/">
              <h3>Instagram</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubFooter
