import ComplianceCover from '../../assets/project-screenshots/compliance-tracker/Dashboard.png'

const projectList = [
    {
        title: 'Feedback Form',
        description: 'An end‑to‑end system that collects and organises client feedback through a simple form, storing responses in Supabase and presenting them in an authenticated, centralised portal for quick, meaningful analysis.',
        languages: ['JavaScript', 'React', 'HTML', 'CSS', 'Supabase', 'Clerk', 'React Router'],
        route: 'feedbackForm',
        image: '#',
    },
    {
        title: 'Compliance Tracker',
        description: 'A secure internal tool for tracking clinical equipment compliance across multiple sites, using dashboards and status flags to highlight calibration, cleaning, and control compliance.',
        languages: ['JavaScript', 'React', 'TypeScript', 'Tailwind', 'React Query', 'Supabase', 'Clerk', 'React Router'],
        route: 'complainceTracker',
        image: ComplianceCover,
    },

]

export default projectList;


/*


     {
        title: 'Calorie Calculator',
        description: 'A simple calculator that uses body composition inputs (weight, height, age, gender) to generate calorie targets, BMR, RMR, and energy recommendations to support clear, practical weight-loss discussions with clients.',
        languages: ['Next.js' ,'TypeScript', 'JavaScript', 'React', 'Tailwind', 'Jest'],
        route: 'calorieCalculator',
        image: '#',
    },


    */