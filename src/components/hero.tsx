import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Macbook } from '@/components/ui/animated-3d-mac-book-air'
import { KineticTypographyLoader } from '@/components/ui/loading-animation'
import { cn } from '@/lib/utils'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Hero() {
  // "intro": the MacBook opens and closes; "name": last opening finished, name assembles
  const [phase, setPhase] = useState<'intro' | 'name'>(() =>
    prefersReducedMotion() ? 'name' : 'intro',
  )
  const [skipped, setSkipped] = useState(prefersReducedMotion)
  const [showDetails, setShowDetails] = useState(false)

  // Deterministic transition: exactly 2 cycles of 4.5s = 9.0s.
  // Guarantees sequence progression even if animationend is blocked or dropped by the browser.
  useEffect(() => {
    if (phase !== 'intro' || skipped) return
    const timer = setTimeout(() => {
      setPhase('name')
    }, 9000)
    return () => clearTimeout(timer)
  }, [phase, skipped])

  useEffect(() => {
    if (phase !== 'name') return
    const t = setTimeout(() => setShowDetails(true), 1600)
    return () => clearTimeout(t)
  }, [phase])

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-black px-4">
      {/* Background details */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[140px] transition-opacity duration-[2000ms]',
          phase === 'name' ? 'opacity-100' : 'opacity-40',
        )}
      />
      <HudCorners />

      {/* MacBook */}
      <div
        className={cn(
          'relative h-[180px] w-[150px] transition-all duration-1000 ease-out',
          phase === 'intro'
            ? 'scale-[1.7] sm:scale-[2.4]'
            : '-mb-2 scale-100 opacity-70 sm:scale-125',
        )}
      >
        <Macbook
          // 0 iterations parks it on the first frame, which is the same open pose the last cycle ends on
          iterations={skipped ? 0 : 2}
          duration={4.5}
          onAnimationComplete={() => setPhase('name')}
        />
      </div>

      {/* Name */}
      <div
        className={cn(
          'relative z-10 mt-6 min-h-[1.2em] sm:mt-10',
          phase === 'intro' && 'invisible',
        )}
      >
        {phase === 'name' && (
          <KineticTypographyLoader
            words={['BRUNO FELIPE']}
            loop={false}
            className="tracking-tight"
          />
        )}
      </div>

      <p
        className={cn(
          'relative z-10 mt-6 font-mono text-xs uppercase tracking-[0.3em] text-neutral-400 transition-all duration-1000 sm:text-sm',
          showDetails ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        )}
      >
        Dev <span className="text-cyan-400">·</span> 13 anos{' '}
        <span className="text-cyan-400">·</span> IA no dia a dia
      </p>

      {phase === 'intro' && (
        <button
          onClick={() => {
            setSkipped(true)
            setPhase('name')
          }}
          className="absolute bottom-8 right-6 z-10 font-mono sm:bottom-14 sm:right-12 text-[11px] uppercase tracking-widest text-neutral-600 transition-colors hover:text-neutral-300"
        >
          Pular intro →
        </button>
      )}

      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className={cn(
          'absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 transition-opacity duration-1000 hover:text-white',
          showDetails ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        Role
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}

function HudCorners() {
  const label = 'font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600'
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden p-6 sm:block">
      <span className="absolute left-6 top-6 h-4 w-4 border-l border-t border-neutral-700" />
      <span className="absolute right-6 top-6 h-4 w-4 border-r border-t border-neutral-700" />
      <span className="absolute bottom-6 left-6 h-4 w-4 border-b border-l border-neutral-700" />
      <span className="absolute bottom-6 right-6 h-4 w-4 border-b border-r border-neutral-700" />
      <span className={cn(label, 'absolute left-12 top-6')}>BF / Portfólio</span>
      <span className={cn(label, 'absolute right-12 top-6 flex items-center gap-2')}>
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Online
      </span>
      <span className={cn(label, 'absolute bottom-6 left-12')}>v1.0 — 2026</span>
    </div>
  )
}
