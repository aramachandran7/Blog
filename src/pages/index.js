import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
// import downloadFile from "../"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Adi Ramachandran"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `Adi Ramachandran`, `Aditya Ramachandran`, `engineering`]}
        />
        <img style={{ margin: 0 }} src="./profile.jpg" alt='profile' />

        <h2>
          Hi!{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h2>
        <p>My name's Adi Ramachandran and I'm a student at <b>Olin</b>!</p>

        <Link to="/blog/">
          <Button marginTop="35px" marginBottom="35px" >Check out my blog here! :)</Button>
        </Link>
        <p>
          The Olin College of Engineering is a crazy neat undergraduate, engineering school located just outside of Boston, MA!
          Our curriculum is based entirely on project-based learning - we don't have tests.
        </p>
        <p>
          Ever. {" "}
          <span role="img" aria-label="wave emoji">
            😃
          </span>
        </p>
        <p>
          Scroll down to check out some of my <b>highlighted projects</b>!
        </p>
        <a href={"./resume_updated_v2.pdf"} download>
          <Button marginTop="35px" marginBottom="35px" >Download my resume here! :)</Button>
        </a>
        <hr />
        <br />
        <img style={{ margin: 0 }} src="./hack.png" alt='hackathon image' />
        <h2>MIT COVID-19 Hackathon Winners!</h2>
        <p>
          On a whim, I decided to team up with an old high school friend and compete in MIT's COVID-19 virtual hackathon, from April 3rd-6th. With a little luck, a lot of mentor interviews, and some very last minute software development, the Hospital PPE Inventory Management software we built won us a prize in the hackathon's supply chain track!  
        </p>
        <p>          
          Keep a lookout for an upcoming post on this topic! 
        </p>
        <hr />
        <br />
        <img style={{ margin: 0 }} src="./OEM.jpg" alt='OEM image' />
        <h2>Olin Electric Motorsports</h2>
        <p>
          During my first semester @ Olin College, I decided to join Olin Electric Motorsports (OEM), Olin's Formula SAE team that works to build an electric racecar every year. During my time on OEM, I've worked on designing and testing a more efficient low voltage battery back and battery management system PCB. 
        </p>
        <p>
          Learn more about my work by checking out the {" "}
            <a href={"./LVDocs.pdf"} download>
              OEM documentation! 
            </a>
          </p>
        <hr />
        <br />
        <img style={{ margin: 0 }} src="./edual.jpg" alt='edual' />
        <h2>Edual</h2>
        <p>
          Early in my time at Olin, I decided I wanted to work on a socially impactful entrepreneurial venture. Working with my co-founder, Eamon Ito-Fisher, we are developing software to enable project-based learning in higher-ed engineering & CS classrooms and lecture halls.
        </p>
        <p>Read more about our work on Edual in the Projects Section of my latest blog post!</p>

        <hr />
        <br />
        <img style={{ margin: 0 }} src="./hemingway2.jpg" alt='hemingway2' />
        <h2>Hemingway</h2>
        <p>
          Over the summer of 2019, I co-founded a business venture in the college applications space, the Hemingway Summer Workshop. Through sixteen hours of instruction over the course of a month, my business partner Sarah Zhou and I were able to teach our students how to approach various types of college essays and how to create personalized roadmaps to break down the college application process. To set up the venture, we self-automated our email campaign, built a social media following, and composed a business strategy & pricing structure from the ground up. We’re looking forward to expanding next year!
        </p>

        <hr />
        <Link to="/blog/">
          <Button marginTop="35px">Head to my Blog :)</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
