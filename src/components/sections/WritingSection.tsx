import { ExternalLink } from 'lucide-react'
import { articles } from '../../data/writing'
import { Section } from './Section'

export function WritingSection() {
  return (
    <Section eyebrow="Technical writing" id="writing" title="Ideas and engineering notes" tone="muted">
      {articles.length > 0 ? (
        <ul className="grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <li className="content-card" key={article.href}>
              <a className="inline-flex items-center gap-2 font-semibold text-navy hover:text-blue-700" href={article.href} rel="noreferrer" target="_blank">
                {article.title}<ExternalLink aria-hidden="true" size={15} />
              </a>
              <p className="mt-2 text-sm leading-6 text-slate-600">{article.summary}</p>
              {article.publishedAt && <p className="mt-3 text-xs text-slate-500">{article.publishedAt}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p className="max-w-2xl text-slate-600">Published articles will appear here once verified links are available.</p>
      )}
    </Section>
  )
}
