
function ProfessionalLife () {
    
    return (
        <div className="contents h-full">
            <h1 className="sectionHeading text-center">
                <span>🚀</span> Professional Journey
            </h1>
            <div className=" w-full max-w-full flex gap-10 overflow-x-auto snap-x snap-mandatory">
                <div className="min-w-[350px] flex-1 bg-slate-800/80 backdrop-blur p-6 rounded-xl grid grid-rows-[15%_1fr_10%] items-center border border-slate-700">
                    <h2 className="text-xl font-semibold text-slate-100 text-center">My Story</h2>
                    <div className="flex flex-col gap-2 self-start">
                        <p class="text-sm flex-1 text-slate-300 leading-relaxed"> I began coding in 2024 after taking a <span class="supportingText">short introductory frontend course</span>. What started as a simple desire to learn a new skill quickly grew into a <span class="supportingText">genuine passion</span>.</p> 
                        <p class="text-sm flex-1 text-slate-300 leading-relaxed">I loved challenging myself by <span class="supportingText">recreating real websites</span>, which sharpened my HTML and CSS skills. From there, I committed to learning consistently and <span class="supportingText">building small projects</span> to deepen my understanding.</p>
                    </div>
                    <ul className="pt-4 flex justify-center gap-5 items-center text-lg text-slate-500">
                        <li><i class="devicon-html5-plain"></i></li>
                        <li><i class="devicon-css3-plain"></i></li>
                    </ul>
                </div>
                <div className="min-w-[350px] flex-1 bg-slate-800/80 backdrop-blur p-6 rounded-xl grid grid-rows-[15%_1fr_10%] items-center border border-slate-700">
                    <h2 className="text-xl font-semibold text-slate-100 text-center">Now</h2>
                    <div className="flex flex-col gap-2 self-start">
                        <p class="text-sm flex-1 text-slate-300 leading-relaxed"> Right now, I work mainly with <span class="supportingText">React and JavaScript</span> to build <span class="supportingText">responsive, component‑based interfaces</span>. I’m always expanding my skill set, and learning <span class="supportingText">TypeScript</span> and <span class="supportingText">Tailwind</span> has helped me write safer, more consistent code.</p> 
                        <p class="text-sm flex-1 text-slate-300 leading-relaxed">Early in my journey, I realised I’m most motivated when I’m <span class="supportingText">coding with purpose</span>. I pushed myself to <span class="supportingText">solve real problems</span> from my workplace and create tools that genuinely help people. </p>
                    </div>
                    <ul className="pt-4 flex justify-between items-center text-lg text-slate-500">
                        <li><i class="devicon-javascript-plain"></i></li>
                        <li><i class="devicon-react-original"></i></li>
                        <li><i class="devicon-tailwindcss-original"></i></li>
                        <li><i class="devicon-typescript-plain"></i></li>
                        <li><i class="devicon-github-original"></i></li>
                        <li><i class="devicon-supabase-plain"></i></li>
                    </ul>
                </div>
                <div className="min-w-[350px] flex-1 bg-slate-800/80 backdrop-blur p-6 rounded-xl grid grid-rows-[15%_1fr_10%] items-center border border-slate-700">
                    <h2 class="text-xl font-semibold text-slate-100 text-center">Next</h2>
                    <div className="flex flex-col gap-2 self-start">
                        <p class="text-sm flex-1 text-slate-300 leading-relaxed"> My next focus is learning <span class="supportingText">Next.js</span> and <span class="supportingText">Redux</span> to strengthen application structure, performance, and state management. Each new technology I learn reinforces my previous knowledge.</p> 
                        <p class="text-sm flex-1 text-slate-300 leading-relaxed">On a personal level, I’d love to build a project around <span class="supportingText">sustainability</span> and create something that contributes, even in a small way, to real‑world change. </p>
                    </div>
                    <ul className="pt-4 flex justify-between items-center text-lg text-slate-500">
                        <li><i class="devicon-redux-original"></i></li>
                        <li><i class="devicon-nextjs-original-wordmark"></i></li>
                        <li><i class="devicon-nodejs-plain"></i></li>
                        <li><i class="devicon-webpack-plain"></i></li>
                        <li><i class="devicon-git-plain"></i></li>
                    </ul>
                </div>
                <div className="min-w-[350px] flex-1 bg-slate-800/80 backdrop-blur p-6 rounded-xl grid grid-rows-[15%_1fr_10%] items-center border border-slate-700">
                    <h2 className="text-xl font-semibold text-slate-100 text-center">Later</h2>
                    <div className="flex flex-col gap-2 self-start">
                        <p class="text-sm flex-1 text-slate-300 leading-relaxed"> Looking further ahead, I want to broaden my understanding of the <span class="supportingText">full lifecycle of modern applications</span> — including <span class="supportingText">deployment, testing, and cloud services</span>.</p> 
                        <p class="text-sm flex-1 text-slate-300 leading-relaxed">I’m passionate about <span class="supportingText">continuous learning</span>, and I know new areas of development will emerge for me to explore alongside my professional work. </p>
                    </div>
                    <ul className="pt-4 flex justify-between items-center text-lg text-slate-500">
                        <li><i class="devicon-postgresql-plain"></i></li>
                        <li><i class="devicon-amazonwebservices-plain-wordmark"></i></li>
                        <li><i class="devicon-python-plain"></i></li>
                        <li><i class="devicon-docker-plain"></i></li>
                    </ul>
                </div>
            </div>
            <StackBanner />
        </div>
    )
}

export default ProfessionalLife;



function StackBanner () {

    return (
        <div className="flex justify-between text-slate-800 text-3xl">
            <i class="devicon-html5-plain-wordmark"></i>   
            <i class="devicon-css3-plain"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-github-original"></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-typescript-plain"></i>
            <i class="devicon-tailwindcss-original"></i>
            <i class="devicon-git-plain"></i>
            <i class="devicon-vscode-plain"></i>
            <i class="devicon-supabase-plain"></i>
            <i class="devicon-reactrouter-plain"></i>
        </div>
    )
}