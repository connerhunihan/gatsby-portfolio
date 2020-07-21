import { Link } from "gatsby"
import React from "react"

const PageHeader = () => (
  <header>
    <div className="inner-header">
      <div className="container">
        <div className="logo">
          <Link to="/">{"< Go back"}</Link>
        </div>
        <div className="navigation">
          <nav>
            {/* <Link to="https://drive.google.com/file/d/18ZLIgtTnTXA2P2dEYxLamGF_WffrghF-/view">
              Resume
            </Link> */}
          </nav>
        </div>
      </div>
    </div>
  </header>
)
export default PageHeader
