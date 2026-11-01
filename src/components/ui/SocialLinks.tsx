import { Github, Linkedin, Mail } from 'lucide-react'
import { portfolioProfile } from '../../data/portfolio'

interface SocialLinksProps {
  includeEmail?: boolean
  className?: string
}

export function SocialLinks({ includeEmail = true, className = '' }: SocialLinksProps) {
  const links = [
    {
      href: portfolioProfile.links.github,
      label: 'GitHub',
      icon: <Github aria-hidden="true" size={17} />,
    },
    {
      href: portfolioProfile.links.linkedin,
      label: 'LinkedIn',
      icon: <Linkedin aria-hidden="true" size={17} />,
    },
    ...(includeEmail
      ? [{
          href: `mailto:${portfolioProfile.links.email}`,
          label: portfolioProfile.links.email,
          icon: <Mail aria-hidden="true" size={17} />,
        }]
      : []),
  ]

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            aria-label={link.label}
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            href={link.href}
            rel="noreferrer"
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
          >
            {link.icon}<span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
