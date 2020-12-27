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
        <p>My name's Adi Ramachandran and I'm an ECE student at <b>Olin</b>!</p>

        <Link to="/blog/">
          <Button marginTop="35px" marginBottom="35px" >Check out my blog here! :)</Button>
        </Link>
        <p>
          The Olin College of Engineering is an undergraduate engineering school located outside of Boston, MA.
          Our curriculum is based entirely on interdisciplinary, collaborative project-based learning.
        </p>
        <p>
          ~it's pretty cool {" "}
          <span role="img" aria-label="wave emoji">
            😃
          </span>
          ~
        </p>
        <p>
          Scroll down to check out some of my <b>highlighted projects</b>!
          For work experience, <b>check out my resume.</b> 
        </p>
        <a href={"./adi_ramachandran_resume.pdf"} download>
          <Button marginTop="35px" marginBottom="35px" >Download my resume here! :)</Button>
        </a>
        <hr />
        <br />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Khu0GxKtttg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Check out our autonomous maze solving differential drive robot!</h2>
        <p>We built a robot to complete the MicroMouse Competition! Our custom differential drive bot autonomously navigates and solves a 16x16 maze, returns to its starting point by generating a path from its understanding of the maze, and pathplans an optimized route for a final thrilling speedrun to the center. Check out <a href={"http://gammafla.me/micro_mouse_final/"} target="_blank">our project website</a> to learn more! Project features ROS, Gazebo, and Python, with graph theory, path planning, and high speed robot motion control.</p>
        <hr />
        <br />
        <img style={{ margin: 0 }} src="./pf_inaction.gif" alt='Particle filter in Action!' />
        <h2>We built a particle filter!</h2>
        <p>
          We wrote some code to help our cleaning robot locate itself in a known physical map using the in built LIDAR sensor and some math. Check out <a href={"/blog/particle-filter"}>the blog post</a> to learn more!</p>
        <hr />
        <br />
        <img style={{ margin: 0 }} src="./OEM1.png" alt='OEM image' />
        <img style={{ margin: 0 }} src="./blk_diagram.png" alt='telemetry block diagram' />
        <h2>Olin Electric Motorsports</h2>
        <p>OEM is our Olin's Formula SAE team that works to build an electric racecar every year! We work on some lit projects.</p>
        <h4>Vehicle telemetry software!</h4>
        <p>
          During my second year on OEM, I've been working on writing the software and building the data pipeline behind our team's <b> new telemetry system,</b> to live-stream sensor data from the vehicle's CANbus for visualization, logging, and analysis on the sidelines. Check out the <a href={"https://docs.google.com/presentation/d/1UC-YDQk7SpxMN6GNWE3kg2BDyTvGPCxV-E1GIj7U7aE/edit#slide=id.ga6a6f370e1_0_12"} target="_blank">design review slides</a> for more info. 
        </p>
        <h4>Designing a battery management system</h4>
        <p>
          During my first year, I worked on designing and testing a more efficient low voltage battery back and associated battery management system PCB. Learn more about my work by checking out my project {" "}
            <a href={"./LVDocs.pdf"} download>
              documentation! 
            </a>
        </p>

        <hr />
        <br />
        {/* <img style={{ margin: 0 }} src="./edual.jpg" alt='edual' /> */}
        <img style={{ margin: 0 }} src="./test2.gif" alt='Our Corewars Implementation!' />

        <h2>Edual</h2>
        <p>
          Early in my time at Olin, I decided I wanted to work on a socially impactful entrepreneurial venture. Working with Eamon Ito-Fisher, we reimagined & developed Corewars, an algorithmic thinking game played in Assembly, to enable project-based learning in higher-ed engineering & CS classrooms and lecture halls.
        </p>
        <p> 

        </p>
        <p>We deployed our code to a university in India in January 2020, and you can see the final product above! Read more about our work on Edual <a href={"/blog/corewars-in-india"}>at our full blog post</a>!</p>
        <hr />
        <br />

        <img style={{ margin: 0 }} src="./scheduler.PNG" alt='scheduler' />
        <h2>Course Scheduler</h2>
        <p>
          With over 1000 lines of python, we wrote an Olin course scheduling assistant command line tool for our Software Design final project! Read more on our <a href={"https://teadetime.github.io/softdesFinal/"} target="_blank">dedicated project website</a>.   
        </p>
        <hr />
        <p>
          <b>I've also worked on a bunch of other sick projects, including ... </b> 
          <ul>
            <li>Building a single cycle CPU (capable of running Assembly) in behavioral Verilog.</li>
            <li>3D Modeling, CFD simulating, constructing & testing a <a href={"https://photos.app.goo.gl/PoskhKKoH933hUgC7"} target="_blank">feather articulating RC ornithopter</a>!</li>  
            <li>co-founding and running a successful <a href={"https://junipercollegeprep.com/"} target="_blank">college essay writing workshop</a></li>
            <li>winning an MIT COVID-19 hackathon</li>
            <li>Leading Assembly on my high school robotics <a href={"https://team3061.org/"} target="_blank">FRC team</a>!</li>
          </ul>
          See my <a href={"https://github.com/aramachandran7/"} target="_blank">github</a> or read my blog for more, below.
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
