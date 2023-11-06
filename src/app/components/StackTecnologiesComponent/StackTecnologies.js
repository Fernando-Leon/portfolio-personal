import Buton from "../ButonComponent/Buton";
import JavaSvg from "../icons/java";
import ReactSvg from "../icons/react";
import CssSvg from "../icons/css";
import JsSvg from "../icons/js";
import HtmlSvg from "../icons/html";


export default function StackTecnologies( { stack = ['react', 'html', 'css', 'js'] } ) {
    const stackTecnologies = stack.map( (item, index) => {
        let styles = 'w-12 h-12 fill-slate-200 cursor-pointer transition duration-500 ease';
        if(item === 'react') {
            return <ReactSvg className={`hover:fill-blue-400 ${styles}`} key={index}/>
        }else if(item === 'java') {
            return <JavaSvg className={`hover:fill-orange-400 ${styles}`} key={index}/>
        }else if(item === 'css') {
            return <CssSvg className={`hover:fill-blue-400 ${styles}`} key={index}/>
        }else if(item === 'js') {
            return <JsSvg className={`hover:fill-yellow-500 ${styles}`} key={index}/>
        }else if(item === 'html') {
            return <HtmlSvg className={`hover:fill-orange-400 ${styles}`} key={index}/>
        }else {
            return <ReactSvg className={styles} key={index}/>
        }
    });

    return (
        <div className="flex w-full">
            <div className="w-full flex items-center justify-start">
                {stackTecnologies}
            </div>
        </div>
    )
}