import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage () {

    return (
        <div className="md:min-h-screen md:h-screen text-slate-200 flex flex-col gap-10 md:gap-0 md:p-10 mt-20 md:mt-0">
            <div className="flex-1 flex flex-col md:flex-row md:[&>*]:flex-1 gap-5 md:gap-0">
                <div className="md:p-5 flex flex-col justify-center items-center md:items-start">
                    <h1 className="text-slate-100 text-4xl md:text-9xl font-black cursor-pointer">Let's Talk</h1>
                    <p className="text-sm md:text-base mt-3 text-slate-400 md:w-2/3 text-center md:text-left"> I’m exploring <span className="text-slate-300 font-semibold">opportunities in tech</span> as I continue growing my skills in <span className="text-slate-300 font-semibold">frontend development</span>. With a background in <span className="text-slate-300 font-semibold">healthcare</span> and a strong focus on learning, I’m open to connecting with <span className="text-slate-300 font-semibold">teams, mentors, and recruiters</span> as I build experience in this field. </p>
                    <p className="text-sm md:text-base text-violet-400 mt-5 w-fit cursor-pointer" onClick={() => navigator.clipboard.writeText('07393938301')}>07393938301 <FontAwesomeIcon icon={faCopy} /></p>
                    <p className="text-sm md:text-base text-violet-400 w-fit cursor-pointer" onClick={() => navigator.clipboard.writeText('john98elliott@gmail.com')}>John98elliott@gmail.com <FontAwesomeIcon icon={faCopy} /></p>
                </div>
                <form action="https://formsubmit.co/86f92f776417bde93b5694851f5131cf" method="POST" className="md:p-5 flex flex-col justify-center gap-5">
                    <div className="flex flex-col md:flex-row gap-5 [&>*]:flex-1">
                        <div className="flex flex-col gap-1">
                            <label className="text-base md:text-xl text-slate-400">Name</label>
                            <input type="text" name='name' required className="text-sm md:text-base py-1 border-b border-slate-600 outline-none focus:outline-none"/>
                        </div>
                        <div className="flex flex-col gap-1"> 
                            <label className="text-base md:text-xl text-slate-400">Email</label>
                            <input type="email" name='email' required className="text-sm md:text-base py-1 border-b border-slate-600 outline-none focus:outline-none"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2">
                        <label className="text-base md:text-xl text-slate-400">Message</label>
                        <textarea type="text" name='content' required className="text-sm md:text-base border border-slate-600 rounded p-2 outline-none focus:outline-none"/>
                    </div>
                    <button type="submit" className="border rounded py-3 text-slate-200 font- cursor-pointer ctaButtons">Send  <FontAwesomeIcon icon={faPaperPlane} className="rotate-45"/></button>
                </form>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="flex w-1/6 justify-center gap-5 items-center text-3xl text-slate-500">
                    <a target="_blank" href="https://www.linkedin.com/in/john-elliott1998/"><FontAwesomeIcon icon={faLinkedin} className="cursor-pointer hover:text-violet-400"/></a>
                    <a target="_blank" href="https://github.com/Jakelliott98"><FontAwesomeIcon icon={faGithub} className="cursor-pointer hover:text-violet-400"/></a>
                </div>
            </div>
        </div>

    )
}

