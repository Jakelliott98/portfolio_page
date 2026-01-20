import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpen, faPersonBiking, faPlaneDeparture, faFutbol, faChevronDown, faEnvelope, faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons"
import { faReact, faSquareJs, faHtml5, faCss3Alt, faSquareLinkedin, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
import heroImage from '../assets/Hero_me.png'

export default function AboutMe () {

    const [index, setIndex] = useState(1)

    return (
        <div className="h-screen bg-slate-900 text-slate-200 items-center flex px-20">
            <div className="fw-fit" onClick={() => setIndex(prev => prev - 1)}><FontAwesomeIcon className="cursor-pointer text-2xl text-slate-500 hover:text-slate-50" icon={faAnglesLeft} /></div>
            <div className="flex-1 px-10">
                { index === 0 ? (<PersonalLife />) : index === 1 ? (<GeneralInfo />) : (<ProfessionalLife />) }
            </div>
            <div className="w-fit" onClick={() => setIndex((prev => prev+1))}><FontAwesomeIcon className="cursor-pointer text-2xl text-slate-500 hover:text-slate-50" icon={faAnglesRight} /></div>
        </div>
    )
}

function GeneralInfo () {
    
    return (
        <div className="flex gap-15 text-slate-400">
            <div className="flex flex-col gap-5 flex-2">
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl font-bold text-left text-slate-400">👋 About Me</h1>
                    <p className="text-left text-slate-400">
                        I’m a self-taught <span className="text-slate-100 font-medium">Frontend Developer</span> focused on building
                        <span className="text-slate-100 font-medium"> clean, user-first interfaces</span> with
                        <span className="text-slate-100 font-medium"> JavaScript and React</span>.
                        <br /><br />
                        I’ve developed my skills through <span className="text-slate-100 font-medium">structured learning</span> and by
                        delivering <span className="text-slate-100 font-medium">internal tools</span> within my current healthcare role,
                        working through <span className="text-slate-100 font-medium">real feedback loops</span> with managers and stakeholders.
                        This experience has shaped how I approach development —
                        <span className="text-slate-100 font-medium"> prioritising clarity, usability, and maintainable code</span>.
                    </p>
                </div>
                <div className="flex [&>*]:flex-1">
                <div className="flex flex-col gap-2">
                    <p className="text-left text-sm underline text-slate-400">
                    Learning Path
                    </p>

                    <div className="flex flex-col text-left text-sm text-slate-400">
                    <p>
                        <span className="text-slate-100 font-medium">Codecademy — Front-End Engineer</span>
                        <span className="block text-xs text-slate-500">
                        Core JavaScript, React, responsive layouts
                        </span>
                    </p>

                    <p className="mt-2">
                        <span className="text-slate-100 font-medium">The Odin Project — Frontend</span>
                        <span className="block text-xs text-slate-500">
                        Real projects, Git workflow, problem-solving fundamentals
                        </span>
                    </p>
                    </div>
                </div>
                </div>
                <div className="flex justify-between gap-10">
                <p className="text-left w-3/6 text-sm flex-1 text-slate-400">
                    I’m currently seeking a <span className="text-slate-100 font-medium">junior frontend role</span> where I can
                    continue developing my skills while contributing to
                    <span className="text-slate-100 font-medium"> real-world products</span> within a
                    <span className="text-slate-100 font-medium"> collaborative, professional team</span>.
                </p>

                <div>
                    <div className="flex gap-1 items-center text-slate-200">
                    <p className="font-medium">Get in touch</p>
                    <FontAwesomeIcon icon={faChevronDown} />
                    </div>

                    <div className="text-xl flex justify-between pt-2 text-slate-400">
                    <FontAwesomeIcon icon={faEnvelope} className="cursor-pointer hover:scale-110 hover:text-white"/>
                    <FontAwesomeIcon icon={faSquareLinkedin} className="cursor-pointer hover:scale-110 hover:text-white"/>
                    <FontAwesomeIcon icon={faSquareXTwitter} className="cursor-pointer hover:scale-110 hover:text-white"/>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <div className="relative">
                    {/* ADD IN STACK BUBBLES */}
                    <div className="bg-white flex flex-col items-center p-20 rounded-xl z-10">
                        <img src={heroImage} className="w-36 h-36 bg-slate-100 rounded-full"/>
                        <p className="rounded-xl bg-slate-100 text-black py-1 px-2 text-sm w-fit">Frontend Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*

                        <div className="text-left text-lg">
                            <FontAwesomeIcon icon={faReact} />
                            <FontAwesomeIcon icon={faSquareJs} />
                            <FontAwesomeIcon icon={faHtml5} />
                            <FontAwesomeIcon icon={faCss3Alt} />

                        </div>

*/

function PersonalLife () {
    
    return (
        <div className="flex flex-col items-center gap-5 p-20">
            <h1 className="text-5xl font-black text-slate-500">My Interests</h1>
            <div className=" w-full h-full grid grid-cols-2 grid-rows-2 gap-5">
                <div className="bg-slate-100 rounded p-5 text-slate-900">
                    <div className="text-center text-slate-500">
                        <FontAwesomeIcon icon={faFutbol} className="text-2xl"/>
                        <h2 className="">Football</h2>
                    </div>
                    <p className="text-sm text-slate-600">Semi-Professional Footballer who loves playing and watching football</p>
                    <p className="text-sm text-slate-600">Arsenal FC Fan</p>
                </div>
                <div className="bg-slate-100 rounded p-5 text-slate-900">
                    <div className="text-center text-slate-500">
                        <FontAwesomeIcon icon={faBookOpen} className="text-2xl"/>
                        <h2>Reading</h2>
                    </div>
                    <div>
                        <p>Favourite Books:</p>
                        <p>The Alchemist</p>
                        <p>The 5AM Club</p>
                        <p>The Tatooist of Auschwitz</p>
                        <p>Pachinko</p>
                    </div>
                </div>
                <div className="bg-slate-100 rounded p-5 text-slate-900">
                    <div className="text-center text-slate-500">
                        <FontAwesomeIcon icon={faPlaneDeparture} className="text-2xl"/>
                        <h2>Travelling</h2>
                    </div>
                    <p>Love to travel the world and see new places</p>
                    <div>
                        <p>Favourite Places:</p>
                        {/* Flags in bubbles instead */}
                    </div>
                    <div>
                        <p>Next Destinations</p>
                    </div>
                </div>
                <div className="bg-slate-100 rounded p-5 text-slate-900">
                    <div className="text-center text-slate-500">
                        <FontAwesomeIcon icon={faPersonBiking} className="text-2xl"/>
                        <h2>Fitness</h2>
                    </div>
                    <p>Love staying active and participating in exercise together with people</p>
                    <p>Running Clubs and Classes really enjoy</p>
                    <p>Personal Goal of achieving a half marathon this year</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-2/3">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <FontAwesomeIcon icon={faPersonBiking} className="text-2xl text-slate-200"/>
                    <p>Hobby</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <FontAwesomeIcon icon={faPersonBiking} className="text-2xl text-slate-200"/>
                    <p>Hobby</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <FontAwesomeIcon icon={faPersonBiking} className="text-2xl text-slate-200"/>
                    <p>Hobby</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <FontAwesomeIcon icon={faPersonBiking} className="text-2xl text-slate-200"/>
                    <p>Hobby</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <FontAwesomeIcon icon={faPersonBiking} className="text-2xl text-slate-200"/>
                    <p>Hobby</p>
                </div>
            </div>
        </div>
    )
}

/*

 <div className="flex flex-col gap-5">
            <div className="flex gap-40 justify-center mt-10">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="w-fit h-fit rounded-full bg-white p-3 flex justify-center items-center">
                        <FontAwesomeIcon icon={faFutbol} className="text-2xl text-slate-900"/>
                    </div>
                    <p>Football</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="w-fit h-fit rounded-full bg-white p-3 flex justify-center items-center">
                        <FontAwesomeIcon icon={faBookOpen} className="text-2xl text-slate-900"/>
                    </div>
                    <p>Books</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="w-fit h-fit rounded-full bg-white p-3 flex justify-center items-center">
                        <FontAwesomeIcon icon={faPlaneDeparture} className="text-2xl text-slate-900"/>
                    </div>
                    <p>Travelling</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="w-fit h-fit rounded-full bg-white p-3 flex justify-center items-center">
                        <FontAwesomeIcon icon={faPersonBiking} className="text-2xl text-slate-900"/>
                    </div>
                    <p>Fitness</p>
                </div>
            </div>

<div>
                <p>
                    Football has been a constant in my life — I currently play at a semi-professional level and have supported Arsenal for as long as I can remember. Competing at this level has taught me discipline, teamwork, and how to perform under pressure, all of which carry directly into my professional work.
                    <br></br>
                    Outside of football, I’m big on reading and self-improvement, aiming to read at least twelve books a year. The 5 AM Club and The Alchemist have been particularly influential in shaping my mindset around consistency and long-term growth.
                    <br></br>
                    Fitness and wellbeing are important to me, with a personal goal of completing a half marathon this year. I’m also deeply interested in sustainability, nature, and ecology, and I’d love to explore future projects that combine coding with environmental impact.
                </p>
            </div>

*/

function ProfessionalLife () {
    
    return (
        <div>
            <h2></h2>
            <div className="flex gap-10 text-slate-700">
                <div className="flex-1 bg-white p-5 rounded-xl">
                    <h2 className="text-2xl font-bold text-center">My Story</h2>
                    <p>How I got into tech...</p>
                </div>
                <div className="flex-1 bg-white p-5 rounded-xl">
                    <h2 className="text-2xl font-bold text-center">Now</h2>
                    <p>My current stack is heavily focused on being able to </p>
                    <ul className="flex justify-around text-xl">
                        <li><i class="devicon-javascript-plain"></i></li>
                        <li><i class="devicon-react-original"></i></li>
                        <li><i class="devicon-tailwindcss-original"></i></li>
                        <li><i class="devicon-typescript-plain"></i></li>
                        <i class="devicon-github-original"></i>
                        <i class="devicon-supabase-plain"></i>
                    </ul>
                </div>
                <div className="flex-1 bg-white p-5 rounded-xl">
                    <h2 className="text-2xl font-bold text-center">Next</h2>
                    <p></p>
                    <ul className="flex justify-around text-xl">
                        <li><i class="devicon-redux-original"></i></li>
                        <li><i class="devicon-nextjs-original-wordmark"></i></li>
                        <li><i class="devicon-nodejs-plain"></i></li>
                        <li><i class="devicon-webpack-plain"></i></li>
                        <li><i class="devicon-git-plain"></i></li>
                    </ul>
                </div>
                <div className="flex-1 bg-white p-5 rounded-xl">
                    <h2 className="text-2xl font-bold text-center">Later</h2>
                    <ul className="flex justify-around text-xl">
                        <li><i class="devicon-postgresql-plain"></i></li>
                        <li><i class="devicon-amazonwebservices-plain-wordmark"></i></li>
                        <li><i class="devicon-python-plain"></i></li>
                        <li><i class="devicon-docker-plain"></i></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between text-slate-500 text-3xl pt-10">
                <i class="devicon-typescript-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-html5-plain-wordmark"></i>    
                <i class="devicon-css3-plain"></i>
                <i class="devicon-tailwindcss-original"></i>
                <i class="devicon-github-original"></i>
                <i class="devicon-git-plain"></i>
                <i class="devicon-vscode-plain"></i>
                <i class="devicon-supabase-plain"></i>
                <i class="devicon-reactrouter-plain"></i>
            </div>
        </div>
    )
}


/*

<div>
                <p>
                    I’m currently transitioning into tech after building a career in healthcare, driven by a genuine enjoyment of the learning process and problem-solving that comes with development. I love spending time understanding new concepts, applying them in code, and working through bugs until everything clicks.
                    <br></br>
                    Continuous learning is a core part of how I work. As my frontend skills have developed, I’ve naturally expanded my stack and I’m keen to continue growing — particularly into backend development and, longer term, machine learning.
                    <br></br>
                    My healthcare background has given me strong transferable skills, including clear communication, attention to detail, working within multidisciplinary teams, and translating complex information into solutions that make sense for end users.
                </p>
                <p>Current focus: Frontend development, clean UI, real-world problem solving</p>
                <p>Future direction: Backend development, broader system understanding, applied machine learning</p>
            </div>

*/