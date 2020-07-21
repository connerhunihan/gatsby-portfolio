import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const TileImages = () => {
  const data = useStaticQuery(graphql`
    query {
      calcentral: file(relativePath: { eq: "calcentral.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scisip: file(relativePath: { eq: "scisip.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nueva: file(relativePath: { eq: "nueva.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      autodesk: file(relativePath: { eq: "autodesk.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ccwip: file(relativePath: { eq: "ccwip.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mighty: file(relativePath: { eq: "mighty.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apple: file(relativePath: { eq: "apple.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cc: file(relativePath: { eq: "cc.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero-images">
      <div className="container">
        <div className="row">
          <div className="column">
            <Link to="/sis">
              <Img
                className="image"
                fluid={data.calcentral.childImageSharp.fluid}
              />
            </Link>
            <Img className="image" fluid={data.scisip.childImageSharp.fluid} />
            <Img className="image" fluid={data.nueva.childImageSharp.fluid} />
            <Img
              className="image"
              fluid={data.autodesk.childImageSharp.fluid}
            />
          </div>
          <div className="column">
            <Link to="/sis">
              <Img className="image" fluid={data.ccwip.childImageSharp.fluid} />
            </Link>
            <Img className="image" fluid={data.mighty.childImageSharp.fluid} />
            <Img className="image" fluid={data.apple.childImageSharp.fluid} />
            <Img className="image" fluid={data.cc.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TileImages
