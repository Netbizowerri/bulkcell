---
name: seo
description: >
  Deterministic LLM-first SEO audits for websites, blog posts, and GitHub
  repositories. Use this when the user asks to "perform SEO analysis", "run SEO
  audit", "analyze SEO", "check technical SEO", "review schema", "Core Web
  Vitals", "E-E-A-T", "hreflang", "GEO", "AEO", or GitHub repository SEO
  optimization. For full/page/repo audits, run bundled scripts for evidence and
  return prioritized, confidence-labeled fixes.
---

# SEO Skill (Agentic / Claude / Codex)

LLM-first SEO analysis skill with 16 specialized sub-skills, 10 specialist agents, and 89 scripts for website, blog, and GitHub repository optimization.

Source: https://github.com/Bhanunamikaze/Agentic-SEO-Skill

## Deterministic Trigger Mapping

For prompt reliability in Codex/agent IDEs, map common user wording to a fixed workflow:

- If user says `perform seo analysis on <url>` (or similar generic SEO request with a URL), treat it as a **single-URL full audit**.
- If no explicit sub-skill is specified, run the full/page audit path with **LLM-first reasoning** and script-backed evidence.
- For full/page audits, always produce:
  - `FULL-AUDIT-REPORT.md` (detailed findings)
  - `ACTION-PLAN.md` (prioritized fixes)
- If `generate_report.py` is run, also return the saved HTML path (for example `SEO-REPORT.html`).

## Available Commands

| Command | Sub-Skill | Description |
|---------|-----------|-------------|
| `seo audit <url>` | seo-audit | Full website audit with scoring |
| `seo page <url>` | seo-page | Deep single-page analysis |
| `seo technical <url>` | seo-technical | Technical SEO checks |
| `seo content <url>` | seo-content | Content quality & E-E-A-T |
| `seo schema <url>` | seo-schema | Schema detection/validation/generation |
| `seo sitemap <url>` | seo-sitemap | Sitemap analysis & generation |
| `seo images <url>` | seo-images | Image optimization audit |
| `seo geo <url>` | seo-geo | AI search optimization (GEO) |
| `seo programmatic <url>` | seo-programmatic | Programmatic SEO safeguards |
| `seo competitors <url>` | seo-competitor-pages | Comparison/alternatives pages |
| `seo hreflang <url>` | seo-hreflang | International SEO validation |
| `seo plan <url>` | seo-plan | Strategic SEO planning |
| `seo github <repo_or_url>` | seo-github | GitHub repository discoverability |
| `seo article <url>` | seo-article | Article data extraction & LLM optimization |
| `seo links <url>` | seo-links | External backlink profile & link health |
| `seo aeo <url>` | seo-aeo | Answer Engine Optimization |

---

## Orchestration Logic

When the user requests SEO analysis, follow this routing:

### Step 1 — Identify the Task
### Step 2 — Collect Evidence
### Step 3 — Perform LLM-First Analysis
### Step 4 — Run Baseline Verification Scripts
### Step 5 — Delegate to Specialist Agents
### Step 6 — Apply Quality Gates
### Step 7 — Score and Report
### Step 8 — Mandatory Deliverables

See the full skill at https://github.com/Bhanunamikaze/Agentic-SEO-Skill for complete details.

## Critical Rules

1. **INP not FID** — FID was removed September 9, 2024. The sole interactivity metric is INP.
2. **FAQ schema is restricted** — Only for government and healthcare authority sites.
3. **HowTo schema is deprecated** — Rich results fully removed September 2023.
4. **JSON-LD only** — Never recommend Microdata or RDFa.
5. **E-E-A-T everywhere** — Applies to ALL competitive queries since Dec 2025.
6. **Mobile-first is complete** — 100% mobile-first indexing since July 5, 2024.
7. **Location page limits** — Warning at 30+, hard stop at 50+.
8. **AI crawler management** — Check robots.txt for GPTBot, ClaudeBot, PerplexityBot, etc.
