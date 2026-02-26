import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import GeneralInfo from "./GeneralInfo"
import PersonalLife from "./PersonalLife"
import ProfessionalLife from "./ProfessionalLife"

export default function AboutMe () {

    const [index, setIndex] = useState(1)

    return (
        <div className="md:h-screen text-slate-200 md:items-center flex gap-10 md:py-20">
            <p onClick={() => setIndex(prev => prev - 1)} className={`hidden md:block ${index === 0 && 'md:hidden'}`}>
                <FontAwesomeIcon className="cursor-pointer text-2xl text-slate-200 hover:text-slate-50" icon={faAnglesLeft} />
            </p>
            <div className="md:px-20 h-full flex-1 overflow-hidden grid grid-rows-[64px_1fr_64px] md:gap-10">
                { index === 0 ? (<PersonalLife />) : index === 1 ? (<GeneralInfo />) : (<ProfessionalLife />) }
            </div>
            <p onClick={() => setIndex((prev => prev+1))} className={`hidden md:block ${index === 2 && 'md:hidden'}`}>
                <FontAwesomeIcon className="cursor-pointer text-2xl text-slate-200 hover:text-slate-50" icon={faAnglesRight} />
            </p>
        </div>
    )
}
