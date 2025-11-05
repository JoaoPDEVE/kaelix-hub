import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ProductSection } from '@/components/ProductSection'
import { TeamSection } from '@/components/TeamSection'
import { CommunitySection } from '@/components/CommunitySection'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <TeamSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}

export default App