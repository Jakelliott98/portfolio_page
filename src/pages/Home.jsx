import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"
import AboutMe from './about-me/AboutMe'
import ContactPage from './ContactPage'
import HeroSection from './HeroSection'
import Projects from './projects/Projects'

function Homepage () {

  const [currentSection, setCurrentSection] = useState(0)
  const maxSections = 4
  let scrollDelta = useRef(0)
  let isScrolling = useRef(false)

  const scrollUp = () => setCurrentSection(prev => Math.max(prev - 1, 0))
  const scrollDown = () => setCurrentSection(prev => Math.min(prev + 1, maxSections - 1))

  useEffect(() => {

    const handleWheel = (e) => {

      if (isScrolling.current) return

      scrollDelta.current += e.deltaY;

      const threshold = window.innerHeight * 0.25;

      if (scrollDelta.current > threshold) {
        isScrolling.current = true;
        scrollDown()
        scrollDelta.current = 0

        setTimeout(() => {
          isScrolling.current = false
        }, 600)

      } else if (scrollDelta.current < -threshold) {
        isScrolling.current = true;
        scrollUp()
        scrollDelta.current = 0

        setTimeout(() => {
          isScrolling.current = false
        }, 600)
      }

    }

    window.addEventListener('wheel', handleWheel, { passive: true })

    return () => window.removeEventListener('wheel', handleWheel)

  }, [])
  
  useEffect(() => {
    window.scrollTo({
      top: currentSection * window.innerHeight,
      behavior: 'smooth',
    })
  }, [currentSection])

  return (
    <div>
      <HeroSection setCurrentSection={setCurrentSection}/>
      <AboutMe />
      <Projects />
      <ContactPage />
    </div>
  )
}

export default Homepage;



/*
  <HeroSection setCurrentSection={setCurrentSection}/>
  <AboutMe />
  <Projects />
  <ContactPage />
*/