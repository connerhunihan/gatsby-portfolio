import React from "react"
import "../styles/styles.scss"

// Import Components
import Header from "../components/header"
import Banner from "../components/banner"
// import TileImages from "../components/tileImages"
import Footer from "../components/footer"
import SubFooter from "../components/subFooter"
import ProjectList from "../components/projectsList"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <ProjectList />
    {/* <SubFooter /> */}
    <Footer />
  </div>
)

export default IndexPage
