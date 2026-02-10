
import screenshot1 from '../../../assets/project-screenshots/compliance-tracker/screenshot1.png'
import screenshot2 from '../../../assets/project-screenshots/compliance-tracker/screenshot2.png'
import screenshot3 from '../../../assets/project-screenshots/compliance-tracker/screenshot3.png'
import screenshot4 from '../../../assets/project-screenshots/compliance-tracker/screenshot4.png'
import ProjectPage from "./ProjectPage"

    const complainceTracker = {
            title: 'Compliance Tracker',
            stack: ['JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Supabase', 'Clerk'],
            why: 'A compliance tracker that collects calibration data from Afinion blood machines, manages control expiries and site‑level compliance, and presents nationwide compliance insights through a configurable, authenticated portal for handling submissions and monitoring performance.',
            features: [{title: 'Configurable Compliance Forms', text: ''}, {title: 'Real‑Time Compliance Status Dashboard', text: ''}, {title: 'Role‑Based Authenticated Routes', text: ''}, {title: 'Calibration & Expiry Tracking with Automated Status Flags', text: ''}],
            images: [screenshot1, screenshot2, screenshot3, screenshot4],
            links: {github: 'https://github.com/Jakelliott98/NH_compliance', site: ''}
        }

function ComplianceTracker () {

    return (
        <ProjectPage project={complainceTracker}/>
    )
}

export default ComplianceTracker;