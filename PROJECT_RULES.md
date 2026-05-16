# PROJECT_RULES.md

## Development Phase

This project is currently in a **UX/CV improvement phase**, not a broad development phase.
Make code changes only when they directly support the conversion experience or reduce friction.


## Git / PR Rules

- Treat `main` as the production branch.
- Do not open Codex PRs directly against `main`.
- Use `improve-result-report-ux` as the working base branch for UX/CV improvements.
- When Codex creates a new branch, open the PR with `base: improve-result-report-ux` and the Codex branch as `compare`.
- Human reviewers are responsible for merging from the working branch into `main` after verification.

## Editing Rules

- Keep changes minimal and intentional.
- Do not refactor HTML/CSS/JS unless the task explicitly requires it.
- Preserve the lightweight embeddable structure for WordPress use.
- Optimize first for mobile readability and interaction.
- Prefer concise, structured copy that feels like a business report.

## Messaging Rules

Use language that frames results as:

- Bottleneck hypotheses
- Areas to verify
- Signals that may indicate a problem
- Points that should be checked through advertising validation

Avoid language that implies:

- A final diagnosis
- A guaranteed cause
- A one-size-fits-all solution
- A free lead-magnet diagnosis

## Visual / Brand Direction

The desired impression is:

- Calm
- Refined
- BtoB
- Quietly premium
- Organized
- Proposal-like

Avoid:

- Flashy conversion design
- Loud urgency
- Overly salesy ad-operation language
- Cheap “free assessment” patterns
