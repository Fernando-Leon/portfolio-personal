import Image from 'next/image'
import HomeSvg from '../icons/home'
import ContactSvg from '../icons/contact';
import StudiesSvg from '../icons/studies';
import ProyectSvg from '../icons/proyect';
import SkillsSvg from '../icons/skills';
import ThemeSvg from '../icons/theme';
import LenguageSvg from '../icons/lenguage';

export default function Buton( {title = '', icono = 'home'} ) {
    let iconComponent = null;
    let titleComponent = null;

    if (icono === 'home') {
        iconComponent = <HomeSvg className="w-4 h-4 fill-slate-200"/>
    }else if (icono === 'contact') {
        iconComponent = <ContactSvg className="w-4 h-4 fill-slate-200"/>
    }else  if (icono === 'studies') {
        iconComponent = <StudiesSvg className="w-4 h-4 fill-slate-200"/>
    }else if(icono === 'proyect'){ 
        iconComponent = <ProyectSvg className="w-4 h-4 fill-slate-200"/>
    }else if(icono == 'skills') {
        iconComponent = <SkillsSvg className="w-4 h-4 fill-slate-200"/>
    }else if(icono == 'theme') {
        iconComponent = <ThemeSvg className="w-4 h-4 fill-slate-200"/>
    }else if(icono == 'lenguage') {
        iconComponent = <LenguageSvg className="w-4 h-4 fill-slate-200" />
    }

    if( title !== '') {
        titleComponent = <span className='text-sm flex-grow rounded max-h-4 flex items-center'> <span> { title }  </span> </span>
    }else {
        titleComponent = null;
    }

    return (
        <div className="flex items-center p-2 bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg cursor-pointer gap-1">
            { iconComponent }
            { titleComponent }
        </div>
    )
}