import { ArrowDown, Layers3 } from 'lucide-react'

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-white" id="home">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="page-container relative grid min-h-[34rem] items-center gap-12 py-20 md:grid-cols-[1.3fr_0.7fr] md:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-800">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-blue-600" />
            Data platforms · AI engineering · Architecture
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl" id="hero-heading">
            Senior Staff Data &amp; AI Engineer
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Building toward a future of Principal Data &amp; AI Engineering through thoughtful architecture and engineering.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" href="#projects">
              Explore projects <ArrowDown aria-hidden="true" size={16} />
            </a>
            <a className="inline-flex items-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" href="#about">
              About me
            </a>
          </div>
        </div>
        <div aria-hidden="true" className="hidden justify-self-center md:block">
          <div className="relative grid h-64 w-64 place-items-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-xl shadow-blue-950/5 lg:h-80 lg:w-80">
            <div className="absolute inset-6 rounded-2xl border border-dashed border-blue-200" />
            <div className="grid h-24 w-24 place-items-center rounded-2xl bg-navy text-white shadow-lg shadow-blue-950/20 lg:h-28 lg:w-28">
              <Layers3 size={44} strokeWidth={1.4} />
            </div>
            <span className="absolute left-4 top-12 h-3 w-3 rounded-full bg-blue-400" />
            <span className="absolute bottom-10 right-7 h-2.5 w-2.5 rounded-full bg-sky-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
