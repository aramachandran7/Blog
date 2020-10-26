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
          The Olin College of Engineering is an undergraduate, engineering school located outside of Boston, MA!
          Our curriculum is based entirely on interdisciplinary, collaborative project-based learning.
        </p>
        <p>
          ~it's kinds dope {" "}
          <span role="img" aria-label="wave emoji">
            😃
          </span>
          ~
        </p>
        <p>
          Scroll down to check out some of my <b>highlighted projects</b>!
          For work experience, <b>check out my resume.</b> 
        </p>
        <a href={"./resume_updated_v2.pdf"} download>
          <Button marginTop="35px" marginBottom="35px" >Download my resume here! :)</Button>
        </a>
        <hr />
        <br />
        <img style={{ margin: 0 }} src="./pf_inaction.gif" alt='Particle filter in Action!' />
        <h2>We built a particle filter!</h2>
        <p>
          We wrote some code to help our cleaning robot locate itself in a known physical map using the in built LIDAR sensor and some math. Check out <a href={"/blog/particle-filter"}>the blog post</a> to learn more!</p>
        <hr />
        <br />
        {/* <img style={{ margin: 0 }} src="./OEM.jpg" alt='OEM image' /> */}
        <img style={{ margin: 0 }} src="./oem.png" alt='OEM image' />
        <h2>Olin Electric Motorsports</h2>
        <p>
          I also spend a lot of time on Olin Electric Motorsports (OEM), Olin's Formula SAE team that works to build an electric racecar every year. During my first year, I worked on designing and testing a more efficient low voltage battery back and associated battery management system PCB. 
        </p>
        <p>
          During my second year on OEM, I've been working on writing the software and building the data pipeline behind our team's <b> new telemetry system,</b> to live-stream sensor data from the vehicle's CANbus for visualization, logging, and analysis on the sidelines.  
          Learn more about my work by checking out the {" "}
            <a href={"./LVDocs.pdf"} download>
              OEM documentation! 
            </a>
          </p>
        <hr />
        <br />
        {/* <img style={{ margin: 0 }} src="./edual.jpg" alt='edual' /> */}
        <img style={{ margin: 0 }} src="./test2.gif" alt='Particle filter in Action!' />

        <h2>Edual</h2>
        <p>
          Early in my time at Olin, I decided I wanted to work on a socially impactful entrepreneurial venture. Working with Eamon Ito-Fisher, we reimagined & developed Corewars, an algorithmic thinking game played in Assembly, to enable project-based learning in higher-ed engineering & CS classrooms and lecture halls.
        </p>
        <p> 

        </p>
        <p>We deployed our code to a university in India in January 2020, and you can see the final product above! Read more about our work on Edual <a href={"/blog/corewars-in-india"}>at our full blog post</a>!</p>
        {/* <hr /> */}
        {/* <br /> */}

        {/* <img style={{ margin: 0 }} src="./hemingway2.jpg" alt='hemingway2' /> */}
        {/* <h2>Hemingway</h2> */}
        {/* <p>
          Over the summer of 2019, I co-founded a business venture in the college applications space, the Hemingway Summer Workshop. Through sixteen hours of instruction over the course of a month, my business partner Sarah Zhou and I were able to teach our students how to approach various types of college essays and how to create personalized roadmaps to break down the college application process. To set up the venture, we self-automated our email campaign, built a social media following, and composed a business strategy & pricing structure from the ground up. We’re looking forward to expanding next year!
        </p> */}
        <hr />
        <p>
          I've also worked on a bunch of other sick projects, including RC ornithopters, co-founding and running a successful <a href={"https://junipercollegeprep.com/"} target="_blank">college essay writing workshop</a>, and leading Assembly on my high school robotics <a href={"https://team3061.org/"} target="_blank">FRC team</a>! See my <a href={"https://github.com/aramachandran7/"} target="_blank">github</a> or read my blog for more, below.
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
