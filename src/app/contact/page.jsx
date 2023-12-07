import Terminal from "../components/TerminalComponent/Terminal";
import Form from "../components/FormComponent/Form";
import Image from "next/image";
import Buton from "../components/ButonComponent/Buton";
import AnimationMatrix from "../components/AnimationMatrixComponent/AnimationMatrix"
import Animation from "../components/AnimationCode/Animacion";

export default function Page() {
  return (
    <main className="h-min-content p-4">
        <div className='w-full h-full grid grid-rows-3 grid-cols-3 gap-4'>

            <div className="row-span-3 col-span-2">
              <Terminal command='Show form contact'>
                <div className='w-full h-full grid items-center'>
                    <Form />
                </div>
              </Terminal>
            </div>

            <div className="row-span-2 col-span-1">
              <Terminal command='Show proyects'>
              <div className='w-full h-full flex items-center justify-center'>
                <Animation size={10} widthCanvas={200} heightCanvas={200}/>
              </div>
              </Terminal>
            </div>

            <div className="row-span-1 col-span-1">
              <Terminal command='Show links contact'>
                <div className='w-full h-full grid items-center justify-center '>
                  <div className="flex gap-3">
                    <Buton icono="linkedin" title="Linkedin"/>
                    <Buton icono="whatsapp" title="WhatsApp"/>
                    <Buton icono="github" title="GitHub"/>
                  </div>
                </div>
              </Terminal>
            </div>

          </div>
    </main>
  );
}