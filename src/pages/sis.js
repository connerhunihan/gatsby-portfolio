import React from "react"
import "../styles/styles.scss"

// Import Components
import PageHeader from "../components/pageHeader"

const Project = () => (
  <div>
    <PageHeader />
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text-alt">This is a project page</div>
          {/* <div className="side-image left">
            <Img fluid={data.nueva.childImageSharp.fluid} />
          </div>
          <div className="main-text">Conner Hunihan</div>
          <div className="main-image">
            <Img fluid={data.cc.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.autodesk.childImageSharp.fluid} />
          </div> */}
        </div>
      </div>
      {/* <div className="fixed-misc">conner.hunihan@gmail.com</div> */}
    </div>
  </div>
)

export default Project
