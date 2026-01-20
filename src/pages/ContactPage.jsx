import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ContactPage () {

    return (
        <div className="h-screen bg-slate-900 text-slate-200 flex flex-col p-10">
            <h1 className="text-3xl font-black text-slate-700 p-5">John Elliott</h1>
            <div className="flex-1 flex [&>*]:flex-1">
                <div className="p-5 flex flex-col justify-center">
                    <h1 className="text-slate-600 text-9xl font-black hover:text-slate-400 cursor-pointer">Let's Talk</h1>
                    <p className="mt-3 text-slate-400 w-2/3">I am looking for a career transition into tech and open to discussing with any potential helpers or recruiters - Additionally I am open to any tech opportunities where I can further learn and develop skills</p>
                </div>
                <div className="p-5 flex flex-col justify-center gap-5">
                    <div className="flex gap-5 [&>*]:flex-1">
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-xl text-slate-500">Name</label>
                            <input className="p-2 border-b border-slate-500"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-xl text-slate-500">Email</label>
                            <input className="p-2 border-b border-slate-500"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="font-bold text-xl text-slate-500">Message</label>
                        <textarea className="border border-slate-500"/>
                    </div>
                    <button className="border border-slate-500 w-full py-3 text-slate-400 font-bold cursor-pointer hover:bg-slate-500 hover:text-slate-900">Submit  <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="flex w-1/6 justify-between text-3xl text-slate-500">
                    <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer hover:text-slate-200"/>
                    <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-slate-200"/>
                    <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-slate-200"/>
                    <FontAwesomeIcon icon={faGithub} className="cursor-pointer hover:text-slate-200"/>
                </div>
            </div>
        </div>

    )
}

