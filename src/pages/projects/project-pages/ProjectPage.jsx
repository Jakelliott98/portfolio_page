import { useNavigate } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong, faUpRightFromSquare, faStarOfLife, faStar, faCircle, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

export default function ProjectPage ({ project }) {

    const navigate = useNavigate()

    return (
        <div className="p-5 min-h-screen md:px-40 md:py-15 bg-slate-900 flex flex-col gap-15">     
            <div className="">
                <p onClick={() => navigate('/')} className="py-2 md:py-0 text-violet-400 hover:text-violet-300 flex gap-2 items-center cursor-pointer hover:translate-x-[-5px]">
                    <FontAwesomeIcon icon={faArrowLeftLong} className=""/>
                    <span className="">Back</span>
                </p>
            </div>   
            <div className="flex flex-col gap-5">
                <h1 className="text-center sectionHeading">{project.title}</h1>
                <p className="md:px-40 text-center text-slate-300">{project.intro}</p>
                <div className="flex gap-3 items-center justify-center flex-wrap">
                    {
                        project.stack.map((item) => {
                            return (
                                <li className="list-none py-1 px-4 rounded text-sm text-slate-200 bg-violet-600/80">{item}</li>
                            )}
                        )
                    }
                </div>
            </div>
            <div className="bg-red-100 rounded h-auto">
                <img src={project.images[1]} className="h-full w-full rounded"/>
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="subHeadings">Problem Overview</h2>
                <p className="text-sm md:text-base text-slate-300">{project.problem}</p>
                <h2 className="subHeadings">Tackling the Problem</h2>
                <p className="text-sm md:text-base text-slate-300">{project.solution}</p>
                <h2 className="subHeadings">Project Features</h2>
                <KeyFeatures keyFeatures={project.features} />
            </div>
            <ProjectImages images={project.images}/>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row [&>*]:flex-1 gap-3 md:gap-10 md:px-10 md:w-2/3">
                    <a href={project.links.github} target="_blank" className="font-semibold flex items-center justify-center gap-1 py-4 px-4 rounded-lg border-2 cursor-pointer md:font-black tracking-wide ctaButtons"><FontAwesomeIcon icon={faGithub} /> GitHub Repo</a>
                    <a href={project.links.site} target="_blank" className="flex items-center justify-center gap-1 py-4 px-4 rounded-lg border-2 cursor-pointer font-semibold md:font-black tracking-wide ctaButtons"><FontAwesomeIcon icon={faUpRightFromSquare} /> Live Site</a>
                </div>
            </div>
        </div>
    )
}

function KeyFeatures ({keyFeatures}) {

    return (
            <div className="flex flex-col md:flex-row gap-5">
                {keyFeatures.map(feature => (
                    <div className="rounded p-6 flex flex-col gap-2 flex-1 bg-slate-800/80 border border-slate-700">
                        <div className="border border-slate-700 p-2 bg-slate-800 rounded flex items-center justify-center w-fit text-xl">
                            <FontAwesomeIcon icon={faStar} className="text-slate-100"/>
                        </div>
                        <h3 className="text-slate-200 font-semibold">{feature.title}</h3>
                        <p className="text-slate-400 font-light text-sm">{feature.text}</p>
                    </div>

                ))}
            </div>
    )
}

function ProjectImages ({images}) {

    const [image, setImage] = useState(2)

    const counterDown = () => {
        setImage((prev) => {
            if (prev === 0) {
                return 0;
            } else {
                return prev - 1;
            }
        })
    }

    const counterUp = () => {
        setImage((prev) => {
            if (prev === 4) {
                return 4;
            } else {
                return prev + 1;
            }
        })
    }

    return (
        <div className="flex flex-col">
            <div className="md:h-auto h-auto w-full flex">
                <img className="w-full h-full rounded" src={images[image]}/>
            </div>
            <div className="w-full justify-center items-center flex gap-1 pt-5 [&>*]:cursor-pointer">
                <FontAwesomeIcon icon={faArrowLeft} className={`text-slate-300 ${image === 0 && 'text-slate-800'}`} onClick={() => counterDown()}/>
                <FontAwesomeIcon onClick={() => setImage(0)} icon={faCircle} className={image === 0 ? 'text-violet-400' : 'text-sm text-slate-300'}/>
                <FontAwesomeIcon onClick={() => setImage(1)} icon={faCircle} className={image === 1 ? 'text-violet-400' : 'text-sm text-slate-300'}/>
                <FontAwesomeIcon onClick={() => setImage(2)} icon={faCircle} className={image === 2 ? 'text-violet-400' : 'text-sm text-slate-300'}/>
                <FontAwesomeIcon onClick={() => setImage(3)} icon={faCircle} className={image === 3 ? 'text-violet-400' : 'text-sm text-slate-300'}/>
                <FontAwesomeIcon onClick={() => setImage(4)} icon={faCircle} className={image === 4 ? 'text-violet-400' : 'text-sm text-slate-300'}/>
                <FontAwesomeIcon icon={faArrowRight} className={`text-slate-300 ${image === 4 && 'text-slate-800'}`} onClick={() => counterUp()}/>
            </div>
        </div>
    )
}