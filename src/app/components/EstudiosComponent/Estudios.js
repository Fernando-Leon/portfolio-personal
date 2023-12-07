'use client'

import Buton from "../ButonComponent/Buton"

export default function Estudios( { titulo = "Titulo", descripcion = "descripcion", url, titleBtn = "Link", nameIcon } ) {

    const openUrl = () => {
        // Abrir la página de terceros en una nueva pestaña
        window.open(url, '_blank');
      };

    return (
        
        <div className="flex w-full gap-5 justify-between items-center border border-purple-300 p-4 rounded-lg">
            <h3> { titulo } </h3>
            <p> { descripcion } </p>
            <div>
                 <Buton title= { titleBtn } onClick={openUrl} url="/studies" icono={ nameIcon }/>
            </div>
        </div>
    )
}