import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons"

const keyFeatures = [
                {title: 'Integrated Database & Live UI Updates', text: 'Client feedback is stored in a central Supabase database and reflected instantly in the analytics portal, ensuring the UI always displays up-to-date responses without manual intervention.'}, 
                {title: 'Advanced Filtering & Sorting', text: 'Responses can be filtered by clinician, assessment type, and sentiment (positive or negative), with sorting options by rating or alphabetically to quickly surface relevant insights.'}, 
                {title: 'Protected & Authenticated Routes', text: 'Authentication and route protection ensure only authorised users can access the analytics portal, keeping client feedback secure and separating public form access from internal data views.'}, 
                {title: 'QR Code–Accessible Feedback Form', text: 'Clients can access the feedback form instantly via a QR code, reducing friction and enabling quick, mobile-friendly feedback collection immediately after assessments.'}, 
                {title: 'Separation of Form & Analytics Portal', text: 'The project is split into two clear experiences: a simple public form for data collection and a secure portal focused on analysing and interpreting feedback.'},
                {title: 'Configurable Questions & Clinician Management', text: 'Feedback questions and clinician lists can be updated through the portal without code changes, allowing the system to adapt as services and teams evolve.'}, 
            ]


function FeedbackForm () {

    return (
    <div className="min-h-screen flex flex-col gap-5 text-white">
        <div className="flex flex-col gap-2">
            <h1 className="text-center text-5xl font-black">Feedback Form</h1>
            <div className="flex gap-2 items-center justify-center">
                <p className="text-center text-sm text-slate-400">JavaScript |</p>
                <p className="text-center text-sm text-slate-400">React |</p>
                <p className="text-center text-sm text-slate-400">CSS</p>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Why?</h2>
            <p className="text-slate-400">The existing feedback process relied on email follow-ups, which led to low engagement and limited visibility of trends. I built a QR-accessible form paired with a secure analytics portal to centralise responses and present them through filtered tables and charts, focusing on data-driven UI, protected routes, and clear frontend visualisation.</p>
        </div>
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <div>
                {keyFeatures.map(feature => (
                    <div>
                        <div className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faStarOfLife} className="text-xs"/>
                            <h2 className="text-md">{feature.title}</h2>
                        </div>
                        <p className="text-sm text-slate-400">{feature.text}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex flex-col items-center gap-5">
                <div className="h-80 bg-sky-100 w-2/3"></div>
                <div className="h-80 bg-sky-100 w-2/3"></div>
                <div className="h-80 bg-sky-100 w-2/3"></div>
        </div>
        <div className="flex justify-center">
            <div className="flex [&>*]:flex-1 gap-10 px-10 w-2/3">
                <button className="py-4 px-4 bg-slate-200 rounded-lg text-slate-800 font-semibold cursor-pointer">GitHub Repo</button>
                <button className="py-4 px-4 bg-slate-200 rounded-lg text-slate-800 font-semibold cursor-pointer">Live Site</button>
            </div>
        </div>
    </div>

    )
}

export default FeedbackForm;