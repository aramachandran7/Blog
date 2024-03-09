+++
# This title is used as the og:title on Hugo's internal
# opengraph structured data template on the home page.
# See https://ogp.me/ and https://gohugo.io/templates/internal#open-graph.
title = "adinocap"
+++

* * *

### _hi, adi here. welcome to my little space on the internet. I'm glad you came. a quick bio about me:_

  

— currently or have recently been a: **student, designer, engineer, cyclist, hitchhiker, pedagogist, & electronic musician.**

— graduated from **[The Olin College of Engineering](https://www.olin.edu/)** in May of 2023.

— currently get paid to work on a fast-paced team of \*good humans\* to design circuits, debug R&D photovoltaic systems, and learn Silicon Valley corporate engineering practices at **[Lunar Energy](https://www.lunarenergy.com/)**, a (residential) distributed clean energy & storage hardware startup of about 300 in the SF Bay area.

— live in a co-living of 7 wonderful humans in the Mission, in San Francisco.

— interested in learning more about: **science (climate/climate change, optics, wave physics, matsci, neuro), anthropology, networks, house music, statistics, acoustics, & the art of communication.**

— would love to chat, grab a beer, or go on a hike. i can be reached at [lego.r.ramachandran@gmail.com](mailto:lego.r.ramachandran@gmail.com?subject=ContactAdi).

 
[Download resume here.](./adi_ramachandran_resume.pdf) 

[Check out my blog here.](/blog/)

* * *

### _cool things I've performed, explored, or built:_


{{< youtube R1PZEOu1IkM >}}


_a journey on two wheels through a world designed and centered around automobiles, featuring kind strangers, mediocre michigan road infrastructure, all across the corn-filled terrain of the American midwest._

![ICE poster](./ICE.png)

_in a holistic exercise in graphic design, interviewing, pedagogical study, & data viz/synthesis, [I made a graphic](./ICE_TTS_poster_rev0.pdf) and told a story of the pedagogical paradigm of **impact centered education** within olin college, and laid out a vision and next steps for Olin as they move to adopt this style of course into their strategic roadmap._


![amp picture](./amp.jpg)

_an exploration into electronics for audio: designed and implemented a 25W/ch class D audio amplifier with a GaN power stage, featuring an analog volume adjustment & EQ circuit. schematic, calculations, & board files, [can be found here](https://docs.google.com/document/d/1xZqjKs2XpMvngJh-4kl8GRmEyWWov9hn_stp4wfZbEA/edit?usp=sharing)._


![amp picture](./grid.png)

_our senior entrepreneurship capstone project at olin: a thorough dive and market analysis into the electric grid, from a 'climate tech perspective'. See full presentation [here](https://docs.google.com/presentation/d/1YE7QYp4rm9vfoFstPwRXlfOqwUGF5LlWJRXhHqnUUbI/edit?usp=sharing)._

{{< youtube id="O7dE5twHRZo" start=4701 >}}

_performing some of my own groovy house & acid tracks live on my drum machine, the Maschine Mikro Mk3, for NoiseBridge Makerspace's monthly electronic music open mic. Skip to 1:18:18, & listen with headphones!_

* * *

### _some older projects below._


![step printed circuit board](./step_pcb.jpg)

#### Smart Ring Wearable PCB - low power, 12x20mm footprint

In STEP, an insane experimental course that Olin offered in spring '22, we designed and validated a complete embedded system to be used in a two finger smart ring. The ring's accelerometer would transmit gestures over bluetooth to allow for **screen free control** of a user's smartphone, which is particularly relevant to the blind and visually impaired community (blog post coming soon!).

The hardware itself was straightforward, designed around the `STM32WB55xx` uC with a 6 axis `LSM6DSOxx` acceleromter/gyro, a 2.4Ghz BLE chip antenna, and a `BQ297xx` single cell battery protection IC. Designing within such a small footprint and with the power consumption constraints of a wearable was quite exciting. See [Github page](https://github.com/OlinSTEP/step-devices/tree/main/projects/ring/) for board files.

{{< youtube Khu0GxKtttg >}}

#### Check out our autonomous maze solving differential drive robot!

We built a robot to complete the MicroMouse Competition! Our custom differential drive bot autonomously navigates and solves a 16x16 maze, returns to its starting point by generating a path from its understanding of the maze, and pathplans an optimized route for a final thrilling speedrun to the center. Check out [our Github](https://github.com/aramachandran7/micro_mouse_final) to learn more! Project features ROS, Gazebo, and Python, with graph theory, path planning, and high speed robot motion control.


![OEM image](./adi_form.jpg) ![telemetry block diagram](./lvbms.jpg)

#### Olin Electric Motorsports (Formula SAE Electric)

OEM is our Olin's Formula SAE team that works to build an electric racecar every year!

_Testing Subteam Lead_

I previously **led the Testing Subteam** where I managed and architected projects like our Hardware in the Loop system, our Battery Management System testing rig, and more!

_Low Voltage battery management system_

I designed & validated the battery management system for our car's LV bus featuring a **bidirectional load switch in the high current path, voltage, current, and temperature sense for the 4s6p pack, & passive cell balancing**! The PCB is designed around the `LTC6810` ASIC - I also configured the custom battery pack! Check out the [github](https://github.com/olin-electric-motorsports/MKV-Boards/tree/main/Boards/lv_bms_2/lv_bms_2) for more info.

_Vehicle telemetry software_

During my second year on OEM, I wrote firmware for and built the data pipeline behind our team's **new telemetry system,** to live-stream sensor data from the vehicle's CAN bus for visualization, logging, and analysis on the sidelines. Check out the [design review slides](https://docs.google.com/presentation/d/1UC-YDQk7SpxMN6GNWE3kg2BDyTvGPCxV-E1GIj7U7aE/edit#slide=id.ga6a6f370e1_0_12) for more info.


![Our Corewars Implementation!](./test2.gif)

#### Corewars

We rebuilt Corewars and used it to teach computer science students in India! (We also reached the front page of [Hacker News](https://news.ycombinator.com/item?id=25549290)!)

This is one of my favorite projects, and getting to actually deploy it to a university in India in January 2020 was incredible. You can see the final product above! Read more about our work [at our full blog post](/blog/corewars-in-india)!


![Flywheel!](./flywheel.jpg) ![Flywheel motor controller!](./motor_ctrl.png)

#### Flywheel & Motor Controller Design!

We simulated, designed, & built a 9kg flywheel capable of storing .74Wh of energy. I worked with another student on the design of a 400W 60V inverter for the BLDC motor. See [the project site](https://olincollege.github.io/pie-2021-03/Diskos/MotorController.html) to learn more!


![Particle filter in Action!](./pf_inaction.gif)

#### We built a particle filter!

We wrote some code to help our cleaning robot locate itself in a known physical map using the in built LIDAR sensor and some math. Check out [the blog post](/blog/particle-filter) to learn more!


![scheduler](./pe_buck.jpg)

#### Power Electronics at Olin

Power Electronics is one of my favorite courses at Olin - we learn the theory of different power conversion architectures - buck, buck boost, flyback - and build up our own printed circuit boards to test and understand behavior of those architectures in the real world!

* * *

_I've also worked on a bunch of other projects, including ..._

*   Attending the 2016 White House Science Fair for a project on basement flooding.
*   Building a single cycle CPU (capable of running Assembly) in behavioral Verilog.
*   3D Modeling, CFD simulating, constructing & testing a [feather articulating RC ornithopter](https://photos.app.goo.gl/PoskhKKoH933hUgC7)!
*   co-founding and running a successful [college essay writing workshop](https://junipercollegeprep.com/)
*   winning an MIT COVID-19 hackathon
*   Leading Assembly on my high school robotics [FRC team](https://team3061.org/)!

See my [github](https://github.com/aramachandran7/) or read my blog for more, below.

* * *
