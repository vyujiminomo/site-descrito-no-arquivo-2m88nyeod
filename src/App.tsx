import { About } from '@/components/about'
import { Hero } from '@/components/hero'
import { useReveal } from '@/hooks/use-reveal'

export default function App() {
  useReveal()

  return (
    <main className="bg-black">
      <Hero />
      <About />
    </main>
  )
}
