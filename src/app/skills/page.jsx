import Terminal from "../components/TerminalComponent/Terminal";
import Image from "next/image";
import Icono from "../components/IconoComponent/Icono";
import ReactSvg from "../components/icons/react";
import Bar from "../components/BarComponent/Bar";
import Animation from "../components/AnimationCode/Animacion";

export default function Page() {
  return (
    <main className="h-min-content p-4">
      <div className='w-full h-full grid grid-rows-3 grid-cols-6 grid-flow-col gap-4'>
        
        <div className="row-span-3 col-span-2">
          <Terminal command='Show descipcion'>
            <div className='w-full h-full grid items-center'>
              <p>
              A lo largo de mi trayecto como estudiante de programación, he utilizado diversas herramientas y lenguajes de programación para forjar una sólida base en el mundo del desarrollo web. Mi pasión por la tecnología y mi deseo constante de aprender me han llevado a explorar y dominar un amplio espectro de tecnologías web, lo que me ha permitido convertirme en un desarrollador versátil y apasionado.
              </p>
              <div className="flex items-center justify-center w-full">
                <Animation />
              </div>
            </div>
          </Terminal>
        </div>

        <div className="col-span-4 row-span-3">
          <Terminal command='Show proyects'>
            <div className='min-w-full h-full grid items-center' style={{ gridTemplateRows: '7% 93%'}}>
                <p>Tecnologias que estoy aprendiendo</p>
                <div className="min-w-full overflow-x-hidden scrollbar-hide max-h-1/2" style={{ maxHeight: '600px'}}>
                  <Bar name="Git" icon="git" level='base'/>
                  <Bar name="HTML" icon="html" level='intermedio'/>
                  <Bar name="CSS 3" icon="css" level='avanzado'/>
                  <Bar name="React" icon="react" level='avanzado'/>
                  <Bar name="Vue" icon="vue" level='experto'/>
                  <Bar name="Linux" icon="linux" level='base'/>
                  <Bar name="Windows" icon="windows" level='base'/>
                  <Bar name="Windows" icon="windows" level='base'/>
                  <Bar name="Windows" icon="windows" level='base'/>
                  <Bar name="Windows" icon="windows" level='base'/>
                  <Bar name="Windows" icon="windows" level='base'/>
                  <Bar name="Windows" icon="windows" level='base'/>
                  <Bar name="Windows" icon="windows" level='base'/>
                </div>
            </div>
          </Terminal>
        </div>

      </div>
    </main>
  );
}