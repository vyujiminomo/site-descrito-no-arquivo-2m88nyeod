import { About } from '@/components/about'
import { Hero } from '@/components/hero'
import { useReveal } from '@/hooks/use-reveal'
import { ThemeProvider } from '@/hooks/use-theme'

const Index = () => {
  useReveal()

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-black dark:text-neutral-100">
        <Hero />
        <About />
      </main>
    </ThemeProvider>
  )
}

export default Index
