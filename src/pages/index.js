import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
// import downloadFile from "../"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "adinocap"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `Adi Ramachandran`, `Aditya Ramachandran`, `adinocap`, `adi no cap`]}
        />
        {/* <img style={{ margin: 0 }} src="./mb_profile.jpg" alt='profile' /> */}

        <p></p>
        <h3><i>hi, adi here. welcome to my little space on the internet. I'm glad you came. a quick bio about me: </i>
           {/* a quick bio about me: {" "} */}
          {/* <span role="img" aria-label="wave emoji">
            👋
          </span> */}
        </h3>
        {/* <h3><i>a quick bio about me:</i> </h3> */}
        <p></p>
        <p></p>

        <p> — currently or have recently been a: <b>student, designer, engineer, cyclist, hitchhiker, pedagogist, & electronic musician.</b> </p>
        <p></p>


          <p> — graduated from <b><a href={"https://www.olin.edu/"} target="_blank">The Olin College of Engineering</a></b> in May of 2023. </p>
          <p> — currently get paid to work on a fast-paced team of *good humans* to design circuits, debug R&D photovoltaic systems, and learn Silicon Valley corporate engineering practices at <b><a href={"https://https://www.lunarenergy.com/"} target="_blank">Lunar Energy</a></b>, a (residential) distributed clean energy & storage hardware startup of about 300 in the SF Bay area.</p>
          <p> — live in a co-living of 7 wonderful humans in the Mission, in San Francisco. </p>
        <p> — interested in learning more about: <b>science (climate/climate change, optics, wave physics, matsci, neuro), anthropology, networks, house music, statistics, acoustics, & the art of communication. </b></p>
          <p> — would love to chat, grab a beer, or go on a hike. i can be reached at <a href="mailto:lego.r.ramachandran@gmail.com?subject=ContactAdi">lego.r.ramachandran@gmail.com</a>. </p>
        {/* <p>I've worked internships in EE and firmware at <u><b> <a href={"https://tesla.com/"} target="_blank">Tesla</a>, <a href={"https://momentus.space/"} target="_blank">Momentus</a>, & <a href={"https://www.acoustic-wells.com/"} target="_blank">Acoustic Wells</a></b></u>. Scroll down to see my <b>highlighted work</b>!</p> */}
        <a href={"./adi_ramachandran_resume.pdf"} download>
          <Button marginTop="35px" marginBottom="35px" >Download resume here. </Button>
        </a>
        <Link to="/blog/">
          <Button marginTop="35px" marginBottom="35px" >Check out my blog here.</Button>
        </Link>
        <hr />
        <h3> <i> cool things I've performed, explored, or built:</i> </h3>
        <br />
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/R1PZEOu1IkM?si=wilcBdUfAmcUcZp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p><i>a journey on two wheels through a world designed and centered around automobiles, featuring kind strangers, mediocre michigan road infrastructure, all across the corn-filled terrain of the American midwest.</i></p>
        {/* <h2> bikepacking chicago to detroit: the movie </h2> */}

        
        {/* <p>can an undergraduate university, rooted in project based learning, within the temporal construct of semesters, teach students how to perceive and enact systemic change? Well, shit. Olin is trying, and here's how well it was working out, as of SP2023. </p> */}
        <img style={{ margin: 0 }} src="./ICE.png" alt='ICE poster' />        
        <p><i>in a holistic exercise in graphic design, interviewing, pedagogical study, & data viz/synthesis, <a href={"./ICE_TTS_poster_rev0.pdf"} download>I made a graphic</a> and told a story of the pedagogical paradigm of <b>impact centered education</b> within olin college, and laid out a vision and next steps for Olin as they move to adopt this style of course into their strategic roadmap.</i></p>
        <br />
        
        
        <img style={{ margin: 0 }} src="./amp.jpg" alt='amp picture' />        
        <p><i> an exploration into electronics for audio: designed and implemented a 25W/ch class D audio amplifier with a GaN power stage, featuring an analog volume adjustment & EQ circuit. schematic, calculations board files, <a href={"https://docs.google.com/document/d/1xZqjKs2XpMvngJh-4kl8GRmEyWWov9hn_stp4wfZbEA/edit?usp=sharing"} target="_blank">can be found here</a>.</i></p>

        <br />
        <img style={{ margin: 0 }} src="./grid.png" alt='amp picture' />        
        <p><i>our senior entrepreneurship capstone project at olin: a thorough dive and market analysis into the electric grid, from a 'climate tech perspective'. See full presentation <a href={"https://docs.google.com/presentation/d/1YE7QYp4rm9vfoFstPwRXlfOqwUGF5LlWJRXhHqnUUbI/edit?usp=sharing"} target="_blank">here</a>.</i></p>
        <br />
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/O7dE5twHRZo?si=Gv27PVVcEsSisvna&amp;start=4701" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p><i>performing some of my own groovy house & acid tracks live on my drum machine, the Maschine Mikro Mk3, for NoiseBridge Makerspace's monthly electronic music open mic. Listen with headphones!</i></p>
        <br />
        <hr />
        <h3><i>some older projects below.</i></h3>
        
        <br />

        <img style={{ margin: 0 }} src="./step_pcb.jpg" alt='step printed circuit board' />
        <h4>Smart Ring Wearable PCB - low power, 12x20mm footprint </h4>
        <p>
          In STEP, an insane experimental course that Olin offered in spring '22, we designed and validated a complete embedded system to be used in a two finger smart ring. The ring's accelerometer would transmit gestures over bluetooth to allow for <b>screen free control</b> of a user's smartphone, which is particularly relevant to the blind and visually impaired community (blog post coming soon!). 
        </p>
        <p> 
          The hardware itself was straightforward, designed around the <code>STM32WB55xx</code> uC with a 6 axis <code>LSM6DSOxx</code> acceleromter/gyro, a 2.4Ghz BLE chip antenna, and a <code>BQ297xx</code> single cell battery protection IC. Designing within such a small footprint and with the power consumption constraints of a wearable was quite exciting. See <a href={"https://github.com/OlinSTEP/step-devices/tree/main/projects/ring/"} target="_blank">Github page</a> for board files. 
        </p>
        <br />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Khu0GxKtttg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h4>Check out our autonomous maze solving differential drive robot!</h4>
        <p>We built a robot to complete the MicroMouse Competition! Our custom differential drive bot autonomously navigates and solves a 16x16 maze, returns to its starting point by generating a path from its understanding of the maze, and pathplans an optimized route for a final thrilling speedrun to the center. Check out <a href={"https://github.com/aramachandran7/micro_mouse_final"} target="_blank">our Github</a> to learn more! Project features ROS, Gazebo, and Python, with graph theory, path planning, and high speed robot motion control.</p>
        <br />
        <img style={{ margin: 0 }} src="./adi_form.jpg" alt='OEM image' />
        <img style={{ margin: 0 }} src="./lvbms.jpg" alt='telemetry block diagram' />
        <h4>Olin Electric Motorsports (Formula SAE Electric)</h4>
        <p>OEM is our Olin's Formula SAE team that works to build an electric racecar every year! </p>
        <p><i>Testing Subteam Lead</i></p>
        <p>
          I previously <b>led the Testing Subteam</b> where I managed and architected projects like our Hardware in the Loop system, our Battery Management System testing rig, and more!
        </p>
        <p><i>Low Voltage battery management system</i></p>
        <p>
          I designed & validated the battery management system for our car's LV bus featuring a <b>bidirectional load switch in the high current path, voltage, current, and temperature sense for the 4s6p pack, & passive cell balancing</b>! The PCB is designed around the <code>LTC6810</code> ASIC - I also configured the custom battery pack! Check out the <a href={"https://github.com/olin-electric-motorsports/MKV-Boards/tree/main/Boards/lv_bms_2/lv_bms_2"} target="_blank">github</a> for more info. 
        </p>        
        <p><i>Vehicle telemetry software</i></p>
        <p>
          During my second year on OEM, I wrote firmware for and built the data pipeline behind our team's <b> new telemetry system,</b> to live-stream sensor data from the vehicle's CAN bus for visualization, logging, and analysis on the sidelines. Check out the <a href={"https://docs.google.com/presentation/d/1UC-YDQk7SpxMN6GNWE3kg2BDyTvGPCxV-E1GIj7U7aE/edit#slide=id.ga6a6f370e1_0_12"} target="_blank">design review slides</a> for more info. 
        </p>
        <br />
        <img style={{ margin: 0 }} src="./test2.gif" alt='Our Corewars Implementation!' />
        <h4>Corewars</h4>
        <p>
          We rebuilt Corewars and used it to teach computer science students in India! (We also reached the front page of <a href={"https://news.ycombinator.com/item?id=25549290"} target="_blank">Hacker News</a>!)  
        </p>
        <p> 
        </p>
        <p>This is one of my favorite projects, and getting to actually deploy it to a university in India in January 2020 was incredible. You can see the final product above! Read more about our work <a href={"/blog/corewars-in-india"}>at our full blog post</a>!</p>
        <br />
        <img style={{ margin: 0 }} src="./flywheel.jpg" alt='Flywheel!' />
        <img style={{ margin: 0 }} src="./motor_ctrl.png" alt='Flywheel motor controller!' />
        <h4>Flywheel & Motor Controller Design!</h4>
        <p>
          We simulated, designed, & built a 9kg flywheel capable of storing .74Wh of energy. I worked with another student on the design of a 400W 60V inverter for the BLDC motor. See <a href={"https://olincollege.github.io/pie-2021-03/Diskos/MotorController.html"} target="_blank">the project site</a> to learn more!</p>
        <br />
        <img style={{ margin: 0 }} src="./pf_inaction.gif" alt='Particle filter in Action!' />
        <h4>We built a particle filter!</h4>
        <p>
          We wrote some code to help our cleaning robot locate itself in a known physical map using the in built LIDAR sensor and some math. Check out <a href={"/blog/particle-filter"}>the blog post</a> to learn more!</p>
        <br />
        <img style={{ margin: 0 }} src="./pe_buck.jpg" alt='scheduler' />
        <h4>Power Electronics at Olin</h4>
        <p>
          Power Electronics is one of my favorite courses at Olin - we learn the theory of different power conversion architectures - buck, buck boost, flyback - and build up our own printed circuit boards to test and understand behavior of those architectures in the real world!   
        </p>
        <hr />
        <p>
          <i>I've also worked on a bunch of other projects, including ... </i> 
          <br/>
          <ul>
            <li>Attending the 2016 White House Science Fair for a project on basement flooding.</li>
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
