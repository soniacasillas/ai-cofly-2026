# Presentation QA

Validation date: 2026-09-11.

## Build and structure

- Rendered successfully with Quarto 1.10.18 using `quarto render`.
- 13 Reveal.js slides at a logical size of 1600 × 900 (16:9).
- Speaker notes are present on all 13 slides.
- Static PDF contains 13 pages, all 16:9, with fragments and interaction fallbacks visible.

## Visual inspection

Every HTML slide was inspected at a 1280 × 720 browser viewport, which is an exact 16:9 scale of the logical canvas. The 13 PDF pages were also rasterised and inspected as a complete contact sheet. No overflow, clipping, collision or alignment defect remained. Body text is large and high-contrast; smaller text is limited to source and simulation notes.

## Interactions and accessibility

Tested in a local Chromium browser with no console warnings or errors:

- five-verb navigator: pointer and Left/Right keyboard selection;
- AlphaFold explainer: range input updates all three stages;
- pathology overlay: button updates visible state and `aria-pressed`;
- AlphaGenome variant: range input updates the base and all three synthetic tracks;
- chemical prioritisation: range input filters the synthetic candidate set;
- BirdNET explainer: button reveals the conceptual candidate region and updates accessible text;
- possibility spaces: pointer and Home/End/Left/Right keyboard selection.

Controls use native buttons/range inputs, visible focus styles, meaningful labels and live text where values change. Reduced-motion preferences disable non-essential animation. Every interaction has a legible initial state and an expanded print fallback.

## Offline check

A scan of the rendered `_site` found no `http://` or `https://` values in `src`, `href`, CSS `url()` or JavaScript `fetch()` runtime references. DOI and project URLs occur only as visible citations. All scripts, styles and Reveal.js dependencies are local.

## Timing

The notes contain approximately 1,935 spoken words. The definitive slide plan allocates 17:10 plus natural pauses, including the deliberate pauses, questions and brief demonstrations in the script. This is consistent with a measured delivery of roughly 110–115 words per minute. A live rehearsal remains the authoritative timing check.
