import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Projects () {

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center p-10">
            <h1 className="text-6xl text-center mb-5 font-black text-slate-500">Projects</h1>
            <div className="flex-1 flex flex-col justify-between px-25">
                <div className="bg-slate-800 p-5 rounded-xl flex gap-4">
                    <div className="flex-1 bg-slate-600 rounded">
                            <img src="#"/>
                    </div>
                    <div className="flex-4">
                        <h1 className="text-xl font-bold">Compliance Tracker <FontAwesomeIcon className="text-md" icon={faArrowRight} /></h1>
                        <p className="text-slate-400 pt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam necessitatibus dignissimos, suscipit est temporibus neque repellendus inventore eveniet quos labore laboriosam architecto. Cum beatae odit libero aspernatur, doloremque facere accusamus.</p>
                        <ul className="flex gap-2 pt-2">
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">React</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">TypeScript</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">Tailwind CSS</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">React Query</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">Supabase</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">Clerk</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">React Hook Forms</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">React Router</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl flex gap-4">
                    <div className="flex-1 bg-slate-600 rounded">
                        <img src="#"/>
                    </div>
                    <div className="flex-4">
                        <h1 className="text-xl font-bold">Customer Feedback Forms<FontAwesomeIcon className="text-md" icon={faArrowRight} /></h1>
                        <p className="text-slate-400 pt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam necessitatibus dignissimos, suscipit est temporibus neque repellendus inventore eveniet quos labore laboriosam architecto. Cum beatae odit libero aspernatur, doloremque facere accusamus.</p>
                        <ul className="flex gap-2 pt-2">
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">JavaScript</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">React</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">HTML</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">CSS</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">Supabase</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">Clerk</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">React Router</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl flex gap-4">
                    <div className="flex-1 bg-slate-600 rounded">
                        <img src="#"/>
                    </div>
                    <div className="flex-4">
                        <h1 className="text-xl font-bold"> Calorie Calculator <FontAwesomeIcon className="text-md" icon={faArrowRight} /></h1>
                        <p className="text-slate-400 pt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam necessitatibus dignissimos, suscipit est temporibus neque repellendus inventore eveniet quos labore laboriosam architecto. Cum beatae odit libero aspernatur, doloremque facere accusamus.</p>
                        <ul className="flex gap-2 pt-2">
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">JavaScript</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">JavaScript</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">JavaScript</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">JavaScript</li>
                            <li className="py-1 px-2 bg-slate-900 rounded text-sm text-slate-500">Test</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}