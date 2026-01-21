import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSquareLinkedin, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"
import heroImage from '../../assets/Hero_me.png'

function GeneralInfo () {
    
    return (
        <div className="flex gap-15 text-slate-400">
            <div className="flex flex-col gap-5 flex-2">
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl font-bold text-left text-slate-400">
                        <span className="opacity-60">👋</span> About Me
                    </h1>
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
                    <a href='mailto:john98elliott@gmail.com?subject=Portfolio%20Contact%20Me'><FontAwesomeIcon icon={faEnvelope} className="cursor-pointer hover:scale-110 hover:text-white"/></a>
                    <a href="https://www.linkedin.com/in/john-elliott1998/"><FontAwesomeIcon icon={faSquareLinkedin} className="cursor-pointer hover:scale-110 hover:text-white"/></a>
                    <a><FontAwesomeIcon icon={faSquareXTwitter} className="cursor-pointer hover:scale-110 hover:text-white"/></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-2">
                <div className="relative">
                    {/* ADD IN STACK BUBBLES */}
                    <div className="bg-white flex flex-col items-center p-20 rounded-xl z-10">
                        <img src={heroImage} className="w-36 h-36 bg-slate-100 rounded-full"/>
                        <p className="rounded-xl bg-slate-100 text-black py-1 px-2 text-sm w-fit">Frontend Developer</p>
                    </div>
                </div>
                <button className="rounded-xl border border-slate-100 py-2 px-4 cursor-pointer hover:bg-white hover:text-slate-900">Download CV</button>
            </div>
        </div>
    )
}

export default GeneralInfo;