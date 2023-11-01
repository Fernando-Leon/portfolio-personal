import JsSvg from "../icons/js";
import ReactSvg from "../icons/react";
import VueSvg from "../icons/vue";
import HtmlSvg from "../icons/html";
import CssSvg from "../icons/css";
import VsCodeSvg from "../icons/vscode";
import GitSvg from "../icons/git";
import GithubSvg from "../icons/github";
import TailwindSvg from "../icons/tailwindcss";
import NpmSvg from "../icons/npm";
import WindowsSvg from "../icons/windows";
import LinuxSvg from "../icons/linux";

const iconComponents = {
    react: <ReactSvg className="fill-slate-200" />,
    vue: <VueSvg className="fill-slate-200" />,
    js: <JsSvg className="fill-slate-200" />,
    html: <HtmlSvg className="fill-slate-200" />,
    css: <CssSvg className="fill-slate-200" />,
    vscode: <VsCodeSvg className="fill-slate-200" />,
    git: <GitSvg className="fill-slate-200" />,
    github: <GithubSvg className="fill-slate-200" />,
    tailwindcss: <TailwindSvg className="fill-slate-200" />,
    npm: <NpmSvg className="fill-slate-200" />,
    windows: <WindowsSvg className="fill-slate-200" />,
    linux: <LinuxSvg className="fill-slate-200" />,
  };
  
  export default function Icono({ nameIcon = 'react' }) {
    const iconComponent = iconComponents[nameIcon] || null;
  
    return (
      <div className="w-8 h-auto p-1">
        {iconComponent}
      </div>
    );
  }