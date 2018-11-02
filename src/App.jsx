/* eslint-disable */
import React, { Component } from "react";
import Particles from "react-particles-js";
import logo from "./logo.png";
import pepa from "./images.jpeg";
import identidad from "./tuidentidad_logo.png";
import checkBlue from './Blue_check.svg';
import "./App.css";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonShare
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Column, Row } from 'simple-flexbox';
import escaneaDNI from "./EscaneaDni.png"
import ingresaDatos from "./ingresaDatos.png"
import selfie from "./selfie.png"
import validamos from "./validamos.png"
import check from "./lupa.jpeg"




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
         <h2 class="header1">Bienvenido a IdBlock</h2>
         <h3 class="header2">Sistema de identificación y verificación de identidad única digital</h3>
         
        <Column flexGrow={1}>
        <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1">  <img class="resize" src={checkBlue}/>  Validación digital </h3>
            <img src={check} /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1">  <img class="resize" src={checkBlue}/> Construir perfiles digitales </h3>
        </Column>
        </Row>

        <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1">  <img class="resize" src={checkBlue}/>  Captar  información </h3>
            <img src={identidad} alt="logo" /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1">  <img class="resize" src={checkBlue}/> Agilizar los procesos </h3>
            <span> column 2 content </span>
        </Column>
        </Row>
       </Column>


        <h3 class="header2">Paso a Paso</h3>
        <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1">1. Ingresá tus Datos </h3>
            <img class= "resizeDatos" src={ingresaDatos} alt="logo" /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1"> 2. Escaneá DNI </h3>
            <img class= "resizeDNI" src={escaneaDNI} alt="logo" /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1"> 3. Selfie </h3>
            <img class= "resizeSelfie" src={selfie} alt="logo" /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 class="col1">  4. Validamos </h3>
            <img class= "resizeValidamos" src={validamos} /> 
        </Column>
        </Row>


           

         <h2 class="header1">¿Quienes Somos?</h2>

         <img src={pepa} alt="logo" /> 
        

                
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
