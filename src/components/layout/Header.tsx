import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navigationItems } from '../../data/navigation'
import { portfolioProfile } from '../../data/portfolio'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="page-container flex min-h-16 items-center justify-between gap-6">
        <a aria-label={`${portfolioProfile.name} — home`} className="font-semibold tracking-tight text-navy" href="#home">
          {portfolioProfile.name}<span className="text-blue-600">.</span>
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuButtonRef}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>

        <nav
          aria-label="Primary navigation"
          className={`${menuOpen ? 'absolute inset-x-0 top-16 border-b border-slate-200 bg-white px-5 py-4 shadow-sm' : 'hidden'} md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          id="primary-navigation"
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  className="block rounded px-2 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:px-0"
                  href={`#${item.id}`}
                  onClick={() => {
                    if (menuOpen) {
                      setMenuOpen(false)
                      menuButtonRef.current?.focus()
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="mt-2 inline-flex rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:mt-0"
                href="#contact"
                onClick={() => {
                  if (menuOpen) {
                    setMenuOpen(false)
                    menuButtonRef.current?.focus()
                  }
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
