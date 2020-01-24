import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Adi Ramachandran"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./profile.jpg" alt='profile' />

        <h1>
          Hi!{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>My name's Adi Ramachandran and I'm a student at <b>Olin</b>!</p>
        <p>
          Check out my blog <Link to='/blog/'> here</Link>!
        </p>
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
          Scroll down to check out some of my highlighted projects!
        </p>
        <hr />
        <br />
        <img style={{ margin: 0 }} src="./hemingway2.jpg" alt='hemingway2' />
        <h2>Hemingway</h2>
        <p>
          Over this past summer, I co-founded a business venture in the college applications space, the Hemingway Summer Workshop. Through sixteen hours of instruction over the course of a month, my business partner Sarah Zhou and I were able to teach our students how to approach various types of college essays and how to create personalized roadmaps to break down the college application process. To set up the venture, we self-automated our email campaign, built a social media following, and composed a business strategy & pricing structure from the ground up. We’re looking forward to expanding next year!
        </p>

        <hr />
        <br />
        <img style={{ margin: 0 }} src="./edual.jpg" alt='edual' />
        <h2>Edual</h2>
        <p>
          Early in my time at Olin, I decided I wanted to work on a socially impactful entrepreneurial venture. Working with my co-founder, Eamon Ito-Fisher, we are developing software to enable project-based learning in higher-ed engineering & CS classrooms and lecture halls.
        </p>
        <p>Read more about our work on Edual in the Projects Section of my latest blog post!</p>

        <Link to="/blog/">
          <Button marginTop="35px">Head to my Blog :)</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
