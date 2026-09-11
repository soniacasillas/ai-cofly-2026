# Technical implementation specification

## Stack

Required:
- **Quarto**
- **Reveal.js**
- HTML presentation
- 16:9
- local/offline operation

Preferred:
- vanilla JavaScript for small interactions,
- CSS/SVG for custom diagrams,
- no framework unless clearly justified.

Observable JS may be used when it materially simplifies an interaction, but avoid runtime network dependencies.

---

# Repository layout

Expected:

```text
presentation/
├── _quarto.yml
├── index.qmd
└── assets/
    ├── css/
    │   └── custom.scss
    ├── js/
    │   ├── verbs.js
    │   ├── alphafold-demo.js
    │   ├── pathology-reveal.js
    │   ├── alphagenome-slider.js
    │   ├── halicin-prioritization.js
    │   ├── birdnet-demo.js
    │   └── possibility-spaces.js
    ├── img/
    ├── audio/
    └── data/
```

---

# Baseline Quarto configuration

Suggested starting point:

```yaml
project:
  type: default

format:
  revealjs:
    theme: [default, assets/css/custom.scss]
    slide-number: true
    controls: true
    progress: true
    transition: fade
    background-transition: fade
    center: false
    width: 1600
    height: 900
    margin: 0.05
    min-scale: 0.2
    max-scale: 2.0
    preview-links: false
    chalkboard: false
    incremental: false
    navigation-mode: linear
    history: false

execute:
  echo: false
  warning: false
  message: false
```

Check current Quarto syntax before finalising.

---

# Presentation mode

Need:
- normal slide view,
- speaker notes / presenter view,
- local assets,
- keyboard navigation.

Speaker notes should contain the full or near-full script.

---

# Styling

## Overall
- clean light background,
- modern scientific editorial look,
- high contrast,
- generous whitespace,
- minimal persistent chrome.

## Typography
Use fonts that are:
- locally available or bundled permissively,
- highly legible on projection,
- not dependent on Google Fonts at runtime.

Avoid distributing proprietary font files.

## Colour
Use a restrained palette.
Do not over-encode categories with colour.

Suggested semantic usage:
- deep blue: primary scientific structure,
- teal/green: positive/biological accent,
- warm red/orange: mutation/change/warning,
- neutral greys: secondary data.

Exact colours can be chosen during design but should pass contrast checks.

---

# Interactions

## 1. Five verbs

Implement:
- five keyboard/mouse-selectable cards,
- active state,
- definition pane,
- mini visual/example.

Requirements:
- tab-accessible,
- default state visible,
- no information loss if JS fails.

---

## 2. AlphaFold conceptual demo

Do **not** simulate protein physics.

Implement a pedagogical sequence:
- amino-acid string,
- 2D folding path,
- final structure illustration.

Could use:
- SVG path morphing,
- staged fragments,
- a three-state scrubber.

Prominent label:
**Simulación conceptual del proceso; no es una ejecución de AlphaFold.**

---

## 3. Pathology reveal

Initial state:
- unannotated histology image.

On click/key:
- explanatory regions/labels appear.

Do not fabricate AI confidence maps unless explicitly labelled illustrative.

Accessibility:
- button text should describe state,
- provide text equivalent.

---

## 4. AlphaGenome slider

Use a synthetic short sequence, e.g. 25–50 bases.
Allow changing one selected base or toggling WT vs variant.

Downstream:
- update 2–3 illustrative regulatory tracks.

Tracks can be:
- gene expression,
- splicing,
- chromatin accessibility.

Use deterministic synthetic values.
No randomness during presentation.

Required label:
**Simulación conceptual; valores ilustrativos, no son predicciones reales de AlphaGenome.**

---

## 5. Halicin prioritisation

Use a synthetic conceptual chemical-space dataset.

Could use:
- 2D scatter,
- candidate score threshold,
- highlight selected candidates.

Do not claim axes are real chemical descriptors unless they are.

Safe labels:
- “espacio químico conceptual”
- “puntuación del modelo (ilustrativa)”

At final state:
highlight halicin as the historical published example, but separate its real identity from the simulated candidate positions.

---

## 6. BirdNET

Preferred:
- a real open-licence audio sample,
- local WAV/MP3/OGG,
- locally generated spectrogram.

Interaction:
- play/pause optional,
- reveal detected acoustic region,
- reveal species prediction.

If confidence shown, it must either be:
- from a real documented BirdNET analysis, or
- explicitly labelled illustrative.

---

## 7. Possibility-space visual

Do not compare unlike units with a misleading common linear axis.

Preferred patterns:
- magnitude cards,
- separate animated number panels,
- conceptual zoom-out,
- logarithmic visual only if clearly explained.

The purpose is conceptual:
different biological questions become huge search/data spaces.

---

# Static fallbacks

For every interaction:
- include a meaningful default state,
- provide a print/PDF equivalent,
- no essential explanation may require hover/click.

For PDF:
- render a representative final state or split interaction states into fragments/slides if needed.

---

# Offline requirements

Runtime must not need:
- external fonts,
- CDN JS,
- remote CSS,
- remote images,
- API calls,
- web audio.

All essential resources stored locally.

A linked DOI/source in the HTML may point online, but the deck must still render correctly without a connection.

---

# Source notes

Each scientific slide should have compact source text.

Recommended class:

```html
<div class="source-note">
Fuente: …
</div>
```

Source notes must remain readable on projection.

Use `references.bib` for formal citations and/or compact manual source labels.

---

# Speaker notes

Reveal speaker notes should follow the script.

Quarto supports notes blocks; verify exact syntax with current Quarto documentation.

The presenter should be able to use the deck with notes without opening the Markdown script separately.

---

# Build and test

Codex should discover installed versions and document commands.

Expected flow:

```bash
cd presentation
quarto render
quarto preview
```

PDF fallback options:
- Reveal.js print-to-PDF workflow,
- Quarto-supported PDF/print route if reliable.

Document exact tested process in README.

---

# QA checklist

## Scientific
- claims sourced,
- current numbers reverified,
- no simulation confused with real output.

## Visual
- 16:9,
- no overflow,
- nothing smaller than practical projection size,
- source lines readable,
- consistent spacing.

## Interaction
- works with mouse,
- works with keyboard where appropriate,
- default state safe,
- no network needed.

## Content
- Spanish,
- 17–18 minutes,
- transitions coherent,
- no unnecessary jargon.

## Reliability
- fresh clone can render,
- no absolute local paths,
- no hidden environment dependence,
- all essential assets tracked.
