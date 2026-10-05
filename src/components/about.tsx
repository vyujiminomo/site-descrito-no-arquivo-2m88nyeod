import type { LucideIcon } from 'lucide-react'
import { Bot, Layers, Rocket, Sparkles } from 'lucide-react'

const skills: { icon: LucideIcon; tag: string; title: string; text: string }[] = [
  {
    icon: Sparkles,
    tag: 'Domino',
    title: 'Vibe Coding',
    text: 'Transformo ideias em código conversando com IA: descrevo o que quero, testo, ajusto e itero até ficar do jeito certo.',
  },
  {
    icon: Layers,
    tag: 'O necessário',
    title: 'Engenharia de Software',
    text: 'Sei organizar um projeto: componentes reutilizáveis, tipagem com TypeScript, versionamento com Git e código fácil de manter.',
  },
  {
    icon: Bot,
    tag: 'Todo dia',
    title: 'IA no dia a dia',
    text: 'Uso IA para estudar, prototipar, revisar código e resolver problemas — ela é minha parceira de trabalho, não um atalho.',
  },
  {
    icon: Rocket,
    tag: '13 anos',
    title: 'Começando cedo',
    text: 'Comecei jovem e sigo construindo. Cada projeto é um degrau a mais — e este portfólio é um deles.',
  },
]

const stack = ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git', 'IA generativa']

export function About() {
  return (
    <section id="sobre" className="relative bg-black px-4 py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"
      />

      <div className="mx-auto max-w-5xl">
        <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-violet-400">
          01 — Sobre mim
        </p>
        <h2 className="reveal mt-6 text-3xl font-medium leading-tight text-neutral-400 sm:text-5xl">
          Me chamo <span className="text-white">Bruno Felipe</span>, tenho{' '}
          <span className="text-white">13 anos</span>, sou <span className="text-white">dev</span> e
          uso{' '}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            IA
          </span>{' '}
          no meu dia a dia.
        </h2>
        <p className="reveal mt-6 max-w-2xl text-lg text-neutral-500">
          Domino vibe coding e sei o necessário de engenharia de software para tirar uma ideia do
          papel e colocá-la no ar.
        </p>

        <p className="reveal mt-24 font-mono text-xs uppercase tracking-[0.3em] text-violet-400">
          02 — O que eu faço
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skills.map(({ icon: Icon, tag, title, text }, i) => (
            <article
              key={title}
              className="reveal group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition-colors hover:border-neutral-600 sm:p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/0 blur-3xl transition-colors duration-500 group-hover:bg-violet-600/25"
              />
              <div className="flex items-center justify-between">
                <Icon className="size-6 text-violet-400" strokeWidth={1.5} />
                <span className="rounded-full border border-neutral-800 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                  {tag}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-bold text-white sm:text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-neutral-400">{text}</p>
            </article>
          ))}
        </div>

        <p className="reveal mt-24 font-mono text-xs uppercase tracking-[0.3em] text-violet-400">
          03 — whoami
        </p>
        <div className="reveal mt-8 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-3">
            <span className="size-3 rounded-full bg-neutral-700" />
            <span className="size-3 rounded-full bg-neutral-700" />
            <span className="size-3 rounded-full bg-neutral-700" />
            <span className="ml-3 font-mono text-xs text-neutral-500">~/bruno — zsh</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-neutral-300">
            <span className="text-emerald-400">❯</span> whoami{'\n'}
            {'{\n'}
            {'  '}
            <span className="text-violet-300">"nome"</span>:{' '}
            <span className="text-amber-200">"Bruno Felipe"</span>,{'\n'}
            {'  '}
            <span className="text-violet-300">"idade"</span>:{' '}
            <span className="text-sky-300">13</span>,{'\n'}
            {'  '}
            <span className="text-violet-300">"funcao"</span>:{' '}
            <span className="text-amber-200">"dev"</span>,{'\n'}
            {'  '}
            <span className="text-violet-300">"superpoder"</span>:{' '}
            <span className="text-amber-200">"vibe coding"</span>,{'\n'}
            {'  '}
            <span className="text-violet-300">"usaIA"</span>:{' '}
            <span className="text-sky-300">true</span>
            {'\n'}
            {'}\n'}
            <span className="text-emerald-400">❯</span>{' '}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-neutral-300" />
          </pre>
        </div>

        <div className="reveal mt-10 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-neutral-800 px-4 py-2 font-mono text-xs text-neutral-400"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <footer className="mx-auto mt-32 flex max-w-5xl flex-col items-center justify-between gap-2 border-t border-neutral-900 pt-8 font-mono text-[11px] uppercase tracking-widest text-neutral-600 sm:flex-row">
        <span>© {new Date().getFullYear()} Bruno Felipe</span>
        <span>Feito com React, Tailwind e IA</span>
      </footer>
    </section>
  )
}
