import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const projects = [
    {
        title: 'Feedback Form',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis blanditiis similique ab odio cumque modi ex? Debitis eius veniam numquam esse, ad molestias blanditiis quis totam quos repellendus atque tempore!',
        languages: ['JavaScript', 'React', 'HTML', 'CSS', 'Supabase', 'Clerk', 'React Router'],
    },
    {
        title: 'Compliance Tracker',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis blanditiis similique ab odio cumque modi ex? Debitis eius veniam numquam esse, ad molestias blanditiis quis totam quos repellendus atque tempore!',
        languages: ['JavaScript', 'React', 'TypeScript', 'Tailwind', 'React Query', 'CSS', 'Supabase', 'Clerk', 'React Router'],
    },
    {
        title: 'Calorie Calculator',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis blanditiis similique ab odio cumque modi ex? Debitis eius veniam numquam esse, ad molestias blanditiis quis totam quos repellendus atque tempore!',
        languages: ['Next.js' ,'TypeScript', 'JavaScript', 'React', 'Tailwind', 'Jest'],
    }
]

export default function Projects () {

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center p-10">
            <h1 className="text-6xl text-center mb-5 font-black text-slate-500">Projects</h1>
            <div className="flex-1 flex flex-col justify-between px-25 gap-10">
                {
                    projects.map(project => (
                        <ProjectCard project={project} />
                    ))
                }
            </div>
            
        </div>
    )
}

function ProjectCard ({ project }) {

    return (
        <div className="group flex-1 bg-slate-800 p-5 rounded-xl flex gap-4 border border-transparent hover:border-cyan-400/40 cursor-pointer transition-all duration-200">
            <div className='flex-1 bg-slate-600 rounded'>
                <img src="#"/>
            </div>
            <div className="flex-4">
                <h1 className="text-xl font-bold group-hover:text-cyan-400/40"> {project.title} <FontAwesomeIcon className="text-md group-hover:rotate-[-45deg] transition-all duration-200" icon={faArrowRight} /></h1>
                <p className="text-slate-400 pt-1">{project.description}</p>
                <ul className="flex gap-2 pt-2">
                    {
                        project.languages.map((project) => {
                            return (
                                <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">{project}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

function ProjectDialog () {
    
}