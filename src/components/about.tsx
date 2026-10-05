import type { LucideIcon } from 'lucide-react'
import { Bot, Layers, Mail, MessageCircle, Rocket, Sparkles } from 'lucide-react'
import photoFormal from '@/assets/a5ea610a-7605-4498-aec2-4b9c9513faa8-eff22.jpeg'
import photoCasual from '@/assets/img0173-dab53.jpeg'

const skills: { number: string; icon: LucideIcon; tag: string; title: string; text: string }[] = [
  {
    number: '01',
    icon: Sparkles,
    tag: 'Domino',
    title: 'Vibe Coding',
    text: 'Transformo ideias em código conversando com IA: descrevo o que quero, testo, ajusto e itero até ficar do jeito certo.',
  },
  {
    number: '02',
    icon: Layers,
    tag: 'O necessário',
    title: 'Engenharia de Software',
    text: 'Sei organizar um projeto: componentes reutilizáveis, tipagem com TypeScript, versionamento com Git e código fácil de manter.',
  },
  {
    number: '03',
    icon: Bot,
    tag: 'Todo dia',
    title: 'IA no dia a dia',
    text: 'Uso IA para estudar, prototipar, revisar código e resolver problemas — ela é minha parceira de trabalho, não um atalho.',
  },
  {
    number: '04',
    icon: Rocket,
    tag: '13 anos',
    title: 'Começando cedo',
    text: 'Comecei jovem e sigo construindo. Cada projeto é um degrau a mais — e este portfólio é um deles.',
  },
]

const stack = ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git', 'IA generativa']

export function About() {
  return (
    <section
      id="sobre"
      className="relative bg-white text-neutral-900 transition-colors duration-300 dark:bg-black dark:text-neutral-100 px-4 py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent"
      />

      <div className="mx-auto max-w-5xl">
        {/* 01 — SOBRE MIM */}
        <p className="reveal font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
          01 — Sobre mim
        </p>
        <h2 className="reveal mt-6 text-3xl font-medium leading-tight text-neutral-600 dark:text-neutral-400 sm:text-5xl">
          Me chamo <span className="text-neutral-950 dark:text-white">Bruno Felipe</span>, tenho{' '}
          <span className="text-neutral-950 dark:text-white">13 anos</span>, sou{' '}
          <span className="text-neutral-950 dark:text-white">dev</span> e uso{' '}
          <span className="bg-gradient-to-r from-sky-500 to-cyan-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent font-semibold">
            IA
          </span>{' '}
          no meu dia a dia.
        </h2>
        <p className="reveal mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-500">
          Domino vibe coding e sei o necessário de engenharia de software para tirar uma ideia do
          papel e colocá-la no ar.
        </p>

        {/* Galeria de Fotos em Destaque */}
        <div className="reveal mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Foto 1: Evento Social / Traje social */}
          <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm transition-all duration-500 hover:border-neutral-400 hover:shadow-md dark:border-neutral-800/80 dark:bg-neutral-950 dark:shadow-none dark:hover:border-neutral-600">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <img
                src={photoFormal}
                alt="Bruno Felipe em evento social"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium text-neutral-800 dark:text-neutral-300">
                  Bruno Felipe
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  Evento
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-neutral-500">
                Traje social · Foco e determinação
              </p>
            </div>
          </div>

          {/* Foto 2: Casual */}
          <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm transition-all duration-500 hover:border-neutral-400 hover:shadow-md dark:border-neutral-800/80 dark:bg-neutral-950 dark:shadow-none dark:hover:border-neutral-600">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <img
                src={photoCasual}
                alt="Bruno Felipe casual"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium text-neutral-800 dark:text-neutral-300">
                  Bruno Felipe
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  Dia a dia
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-neutral-500">
                13 anos · Desenvolvendo projetos com IA
              </p>
            </div>
          </div>
        </div>

        {/* 02 — O QUE EU FAÇO (LISTA TIPOGRÁFICA SEM CARTÕES) */}
        <p className="reveal mt-24 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
          02 — O que eu faço
        </p>

        <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-900 dark:border-neutral-900">
          {skills.map(({ number, icon: Icon, tag, title, text }, i) => (
            <div
              key={title}
              className="reveal group flex flex-col gap-4 py-8 transition-colors duration-300 hover:bg-neutral-100/60 dark:hover:bg-neutral-950/50 sm:flex-row sm:items-baseline sm:gap-8 sm:py-10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Número e Ícone */}
              <div className="flex items-center gap-3 font-mono text-sm sm:w-28 sm:flex-shrink-0">
                <span className="text-neutral-400 transition-colors duration-300 group-hover:text-neutral-950 dark:text-neutral-600 dark:group-hover:text-white">
                  {number}
                </span>
                <Icon
                  className="size-4 text-neutral-400 transition-colors duration-300 group-hover:text-neutral-950 dark:text-neutral-600 dark:group-hover:text-white"
                  strokeWidth={1.5}
                />
              </div>

              {/* Título e Tag */}
              <div className="sm:w-72 sm:flex-shrink-0">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-medium text-neutral-900 transition-colors duration-300 group-hover:text-black dark:text-white dark:group-hover:text-neutral-200 sm:text-2xl">
                    {title}
                  </h3>
                  <span className="rounded-full border border-neutral-300 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-600 dark:border-neutral-800 dark:text-neutral-500">
                    {tag}
                  </span>
                </div>
              </div>

              {/* Descrição em texto corrido */}
              <div className="flex-1">
                <p className="text-base leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-300 sm:dark:text-neutral-500">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 03 — WHOAMI (Terminal sempre escuro, autêntico e legível) */}
        <p className="reveal mt-24 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
          03 — whoami
        </p>
        <div className="reveal mt-8 overflow-hidden rounded-2xl border border-neutral-300 bg-neutral-950 shadow-md dark:border-neutral-800 dark:shadow-none">
          <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/90 px-4 py-3">
            <span className="size-3 rounded-full bg-rose-500/80" />
            <span className="size-3 rounded-full bg-amber-500/80" />
            <span className="size-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 font-mono text-xs text-neutral-400">~/bruno — zsh</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-neutral-300">
            <span className="text-sky-400 dark:text-white">❯</span> whoami{'\n'}
            {'{\n'}
            {'  '}
            <span className="text-sky-300 dark:text-white">"nome"</span>:{' '}
            <span className="text-neutral-300">"Bruno Felipe"</span>,{'\n'}
            {'  '}
            <span className="text-sky-300 dark:text-white">"idade"</span>:{' '}
            <span className="text-neutral-300">13</span>,{'\n'}
            {'  '}
            <span className="text-sky-300 dark:text-white">"funcao"</span>:{' '}
            <span className="text-neutral-300">"dev"</span>,{'\n'}
            {'  '}
            <span className="text-sky-300 dark:text-white">"superpoder"</span>:{' '}
            <span className="text-neutral-300">"vibe coding"</span>,{'\n'}
            {'  '}
            <span className="text-sky-300 dark:text-white">"usaIA"</span>:{' '}
            <span className="text-cyan-400 dark:text-neutral-300">true</span>
            {'\n'}
            {'}\n'}
            <span className="text-sky-400 dark:text-white">❯</span>{' '}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-sky-400 dark:bg-white" />
          </pre>
        </div>

        {/* Stack */}
        <div className="reveal mt-10 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-neutral-300 bg-neutral-100/60 px-4 py-2 font-mono text-xs text-neutral-700 transition-colors hover:border-neutral-500 hover:text-black dark:border-neutral-800 dark:bg-transparent dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-white"
            >
              {s}
            </span>
          ))}
        </div>

        {/* 04 — CONTATO */}
        <p className="reveal mt-28 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
          04 — Contato
        </p>
        <h3 className="reveal mt-4 text-2xl font-medium text-neutral-900 dark:text-white sm:text-4xl">
          Vamos construir algo juntos?
        </h3>
        <p className="reveal mt-3 max-w-xl text-neutral-600 dark:text-neutral-500">
          Entre em contato direto pelo WhatsApp ou envie um e-mail. Respondo rápido!
        </p>

        <div className="reveal mt-8 grid gap-4 sm:grid-cols-2">
          {/* WhatsApp */}
          <a
            href="https://wa.me/557998942945"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-all duration-300 hover:border-neutral-400 hover:bg-white hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none dark:hover:border-neutral-600 dark:hover:bg-neutral-900/60"
          >
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-700 transition-colors group-hover:border-neutral-500 group-hover:text-emerald-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:group-hover:border-neutral-600 dark:group-hover:text-white">
                <MessageCircle className="size-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  WhatsApp
                </span>
                <p className="font-mono text-base font-medium text-neutral-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-neutral-200">
                  (79) 99894-2945
                </p>
              </div>
            </div>
            <span className="font-mono text-xs text-neutral-400 transition-colors group-hover:translate-x-1 group-hover:text-neutral-900 dark:text-neutral-600 dark:group-hover:text-white">
              →
            </span>
          </a>

          {/* E-mail */}
          <a
            href="mailto:d31863085@gmail.com"
            className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-all duration-300 hover:border-neutral-400 hover:bg-white hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none dark:hover:border-neutral-600 dark:hover:bg-neutral-900/60"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-neutral-300 bg-white text-neutral-700 transition-colors group-hover:border-neutral-500 group-hover:text-sky-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:group-hover:border-neutral-600 dark:group-hover:text-white">
                <Mail className="size-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  E-mail
                </span>
                <p className="truncate font-mono text-sm sm:text-base font-medium text-neutral-900 group-hover:text-sky-700 dark:text-white dark:group-hover:text-neutral-200">
                  d31863085@gmail.com
                </p>
              </div>
            </div>
            <span className="font-mono text-xs text-neutral-400 shrink-0 transition-colors group-hover:translate-x-1 group-hover:text-neutral-900 dark:text-neutral-600 dark:group-hover:text-white">
              →
            </span>
          </a>
        </div>
      </div>

      <footer className="mx-auto mt-32 flex max-w-5xl flex-col items-center justify-between gap-2 border-t border-neutral-200 dark:border-neutral-900 pt-8 font-mono text-[11px] uppercase tracking-widest text-neutral-500 dark:text-neutral-600 sm:flex-row">
        <span>© 2026 BRUNO FELIPE</span>
        <span>FEITO COM REACT, TAILWIND E IA</span>
      </footer>
    </section>
  )
}
