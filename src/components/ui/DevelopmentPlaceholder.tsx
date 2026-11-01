interface DevelopmentPlaceholderProps {
  children: string
}

export function DevelopmentPlaceholder({ children }: DevelopmentPlaceholderProps) {
  if (!import.meta.env.DEV) return null

  return <p className="dev-note">Development placeholder: {children}</p>
}
