
import screenshot1 from '../../../assets/project-screenshots/compliance-tracker/screenshot1.png'
import screenshot2 from '../../../assets/project-screenshots/compliance-tracker/screenshot2.png'
import screenshot3 from '../../../assets/project-screenshots/compliance-tracker/screenshot3.png'
import screenshot4 from '../../../assets/project-screenshots/compliance-tracker/screenshot4.png'
import ProjectPage from "./ProjectPage"

    const complainceTracker = {
            title: 'Compliance Tracker',
            intro: 'A compliance tracker that collects calibration data from Afinion blood machines, manages control expiries and site‑level compliance, and presents nationwide compliance insights through a configurable, authenticated portal for handling submissions and monitoring performance.',
            stack: ['JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Supabase', 'Clerk'],
            problem: 'The current compliance process relies on large spreadsheets to store and track machine calibrations. This approach requires substantial manual effort to update and review compliance. When monitoring around 100 sites each month, clear limitations in accuracy and efficiency can arise with this setup.',
            solution: 'I built a form and portal interface for collecting, storing, and displaying compliance data. This separated approach gives clinicians a simple way to input calibration results, while management has a dedicated space for monitoring overall compliance. The portal’s filtering and sorting features turn what was previously a repetitive, time‑consuming task into a quick and intuitive process. It also includes tools for adding new sites, configuring controls, and exporting data, making the entire workflow far more streamlined.',
            features: [
                {
                    title: 'Configurable Compliance Forms', 
                    text: 'Admin has full control over defining and updating compliance rules, making the system adaptable.'
                }, 
                {
                    title: 'Real‑Time Compliance Status Dashboard', 
                    text: 'An instant view of failing sites, allowing teams to act quickly.'

                }, 
                {
                    title: 'Role‑Based Authenticated Routes', 
                    text: 'Each user only sees the features and data relevant to their role.'

                }, 
                {
                    title: 'Calibration & Expiry Tracking with Automated Status Flags', 
                    text: 'Easy to scan and immediately identify overdue sites, removing the need for manual checks.'

                }],
            images: [screenshot1, screenshot2, screenshot3, screenshot4],
            links: {github: 'https://github.com/Jakelliott98/NH_compliance', site: ''}
        }

function ComplianceTracker () {

    return (
        <ProjectPage project={complainceTracker}/>
    )
}

export default ComplianceTracker;