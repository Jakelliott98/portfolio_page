
export default function HeroSection () {

    return (
        <div className=" h-screen max-h-screen bg-slate-900 text-slate-300 overflow-hidden">
            <nav className="h-1/12 bg-slate-900 px-10 flex justify-around items-center text-slate-600 font-bold">
                <a className='hover:text-slate-200 cursor-pointer'>HOME</a>
                <a className='hover:text-slate-200 cursor-pointer'>ABOUT</a>
                <a className='hover:text-slate-200 cursor-pointer'>WORK</a>
                <a className='hover:text-slate-200 cursor-pointer'>CONTACT</a>
            </nav>
            <div className="px-10 flex h-full [&>*]:flex-1">
                <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-left [&>*]:text-left">
                    <h1 className="text-9xl font-black text-slate-500">Hello,</h1>
                    <h2 className="text-3xl text-slate-400 font-bold">- It's John a Frontend Developer</h2>
                    <p className='text-slate-400 mt-6'> I’m a self-taught frontend developer transitioning from a healthcare career into tech. I’m passionate about building engaging, user-friendly web experiences and continuously expanding my skills in React, Tailwind, and modern web technologies. I’m looking for opportunities to contribute to meaningful projects while growing as a developer.</p>
                    <button className="cursor-pointer mt-6 py-2 px-4 rounded-3xl bg-violet-500 w-fit hover:bg-violet-400">Contact</button>
                </div>
                </div>
                <div className="flex h-full h-fit">
                    
                </div>
            </div>
        </div>
    )
}