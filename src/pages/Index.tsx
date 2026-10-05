import { About } from '@/components/about'
import { Hero } from '@/components/hero'
import { useReveal } from '@/hooks/use-reveal'

const Index = () => {
  useReveal()

  return (
    <main className="bg-black">
      <Hero />
      <About />
    </main>
  )
}

export default Index
