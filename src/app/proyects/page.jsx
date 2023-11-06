import Terminal from "../components/TerminalComponent/Terminal";
import Image from "next/image";
import StackTecnologies from "../components/StackTecnologiesComponent/StackTecnologies";
import ItemProyect from "../components/ItemProyectComponent/ItemProyect";

export default function Page() {
  
  const proyecto = {
    title: 'Tema para Visual Studio Code',
    img: '/images/proyects/p2.png'
  };

  return (
    <main className="h-min-content p-4">
      <div className='w-full h-full grid grid-rows-4 grid-cols-6 gap-4'>
        
        <div className="row-span-4 col-span-4">
          <Terminal command='Show proyects'>
            <div className="w-full flex items-center h-full">
              <div className='w-full grid grid-cols-2 gap-4 min-w-full overflow-x-hidden scrollbar-hide min-h-1/2' style={{ maxHeight: '650px'}}>
                <ItemProyect title="Tema para Visual Studio Code"/>
                <ItemProyect title="Entrenamiento Fisico APP"/>
                <ItemProyect title="Consumo de una api Clima" img="/images/proyects/clima.png"/>
                <ItemProyect />
              </div>
            </div>
          </Terminal>
        </div>

        <div className="row-span-3 col-span-2">
          <Terminal command='Show proyects'>
            <div className='w-full h-full grid grid-cols-2 gap-10 items-center'>
              
            </div>
          </Terminal>
        </div>

        <div className="col-span-2">
          <Terminal command='Show tecnologies usinged'>
            <div className='w-full h-full grid gap-10 items-center'>
              <StackTecnologies stack={['react', 'html', 'css', 'js']} />
            </div>
          </Terminal>
        </div>
      </div>
    </main>
  );
}