import screenshot1 from '../../../assets/project-screenshots/compliance-tracker/screenshot1.png'
import screenshot2 from '../../../assets/project-screenshots/compliance-tracker/screenshot2.png'
import screenshot3 from '../../../assets/project-screenshots/compliance-tracker/screenshot3.png'
import screenshot4 from '../../../assets/project-screenshots/compliance-tracker/screenshot4.png'
import ProjectPage from "./ProjectPage"

const keyFeatures = [
                {title: 'Integrated Database & Live UI Updates', text: 'Client feedback is stored in a central Supabase database and reflected instantly in the analytics portal, ensuring the UI always displays up-to-date responses without manual intervention.'}, 
                {title: 'Advanced Filtering & Sorting', text: 'Responses can be filtered by clinician, assessment type, and sentiment (positive or negative), with sorting options by rating or alphabetically to quickly surface relevant insights.'}, 
                {title: 'Protected & Authenticated Routes', text: 'Authentication and route protection ensure only authorised users can access the analytics portal, keeping client feedback secure and separating public form access from internal data views.'}, 
                {title: 'QR Code–Accessible Feedback Form', text: 'Clients can access the feedback form instantly via a QR code, reducing friction and enabling quick, mobile-friendly feedback collection immediately after assessments.'}, 
                {title: 'Separation of Form & Analytics Portal', text: 'The project is split into two clear experiences: a simple public form for data collection and a secure portal focused on analysing and interpreting feedback.'},
                {title: 'Configurable Questions & Clinician Management', text: 'Feedback questions and clinician lists can be updated through the portal without code changes, allowing the system to adapt as services and teams evolve.'}, 
            ]


const feedbackForm = {
        title: 'Feedback Form',
        stack: ['JavaScript', 'React', 'CSS', 'Supabase', 'Clerk'],
        why: 'End‑to‑end feedback system for collecting, organising, and reviewing client feedback. It includes a user‑friendly form where clients can submit comments and ratings, with all responses stored in a Supabase database. The data is then displayed in an authenticated, centralised portal designed for quick analysis. The portal highlights trends, key comments, and overall client satisfaction, helping management make meaningful improvements to their service.',
        features: [{title: 'Integrated Database & Live UI', text: ''}, {title: 'Advanced Filtering & Sorting', text: ''}, {title: 'Protected Authenticated Routes', text: ''}, {title: 'Configurable Questions & Clinician Management', text: ''}],
        images: [screenshot1, screenshot2, screenshot3, screenshot4],
        links: {github: 'https://github.com/Jakelliott98/NH_FeebackPortal', site: ''}
}

function FeedbackForm () {

    return (
        <ProjectPage project={feedbackForm}/>
    )
}

export default FeedbackForm;