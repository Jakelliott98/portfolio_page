
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
export default function HeaderSection ({ onSelect }) {
    
    return (
        <div className="hidden md:flex py-5 px-5 items-center justify-between text-slate-100 border-b-1 border-slate-800/60">
            <nav className="h-full flex gap-5 items-center justify-center self-end relative z-2">
                <a className='hover:text-slate-300 cursor-pointer' onClick={() => onSelect(1)}>ABOUT</a>
                <a className='hover:text-slate-300 cursor-pointer' onClick={() => onSelect(2)}>PROJECTS</a>
                <a className='hover:text-slate-300 cursor-pointer' onClick={() => onSelect(3)}>CONTACT</a>
            </nav>
            <button className="text-slate-100 hover:text-violet-400 flex items-center gap-1 cursor-pointer">
                <p className="border-b border-slate-100 hover:border-violet-400">Get In Touch</p>
                <FontAwesomeIcon icon={faArrowRightLong} className="rotate-[-45deg]"/>
            </button>
        </div>
    )
}