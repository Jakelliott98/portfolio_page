import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Projects () {

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200">
            <h1 className="text-6xl text-center mb-10">Projects</h1>
            <div className="gap-10 flex  flex-col justify-around px-25">
                <div className="bg-slate-500 p-10 rounded-xl flex">
                    <div className="flex-1">
                        <img src="#"/>
                    </div>
                    <div className="flex-4">
                        <h1 className="text-lg font-bold">Compliance Tracker <FontAwesomeIcon className="text-md" icon={faArrowRight} /></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam necessitatibus dignissimos, suscipit est temporibus neque repellendus inventore eveniet quos labore laboriosam architecto. Cum beatae odit libero aspernatur, doloremque facere accusamus.</p>
                    </div>
                </div>
                <div className="bg-slate-500 p-10 rounded-xl"> Project 2 </div>
                <div className="bg-slate-500 p-10 rounded-xl"> Project 3 </div>
            </div>
            
        </div>
    )
}