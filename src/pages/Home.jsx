import AboutMe from './about-me/AboutMe'
import ContactPage from './ContactPage'
import HeroSection from './HeroSection'
import Projects from './projects/Projects'

function Homepage () {

  return (
    <div className="md:px-10 bg-slate-900 p-5 md:p-0 flex flex-col gap-10">
        <section><HeroSection/></section>
        <section id="aboutMe"><AboutMe /></section>
        <section id='projects'><Projects /></section>
        <section id='contactPage'><ContactPage /></section>
    </div>
  )
}

export default Homepage;