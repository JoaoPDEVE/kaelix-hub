import { useRef, useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ProductSection } from '@/components/ProductSection'
import { TeamSection } from '@/components/TeamSection'
import { CommunitySection } from '@/components/CommunitySection'
import { Footer } from '@/components/Footer'
import { InteractiveBackground } from '@/components/InteractiveBackground'
import { LanguageProvider } from '@/contexts/LanguageContext'

function App() {
  const mainRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)

  const scrollToSection = (index: number) => {
    if (mainRef.current) {
      const sectionWidth = window.innerWidth
      mainRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const scrollLeft = mainRef.current.scrollLeft
        const sectionWidth = window.innerWidth
        const section = Math.round(scrollLeft / sectionWidth)
        setCurrentSection(section)
      }
    }

    const mainElement = mainRef.current
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll)
      return () => mainElement.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
        <InteractiveBackground variant="playful" />
        <Header onNavigate={scrollToSection} currentSection={currentSection} />
        <main 
          ref={mainRef}
          className="flex h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide relative z-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex-shrink-0 w-screen h-screen snap-start">
            <HeroSection />
          </div>
          <div className="flex-shrink-0 w-screen h-screen snap-start overflow-y-auto">
            <AboutSection />
          </div>
          <div className="flex-shrink-0 w-screen h-screen snap-start overflow-y-auto">
            <ProductSection />
          </div>
          <div className="flex-shrink-0 w-screen h-screen snap-start overflow-y-auto">
            <TeamSection />
          </div>
          <div className="flex-shrink-0 w-screen h-screen snap-start overflow-y-auto flex flex-col">
            <CommunitySection />
            <Footer />
          </div>
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App