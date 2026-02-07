import AboutMe from './about-me/AboutMe'
import ContactPage from './ContactPage'
import HeroSection from './HeroSection'
import Projects from './projects/Projects'

function Homepage () {
  
  return (
    <div className="bg-slate-900 p-5 md:p-0 flex flex-col gap-10">
      <HeroSection/>
      <AboutMe />
      <Projects />
      <ContactPage />
    </div>
  )
}

export default Homepage;