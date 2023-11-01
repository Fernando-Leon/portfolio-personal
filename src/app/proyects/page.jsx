import Terminal from "../components/TerminalComponent/Terminal";
import Image from "next/image";

export default function Page() {
  return (
    <main className="h-min-content p-4">
      <div className='w-full h-full grid grid-rows-3 grid-flow-col gap-4'>
        
        <div className="row-span-3 col-span-2">
          <Terminal command='Show proyects'>
            <div className='w-full h-full grid grid-cols-2 gap-10 items-center'>
              
            </div>
          </Terminal>
        </div>

        <div className="row-span-2 col-span-2">
          <Terminal command='Show proyects'>
            <div className='w-full h-full grid grid-cols-2 gap-10 items-center'>
              
            </div>
          </Terminal>
        </div>

        <div className="col-span-2">
          <Terminal command='Show proyects'>
            <div className='w-full h-full grid grid-cols-2 gap-10 items-center'>
              
            </div>
          </Terminal>
        </div>
      </div>
    </main>
  );
}