import { portfolioProfile } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-6">
      <div className="page-container flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{portfolioProfile.name} · {portfolioProfile.currentTitle}</p>
        <p>{portfolioProfile.location}</p>
      </div>
    </footer>
  )
}
