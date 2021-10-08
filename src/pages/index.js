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
          keywords={[`blog`, `Adi Ramachandran`, `Aditya Ramachandran`, `adinocap`, `adi no cap`]}
        />
        <img style={{ margin: 0 }} src="./bike_profile.jpg" alt='profile' />

        <h2>
          Yo Yo!{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h2>
        <p>My name's Adi Ramachandran and I'm an ECE student at <b>Olin</b>!</p>
        <p></p>
        <p> I spend most of my time on <b>electrical engineering & embedded software</b>; I also love <b>cycling and nature</b> :)</p>

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
        <p>I've worked on electrical engineering and embedded software at startups of varying sizes in IOT / climatetech (<a href={"https://www.acoustic-wells.com/"} target="_blank">Acoustic Wells</a>) and the space industry (<a href={"https://momentus.space/"} target="_blank">Momentus Space</a>)!</p>
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
        <img style={{ margin: 0 }} src="./OEM1.png" alt='OEM image' />
        <img style={{ margin: 0 }} src="./blk_diagram.png" alt='telemetry block diagram' />
        <h2>Olin Electric Motorsports</h2>
        <p>OEM is our Olin's Formula SAE team that works to build an electric racecar every year! </p>
        <h4>Testing Subteam Lead</h4>
        <p>
          I currently <b>lead the Testing Subteam</b> where I manage and architect projects like our Hardware in the Loop system, our Battery Management System testing rig, and more!
        </p>
        <h4>Low Voltage battery management system</h4>
        <p>
          I'm currently designing and testing the battery management system for our vehicle 12V electrical system featuring a <b>bidirectionalload switch in the high current path, voltage, current, and temperature checking for the pack, & passive cell balancing</b>! The PCB is designed around the LTC6810 chip - I also configured the custom battery pack! Check out the <a href={"https://github.com/olin-electric-motorsports/MKV-Boards/tree/main/Boards/lv_bms_2/lv_bms_2"} target="_blank">github</a> for more info. 
        </p>        
        <h4>Vehicle telemetry software!</h4>
        <p>
          During my second year on OEM, I wrote firmware for and built the data pipeline behind our team's <b> new telemetry system,</b> to live-stream sensor data from the vehicle's CAN bus for visualization, logging, and analysis on the sidelines. Check out the <a href={"https://docs.google.com/presentation/d/1UC-YDQk7SpxMN6GNWE3kg2BDyTvGPCxV-E1GIj7U7aE/edit#slide=id.ga6a6f370e1_0_12"} target="_blank">design review slides</a> for more info. 
        </p>
        <hr />
        <br />
        <img style={{ margin: 0 }} src="./pf_inaction.gif" alt='Particle filter in Action!' />
        <h2>We built a particle filter!</h2>
        <p>
          We wrote some code to help our cleaning robot locate itself in a known physical map using the in built LIDAR sensor and some math. Check out <a href={"/blog/particle-filter"}>the blog post</a> to learn more!</p>
        <hr />
        <br />
        {/* <img style={{ margin: 0 }} src="./edual.jpg" alt='edual' /> */}
        <img style={{ margin: 0 }} src="./test2.gif" alt='Our Corewars Implementation!' />

        <h2>Corewars</h2>
        <p>
          We rebuilt Corewars and used it to teach computer science students in India! (We also reached the front page of <a href={"https://news.ycombinator.com/item?id=25549290"} target="_blank">Hacker News</a>!)  
        </p>
        <p> 

        </p>
        <p>This is one of my favorite projects, and getting to actually deploy it to a university in India in January 2020 was incredible. You can see the final product above! Read more about our work <a href={"/blog/corewars-in-india"}>at our full blog post</a>!</p>
        <hr />
        <br />
        <img style={{ margin: 0 }} src="./pe_buck.jpg" alt='scheduler' />
        <h2>Power Electronics at Olin</h2>
        <p>
          Power Electronics is one of my favorite courses at Olin - we learn the theory of different power conversion architectures - buck, buck boost, flyback - and build up our own printed circuit boards to test and understand behavior of those architectures in the real world!   
        </p>
        <hr />
        {/* <img style={{ margin: 0 }} src="./scheduler.PNG" alt='scheduler' />
        <h2>Course Scheduler</h2>
        <p>
          With over 1000 lines of python, we wrote an Olin course scheduling assistant command line tool for our Software Design final project! Read more on our <a href={"https://teadetime.github.io/softdesFinal/"} target="_blank">dedicated project website</a>.   
        </p>
        <hr /> */}
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
