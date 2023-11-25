'use client'
import React from 'react'
import Buton from '../ButonComponent/Buton'
import { useState } from 'react'

export function NavBar() {

    const [dynamicTitle, setDynamicTitle] = useState('Sobre Mi'); 

    const handleButtonClick = (newTitle) => {
        setDynamicTitle(newTitle); 
        console.log('Nuevo título:', newTitle);
    };

    return (
        <div className="h-full flex content-center justify-between w-auto items-center pl-4 pr-4 overflow-hidden">
            <div className='flex gap-2 flex-1 justify-start'>
                    <span className='text-xl'> { dynamicTitle } </span>
            </div>  

            <div className='flex gap-2 flex-auto content-center align-middle justify-center'>
                <Buton title='Sobre mi' icono='home' url='/' onClick={() => handleButtonClick('Sobre mi')}/>
                <Buton title='Tecnologias' icono='skills' url='skills' onClick={() => handleButtonClick('Tecnologias')} />
                <Buton title='Proyectos' icono='proyect' url='/proyects' onClick={() => handleButtonClick('Proyectos')} />
                <Buton title='Estudios' icono='studies' url='/studies' onClick={() => handleButtonClick('Estudios')} />
                <Buton title='Contacto' icono='contact' url='/contact' onClick={() => handleButtonClick('Contacto')} />
            </div>

            <div className='flex gap-2 flex-auto justify-end content-center align-middle'>
                <Buton icono='theme' title=''/>
                <Buton icono='lenguage' title=''/>
            </div>
        </div> 
    )
}