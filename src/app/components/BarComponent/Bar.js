import Icono from "../IconoComponent/Icono";
import styles from "./styles.module.css";

export default function Bar({
  name = "skill",
  icon = "react",
  level = "base",
}) {
  let porcent = null;
  if (level === "base") porcent = 25;
  if (level === "intermedio") porcent = 50;
  if (level === "avanzado") porcent = 75;
  if (level === "experto") porcent = 99;
  let porcentText = `${porcent}%`;

  // Calcula la duración de la animación en función del nivel
  const animationDuration = porcent === 100 ? "5s" : "9s";
  if (typeof document !== "undefined") {
    const barras = document.querySelector("#bar");
    barras.style.setProperty("width", porcent + "%");
    barras.innerText = "Hola";
  }

  return (
    <div className="w-full h-auto flex flex-col overflow-hidden">
      <p> {name} </p>
      <div className="flex align-middle">
        <p className="flex items-center pl-2 pr-2 text-lg">
          [ <span className="animate-spin p-2">/</span> ]
        </p>
        <Icono nameIcon={icon} />
        <div className="flex flex-auto items-center pr-2 pl-2 h-auto">
          <span>[</span>
          <div className="flex-auto bg-green-400 ml-1 mr-1">
            <div
              className={styles.animation}
              style={{
                width: porcentText,
                animationDuration: animationDuration,
              }}
              id="bar"
            >
              .
            </div>
          </div>
          <span>]</span>
          <span> {porcentText} </span>
        </div>
      </div>
    </div>
  );
}
