import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStarOfLife, faArrowLeftLong, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import screenshot1 from '../../../assets/project-screenshots/compliance-tracker/screenshot1.png'
import screenshot2 from '../../../assets/project-screenshots/compliance-tracker/screenshot2.png'
import screenshot3 from '../../../assets/project-screenshots/compliance-tracker/screenshot3.png'
import screenshot4 from '../../../assets/project-screenshots/compliance-tracker/screenshot4.png'


const keyFeatures = [
                {title: 'Integrated Database & Live UI Updates', text: 'Client feedback is stored in a central Supabase database and reflected instantly in the analytics portal, ensuring the UI always displays up-to-date responses without manual intervention.'}, 
                {title: 'Advanced Filtering & Sorting', text: 'Responses can be filtered by clinician, assessment type, and sentiment (positive or negative), with sorting options by rating or alphabetically to quickly surface relevant insights.'}, 
                {title: 'Protected & Authenticated Routes', text: 'Authentication and route protection ensure only authorised users can access the analytics portal, keeping client feedback secure and separating public form access from internal data views.'}, 
                {title: 'QR Code–Accessible Feedback Form', text: 'Clients can access the feedback form instantly via a QR code, reducing friction and enabling quick, mobile-friendly feedback collection immediately after assessments.'}, 
                {title: 'Separation of Form & Analytics Portal', text: 'The project is split into two clear experiences: a simple public form for data collection and a secure portal focused on analysing and interpreting feedback.'},
                {title: 'Configurable Questions & Clinician Management', text: 'Feedback questions and clinician lists can be updated through the portal without code changes, allowing the system to adapt as services and teams evolve.'}, 
            ]


function CalorieCalculator () {

    const navigate = useNavigate()

    return (
    <div className="p-5 min-h-screen md:px-40 md:py-15 bg-slate-900 flex flex-col gap-5 text-white">
        <p onClick={() => navigate('/')} className="py-2 md:py-0 absolute text-violet-400 hover:text-violet-300 flex gap-2 items-center cursor-pointer hover:translate-x-[-5px]">
            <FontAwesomeIcon icon={faArrowLeftLong} className=""/>
            <span className="hidden md:block">Back</span>
        </p>        
        <div>
            <h1 className="text-center sectionHeading">Calorie Calculator</h1>
            <div className="flex gap-2 items-center justify-center">
                <p className="text-center text-sm text-slate-400">JavaScript |</p>
                <p className="text-center text-sm text-slate-400">React |</p>
                <p className="text-center text-sm text-slate-400">CSS</p>
            </div>
        </div>
        <div className="">
            <h2 className="subHeadings">Why?</h2>
            <p className="text-xs md:text-base text-slate-400">Assessment calculations were handled through a static Excel tool with minimal usability or client interaction. I rebuilt this as a clean, UI-first web calculator that presents results clearly and can be reused beyond the assessment, allowing me to focus on component design, TypeScript structure, and polished frontend user experience.</p>
        </div>
        <div>
            <h2 className="subHeadings">Key Features</h2>
            <div>
                {keyFeatures.map(feature => (
                    <div>
                        <div className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faStarOfLife} className="text-xs"/>
                            <h2 className="text-sm md:text-lg">{feature.title}</h2>
                        </div>
                        <p className="text-xs md:text-base text-slate-400">{feature.text}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 w-full">
            {
                [screenshot1, screenshot2, screenshot3, screenshot4].map((image, i) => {
                    return (
                        <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                            <img src={image} alt='Screenshot from compliance website' className=""/>
                        </div>
                    )
                })
            }
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row [&>*]:flex-1 gap-3 md:gap-10 md:px-10 md:w-2/3">
                <a href='https://github.com/Jakelliott98/NH_WeightTracker' target='_blank' className="font-semibold flex items-center justify-center gap-1 py-4 px-4 rounded-lg border-2 cursor-pointer md:font-black tracking-wide ctaButtons"><FontAwesomeIcon icon={faGithub} /> GitHub Repo</a>
                <a href="" target="_blank" className="flex items-center justify-center gap-1 py-4 px-4 rounded-lg border-2 cursor-pointer font-semibold md:font-black tracking-wide ctaButtons"><FontAwesomeIcon icon={faUpRightFromSquare} /> Live Site</a>
            </div>
        </div>
    </div>

    )
}

export default CalorieCalculator;