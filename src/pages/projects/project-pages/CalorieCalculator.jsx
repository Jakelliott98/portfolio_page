import screenshot1 from '../../../assets/project-screenshots/compliance-tracker/screenshot1.png'
import screenshot2 from '../../../assets/project-screenshots/compliance-tracker/screenshot2.png'
import screenshot3 from '../../../assets/project-screenshots/compliance-tracker/screenshot3.png'
import screenshot4 from '../../../assets/project-screenshots/compliance-tracker/screenshot4.png'
import ProjectPage from "./ProjectPage"

const CalorieCalculatorObj = {
        title: 'Weight Loss Calculator',
        stack: ['Next.js', 'Jest',  'JavaScript', 'React', 'TypeScript', 'React Hook Form', 'Tailwind CSS'],
        why: 'A weight‑loss calculator designed to support clinicians during assessments by handling calculations around RMR, EMR and related metrics, paired with a more client‑friendly interface that helps individuals easily understand their results.',
        features: [{title: 'Fully Tested Logic with Jest', text: 'A fully tested core using Jest to guarantee accurate calculations and reliable behaviour'}, {title: 'Clean, Responsive UI Built with Tailwind', text: 'A clean, responsive interface built entirely with Tailwind to ensure clarity and ease of use across devices.'}, {title: 'Accurate, Type‑Safe Calculation Engine', text: 'A type‑safe calculation engine that handles all metabolic formulas with strict, predictable TypeScript logic.'}],
        images: [screenshot1, screenshot2, screenshot3, screenshot4],
        links: {github: 'https://github.com/Jakelliott98/NH_WeightTracker', site: ''}
    }

function CalorieCalculator () {

    return (
        <ProjectPage project={CalorieCalculatorObj} />
    )
}

export default CalorieCalculator;