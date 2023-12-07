import Terminal from "../components/TerminalComponent/Terminal";
import Image from "next/image";
import Estudios from "../components/EstudiosComponent/Estudios";
import Animation from "../components/AnimationCode/Animacion";

export default function Page() {
  return (
    <main className="h-min-content p-4">
      <div className='w-full h-full grid grid-rows-3 grid-cols-4 gap-4'>
        
        <div className="row-span-3 col-span-1">
          <Terminal command='Show proyects'>
            <div className='w-full h-full grid items-center justify-center'>
                <p className="text-center w-full">
                  A lo largo de mi trayectoria e tomado diferentes cursos y diplomados, los cuales me han ayudado a mejorar mis habilidades y conocimientos.
                </p>
                <div className="flex items-center justify-center w-full h-auto">
                  <Animation/>
                </div>
            </div>
          </Terminal>
        </div>

        <div className="col-span-3 row-span-3">
          <Terminal command='Show proyects'>
            <div className='w-full h-full grid items-center justify-center gap-4'>
              <Estudios titulo="CETIS 26" descripcion="En esta institucion estudie la carrera de 'Tecnico en programación'" url="https://www.cetis26.edu.mx" titleBtn="Titulo" nameIcon="deploy"/>
              <Estudios titulo="UTTT" descripcion="Actualmente me encuentro estudionado la Ingenieria en Desarrollo de Software Multiplataforma" url="https://www.uttt.edu.mx" titleBtn="Titulo" nameIcon="deploy"/>
              <Estudios titulo="Curso FreecodeCamp" descripcion="Termine el curso en: Diseño web responsivo con CSS" url="https://google.com" titleBtn="Titulo" nameIcon="deploy"/>
              <Estudios titulo="Curso FreecodeCamp" descripcion="Termine el curso en: Estructuras y algoritmos con JavaScript" url="https://google.com" titleBtn="Titulo" nameIcon="deploy"/>
            </div>
          </Terminal>
        </div>
      </div>
    </main>
  );  
}