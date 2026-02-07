import heroImage from '../assets/animated-picture.png'

export default function HeroSection () {

    return (
        <div className="md:h-screen md:min-h-screen md:max-h-screen text-slate-300 overflow-hidden">
            <HeaderSection />
            <div className="flex flex-col h-full">
                <div className="flex-1 md:px-10 md:px-20 flex flex-col gap-5 md:gap-0 md:flex-row h-full [&>*]:flex-1">
                    <div className="flex justify-center items-center w-full">
                        <div className="w-full flex flex-col justify-center items-left [&>*]:text-left">
                            <h1 className="text-xl md:text-9xl font-black text-slate-100">JOHN ELLIOTT</h1>
                            <h2 className="text-base md:text-3xl text-slate-200 font-light">Frontend Developer</h2>
                            <p className='hidden md:block text-slate-400 mt-6'> I’m a self-taught frontend developer transitioning from a healthcare career into tech. I’m passionate about building engaging, user-friendly web experiences and continuously expanding my skills in React, Tailwind, and modern web technologies. I’m looking for opportunities to contribute to meaningful projects while growing as a developer.</p>
                            <p className='text-slate-400 md:hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, facere esse ipsa perspiciatis et beatae veniam voluptas rerum quaerat minima repudiandae officiis asperiores, autem optio reprehenderit. Consequuntur, expedita fuga? Aliquid!</p>
                        </div>                        
                    </div>
                    <div className="flex justify-center items-center relative">
                        <img src={heroImage} className='hidden md:block md:w-[450px] md:h-[450px] rounded-full object-cover border-4 border-violet-600 shadow-[0_0_60px_rgba(139,92,246,0.35)]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HeaderSection ({ onSelect }) {
    
    return (
        <div className="hidden md:flex py-5 w-full px-10 items-center justify-between text-slate-100 absolute border-b-1 border-slate-800">
            <div className="h-full flex items-center justify-center self-start gap-2">
                <p className='text-slate-300'>JOHN ELLIOTT</p>
                <p>|</p>
                <p className='text-slate-300'>FRONTEND DEVELOPER</p>
            </div>
            <nav className="h-full flex gap-5 items-center justify-center self-end relative z-2">
                <a className='hover:text-slate-300 cursor-pointer' onClick={() => onSelect(1)}>ABOUT</a>
                <a className='hover:text-slate-300 cursor-pointer' onClick={() => onSelect(2)}>PROJECTS</a>
                <a className='hover:text-slate-300 cursor-pointer' onClick={() => onSelect(3)}>CONTACT</a>
            </nav>
        </div>
    )
}