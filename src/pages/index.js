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
        <p>Adi here. I'm an <b>electrical & embedded engineer</b> graduating from <b><a href={"https://www.olin.edu/"} target="_blank">Olin College</a></b> in May '23!</p>
        <p></p>
        <p> I love asking questions, solving problems, & adventuring. Hobbies include <b>cycling, backpacking, & listening to + making music</b> :)</p>

        <Link to="/blog/">
          <Button marginTop="35px" marginBottom="35px" >Check out my blog here! :)</Button>
        </Link>
        <p>I've worked internships in EE and firmware at <u><b> <a href={"https://tesla.com/"} target="_blank">Tesla</a>, <a href={"https://momentus.space/"} target="_blank">Momentus</a>, & <a href={"https://www.acoustic-wells.com/"} target="_blank">Acoustic Wells</a></b></u>. Scroll down to see my <b>highlighted work</b>!</p>
        <a href={"./adi_ramachandran_resume.pdf"} download>
          <Button marginTop="35px" marginBottom="35px" >Download my resume here! :)</Button>
        </a>
        <hr />
        <br />
        
        <img style={{ margin: 0 }} src="./step_pcb.jpg" alt='step printed circuit board' />
        <h2>Smart Ring Wearable PCB - low power, 12x20mm footprint </h2>
        <p>
          In this insane experimental course that Olin offered in spring '22, we designed and validated a complete embedded system to be used in a two finger smart ring. The ring's accelerometer would transmit gestures over bluetooth to allow for <b>screen free control</b> of a user's smartphone, which is particularly relevant to the blind and visually impaired community (blog post coming soon!). 
        </p>
        <p> 
          The hardware itself was straightforward, designed around the <code>STM32WB55xx</code> uC with a 6 axis <code>LSM6DSOxx</code> acceleromter/gyro, a 2.4Ghz BLE chip antenna, and a <code>BQ297xx</code> single cell battery protection IC. Designing within such a small footprint and with the power consumption constraints of a wearable was quite exciting. See <a href={"https://github.com/OlinSTEP/step-devices/tree/main/projects/ring/"} target="_blank">Github page</a> for board files. 
        </p>
        <br />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Khu0GxKtttg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Check out our autonomous maze solving differential drive robot!</h2>
        <p>We built a robot to complete the MicroMouse Competition! Our custom differential drive bot autonomously navigates and solves a 16x16 maze, returns to its starting point by generating a path from its understanding of the maze, and pathplans an optimized route for a final thrilling speedrun to the center. Check out <a href={"https://github.com/aramachandran7/micro_mouse_final"} target="_blank">our Github</a> to learn more! Project features ROS, Gazebo, and Python, with graph theory, path planning, and high speed robot motion control.</p>
        <br />
        <img style={{ margin: 0 }} src="./adi_form.jpg" alt='OEM image' />
        <img style={{ margin: 0 }} src="./lvbms.jpg" alt='telemetry block diagram' />
        <h2>Olin Electric Motorsports (Formula SAE Electric)</h2>
        <p>OEM is our Olin's Formula SAE team that works to build an electric racecar every year! </p>
        <h4>Testing Subteam Lead</h4>
        <p>
          I previously <b>led the Testing Subteam</b> where I managed and architected projects like our Hardware in the Loop system, our Battery Management System testing rig, and more!
        </p>
        <h4>Low Voltage battery management system</h4>
        <p>
          I designed & validated the battery management system for our car's LV bus featuring a <b>bidirectional load switch in the high current path, voltage, current, and temperature sense for the 4s6p pack, & passive cell balancing</b>! The PCB is designed around the <code>LTC6810</code> ASIC - I also configured the custom battery pack! Check out the <a href={"https://github.com/olin-electric-motorsports/MKV-Boards/tree/main/Boards/lv_bms_2/lv_bms_2"} target="_blank">github</a> for more info. 
        </p>        
        <h4>Vehicle telemetry software!</h4>
        <p>
          During my second year on OEM, I wrote firmware for and built the data pipeline behind our team's <b> new telemetry system,</b> to live-stream sensor data from the vehicle's CAN bus for visualization, logging, and analysis on the sidelines. Check out the <a href={"https://docs.google.com/presentation/d/1UC-YDQk7SpxMN6GNWE3kg2BDyTvGPCxV-E1GIj7U7aE/edit#slide=id.ga6a6f370e1_0_12"} target="_blank">design review slides</a> for more info. 
        </p>
        <br />
        <img style={{ margin: 0 }} src="./test2.gif" alt='Our Corewars Implementation!' />
        <h2>Corewars</h2>
        <p>
          We rebuilt Corewars and used it to teach computer science students in India! (We also reached the front page of <a href={"https://news.ycombinator.com/item?id=25549290"} target="_blank">Hacker News</a>!)  
        </p>
        <p> 
        </p>
        <p>This is one of my favorite projects, and getting to actually deploy it to a university in India in January 2020 was incredible. You can see the final product above! Read more about our work <a href={"/blog/corewars-in-india"}>at our full blog post</a>!</p>
        <br />
        <img style={{ margin: 0 }} src="./flywheel.jpg" alt='Flywheel!' />
        <img style={{ margin: 0 }} src="./motor_ctrl.png" alt='Flywheel motor controller!' />
        <h2>Flywheel & Motor Controller Design!</h2>
        <p>
          We simulated, designed, & built a 9kg flywheel capable of storing .74Wh of energy. I worked with another student on the design of a 400W 60V inverter for the BLDC motor. See <a href={"https://olincollege.github.io/pie-2021-03/Diskos/MotorController.html"} target="_blank">the project site</a> to learn more!</p>
        <br />
        <img style={{ margin: 0 }} src="./pf_inaction.gif" alt='Particle filter in Action!' />
        <h2>We built a particle filter!</h2>
        <p>
          We wrote some code to help our cleaning robot locate itself in a known physical map using the in built LIDAR sensor and some math. Check out <a href={"/blog/particle-filter"}>the blog post</a> to learn more!</p>
        <br />
        <img style={{ margin: 0 }} src="./pe_buck.jpg" alt='scheduler' />
        <h2>Power Electronics at Olin</h2>
        <p>
          Power Electronics is one of my favorite courses at Olin - we learn the theory of different power conversion architectures - buck, buck boost, flyback - and build up our own printed circuit boards to test and understand behavior of those architectures in the real world!   
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
