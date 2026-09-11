# AI Co-FLY 2026 — Cómo la inteligencia artificial está aprendiendo el lenguaje de la vida

Interactive Quarto + Reveal.js presentation for the **Jornadas AI Co-FLY 2026**.

**Speaker:** Sònia Casillas — Universitat Autònoma de Barcelona (UAB)  
**Talk:** *Cómo la inteligencia artificial está aprendiendo el lenguaje de la vida*  
**Audience:** primarily high-school students and teachers, plus other interested attendees  
**Target duration:** 17–18 minutes (hard maximum: 20 minutes)  
**Language:** Spanish

## Core idea

The talk is not a catalogue of AI tools. It is a narrative about how biological systems generate different kinds of information — DNA sequences, protein sequences and structures, histology images, chemical structures, animal sounds — and how AI can learn useful patterns from these data.

The talk is organised around five verbs:

**RECONOCER · PREDECIR · BUSCAR · DISEÑAR · MONITORIZAR**

The deeper message is twofold:

1. **AI lets biology explore spaces of possibilities that are too large to test exhaustively.**
2. **A prediction is not a truth: AI prioritises hypotheses; science still has to validate them experimentally or observationally.**

## Start here

Codex or any other coding agent working on this repository should read the following files **before implementing or modifying the presentation**:

1. [`AGENTS.md`](AGENTS.md) — binding project instructions and quality bar.
2. [`docs/PROJECT_BRIEF.md`](docs/PROJECT_BRIEF.md) — audience, objectives, narrative and scientific framing.
3. [`docs/SLIDE_PLAN.md`](docs/SLIDE_PLAN.md) — definitive slide architecture and interactions.
4. [`docs/SPEAKER_SCRIPT.md`](docs/SPEAKER_SCRIPT.md) — full Spanish speaker script.
5. [`docs/VISUAL_SOURCES.md`](docs/VISUAL_SOURCES.md) — visual strategy, source hierarchy and licensing rules.
6. [`docs/IMPLEMENTATION_SPEC.md`](docs/IMPLEMENTATION_SPEC.md) — Quarto/Reveal.js technical specification.
7. [`references.bib`](references.bib) — primary scientific references.

## Recommended Codex kickoff prompt

See [`CODEX_PROMPT.md`](CODEX_PROMPT.md). Paste its contents into Codex after opening this repository.

## Intended repository structure

```text
.
├── AGENTS.md
├── CODEX_PROMPT.md
├── README.md
├── references.bib
├── docs/
│   ├── PROJECT_BRIEF.md
│   ├── SLIDE_PLAN.md
│   ├── SPEAKER_SCRIPT.md
│   ├── VISUAL_SOURCES.md
│   └── IMPLEMENTATION_SPEC.md
└── presentation/
    ├── _quarto.yml
    ├── index.qmd
    └── assets/
        ├── css/
        ├── js/
        ├── img/
        ├── audio/
        └── data/
```

The `presentation/` directory contains only scaffolding. Codex should build the actual implementation from the specifications.

## Scientific examples in the talk

- **AlphaFold / AlphaFold 3** — prediction of protein structures and biomolecular interactions.
- **RFdiffusion** — generative protein design.
- **Virchow** — AI foundation models for computational pathology and pan-cancer detection.
- **AlphaGenome / AlphaGenome Atlas** — prediction of regulatory effects of DNA variants.
- **Halicin** — deep-learning-assisted antibiotic discovery.
- **BirdNET** — AI-assisted acoustic biodiversity monitoring.

These examples are not presented as equivalent maturity levels or as replacements for experimental science. Each is used to illustrate a distinct capability and a common scientific workflow:

**data → model → prediction/prioritisation → validation**

## Event context

The talk sits within a broader AI Co-FLY programme that also includes sessions on limitations/biases and on insect/biodiversity monitoring. Therefore this deck should remain panoramic and concept-driven, avoiding a long ethics section or a specialist treatment of insect monitoring. Biodiversity acts as the final zoom-out from molecules to ecosystems.
