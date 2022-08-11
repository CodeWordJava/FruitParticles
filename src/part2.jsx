
//   import Particles from "react-tsparticles";
//   import{ loadFull } from "tsparticles"
//   import { useCallback } from "react"
  
//   export default function Particle(){
//       const particlesInit=useCallback(async(engine)=>{
//         console.log(engine);
//         await loadFull(engine);
//     },[]);
//       return(
//           <Particles
//           id="tsparticles"
//           init = {particlesInit}
          
          
//           options={{
//             "fullScreen": {
//                 "enable": true,
//                 "zIndex": -1
//             },
//             "fpsLimit": 60,
//             "particles": {
                
//                 "number": {
//                     "limit":0,
//                     "value":80,
//                     "density": {
//                         "enable": true,
//                         "area": 800
//                     }
//                 },
//                 "color": {
//                     "value": ["#ffffff"]
//                 },
//                 "lineLinked": {
//                                    " blink": false,
//                                     "color": "#000",
//                                     "consent": false,
//                                     "distance": 150,
//                                     "enable": false,
//                                     "opacity": 0,
//                                     "width": 0
//                 },
//                 "rotate":{
//                     "value": 0,
//                     "random":true,
//                     "direction":"clockwise",
//                     "animation":{
//                         "enable":true,
//                         "speed":5,
//                         "sync":false
//                     }
//                 },
//                 "shape": {
//                     "type": "circle"
//                 },
            
//                 "opacity": {
//                     "value": 1,
//                     "random": {
//                         "enable": false,
//                         "value": 0.8
//                     },
//                     "animation": {
//                         "enable": false,
//                         "speed": 1,
//                         "minimumValue": 0.1,
//                         "sync": false
//                     },
//                 "shape":{
//                     "character":{
//                         "fill": 0,
//                         "font": "Verdana",
//                         "style": "",
//                        "value": "*",
//                      "weight": "400",
//                       },
//                       "image": [
//                         {
//                             "src": "https://particles.js.org/images/fruits/apple.png",
//                             "width": 32,
//                             "height": 32
//                              },
//                         {
//                             "src": "https://particles.js.org/images/fruits/avocado.png",
//                             "width": 32,
//                             "height": 32
//                              },
//                         {
//                             "src": "https://particles.js.org/images/fruits/banana.png",
//                             "width": 32,
//                             "height": 32
//                             },
//                         {
//                             "src": "https://particles.js.org/images/fruits/berries.png",
//                             " width": 32,
//                             " height": 32
//                             },
//                         {
//                             "src": "https://particles.js.org/images/fruits/cherry.png",
//                             "width": 32,
//                             "height": 32
//                             },
//                          {
//                             "src": "https://particles.js.org/images/fruits/grapes.png",
//                             "width": 32,
//                              "height": 32
//                             },
//                         {
//                             "src": "https://particles.js.org/images/fruits/lemon.png",
//                             "width": 32,
//                             "height": 32
//                             },
//                         {
//                             "src": "https://particles.js.org/images/fruits/orange.png",
//                             "width": 32,
//                             "height": 32
//                             },
//                         {
//                             "src": "https://particles.js.org/images/fruits/peach.png",
//                             "width": 32,
//                             "height": 32
//                          },
//                         {
//                             "src": "https://particles.js.org/images/fruits/pear.png",
//                             "width": 32,
//                             "height": 32
//                             },
//                         {
//                             "src": "https://particles.js.org/images/fruits/pepper.png",
//                             "width": 32,
//                             "height": 32
//                             },
//                         {
//                            " src": "https://particles.js.org/images/fruits/plum.png",
//                             "width": 32,
//                             "height": 32
//                             },
//                         {
//                             "src": "https://particles.js.org/images/fruits/star.png",
//                             "width": 32,
//                             "height": 32
//                             },
//                         {
//                             "src": "https://particles.js.org/images/fruits/strawberry.png",
//                             "width": 32,
//                             "height": 32
//                             },
//                         {
//                             "src": "https://particles.js.org/images/fruits/watermelon.png",
//                             "width": 32,
//                              "height": 32
//                               },
//                         {
//                             "src": "https://particles.js.org/images/fruits/watermelon_slice.png",
//                             "width": 32,
//                             "height": 32
//                                 }
//                             ],
//                 "polygon": {
//                         "nb_sides": 5
//                  },
//                 "stroke":{
//                     "color":"#000000",
//                     "width": 0
//                 },
//                 "type":"image"
//                 },
//                 "size": {
                    
//                     "random": {
//                         "enable": true,
//                         "minimumValue": 30
//                     },
//                     "animation": {
//                         "enable": false,
//                         "speed": 40,
//                         "minimumValue": 0.1,
//                         "sync": false
//                     },
//                     "polygon": {
//                        "draw": {
//                         "enable": false,
//                         "lineColor": "#ffffff",
//                         "lineWidth": 0.5
//                         },
//                         "move": {
//                             "radius": 10
//                         },
//                         "scale": 1,
//                         "type": "none",
//                         "url": ""
//                     },
//                 },
//                 "move": {
//                     "attract":{
//                         "enable":0,
//                         "rotateX":600,
//                         "rotateY":1200,
//                     },
//                     "bounce":false,
//                     "enable":1,
//                     "direction": "none",
//                     "outMode":"bounce",
//                     "random": false,
//                     "straight": false,
//                     "speed":2,
//                 },
//             },//
//             "detectRetina": true,
//             "background": {
//                 "color": "#0000",
//                 "image": "",
//                 "position": "50% 50%",
//                 "repeat": "no-repeat",
//                 "size": "cover"
//             }
//     }
//         }}
//         />
//     );
//   };    

    