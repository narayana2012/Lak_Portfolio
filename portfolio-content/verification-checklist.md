# Portfolio verification checklist

## Owner-confirmed content decisions

- [x] Current title is Senior Staff Data & AI Engineer; Principal Data & AI Engineer is career direction only.
- [x] Preserve the NextGen Healthcare resume designation: Sr. Staff Engineer, Data & AI Platform.
- [x] Preserve UpGrad Education Nov 2021–Dec 2024 and NextGen Healthcare Dec 2024–Present; December overlap is intentional.
- [x] Publish only the resume-supported metrics listed in `content-review.md`, with employer attribution and scope intact.
- [x] Use the confirmed email, GitHub and LinkedIn URLs; email link uses `mailto:`.
- [x] Attribute Clickstream Event Processing to UpGrad Education as professional experience.
- [x] Keep the resume's combined Mobility Info Tech / Sonata Software entry and combined role wording.
- [x] No independent project/repository claims; GitHub copy simply invites profile exploration.
- [x] Keep technical writing empty until actual published URLs are supplied.
- [x] Do not add patient/customer identities, internal schemas, credentials, screenshots, proprietary code or unverified architecture/metrics.

## Architecture diagrams

- [x] Replace “Avro schema-based events” with “Avro schema-based ingestion.”
- [x] CDC, manufacturing and clickstream diagrams use component inventories without arrows and carry the “Illustrative architecture based on described components” label.
- [x] Do not imply undocumented CDC warehouse destinations or exact manufacturing/clickstream sequences.
- [x] Preserve only resume-described sequence in the GenAI retrieval workflow.
- [x] Omit unsupported implementation specifics from the Redshift optimization study.

## Implementation quality

- [x] Use semantic HTML and accessible names for primary navigation and case study sections.
- [x] Mobile menu can be opened, closed by selecting a link, and dismissed with Escape.
- [x] Keep responsive layouts and respect reduced-motion preferences.
- [x] Use valid internal section anchors and supplied external profile links.
- [x] Align SEO and social metadata with the current professional title and portfolio focus.
- [ ] Inspect rendered desktop and mobile layouts in a browser if browser access is available.
- [x] Run `npm run typecheck`.
- [x] Run `npm run lint`.
- [x] Run `npm run build`.
