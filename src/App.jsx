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
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Column, Row } from 'simple-flexbox';
import escaneaDNI from "./EscaneaDni.png"
import ingresaDatos from "./ingresaDatos.png"
import selfie from "./selfie.png"
import validamos from "./validamos.png"
import validation from "./Exact-Validation-Rubber-Stamp.png"
import profile from "./C__fakepath_profile.png"
import proceso from "./icon-process-300x225.png"
import marcos from "./C__fakepath_Captura de pantalla de 2018-11-03 12-44-46.png"
import tincho from "./C__fakepath_tincho.png"


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-logo">
          <img src={logo} alt="logo" /> 
        </div>
        <div className="Buttons-container"> 
          <AwesomeButton className={"Button"} type="primary" size="large">
            About Solution
          </AwesomeButton>
          <AwesomeButton className={"Button"} type="primary" size="large">
            About Us
          </AwesomeButton>   
        </div> 

        <Particles className={"Particles"} params={particlesJson} ></Particles>
        


        <div>
         <h2 className="header1">BIENVENIDO A IDBLOCK</h2>
         <h3 className="header2">SISTEMA DE IDENTIFICACIÓN Y VERIFICACIÓN DE IDENTIDAD ÚNICA DIGITAL</h3>
         

        <div class="d-flex justify-content-around">
        <Row>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1"><img className="resize" src={checkBlue}/>Validación digital </h3>
            <img className="resizeValidation" src={validation} alt="logo" /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1"><img className="resize" src={checkBlue}/> Construir perfiles digitales </h3>
            <img className="resizeProfile" src={profile} /> 
        </Column>
        </Row>
 
        <Row>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1"><img className="resize" src={checkBlue}/> Captar  información </h3>
    
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1">  <img className="resize" src={checkBlue}/> Agilizar los procesos </h3>
            <img className="resizeProceso" src={proceso} /> 
        </Column>
        </Row>
        </div>
     


        <h3 className="header2">PASO A PASO</h3>
        <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1">1. Ingresá tus Datos </h3>
            <img className= "resizeDatos" src={ingresaDatos} alt="logo" /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1"> 2. Escaneá DNI </h3>
            <img className= "resizeDNI" src={escaneaDNI} alt="logo" /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1"> 3. Selfie </h3>
            <img className= "resizeSelfie" src={selfie} alt="logo" /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1">  4. Validamos </h3>
            <img className= "resizeValidamos" src={validamos} /> 
        </Column>
        </Row>


           

         <h2 className="header1">¿QUIENES SOMOS?</h2>

        <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1">Marcos Mezzabotta </h3>
            <img className= "resizeFotos" src={marcos}/> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1">Martín Bec</h3>
            <img className= "resizeFotos" src={tincho} /> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1">Franco Scagnetti</h3>
            <img className= "resizeSelfie" src={selfie} alt="logo" /> 
        </Column>
        </Row>

       <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1">Santiago Segundo Bermejo</h3>
            <img className= "resizeFotos" src={marcos}/> 
        </Column>
        <Column flexGrow={1} horizontal='center'>
            <h3 className="col1">Federico Menendez</h3>
            <img className= "resizeDNI" src={escaneaDNI} alt="logo" /> 
        </Column>
        </Row>
        
        

                
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
        value_area: 1500
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
