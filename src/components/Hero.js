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
              Hello! My name is Rehan Ali. I am a Canada-based developer. 
              I have a diverse set of skills, ranging from design to HTML+CSS+JAVASCRIPT, all the way to React.js, Redux, and UI/UX.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn1">
                Contact me
              </Link>

             <a href="https://drive.google.com/file/d/1C0i8rbQ9w9D4eltDfzSHeW2-XuKsmTSp/view" target="_new" className="btn">
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
