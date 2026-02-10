import heroImage from '../assets/animated-picture.png'
import HeaderSection from './HeaderSection'

export default function HeroSection () {

    return (
        <div className="pt-20 md:pt-0 h-screen md:min-h-screen md:max-h-screen text-slate-300 flex flex-col">
            <HeaderSection />
            <div className="flex-1 flex flex-col">
                <div className="flex-1 md:px-10 md:px-20 flex flex-col gap-5 md:gap-0 md:flex-row h-full [&>*]:flex-1">
                    <div className="flex justify-center items-center w-full">
                        <div className="w-full flex flex-col justify-center items-center md:items-left [&>*]:text-center md:[&>*]:text-left">
                            <img src={heroImage} className='mb-5 md:hidden w-[200px] h-[200px] rounded-full object-cover border-4 border-violet-600 shadow-[0_0_60px_rgba(139,92,246,0.35)]'/>
                            <h1 className="text-4xl md:text-9xl font-black text-slate-100">JOHN ELLIOTT</h1>
                            <h2 className="text-xl md:text-3xl text-slate-200 font-semibold md:font-light">Frontend Developer</h2>
                            <p className='hidden md:block text-slate-400 mt-6'> I’m a self-taught frontend developer transitioning from a healthcare career into tech. I’m passionate about building engaging, user-friendly web experiences and continuously expanding my skills in React, Tailwind, and modern web technologies. I’m looking for opportunities to contribute to meaningful projects while growing as a developer.</p>
                            <p className='text-slate-400 md:hidden mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, facere esse ipsa perspiciatis et beatae veniam voluptas rerum quaerat minima repudiandae officiis asperiores, autem optio reprehenderit. Consequuntur, expedita fuga? Aliquid!</p>
                        </div>                        
                    </div>
                    <div className="flex justify-center items-center relative">
                        <img src={heroImage} className='hidden md:block w-[450px] h-[450px] rounded-full object-cover border-4 border-violet-600 shadow-[0_0_60px_rgba(139,92,246,0.35)]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}