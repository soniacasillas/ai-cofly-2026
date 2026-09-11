# AGENTS.md — Instructions for Codex

## Mission

Build a complete, polished, scientifically rigorous, interactive **Quarto + Reveal.js** presentation for the talk:

> **Cómo la inteligencia artificial está aprendiendo el lenguaje de la vida**

Speaker: **Sònia Casillas, Universitat Autònoma de Barcelona (UAB)**  
Audience: mainly **high-school students and teachers**, plus non-specialist attendees.  
Duration: **17–18 minutes**, never more than 20 minutes.  
Language: **Spanish**.

Read all files under `docs/` before modifying the presentation.

---

## Non-negotiable scientific principles

1. **Scientific accuracy comes before visual spectacle.**
2. Never imply that AI “understands” biology in the human sense unless clearly framed as metaphor.
3. Never present a model prediction as an experimentally established fact.
4. Distinguish clearly between:
   - real published model outputs/data,
   - custom explanatory diagrams,
   - pedagogical simulations.
5. Every pedagogical simulation must visibly say something equivalent to:
   **“Simulación conceptual — no corresponde a una predicción real del modelo.”**
6. The key scientific workflow is:
   **DATOS → IA → PREDICCIÓN / PRIORIZACIÓN → EXPERIMENTO / OBSERVACIÓN**
7. Do not imply:
   - AlphaGenome predictions are diagnoses,
   - AlphaFold predictions always replace structural experiments,
   - an AI-selected molecule is automatically a drug,
   - BirdNET classifications are infallible.
8. Use primary literature whenever possible for scientific claims.
9. If a numerical fact is not confidently sourced, either verify it from an authoritative source or remove it.
10. Dates and “latest” claims must be checked against authoritative sources before finalising the deck.

---

## Pedagogical principles

The audience should leave remembering three things:

### A. Five verbs

**RECONOCER · PREDECIR · BUSCAR · DISEÑAR · MONITORIZAR**

### B. One reason AI matters

AI lets us explore **spaces of possibilities too large to test exhaustively**.

### C. One scientific caution

**Una predicción no es una verdad.**

The talk should not become a technical lecture about transformers, backpropagation, attention, embeddings or network architectures. Explain enough to understand the biological question, not the engineering internals.

---

## Narrative structure

The talk is a journey:

**molecules → tissues → genome → chemical space → ecosystems**

The main examples are:

1. AlphaFold / AlphaFold 3 — PREDECIR
2. RFdiffusion — DISEÑAR
3. Virchow / digital pathology — RECONOCER
4. AlphaGenome / AlphaGenome Atlas — PREDECIR
5. Halicin — BUSCAR
6. BirdNET — MONITORIZAR

Do not turn this into six disconnected case studies. The transitions must reinforce the common logic.

---

## Visual quality bar

### Use

1. **Custom diagrams created from scratch** when they explain the concept more clearly than a paper figure.
2. **Official scientific resources** from authoritative projects/databases when useful.
3. **Primary-paper figures** only when:
   - they genuinely improve comprehension,
   - licensing/reuse conditions are acceptable,
   - they remain legible for this audience.

### Avoid

- generic stock photos,
- random AI-generated scientific imagery used as evidence,
- low-resolution screenshots,
- decorative “futuristic AI brain” clichés,
- complex multi-panel paper figures that cannot be understood in <10 seconds,
- visuals with unclear provenance.

Every externally sourced visual must have a small but readable source note on the slide or in a corresponding source appendix.

---

## Interactivity rules

Interactive elements should clarify a biological idea, not merely decorate.

Required/strongly preferred interactions:

1. **Five verbs navigator**
2. **AlphaFold sequence → fold → structure conceptual progression**
3. **Digital pathology reveal overlay**
4. **AlphaGenome single-base-change conceptual slider**
5. **Possibility-space visualisation**
6. Optional if robust: halicin prioritisation threshold
7. Optional if robust: BirdNET spectrogram reveal/audio

Every interactive must have:
- a clear default state,
- an obvious interaction affordance,
- a static fallback,
- no dependency on internet access,
- no critical information hidden behind an interaction.

---

## Live-talk robustness

The deck must work **entirely offline**.

Do not depend on:
- remote JavaScript CDNs at runtime,
- remote images,
- remote APIs,
- live AlphaFold/AlphaGenome/BirdNET requests,
- internet-hosted audio/video.

If a third-party library is needed, vendor it locally or choose a native/browser alternative.

Provide:
- HTML presentation,
- static PDF fallback,
- all runtime-critical assets local.

Test:
- Chrome/Chromium,
- full-screen 16:9,
- presenter view if used,
- keyboard navigation,
- no overflow,
- no tiny source text,
- no broken interactions.

---

## Accessibility

- High contrast.
- Avoid colour as the only encoding.
- Minimum practical font sizes suitable for projection.
- Meaningful alt text for informative images.
- Avoid fast or distracting animation.
- Use reduced-motion friendly behaviour where feasible.
- Audio should never be required to understand the slide.

---

## Text density

Slides are visual. Speaker notes contain the discourse.

Do not paste the full script onto slides.

As a guide:
- title: 3–10 words,
- body: usually 1–4 short statements,
- one main idea per slide.

---

## Speaker notes

Put the relevant Spanish script into Reveal.js speaker notes where practical.

Preserve the natural oral tone from `docs/SPEAKER_SCRIPT.md`.

Do not silently rewrite scientific meaning.

---

## Coding style

Prefer:
- simple semantic HTML,
- modular CSS,
- small dependency-free JS modules,
- data stored separately when it improves clarity,
- deterministic interactions,
- comments for non-obvious pedagogical logic.

Avoid:
- over-engineering,
- frameworks unless clearly justified,
- unnecessary build chains beyond Quarto,
- brittle DOM selectors,
- interactions requiring precise mouse control.

---

## Repository hygiene

Do not commit:
- temporary render caches,
- huge raw datasets,
- copyrighted assets without a clear reuse basis,
- redundant generated copies.

Do commit:
- source files,
- local assets needed for the talk,
- attribution/licensing notes,
- render instructions,
- any small derived datasets used for visualisations.

---

## Definition of done

The task is complete only when:

1. The full deck renders with `quarto render`.
2. All slides are visually coherent and readable at 1600×900 / 16:9.
3. All required interactions work offline.
4. Every interaction has a static fallback.
5. All scientific claims shown on slides are sourced.
6. Pedagogical simulations are explicitly labelled as simulations.
7. Speaker notes cover the complete ~17–18 min script.
8. The narrative remains coherent from molecules to ecosystems.
9. A static PDF fallback exists or clear instructions for creating it are included.
10. README contains exact build/run commands.
11. A final pass checks Spanish spelling and terminology.
12. The final slide lands on the key message rather than a bibliography wall.

---

## Final message to preserve

The ending should communicate approximately:

> La IA no sustituye a la biología: amplía nuestra capacidad para hacer preguntas, explorar posibilidades y decidir dónde mirar primero.

And, immediately before or after it:

> Una predicción no es una verdad.

These are the intellectual anchors of the talk.
