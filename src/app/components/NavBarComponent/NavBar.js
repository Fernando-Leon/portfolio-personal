import Image from 'next/image'
import React from 'react'
import Buton from '../ButonComponent/Buton'

export function NavBar() {
    return (
        <div className="h-full flex content-center justify-between w-auto items-center pl-4 pr-4 overflow-hidden">
            <div className='flex gap-2 flex-1 justify-start'>
                <Buton />
            </div>

            <div className='flex gap-2 flex-auto content-center align-middle justify-center'>
                <Buton title='Sobre mi' icono='home'/>
                <Buton title='Estudios' icono='studies'/>
                <Buton title='Proyectos' icono='proyect'/>
                <Buton title='Tecnologias' icono='skills'/>
                <Buton title='Contacto' icono='contact'/>
            </div>

            <div className='flex gap-2 flex-auto justify-end content-center align-middle'>
                <Buton icono='theme' title=''/>
                <Buton icono='lenguage' title=''/>
            </div>
        </div> 
    )
}