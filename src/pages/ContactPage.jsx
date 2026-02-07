import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage () {

    return (
        <div className="min-h-screen md:h-screen text-slate-200 flex flex-col md:p-10">
            <h1 className="hidden md:block text-3xl font-black text-slate-700 md:p-5">John Elliott</h1>
            <div className="flex-1 flex flex-col md:flex-row [&>*]:flex-1">
                <div className="md:p-5 flex flex-col justify-center">
                    <h1 className="text-slate-600 text-xl md:text-9xl font-black hover:text-slate-400 cursor-pointer">Let's Talk</h1>
                    <p className="text-sm md:text-base mt-3 text-slate-400 md:w-2/3">I am looking for a career transition into tech and open to discussing with any potential helpers or recruiters - Additionally I am open to any tech opportunities where I can further learn and develop skills</p>
                    <p className="text-sm md:text-base text-cyan-800 mt-5 hover:text-cyan-700 w-fit">07393938301</p>
                    <p className="text-sm md:text-base text-cyan-800 hover:text-cyan-700 w-fit">John98elliott@gmail.com</p>
                </div>
                <form action="https://formsubmit.co/86f92f776417bde93b5694851f5131cf" method="POST" className="md:p-5 flex flex-col justify-center gap-5">
                    <div className="flex flex-col md:flex-row gap-5 [&>*]:flex-1">
                        <div className="flex flex-col gap-2">
                            <label className="md:font-bold text-base md:text-xl text-slate-500">Name</label>
                            <input type="text" name='name' required className="p-2 border-b border-slate-500 outline-none focus:outline-none"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="md:font-bold text-base md:text-xl text-slate-500">Email</label>
                            <input type="email" name='email' required className="p-2 border-b border-slate-500 outline-none focus:outline-none"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="md:font-bold text-base md:text-xl text-slate-500">Message</label>
                        <textarea type="text" name='content' required className="border border-slate-500 rounded p-2 outline-none focus:outline-none"/>
                    </div>
                    <button type="submit" className="border border-slate-500 rounded py-3 text-slate-400 md:font-bold cursor-pointer hover:bg-slate-500 hover:text-slate-900">Send  <FontAwesomeIcon icon={faPaperPlane} className="rotate-45"/></button>
                </form>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="flex w-1/6 justify-center gap-5 items-center text-3xl text-slate-500">
                    <a href="https://www.linkedin.com/in/john-elliott1998/"><FontAwesomeIcon icon={faLinkedin} className="cursor-pointer hover:text-cyan-700"/></a>
                    <a href="https://github.com/Jakelliott98"><FontAwesomeIcon icon={faGithub} className="cursor-pointer hover:text-cyan-700"/></a>
                </div>
            </div>
        </div>

    )
}

