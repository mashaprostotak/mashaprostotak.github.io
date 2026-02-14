import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import css from "../index.css"
import pluspunkteLogo from "../../images/pluspunkte2.png"
import pluspunkteScreen1 from "../../images/pluspunkte_screen1.png"
import pluspunkteScreen2 from "../../images/pluspunkte_screen2.png"
import pluspunkteScreen3 from "../../images/pluspunkte_screen3.png"
import pluspunkteScreen4 from "../../images/pluspunkte_screen4.png"
import pluspunkteScreen5 from "../../images/pluspunkte_screen5.png"
import handshakesLogo from "../../images/handshakes.png"

// Project data - in a real app, this could come from a CMS or markdown files
const projectsData = {
  pluspunkte: {
    title: "pluspunkte",
    description: "An app to track your decisions like stocks.",
    functionality: "This app helps you track how your perspective on decisions or opinions changes over time. You can follow a single decision or compare how you feel about multiple options within the same decision. \n \n When you update your ratings, the changes are displayed visually similar to stock charts, so you can easily see how your views evolve. The app also prompts you to review and update open decisions each day through a simple, one-by-one process to keep everything current.",
    logo: pluspunkteLogo,
    screens: [
      pluspunkteScreen1,
      pluspunkteScreen2,
      pluspunkteScreen3,
      pluspunkteScreen4,
      pluspunkteScreen5
    ]
  },
  handshakes: {
    title: "Handshakes",
    description: "Meet the friends of your friends without an intro.",
    functionality: "Connect with friends of friends seamlessly. Discover new connections in your extended network without needing introductions. You can type in a text prompt for who and where are you looking for and the app wil suggest you your 2nd degree connections to get in touch.",
    logo: handshakesLogo,
    screens: [
      "/videos/demo.mov"
    ]
  }
}

const ProjectDetailPage = ({ params, pageContext, location }) => {
  // Try multiple ways to get the slug (Gatsby File System Route API)
  let slug = params?.slug || pageContext?.params?.slug || pageContext?.slug
  
  // Fallback: extract from URL pathname
  if (!slug && location?.pathname) {
    const pathParts = location.pathname.split('/')
    slug = pathParts[pathParts.length - 1]
  }
  
  const project = projectsData[slug]

  if (!project) {
    return (
      <Layout location={location} title="">
        <div>
          <div className="navbar">
            <a href='/'> home </a>
            <a href="/research">research</a>
            <a href="/projects">projects</a>
            <a href="/whatif">parallel universe</a>
          </div>
          <h3>Project not found</h3>
          <Link to="/projects">← Back to projects</Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={project.title}>
      <div>
        <div className="navbar">
          <a href='/'> home </a>
          <a href="/research">research</a>
          <a href="/projects">projects</a>
          <a href="/whatif">parallel universe</a>
        </div>
        <Link to="/projects" className="back-link">← Back to projects</Link>
        <div className="project-detail">
          <div className="project-detail-header">
            {project.logo && (
              <div className="project-detail-logo">
                <img src={project.logo} alt={`${project.title} logo`} />
              </div>
            )}
            <div className="project-detail-title-section">
              <h1 className="project-detail-title">{project.title}</h1>
              <p className="project-detail-description">{project.description}</p>
            </div>
          </div>
          
          <div className="project-detail-content">
            <div className="project-functionality">
              <h2>Functionality</h2>
              <p>{project.functionality}</p>
            </div>

            {project.screens && project.screens.length > 0 && (
              <div className="project-screens">
                <h2>Screens</h2>
                <div className="screens-grid">
                  {project.screens.map((screen, index) => {
                    const isVideo = typeof screen === 'string' 
                      ? screen.includes('.mov') || screen.includes('.mp4') || screen.includes('.webm')
                      : screen.toString().includes('.mov') || screen.toString().includes('.mp4') || screen.toString().includes('.webm');
                    
                    return (
                      <div key={index} className="screen-item">
                        {isVideo ? (
                          <video 
                            src={screen} 
                            controls 
                            playsInline
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img src={screen} alt={`${project.title} screen ${index + 1}`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectDetailPage

