import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import css from "./index.css"
import pluspunkteLogo from "../images/pluspunkte2.png"
import handshakesLogo from "../images/handshakes.png"

const ProjectsPage = ({ data, location }) => {
  const siteTitle = ''

  const projects = [
    {
      id: 1,
      slug: "pluspunkte",
      title: "pluspunkte",
      description: "An app to track your decisions like stocks.",
      functionality: "This app helps you track how your perspective on decisions or opinions changes over time. You can follow a single decision or compare how you feel about multiple options within the same decision. \n \n When you update your ratings, the changes are displayed visually similar to stock charts, so you can easily see how your views evolve. The app also prompts you to review and update open decisions each day through a simple, one-by-one process to keep everything current.",
      logo: pluspunkteLogo,
      screens: []
    },
    {
      id: 2,
      slug: "handshakes",
      title: "Handshakes",
      description: "Meet the friends of your friends without an intro.",
      functionality: "Connect with friends of friends seamlessly. Discover new connections in your extended network without needing formal introductions.",
      logo: handshakesLogo,
      screens: []
    }
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <div className="navbar">
          <a href='/'> home </a>
          <a href="/research">research</a>
          <a className="selected" href="/projects">projects</a>
          <a href="/whatif">parallel universe</a>
        </div>
        <h3> projects </h3>
        <div className="projects-container">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.slug}`} className="project-box-link">
              <div className="project-box">
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                </div>
                {project.logo && (
                  <div className="project-logo">
                    <img src={project.logo} alt={`${project.title} logo`} />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage

