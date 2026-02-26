import ProjectPage from "./ProjectPage"
import formScreenshot from '../../../assets/project-screenshots/feedback-form/feedbackForm.png'
import commentsSection from '../../../assets/project-screenshots/feedback-form/CommentsSection.png'
import homePage from '../../../assets/project-screenshots/feedback-form/HomePage.png'
import reports from '../../../assets/project-screenshots/feedback-form/Reports.png'
import settingPage from '../../../assets/project-screenshots/feedback-form/Settings.png'

const feedbackForm = {
        title: 'Feedback Form',
        intro: 'End‑to‑end feedback system for collecting, organising, and reviewing client feedback. It includes a user‑friendly form where clients can submit comments and ratings, with all responses stored in a Supabase database. The data is then displayed in an authenticated, centralised portal designed for quick analysis. The portal highlights trends, key comments, and overall client satisfaction, helping management make meaningful improvements to their service.',
        stack: ['JavaScript', 'React', 'CSS', 'Supabase', 'Clerk'],
        problem: 'Client feedback is collected nationally using a generic form with a one‑month response window. Submissions were gathered through email, resulting in an 8% response rate and very little site‑specific insight. This meant individual locations lacked the detailed, actionable feedback needed to improve their service.',
        solution: 'A feedback form where clients can rate key questions and leave comments. A connected portal displays all responses using clear, data‑driven visuals, with filtering, sorting, and analysis tools built in. This provides teams with instant access to feedback responses. Helping them address issues sooner and identify trends more easily. The portal also allows configuration of form questions, giving each site the flexibility to tailor feedback to their specific needs.',
        features: [
            {
                title: 'Integrated Database & Live UI', 
                text: 'Pulls data from Supabase and displays it in real time through graphs, percentage visuals and dropdown.'}, 
            {
                title: 'Advanced Filtering & Sorting', 
                text: 'Allows users to filter responses by clinician, rating, and time period and sorting options that make it easy to access relevant insights.'}, 
            {
                title: 'Protected Authenticated Routes', 
                text: 'Uses Clerk authentication to ensure only authorised users can access the portal, protecting client data and maintaining GDPR.'}, 
            {
                title: 'Configurable Questions & Clinician Management', 
                text: 'Allows sites to tailor their feedback forms by changing questions and managing clinician, ensuring site specific data.'
            }],
        images: [ homePage, reports, commentsSection, settingPage, formScreenshot],
        headerImg: reports,
        links: {github: 'https://github.com/Jakelliott98/NH_FeebackPortal', site: 'https://nh-feedbackportal.netlify.app/'}
}

function FeedbackForm () {

    return (
        <ProjectPage project={feedbackForm}/>
    )
}

export default FeedbackForm;