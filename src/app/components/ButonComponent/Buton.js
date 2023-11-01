import Image from 'next/image'
import HomeSvg from '../icons/home'
import ContactSvg from '../icons/contact';
import StudiesSvg from '../icons/studies';
import ProyectSvg from '../icons/proyect';
import SkillsSvg from '../icons/skills';
import ThemeSvg from '../icons/theme';
import LenguageSvg from '../icons/lenguage';
import SendSvg from '../icons/send';
import Link from 'next/link';
import LinkedinSvg from '../icons/linkedin';
import GithubSvg from '../icons/github';
import WhatsAppSvg from '../icons/whatsapp';

export default function Buton( {title = '', icono = 'home', url = '/', onClick } ) {
    let iconComponent = null;

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
    }else if(icono == 'send') {
        iconComponent = <SendSvg className="w-4 h-4 fill-slate-200" />
    }else if(icono == 'linkedin') {
        iconComponent = <LinkedinSvg className="w-4 h-4 fill-slate-200" />
    }else if(icono == 'github') {
        iconComponent = <GithubSvg className="w-4 h-4 fill-slate-200" />
    }else if(icono == 'whatsapp') {
        iconComponent = <WhatsAppSvg className="w-4 h-4 fill-slate-200" />
    }

    return (
        <Link 
        onClick={onClick}
        href={url} className="flex items-center p-2 bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg cursor-pointer gap-1 hover:bg-gray-700">
            { iconComponent }
            <span className='text-sm flex-grow rounded max-h-4 flex items-center'> { title } </span>
        </Link>
    )
}