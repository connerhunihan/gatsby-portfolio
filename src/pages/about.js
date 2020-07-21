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
          <div className="main-text-alt">This is an about page</div>
        </div>
      </div>
    </div>
  </div>
)

export default Project
