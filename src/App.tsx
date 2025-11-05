import { useRef } from 'react'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ProductSection } from '@/components/ProductSection'
import { TeamSection } from '@/components/TeamSection'
import { CommunitySection } from '@/components/CommunitySection'
import { Footer } from '@/components/Footer'

function App() {
  const mainRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (index: number) => {
    if (mainRef.current) {
      const sectionWidth = window.innerWidth
      mainRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header onNavigate={scrollToSection} />
      <main 
        ref={mainRef}
        className="flex h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
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
        <div className="flex-shrink-0 w-screen h-screen snap-start overflow-y-auto">
          <CommunitySection />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App