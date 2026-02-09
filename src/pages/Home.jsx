import AboutMe from './about-me/AboutMe'
import ContactPage from './ContactPage'
import HeaderSection from './HeaderSection'
import HeroSection from './HeroSection'
import Projects from './projects/Projects'

function Homepage () {
  
  return (
    <div className="md:px-10 bg-slate-900 p-5 md:p-0 flex flex-col gap-10">
        <HeroSection/>
        <AboutMe />
        <Projects />
        <ContactPage />
    </div>
  )
}

export default Homepage;