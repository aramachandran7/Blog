---
title: Let's build a LIDAR | An exercise in fundamental robotics engineering
date: "2021-01-17T18:31:03.284Z"
description: How I put together my own 360° 2D planar LIDAR scanner (similar to what's found in the Neato XV11 cleaning bot)! ft. GH filters, embedded STM32 programming, and of course, laser scanners. 
---

**Note this project is still a work in progress! Next update will be next Sunday, January  24th :)**

After working with simulated LIDAR's on simulated Neato robots remotely for all of last semester (Olin's [Computational intro to Robotics](comprobo20.github.io/) course), I figured it would be interesting seeing what it takes to build an *actual* lidar scanner over my winter break. 

For this experiment, we'll stick with building a scanner very similar to what Neato Robotics uses on their [XV11 differential drive cleaning bot](https://www.impulseadventure.com/elec/robot-lidar-neato-xv11.html). They use the Revo LDS unit, detailed [in this paper here](https://www.robotshop.com/media/files/PDF/revolds-whitepaper.pdf), which is a 2D planar LIDAR scanner with 360° of resolution. 

The Revo LDS consists of a laser triangulation sensor, spinning on a large enclosed wheel, driven by a small motor + pulley system. The sensor and large disc spin at 10 Hz, and return 360 floating point distance measurments every rotation. All the electronics (including the main microcontroller) are on a single PCB situated on the large revolving pulley.

We will be building *roughly* this entire unit with a few key modifications. 

For reference, here are some similar hobby robotics lidars you can purchase online today. And below are a few decently documented 'DIY Lidar systems' found online. 
- [RP LIDAR A1](https://www.dfrobot.com/product-1125.html)
- [TurtleBot LIDAR](https://emanual.robotis.com/docs/en/platform/turtlebot3/appendix_lds_01/)
- [Electronoobs Project](https://electronoobs.io/tutorial/48#)
- [Work-is-playing LIDAR Project](http://grauonline.de/wordpress/?page_id=1233) 

## System requirements

The end objective is to be able to have a robot navigate around a house at a 'comfortable pace' and map its surroundings in real time using the laser scanner we build here. 

#### General 
- We are trying to design a system that can be easily replicated, improved upon, and used in actual hobby robotics projects in the future. This implies - 
    - An entirely open sourced project
    - Easily manufacturable custom hardware + widely available sensors / tech
    - Compact & contained hardware, quality data output (*not too noisey*), <$100 total cost, and **easy to interface with**

#### Laser Distance Sensor 
- Assuming a casual pace of 3 mph ~ 1.34 m/s, if we want 2 scans/meter (based on the detail in our surroundings), our lidar needs to be spinning at 2.68 Hz
- Our laser distance sensor needs to be able to sample at 360 * 2.68 = ~964 samples / second at least 

#### Motor (I'm not a mechE, cut me some slack)
- We expect an RPM of 120 on the large wheel 
- Given a pulley ratio of 4:1, we expect an RPM of 480 on the small pulley (the one driven by the motor). 
- The required motor torque is dependant on the moment of intertia of the pulley, bearing friction, and slip ring friction.


## Challenge 1 - Triangulation sensors
Laser traingulation sensors work differently than a typical laser based time-of-flight (ToF) sensor. ToF works via sending a pulse of light at a certain wavelength, and observing the time required for the pulse to return. [limitations]

Triangulation systems work by ... 

Triangulation sensors can continuously sample distance data and are only limited by the internal CMOS sensor's sampling rate, while ToF sensors' sampling rates are bottlenecked by the time it takes for each individual pulse to be sent and to return.

However, industrial triangulation sensors are too expensive to be purchased, and hobbyist versions at hobbyist prices don't exist. Revo is the leader in low cost, high sample rate, minimal noise laser triangulation sensors. But despite their documentation in the whitepaper, building a custom Revo LDS isn't easy. 

Implementing complicated high-precision geometry calibration procedures is no fun. Triangulation systems are also super sensitive to even slight manufacturing defects, temperature-based material warping, etc. 3D printed hardware tolerances will not cut it.

So we'll settle on the [TFMini Plus](https://www.sparkfun.com/products/15179), a ToF sensor that samples at up to 1 KHz. This was the fastest sample rate hobby laser distance sensor I could find, and featured a reasonable max scan distance. 

## Challnege 2 - building an encoder 

We have an encoder for our motor + small pulley, but we need one for our large pulley. Measuring  the angular position as close as possible to our end effect will help account for possible failure modes, like the belt slippage.

~~Magnet(s) + hall effect switch~~ 
It needs to be as light as possible. 
A strip of reflective tape + a reflectance sensor. 


## System hardware block diagram 

## Breaking down the embedded code 
Everything that needs to happen, split into 3 core components. Can be accomplished with an FreeRTOS on the stm32. We'll be using the STM32 CubeMXIDE to develop code, and ST-link to flash code over SWD. 


- Recieve LIDAR Scan Data *In Progress* 
    - High frequency (1KHz) data aquisition over serial TTL to STM32's `USART1` 
    - Data saves done via `DMA` for low overhead  
- Publish LIDAR scan data *In Progress*
    - Publish data over USB serial TTL `USART2` connection at desired frequency 
- Estimate large pulley angular position @ scan collection frequency 
    - Use a simple state estimation filter (Alpha / GH filter) to estimate pulley position 
        - Sample motor encoder
        - Sample light sensor via ADC
    - Control motor via PWM based on estimated pulley position

Data is received from the TFMini sensor at 1000 kHz 'frame rate', with data frames looking like this. 

We'll also initialize the sensor and set up params over `USART1`. 

**To be continued!**
Todo @Sunday, 1AM: 
- finalize system hardware diagram + wiring, order 
- setup exact DMA implementation for sensor & string transmit functions for `USART2` terminal data sends 
    - `init_tfmini()`
    - `send_string()`
    - `recieve_string()`
- run isolated tests with both of above with usb ttl converter
- begin freeRTOS implementation + state calculation filter

## Final Parts list

## System software block diagram 

## Conclusion