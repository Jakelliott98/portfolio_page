import heroImage from '../assets/animated-picture.png'

export default function HeroSection ({ setCurrentSection }) {

    return (
        <div className=" h-screen max-h-screen bg-slate-900 text-slate-300 overflow-hidden">
            <div className="h-1/12 w-full px-10 flex items-center justify-between text-slate-600 font-bold absolute border-b-1 border-slate-800">
                <div className="h-full flex items-center justify-center self-start gap-2">
                    <p>JOHN ELLIOTT</p>
                    <p>|</p>
                    <p>FRONTEND DEVELOPER</p>
                </div>
                <nav className="h-full flex gap-5 items-center justify-center self-end relative z-2">
                    <a className='hover:text-slate-200 text-slate-200/80 cursor-pointer' onClick={() => setCurrentSection(1)}>ABOUT</a>
                    <a className='hover:text-slate-200 text-slate-200/80 cursor-pointer' onClick={() => setCurrentSection(2)}>PROJECTS</a>
                    <a className='hover:text-slate-200 text-slate-200/80 cursor-pointer' onClick={() => setCurrentSection(3)}>CONTACT</a>
                </nav>
            </div>
            <div className="flex flex-col h-full">
                <div className="flex-1 px-20 flex h-full [&>*]:flex-1">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col justify-center items-left [&>*]:text-left">
                            <h1 className="text-9xl font-black text-slate-300/80 ">JOHN ELLIOTT</h1>
                            <h2 className="text-3xl text-slate-300/80 font-bold">- Frontend Developer</h2>
                            <p className='text-slate-300/80 mt-6'> I’m a self-taught frontend developer transitioning from a healthcare career into tech. I’m passionate about building engaging, user-friendly web experiences and continuously expanding my skills in React, Tailwind, and modern web technologies. I’m looking for opportunities to contribute to meaningful projects while growing as a developer.</p>
                            <button onClick={() => {setCurrentSection(3)}} className="px-3 py-2 rounded-xl w-fit border-1 border-cyan-800 bg-cyan-600 text-slate-300 cursor-pointer font-bold mt-5">CONTACT ME</button>
                        </div>                        
                    </div>
                    <div className="flex justify-center items-center relative">
                        <img src={heroImage} className='w-[450px] h-[450px] rounded-full object-cover border-4 border-cyan-600 shadow-[0_0_60px_rgba(8,145,178,0.35)]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}