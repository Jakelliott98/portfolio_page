import heroImage from '../assets/animated-picture.png'
import HeaderSection from './HeaderSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function HeroSection () {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(scrollY > 50)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className="pt-20 md:pt-0 h-screen md:min-h-screen md:max-h-screen text-slate-300 flex flex-col">
            <HeaderSection />
            <section className="h-full md:px-20 flex flex-col md:flex-row gap-5 md:gap-0">
                <div className="flex-1 flex justify-center items-center w-full">
                    <div className="w-full flex flex-col justify-center items-center md:items-start">
                        <img src={heroImage} className='mb-5 md:hidden w-[200px] h-[200px] rounded-full object-cover border-4 border-violet-600 shadow-[0_0_60px_rgba(139,92,246,0.35)]'/>
                        <h1 className="text-4xl md:text-9xl font-black text-slate-100">JOHN ELLIOTT</h1>
                        <h2 className="text-xl md:text-3xl text-slate-200 font-semibold md:font-light md:text-left">Frontend Developer</h2>
                        <p className='hidden md:block text-slate-300 mt-6'> 
                            <span className='supportingText'>Self-taught JavaScript and React Developer</span> focused on building <span className='supportingText'>practical and user-friendly web experiences</span>.
                            <span className='hidden md:inline'> 
                                &nbsp;Looking to join teams where I can <span className='supportingText'>contribute value </span> and <span className='supportingText'>keep growing as a developer.</span>
                            </span>
                        </p>
                        <p className='text-slate-400 md:hidden mt-3'>Self-taught JavaScript and React Developer focused on building practical and user-friendly web experiences. Looking to join teams where I can contribute value and keep growing as a developer. </p>
                    </div>                        
                </div>
                <div className="flex-3 flex justify-center items-center relative">
                    <img src={heroImage} className='hidden md:block w-[500px] h-[500px] rounded-full object-cover border-4 border-violet-600 shadow-[0_0_60px_rgba(139,92,246,0.35)]'/>
                </div>
            </section>
            <FontAwesomeIcon icon={faAnglesDown} className={`absolute w-full bottom-15 md:bottom-5 left-1/2 animate-bounce transition-opacity duration-500 ${visible && 'opacity-0'}`}/>
        </div>
    )
}

//             <div className='absolute h-fit w-screen bottom-1.5 flex items-center justify-center md:pb-10 animate-bounce text-slate-200'>
