import * as React from "react"
export default function ThemeSvg(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
            viewBox="0 0 512 512"
            {...props}
        >
            <path d="M448 256c0-106-86-192-192-192v384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0z" />
        </svg>
    )
}