import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons"
import heroImage from '../../assets/Hero_me.png'

function GeneralInfo () {
    
    return (
        <div className="contents text-slate-300">
            <h1 className="sectionHeading text-center">
                        <span className="opacity-60">👋</span> About Me
                </h1>
            <div className="flex-1 flex gap-15 text-slate-300">
                <div className="flex flex-col gap-5 flex-2">
                    
                    <div className="flex flex-col gap-3">
                        <p className="hidden md:block text-left text-slate-300">
                            I’m a self-taught <span className="supportingText">Frontend Developer</span> focused on building
                            <span className="supportingText"> clean, user-first interfaces</span> with
                            <span className="supportingText"> JavaScript and React</span>.
                            <br /><br />
                            I’ve developed my skills through <span className="supportingText">structured learning</span> and by
                            delivering <span className="supportingText">internal tools</span> within my current healthcare role,
                            working through <span className="supportingText">real feedback loops</span> with managers and stakeholders.
                            This experience has shaped how I approach development —
                            <span className="supportingText"> prioritising clarity, usability, and maintainable code</span>.
                        </p>
                    </div>
                    <div className="flex [&>*]:flex-1">
                    <div className="flex flex-col gap-2">
                        <p className="text-left text-sm underline text-slate-300">
                        Learning Path
                        </p>

                        <div className="flex flex-col text-left text-sm text-slate-300">
                        <p>
                            <span className="supportingText">Codecademy — Front-End Engineer</span>
                            <span className="block text-xs text-slate-500">
                            Core JavaScript, React, responsive layouts
                            </span>
                        </p>

                        <p className="mt-2">
                            <span className="supportingText">The Odin Project — Frontend</span>
                            <span className="block text-xs text-slate-500">
                            Real projects, Git workflow, problem-solving fundamentals
                            </span>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="flex justify-between gap-10">
                    <p className="hidden md:block text-left w-3/6 text-sm flex-1 text-slate-300">
                        I’m currently seeking a <span className="supportingText">junior frontend role</span> where I can
                        continue developing my skills while contributing to
                        <span className="supportingText"> real-world products</span> within a
                        <span className="supportingText"> collaborative, professional team</span>.
                    </p>

                    <div>
                        <div className="flex gap-1 items-center text-slate-200">
                        <p className="font-medium">Get in touch</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                        </div>

                        <div className="text-2xl flex justify-center gap-5 pt-2 text-slate-300">
                        <a href='mailto:john98elliott@gmail.com?subject=Portfolio%20Contact%20Me'><FontAwesomeIcon icon={faEnvelope} className="cursor-pointer hover:scale-110 hover:text-slate-100"/></a>
                        <a href="https://www.linkedin.com/in/john-elliott1998/"><FontAwesomeIcon icon={faSquareLinkedin} className="cursor-pointer hover:scale-110 hover:text-slate-100"/></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" flex-1 hidden md:flex flex-col justify-center items-center gap-2">
                    <div className="relative">
                        <div className="bg-white/95 shadow-sm  flex flex-col items-center p-14 rounded-xl z-10 md:p-16">
                            <img src={heroImage} className="w-36 h-36 bg-slate-100 rounded-full ring-2 ring-white shadow-sm"/>
                            <p className="rounded-xl bg-slate-100 text-slate-800 py-1 px-2 text-sm w-fit font-medium ring-2 ring-white shadow-sm tracking-wide">Frontend Developer</p>
                            <div className="absolute bg-slate-200/80 text-slate-600 text-xs py-1 px-2 rounded-full flex gap-2 items-center top-[15%] right-[5%] -translate-y-1/2">
                                <i class="devicon-javascript-plain"></i>
                                <p>JavaScript</p>
                            </div>
                            <div className="absolute bg-slate-200/80 text-slate-600 text-xs py-1 px-2 rounded-full flex gap-2 items-center top-[15%] left-[5%] -translate-y-1/2">
                                <i class="devicon-typescript-plain"></i>
                                <p>TypeScript</p>
                            </div>
                            <div className="absolute bg-slate-200/80 text-slate-600 text-xs py-1 px-2 rounded-full flex gap-2 items-center top-[50%] left-[15%] -translate-y-1/2 -translate-x-full">
                                <i class="devicon-react-original"></i>
                                <p>React</p>
                            </div>
                            <div className="absolute bg-slate-200/80 text-slate-600 text-xs py-1 px-2 rounded-full flex gap-2 items-center top-[50%] right-[15%] -translate-y-1/2 translate-x-full">
                                <i class="devicon-html5-plain"></i>
                                <p>HTML</p>
                            </div>
                            <div className="absolute bg-slate-200/80 text-slate-600 text-xs py-1 px-2 rounded-full flex gap-2 items-center bottom-[2%] left-[5%] -translate-y-1/2">
                                <i class="devicon-tailwindcss-original"></i>
                                <p>Tailwind CSS</p>
                            </div>
                            <div className="absolute bg-slate-200/80 text-slate-600 text-xs py-1 px-2 rounded-full flex gap-2 items-center bottom-[2%] right-[5%] -translate-y-1/2">
                                <i class="devicon-css3-plain"></i>
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>
                    <button className="rounded-xl py-2 px-4 cursor-pointer bg-violet-600 text-white shadow-sm tracking-wide text-sm hover:bg-violet-500 focus:ring-2 focus:ring-violet-400/60">Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default GeneralInfo;