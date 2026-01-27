import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import projectList from "./projectList"
import { useNavigate } from "react-router"

export default function Projects () {

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center p-10">
            <h1 className="text-6xl text-center mb-5 font-black text-slate-500">Projects</h1>
            <div className="flex-1 flex flex-col px-25 gap-5 py-10 w-full [&>*]:flex-grow">
                {
                    projectList.map(project => (
                        <ProjectCard project={project} />
                    ))
                }
            </div>
            
        </div>
    )
}

function ProjectCard ({ project }) {

    const navigate= useNavigate()

    return (
        <div onClick={() => navigate(project.route)} className="group flex-1 bg-slate-800 p-5 rounded-xl flex gap-4 border border-transparent hover:border-cyan-800 hover:bg-slate-800/80 cursor-pointer transition-all duration-200">
                    <div className='flex-1 bg-slate-600 rounded'>
                        <img src="#"/>
                    </div>
                    <div className="flex-4 flex flex-col items-start">
                        <h1 className="text-xl font-bold group-hover:text-cyan-800 flex items-center gap-3"> {project.title} <FontAwesomeIcon className="text-md text-transparent group-hover:text-cyan-800 transition-all duration-200" icon={faUpRightFromSquare} /></h1>
                        <p className="text-slate-400 pt-1 text-start flex-1">{project.description}</p>
                        <ul className="flex gap-2 pt-2">
                            {
                                project.languages.map((project) => {
                                    return (
                                        <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500 group-hover:bg-cyan-400/10">{project}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
        </div>
    )


}