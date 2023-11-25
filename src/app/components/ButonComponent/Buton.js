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

const style = 'w-4 h-4 fill-slate-200';
const listIcons = {
    home: <HomeSvg className={style}/>,
    contact: <ContactSvg className={style}/>,
    studies: <StudiesSvg className={style}/>,
    proyect: <ProyectSvg className={style}/>,
    skills: <SkillsSvg className={style}/>,
    theme: <ThemeSvg className={style}/>,
    lenguage: <LenguageSvg className={style}/>,
    send: <SendSvg className={style}/>,
    linkedin: <LinkedinSvg className={style}/>,
    github: <GithubSvg className={style}/>,
    whatsapp: <WhatsAppSvg className={style}/>,
}

export default function Buton( {title = '', icono = 'home', url = '/', onClick } ) {
    let iconComponent = listIcons[icono] || null;

    return (
        <Link 
        onClick={onClick}
        href={url} className="flex items-center p-2 bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg cursor-pointer gap-1 hover:bg-gray-700">
            { iconComponent }
            <span className='text-sm flex-grow rounded max-h-4 flex items-center'> { title } </span>
        </Link>
    )
}