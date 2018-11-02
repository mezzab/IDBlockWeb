/* eslint-disable */
import React, { Component } from "react";
import Particles from "react-particles-js";
import logo from "./logo.png";
import pepa from "./images.jpeg";
import identidad from "./tuidentidad_logo.png";
import "./App.css";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonShare
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Column, Row } from 'simple-flexbox';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-logo">
          <img src={logo} alt="logo" /> 
        </div>
        <div className="App-abajo-logo"> 
        <AwesomeButton type="primary" size="large">
          About Solution
          </AwesomeButton>{', ,'}
          <AwesomeButton type="primary" size="large">
           About Us
         </AwesomeButton> 
         </div> 
        <Particles params={particlesJson} />
    


        <div>
         <h2 class="header1">Bienvenido a IDBLOCK</h2>
         <h3 class="header2">Sistema de identificación y verificación de identidad única digital</h3>
         
        <Column flexGrow={1}>
        <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1"> Validación digital </h3>
            <img src={identidad} alt="logo" /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1"> Construir perfiles digitales </h3>
            <span> column 2 content </span>
        </Column>
        </Row>

        <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1"> Captar  información </h3>
            <img src={identidad} alt="logo" /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1"> Agilizar los procesos </h3>
            <span> column 2 content </span>
        </Column>
        </Row>
       </Column>


           

         <h2 class="header1">¿Quienes Somos?</h2>

         <img src={pepa} alt="logo" /> 
        
        <div class="media-container-column">
            <div class="row justify-content-center">
                <div class="card p-4 col-12 col-md-6 col-lg-4">
                    <div class="media pb-3">
                        <div class="card-img align-self-center">
                        </div>
                        <div class="media-body">
                            <h4 class="card-title py-2 align-left mbr-fonts-style display-5">
                                Aprender a leer</h4>
                        </div>
                    </div>                
                    <div class="card-box align-left">
                        <p class="mbr-text mbr-fonts-style display-7">Blindle representará palabras mediante su matriz de puntos, y a la vez, reproducirá la palabra en cuestión</p>
                    </div>
                </div>

                <div class="card p-4 col-12 col-md-6 col-lg-4">
                <div class="media pb-3">
                    <div class="card-img align-self-center">
                        <span class="mbr-iconfont mbri-edit" style={{color: 'rgb(118, 118, 118)'}}></span>
                    </div>
                    <div class="media-body">
                        <h4 class="card-title py-2 align-left mbr-fonts-style display-5">
                                Escribir libremente</h4>
                    </div>
                </div>
                    <div class="card-box align-left">
                        <p class="mbr-text mbr-fonts-style display-7">Con Blindle podrás escribir todo lo que desees en braille y sentirlo en tiempo real, para luego almacenarlo en un dispositivo externo.</p>
                    </div>
                </div>

                <div class="card-box align-left">
                        <p class="mbr-text mbr-fonts-style display-7">Blindle te pedirá que escribis una palabra, luego de escribirla verificará si fue escrita correctamente.</p>
                    </div>
                </div>

                
            </div>
          </div>
        </div>
    );
  }
}

export default App;



export const particlesJson = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#3CA9D1"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 80,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: "#3CA9D1",
      opacity: 0.4,
      width: 0
    },
    move: {
      enable: true,
      speed: 7,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 280,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
