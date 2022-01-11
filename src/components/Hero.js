import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import circle from "../assets/circle.svg"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="header">
      <img src={circle} alt="Logo" className="circle-image" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="display-h1">
              Hey, I'm a <span>website</span> developer.
            </h1>
            <p className="hero-paragraph">
              Hi, I'm Rehan a freelance web developer from Hyderabad,India. I
              help brands turn their ideas into high quality products.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn1">
                Contact me
              </Link>

              <a download href='getresume' className="btn">
                Get Resume
              </a>
            </div>
            <SocialLinks className="social-link" />
          </div>
          <div className="hero-image-wrapper">
            <Image fluid={fluid} className="hero-img" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
