import Buton from "../ButonComponent/Buton";

export default function Form() {
    return (
        <form className="w-2/3 h-full grid m-auto">
            <div className="w-full">
                <h2 className="text-center">Contactarme</h2>
                <p className="text-center text-sm">Please contact me directly at 22300101@uttt.edu.mx or through this form:</p>   
            </div>
            <div className="w-full">
                <input 
                className="w-full bg-transparent border-2 border-green-400 pl-2 rounded-sm color-white placeholder:text-green-200 outline-none"
                type="text" placeholder="Your name"/>
            </div>
            <div className="w-full">
                <input 
                className="w-full bg-transparent border-2 border-green-400 pl-2 rounded-sm color-white placeholder:text-green-200 outline-none"
                type="text" placeholder="Your@email.com"/>
            </div>
            <div className="w-full">
                <input 
                className="w-full bg-transparent border-2 border-green-400 pl-2 rounded-sm color-white placeholder:text-green-200 outline-none"
                type="text" placeholder="Affair"/>
            </div>
            <div className="w-full">
            <textarea 
                className="w-full bg-transparent border-2 border-spacing-2 border-green-400 pl-2 rounded-sm placeholder:text-green-200 outline-none"
            id="w3review" rows="4" cols="50" placeholder="Your message...">
            </textarea>
            </div>
            <div className="w-auto grid items-center justify-center">
                <Buton title="Submit" icono="send"/>
            </div>
        </form>
    );
}