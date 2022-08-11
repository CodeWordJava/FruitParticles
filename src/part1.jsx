// import React from "react";
// import Particles from "react-particles";
//   import{ loadFull } from "tsparticles"
import soot from "./assets/soot.png"

// export default function Fruit() {

//   const particlesInit=async (main)=>{
//     console.log (main)
//     await loadFull(main);
// };
// const ParticlesLoaded = (container)=>{
//     console.log(container)

//     return(
//       <Particles
       
          
//           id="tsparticles"
//           init = {particlesInit}
//           loaded ={ParticlesLoaded}
//           options={{
//             "fullScreen": {
//               "enable": true,
//               "zIndex": -1
//           },
           
           
           
           
//             done"detectRetina": true,
//             done"fpsLimit": 60,
//             "interactivity": {
//               "detectsOn": "canvas",
//              " events": {
//                 "onClick": {
//                   "enable": true,
//                   mode: "push"
//                 },
//                 onDiv: {
//                   elementId: "repulse-div",
//                   enable: false,
//                   mode: "repulse"
//                 },
//                 onHover: {
//                   enable: true,
//                   mode: "bubble",
//                   parallax: {
//                     enable: false,
//                     force: 60,
//                     smooth: 10
//                   }
//                 },
//                 resize: true
//               },
//               modes: {
//                 bubble: {
//                   distance: 400,
//                   duration: 2,
//                   opacity: 1,
//                   size: 40,
//                   speed: 3
//                 },
//                 connect: {
//                   distance: 80,
//                   lineLinked: {
//                     opacity: 0.5
//                   },
//                   radius: 60
//                 },
//                 grab: {
//                   distance: 400,
//                   lineLinked: {
//                     opacity: 1
//                   }
//                 },
//                 push: {
//                   quantity: 4
//                 },
//                 remove: {
//                   quantity: 2
//                 },
//                 repulse: {
//                   distance: 200,
//                   duration: 0.4
//                 }
//               }
//             },
//             particles: {
//               color: {
//                 value: "#ffffff"
//               },
//               lineLinked: {
//                 blink: false,
//                 color: "#000",
//                 consent: false,
//                 distance: 150,
//                 enable: false,
//                 opacity: 0,
//                 width: 0
//               },
//               rotate: {
//                 value: 0,
//                 random: true,
//                 direction: "clockwise",
//                 animation: {
//                   enable: true,
//                   speed: 5,
//                   sync: false
//                 }
//               },
//               done move: {
//                 attract: {
//                   enable: false,
//                   rotateX: 600,
//                   rotateY: 1200
//                 },
//                 bounce: false,
//                 direction: "none",
//                 enable: true,
//                 outMode: "bounce",
//                 random: false,
//                 speed: 2,
//                 straight: false
//               },
//               done number: {
//                 density: {
//                   enable: true,
//                   area: 800
//                 },
//                 limit: 0,
//                 value: 80
//               },
//               opacity: {
//                 animation: {
//                   enable: false,
//                   minimumValue: 0.1,
//                   speed: 1,
//                   sync: false
//                 },
//                 random: false,
//                 value: 0.8
//               },
//               done shape: {
//                 character: {
//                   fill: false,
//                   font: "Verdana",
//                   style: "",
//                   value: "*",
//                   weight: "400"
//                 },
//                 image: [
//                   {
//                     src: "https://particles.js.org/images/fruits/apple.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/avocado.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/banana.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/berries.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/cherry.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/grapes.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/lemon.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/orange.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/peach.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/pear.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/pepper.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/plum.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/star.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/strawberry.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/watermelon.png",
//                     width: 32,
//                     height: 32
//                   },
//                   {
//                     src: "https://particles.js.org/images/fruits/watermelon_slice.png",
//                     width: 32,
//                     height: 32
//                   }
//                 ],
//                 polygon: {
//                   nb_sides: 5
//                 },
//                 stroke: {
//                   color: "#000000",
//                   width: 0
//                 },
//                 type: "image"
//               },
//               size: {
//                 animation: {
//                   enable: false,
//                   minimumValue: 0.1,
//                   speed: 40,
//                   sync: false
//                 },
//                 random: false,
//                 value: 16
//               }
//             },
//             polygon: {
//               draw: {
//                 enable: false,
//                 lineColor: "#ffffff",
//                 lineWidth: 0.5
//               },
//               move: {
//                 radius: 10
//               },
//               scale: 1,
//               type: "none",
//               url: ""
//             }
//           })
          
// )}}