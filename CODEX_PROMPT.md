# Codex kickoff prompt

Paste the following into Codex after opening this repository:

```text
Read AGENTS.md and every file under docs/ before making any changes.

Build the complete interactive Quarto + Reveal.js presentation specified in this repository for Sònia Casillas' 17–18 minute Spanish talk “Cómo la inteligencia artificial está aprendiendo el lenguaje de la vida”.

The scientific narrative and speaker script are already decided. Preserve the conceptual structure and oral tone, while adapting exact slide boundaries only when doing so clearly improves live presentation flow.

Implement:
- the complete Reveal.js deck,
- custom styling,
- speaker notes,
- scientifically meaningful interactions,
- original explanatory diagrams,
- source notes and attributions,
- offline-safe local assets,
- static fallbacks for every interaction,
- a PDF/static fallback.

The deck must be understandable without clicking anything, but interaction should improve comprehension when used.

Do not use generic stock imagery or decorative “AI” visuals. Prefer original diagrams, primary scientific sources, and official project resources. Clearly label all pedagogical simulations as conceptual rather than real model outputs.

Before considering the task complete:
1. run `quarto render`,
2. inspect every slide at 16:9,
3. fix overflow, alignment, readability and accessibility issues,
4. test all interactions offline,
5. verify that all externally sourced visuals have attribution/reuse notes,
6. check all scientific numbers and dates against authoritative sources,
7. ensure the complete talk fits approximately 17–18 minutes,
8. document the exact commands required to build and present it.

At the end, summarise:
- what you implemented,
- which visual assets were created de novo,
- which external assets were used and under what reuse basis,
- any claims or assets that still need human review,
- exact render/test commands.
```
