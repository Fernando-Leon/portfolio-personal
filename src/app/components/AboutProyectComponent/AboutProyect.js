import Image from "next/image";
import Buton from "../ButonComponent/Buton";

export default function AboutProyect( { title = "Proyecto", img="/images/proyects/p2.png", description="bridgit", github, deploy } ) {
    let deployComponent = null;

    const openCode = () => {
        // Abrir la página de terceros en una nueva pestaña
        window.open(github, '_blank');
      };

      
    const openDeploy = () => {
        // Abrir la página de terceros en una nueva pestaña
        window.open(deploy, '_blank');
      };

      if (deploy !== null) {
        deployComponent = <Buton title="Ver lanzamiento" icono="github" url="/proyects" onClick={openDeploy} />;
      }
    return (
        <button className="w-full h-auto grid m-auto gap-3">
                <h2 className="text-center w-full">{title}</h2>
                <p className="text-center text-sm">{ description }</p>
                <Image src={img} width={0} height={0} alt="Imagen" layout="responsive" className="rounded-md w-full"/>
                <div className="flex flex-column w-full items-center justify-around">
                    <Buton title="Repositorio" icono="github" url="/proyects" onClick={openCode}/>
                    { deployComponent }
                </div>
        </button>
    );
}