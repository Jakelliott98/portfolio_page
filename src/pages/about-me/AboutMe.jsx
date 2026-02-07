import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import GeneralInfo from "./GeneralInfo"
import PersonalLife from "./PersonalLife"
import ProfessionalLife from "./ProfessionalLife"

export default function AboutMe () {

    const [index, setIndex] = useState(1)

    return (
        <div className="md:h-screen text-slate-200 md:items-center flex md:px-5 md:px-20">
            <p onClick={() => setIndex(prev => prev - 1)} className="hidden md:block">
                <FontAwesomeIcon className="cursor-pointer text-2xl text-slate-500 hover:text-slate-50" icon={faAnglesLeft} />
            </p>
            <div className="flex-1 md:px-10 w-full">
                { index === 0 ? (<PersonalLife />) : index === 1 ? (<GeneralInfo />) : (<ProfessionalLife />) }
            </div>
            <p onClick={() => setIndex((prev => prev+1))} className="hidden md:block">
                <FontAwesomeIcon className="cursor-pointer text-2xl text-slate-500 hover:text-slate-50" icon={faAnglesRight} />
            </p>
        </div>
    )
}
