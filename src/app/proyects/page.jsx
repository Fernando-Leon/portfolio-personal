'use client';
import React from 'react';
import Terminal from "../components/TerminalComponent/Terminal";
import StackTecnologies from "../components/StackTecnologiesComponent/StackTecnologies";
import ItemProyect from "../components/ItemProyectComponent/ItemProyect";
import AboutProyect from "../components/AboutProyectComponent/AboutProyect";
import { useEffect, useState } from "react";


export default function Page() {

  const response = {
    "proyects": [
      {
        "title": "Tema para Visual Studio Code",
        "img": "/images/proyects/vscodetheme.png",
        "description": "Tema para visual studio code, con colores personalizados, el tema esta disponible en el marketplace de visual studio code",
        "tecnologies": [
          "css",
          "js"
        ],
        "github": "https://github.com/Fernando-Leon/vscode-extencion-theme-1",
        "deploy": "https://marketplace.visualstudio.com/items?itemName=layon-extensions.layonuno"
      },
      {
        "title": "Entrenamiento Fisico APP",
        "img": "/images/proyects/appandroid.png",
        "description": "App para entrenamiento fisico, desarollada con Android Studio, fue un proyecto de la preparatoria la aplicacion consiste en proporcionar a las persosnas rutinas de ejercicios para realizar en casa",
        "tecnologies": [
          "java",
        ],
        "github": "https://github.com/Fernando-Leon/Proyecto_Final_APP_Entrenamiento_Fisico",
        "deploy": null
      },
      {
        "title": "Consumo de una api Clima",
        "img": "/images/proyects/clima.png",
        "description": "Consumo de una api de clima con peticiones axios",
        "tecnologies": [
          "react",
          "html",
          "css",
          "js"
        ],
        "github": "https://github.com/Fernando-Leon/Weather-App",
        "deploy": "https://fernando-leon.github.io/Weather-App/"
      },
      {
        "title": "Memorama",
        "img": "/images/proyects/memorama.png",
        "description": "Videojuego de memorama clasico, realizado con vanilla js",
        "tecnologies": [
          "html",
          "css",
          "js"
        ],
        "github": "https://github.com/Fernando-Leon/memooram-vanilla-js",
        "deploy": "https://fernando-leon.github.io/memooram-vanilla-js/"
      }
    ]
  }

  const [data, setData] = useState( response.proyects[0] );

  const handleClick = (title, img, description, tecnologies, github, deploy) => {
    setData(prevState => ({
      ...prevState,
      title: title,
      img: img,
      description: description,
      tecnologies: tecnologies,
      github: github,
      deploy: deploy
    }));
  }

  let listProyects = [];

  response.proyects.forEach((proyect) => {
    listProyects.push(<ItemProyect title={proyect.title} img={proyect.img} description={proyect.description} github={proyect.github} onClick={() => handleClick(proyect.title, proyect.img, proyect.description, proyect.tecnologies, proyect.github, proyect.deploy)}/>);
  });



  return (
    <main className="h-min-content p-4">
      <div className='w-full h-full grid grid-rows-4 grid-cols-6 gap-4'>
        
        <div className="row-span-4 col-span-4">
          <Terminal command='Show proyects'>
            <div className="w-full flex items-center h-full">
              <div className='w-full grid grid-cols-2 gap-4 min-w-full overflow-x-hidden scrollbar-hide min-h-1/2' style={{ maxHeight: '650px'}}>
                { listProyects }
              </div>
            </div>
          </Terminal>
        </div>

        <div className="row-span-3 col-span-2">
          <Terminal command='Show proyects'>
            <div className='w-full h-full grid items-center'>
              <AboutProyect title={data.title} img={data.img} description={data.description} github={data.github} deploy={data.deploy} />
            </div>
          </Terminal>
        </div>

        <div className="col-span-2">
          <Terminal command='Show tecnologies usinged'>
            <div className='w-full h-full grid gap-10 items-center'>
              <StackTecnologies stack={data.tecnologies} />
            </div>
          </Terminal>
        </div>
      </div>
    </main>
  );
}