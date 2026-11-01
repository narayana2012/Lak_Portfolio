# Portfolio Roadmap

**Project:** Lak Portfolio\
**Repository:** `https://github.com/narayana2012/Lak_Portfolio.git`\
**Production branch:** `main`\
**Working branch:** `portfolio-preview`\
**Production site:** `https://lak-portfolio-two.vercel.app/`

This file is the working checklist for completing the first portfolio
release and planning the next improvements. Update the checkboxes as
work is completed. Do not mark an item complete until it has been
verified.

------------------------------------------------------------------------

## Phase 1 --- Portfolio foundation and first production release

### 1.1 Website implementation and content

-   [x] Create the React + Vite + TypeScript + Tailwind portfolio
    foundation.
-   [x] Add responsive navigation, hero, About, Experience, Expertise,
    Projects, Technical Writing, GitHub and Contact sections.
-   [x] Add six resume-based professional case studies.
-   [x] Confirm current role is presented as **Senior Staff Data & AI
    Engineer** and career direction as **Principal Data & AI Engineer**.
-   [x] Retain the official NextGen timeline title: **Sr. Staff
    Engineer, Data & AI Platform**.
-   [x] Retain the confirmed December 2024 UpGrad/NextGen transition
    overlap.
-   [x] Attribute Clickstream Event Processing to UpGrad Education.
-   [x] Use owner-approved resume metrics with the correct employer
    attribution.
-   [x] Use the approved public email address and configured
    GitHub/LinkedIn links.
-   [x] Label the Redshift optimization item as an experience highlight.
-   [x] Keep diagrams within the source-supported facts and label
    illustrative component inventories where appropriate.
-   [x] Add SEO and social metadata.
-   [x] Add content review and verification notes.
-   [x] Improve mobile-menu keyboard behavior and restore focus after
    dismissal.
-   [x] Make the skip-link destination focusable.
-   [ ] Confirm any remaining architecture wording is strictly supported
    by the resume; in particular, review the NextGen case-study phrase
    "dbt semantic models" and replace it with more conservative wording
    if that specific detail is not confirmed.

### 1.2 Local validation and visual review

-   [x] `npm run typecheck` passes.
-   [x] `npm run lint` passes.
-   [x] `npm run build` passes.
-   [x] `git diff --check` passes.
-   [x] Desktop hero visual review completed.
-   [x] Mobile hero visual review completed.
-   [ ] Check the full mobile page, including Projects and Contact, for
    layout/overflow issues.
-   [ ] Test mobile menu with keyboard: open it, focus a link, press
    Escape, and confirm focus returns to the menu toggle.
-   [ ] Test the skip link using the keyboard.
-   [ ] Check all navigation links, email, GitHub and LinkedIn links in
    the browser.

### 1.3 GitHub commit and merge

-   [ ] Confirm current branch is `portfolio-preview`.
-   [ ] Review `git status` and the complete diff, including untracked
    files.
-   [ ] Confirm no `.env`, credentials, private resume files,
    `node_modules` or `dist` are staged.
-   [ ] Stage only the intended portfolio source, configuration and
    documentation files, including this `tasks.md`.
-   [ ] Run final typecheck, lint, build and `git diff --check`.
-   [ ] Commit the approved changes on `portfolio-preview`.
-   [ ] Push `portfolio-preview` to GitHub.
-   [ ] Create a Pull Request from `portfolio-preview` into `main`.
-   [ ] Review the Pull Request diff and merge it into `main`.

### 1.4 Vercel production deployment and launch verification

-   [ ] Confirm Vercel is connected to the correct GitHub repository.
-   [ ] Confirm the production branch is `main`, with build command
    `npm run build` and output directory `dist`.
-   [ ] Wait for the deployment triggered by the merge to complete
    successfully.
-   [ ] Open the production URL and verify the deployed version contains
    the latest changes.
-   [ ] Test the live website on desktop and mobile.
-   [ ] Verify navigation, skip link, mobile keyboard behavior, email,
    GitHub and LinkedIn links.
-   [ ] Check page title, description and social metadata.
-   [ ] Record the production deployment date and final URL below.

**Phase 1 release record**

-   Production URL: `https://lak-portfolio-two.vercel.app/`
-   Release date: *Fill in after successful production verification.*
-   Git commit: *Fill in after commit.*
-   Vercel deployment: *Fill in after successful deployment.*

------------------------------------------------------------------------

## Phase 2 --- Demonstrate hands-on engineering depth

Build and publish independent, reproducible projects. Clearly label them
as **independent projects/reference implementations**, not employer
systems. Use synthetic or public datasets and do not publish
employer-confidential information.

### 2.1 CDC-driven Lakehouse Platform

-   [ ] Define scope, architecture, success criteria and a realistic
    implementation plan.
-   [ ] Build a source database and CDC ingestion using PostgreSQL,
    Debezium and Kafka Connect.
-   [ ] Implement streaming/batch processing with Spark.
-   [ ] Store curated data using Apache Iceberg and an S3-compatible
    storage layer (for example, MinIO locally).
-   [ ] Add orchestration, transformations and data quality checks.
-   [ ] Demonstrate schema evolution, replay/recovery, late data and
    idempotency.
-   [ ] Add observability, operational documentation and reproducible
    local setup.
-   [ ] Publish architecture diagrams, code and a technically accurate
    README.

### 2.2 Production-style GenAI/RAG Platform

-   [ ] Define a concrete use case and evaluation criteria.
-   [ ] Build document ingestion, chunking, embeddings and vector
    retrieval.
-   [ ] Implement retrieval-augmented generation with source citations.
-   [ ] Add evaluation for retrieval quality, answer quality and failure
    cases.
-   [ ] Add observability, latency/cost measurements and error handling.
-   [ ] Document security, privacy and limitations.
-   [ ] Publish architecture, code, tests and a reproducible README.

### 2.3 Healthcare Data Platform using synthetic data

-   [ ] Define a use case using synthetic FHIR data (for example,
    Synthea).
-   [ ] Build ingestion and validation for selected FHIR resources.
-   [ ] Create curated, analytics-ready data models.
-   [ ] Demonstrate data quality, lineage and access-control patterns.
-   [ ] Optionally add a carefully scoped AI workflow using synthetic
    data only.
-   [ ] Document that all data is synthetic and the project is
    independent.
-   [ ] Publish architecture, code, tests and a reproducible README.

### 2.4 Project presentation

-   [ ] Add each completed independent project to the portfolio.
-   [ ] Link to public repositories and verified demos, if available.
-   [ ] Include problem, requirements, architecture, trade-offs,
    implementation, tests and measured results.
-   [ ] Do not claim performance results until they have been measured
    and reproducibly documented.

------------------------------------------------------------------------

## Phase 3 --- Professional visibility and career support

-   [ ] Publish verified technical articles and add their links to the
    Technical Writing section.
-   [ ] Add a downloadable resume only after verifying the final public
    version.
-   [ ] Review LinkedIn profile alignment with the portfolio
    positioning.
-   [ ] Improve search discoverability and validate social preview
    cards.
-   [ ] Add project demos or short walkthroughs where they provide real
    value.
-   [ ] Use the portfolio in relevant Principal Data & AI Engineer
    applications and professional conversations.
-   [ ] Revisit the portfolio periodically to keep experience, links and
    projects current.

------------------------------------------------------------------------

## Working rules

-   Keep the current production website stable while developing future
    improvements on a separate branch.
-   Review Codex changes before accepting them; do not allow unreviewed
    commits, pushes, merges or deployments.
-   Never invent job titles, dates, metrics, technologies, project
    details or outcomes.
-   Keep professional case studies separate from independent projects.
-   Do not publish confidential employer information, internal diagrams,
    credentials, customer/patient data or proprietary source code.
-   Prefer a small, maintainable implementation and avoid dependencies
    or paid services unless there is a clear need.
-   Update this checklist when a task is completed or priorities change.
