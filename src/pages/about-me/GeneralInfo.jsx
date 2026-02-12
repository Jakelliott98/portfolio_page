import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons"
import heroImage from '../../assets/Hero_me.png'

function GeneralInfo () {
    
    return (
        <div className="contents text-slate-300">
            <h1 className="sectionHeading text-center">
                <span>👋</span> About Me
            </h1>
            <div className="row-span-2 flex-1 flex flex-col items-center md:flex-row gap-5 md:gap-15 text-slate-300">
                <div className="flex-2 flex flex-col gap-5">
                    <section className="flex flex-col gap-3 text-center md:text-left">
                        <p>Hey there, I’m John — a <span class="supportingText">frontend developer</span> currently working in <span class="supportingText">healthcare</span>. I’m passionate about creating <span class="supportingText">practical, meaningful solutions</span> that make a real difference in people’s lives. Coding became the perfect way for me to <span class="supportingText">turn ideas into tools that genuinely help others</span>.</p>
                        <p className="hidden md:block">I hold both a <span class="supportingText">BSc and MSc in Sport Sciences</span>, which taught me how to <span class="supportingText">absorb information quickly</span> and <span class="supportingText">learn deeply</span>. That background fuels my drive for <span class="supportingText">continuous development</span> and my commitment to pushing myself to grow.</p>
                        <p>I love using code to <span class="supportingText">solve real‑world problems</span>. Many of my projects are inspired by challenges in my current workplace, where I focus on building <span class="supportingText">solutions that directly improve people’s day‑to‑day experience</span>.</p>
                    </section>
                    <section className="flex [&>*]:flex-1">
                        <div className="flex flex-col gap-2">
                            <p className="text-center md:text-left underline text-slate-300">Learning Path</p>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center text-sm text-slate-300">
                                <p className="text-center md:text-left">
                                    <span className="supportingText">Codecademy — Front-End Engineer</span>
                                    <span className="block text-xs text-slate-500">Core JavaScript, React, responsive layouts</span>
                                </p>
                                <p className="text-center md:text-left">
                                    <span className="supportingText">The Odin Project — Frontend</span>
                                    <span className="block text-xs text-slate-500">Real projects, Git workflow, problem-solving fundamentals</span>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="flex justify-between gap-10">
                        <div className="w-full md:w-fit flex justify-center md:justify-start">
                            <div className="w-fit">
                                 
                                <div className="md:hidden text-2xl flex justify-center gap-5 pt-2 text-slate-300">
                                    <a href='mailto:john98elliott@gmail.com?subject=Portfolio%20Contact%20Me'><FontAwesomeIcon icon={faEnvelope} className="cursor-pointer hover:scale-110 hover:text-violet-400"/></a>
                                    <a href="https://www.linkedin.com/in/john-elliott1998/"><FontAwesomeIcon icon={faSquareLinkedin} className="cursor-pointer hover:scale-110 hover:text-violet-400"/></a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="flex-1 flex flex-col justify-center items-center gap-2">
                    <StackImageCard />
                    <a href="/JohnElliott_CV.pdf" download>
                        <button className="rounded-xl py-2 px-4 cursor-pointer ctaButtons shadow-sm tracking-wide text-sm border">Download CV</button>
                    </a>
                </section>
            </div>
        </div>
    )
}




function StackImageCard () {

    return (
    <div className=" relative">
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
    )
}

export default GeneralInfo;