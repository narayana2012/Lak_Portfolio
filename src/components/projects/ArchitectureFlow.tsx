import { ArrowDown, ArrowRight } from 'lucide-react'

interface ArchitectureFlowProps {
  title: string
  steps: string[]
  illustrative?: boolean
}

export function ArchitectureFlow({ title, steps, illustrative = false }: ArchitectureFlowProps) {
  return (
    <figure className="mt-5 rounded-lg border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
      <figcaption className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-900">{title}</figcaption>
      {illustrative ? (
        <ul aria-label={title} className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li className="grid min-h-12 place-items-center rounded-md border border-blue-100 bg-white px-3 py-2 text-center text-xs font-medium leading-5 text-slate-700 md:min-h-16" key={step}>{step}</li>
          ))}
        </ul>
      ) : (
        <ol aria-label={title} className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-2">
          {steps.map((step, index) => (
            <li className="flex min-w-0 flex-col items-center gap-2 md:flex-1 md:flex-row" key={step}>
              <span className="grid min-h-12 w-full place-items-center rounded-md border border-blue-100 bg-white px-3 py-2 text-center text-xs font-medium leading-5 text-slate-700 md:min-h-16 md:flex-1">
                {step}
              </span>
              {index < steps.length - 1 && (
                <>
                  <ArrowDown aria-hidden="true" className="text-blue-500 md:hidden" size={16} />
                  <ArrowRight aria-hidden="true" className="hidden shrink-0 text-blue-500 md:block" size={16} />
                </>
              )}
            </li>
          ))}
        </ol>
      )}
    </figure>
  )
}
