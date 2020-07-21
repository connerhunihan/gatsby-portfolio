import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectList = () => {
  return (
    <div className="container">
      <div className="project-list">
        <div className="box-wrapper">
          <div className="project 1">
            <Link to="/autodesk">
              <h3>Autodesk</h3>
              <p>Demystifying data access.</p>
            </Link>
          </div>
          <div className="project 2">
            <Link to="/mighty">
              <h3>Mighty</h3>
              <p>Modernizing venture capital workflows.</p>
            </Link>
          </div>
          <div className="project 3">
            <Link to="/apple">
              <h3>Apple</h3>
              <p>Unifying administrative tools.</p>
            </Link>
          </div>
          <div className="project 4">
            <Link to="/cc">
              <h3>Creative Commons</h3>
              <p>Redefining how we all license content.</p>
            </Link>
          </div>
          <div className="project 5">
            <Link to="/nueva">
              <h3>Nueva</h3>
              <p>Building culture, with story.</p>
            </Link>
          </div>
          <div className="project 6">
            <Link to="/ccwip">
              <h3>CCWIP</h3>
              <p>Simplifying state-wide data reporting.</p>
            </Link>
          </div>
          <div className="project 7">
            <Link to="/berkeley">
              <h3>UC Berkeley</h3>
              <p>Improving enrollment.</p>
            </Link>
          </div>
          <div className="project 8">
            <Link to="/nsf">
              <h3>NSF</h3>
              <p>Advancing innovation policy.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
