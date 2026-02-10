import { useNavigate } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong, faUpRightFromSquare, faStarOfLife } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function ProjectPage ({ project }) {

    const navigate = useNavigate()

    return (
        <div className="p-5 min-h-screen md:px-40 md:py-15 bg-slate-900 flex flex-col gap-5 text-white">
            <p onClick={() => navigate('/')} className="py-2 md:py-0 absolute text-violet-400 hover:text-violet-300 flex gap-2 items-center cursor-pointer hover:translate-x-[-5px]">
            <FontAwesomeIcon icon={faArrowLeftLong} className=""/>
            <span className="hidden md:block">Back</span>
            </p>        
            <div>
                <h1 className="text-center sectionHeading">{project.title}</h1>
                <div className="flex gap-2 items-center justify-center">
                    {
                        project.stack.map((item) => {
                            return (
                                <p className="text-center text-sm text-slate-400">{item}</p>
                            )}
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="subHeadings">Why?</h2>
                <p className="text-xs md:text-base text-slate-400">{project.why}</p>
            </div>
            <KeyFeatures keyFeatures={project.features} />
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
        <div className="flex flex-col gap-2">
            <h2 className="subHeadings">Key Features</h2>
            <div>
                {keyFeatures.map(feature => (
                    <div>
                        <div className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faStarOfLife} className="text-xs"/>
                            <h2 className="text-sm md:text-lg">{feature.title}</h2>
                        </div>
                        <p className="text-xs md:text-base  text-slate-400">{feature.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function ProjectImages ({images}) {

    return (
        <div className="grid md:grid-cols-2 gap-8 w-full">
            {
                images.map((image, i) => {
                    return (
                        <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                            <img src={image} alt='Screenshot from compliance website' className=""/>
                        </div>
                    )
                })
            }
        </div>
    )
}