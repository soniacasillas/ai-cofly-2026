# Visual sources and asset policy

## Goal

Every visual must either:
1. explain a scientific concept clearly, or
2. provide authentic scientific evidence/context.

Avoid decorative images that add no explanatory value.

---

# Source hierarchy

Use this order of preference.

## Tier 1 — Create de novo

Preferred for:
- conceptual workflows,
- the five verbs,
- DNA/protein/data-type overview,
- sequence → structure explanation,
- AlphaGenome one-base-change simulation,
- chemical-space prioritisation,
- possibility-space comparison,
- data → model → validation cycle.

Advantages:
- best readability,
- consistent visual language,
- no unnecessary complexity,
- clear ownership.

All de novo diagrams should include a note such as:
**“Esquema conceptual propio.”**

---

## Tier 2 — Official scientific resources

Useful official sources include:

### AlphaFold
- AlphaFold Protein Structure Database
- EMBL-EBI
- Google DeepMind AlphaFold pages

Use for:
- authentic protein structure examples,
- interface screenshots only if needed,
- current public database-scale statements.

### AlphaGenome
- Google DeepMind AlphaGenome
- AlphaGenome Atlas

Use for:
- official explanatory graphics where permitted,
- verifying claims and current numbers,
- possibly a carefully cropped screenshot if reuse is appropriate.

### BirdNET
- BirdNET official website / Cornell Lab
- project documentation

Use for:
- project context,
- official interface if pedagogically useful.

---

## Tier 3 — Primary-paper figures

Candidate papers:
- Jumper et al. 2021 — AlphaFold
- Abramson et al. 2024 — AlphaFold 3
- Watson et al. 2023 — RFdiffusion
- Vorontsov et al. 2024 — Virchow
- AlphaGenome primary publication
- Stokes et al. 2020 — halicin
- Kahl et al. 2021 — BirdNET

Do not copy a multi-panel figure simply because it is authoritative.
Only use a paper figure if it can be understood quickly by a high-school audience.

Check licensing / publisher reuse terms.

If uncertain, prefer a new explanatory diagram with a source citation.

---

# Slide-specific visual recommendations

## Cover
Create de novo:
- DNA fragment,
- stylised but scientifically plausible protein ribbon,
- histology tile,
- chemical structure motif,
- spectrogram / bird signal.

No “glowing AI brain”.

## Biological information mosaic
Create de novo:
six visual tokens representing:
- DNA,
- protein,
- microscopy,
- chemistry,
- sound,
- ecosystem.

## Five verbs
Create de novo iconography.

Suggested visual language:
- RECONOCER — eye / segmentation frame
- PREDECIR — dotted future trajectory / structure
- BUSCAR — funnel / candidate set
- DISEÑAR — generative geometry
- MONITORIZAR — sensor / signal timeline

## AlphaFold
Preferred:
- custom amino-acid sequence,
- conceptual folding animation,
- authentic protein structure from PDB/AlphaFold DB as final state.

If using a real structure:
document protein identity and source.

## RFdiffusion
Prefer a custom pipeline rather than a dense paper panel.

Could include a single published/official example structure if license permits.

## Pathology
Best option:
a reusable/open histology image with:
- raw image state,
- pedagogical overlay state.

Do not fabricate a heatmap and imply it is a real model saliency map.

If the overlay is custom:
label it as explanatory.

Potential open-source image repositories should be checked for reuse licences.

## AlphaGenome
Create de novo.
This slide benefits more from clarity than from a paper screenshot.

Use:
- genomic sequence,
- one base highlighted,
- regulatory tracks,
- before/after illustrative values.

Must say:
**“Simulación conceptual — no corresponde a una predicción real de AlphaGenome.”**

## AlphaGenome Atlas scale
Use typography and custom visualisation rather than screenshots.

Verify the ~9 billion figure immediately before final release.

## Halicin
Create de novo chemical-space visualisation.

Optional:
include the actual 2D chemical structure of halicin from a reliable chemical database if licensing/attribution is straightforward.

Do not invent molecular descriptors and label them as measured data.

If synthetic values are used:
label as conceptual/simulated.

## BirdNET
Use a real bird call spectrogram only if source/reuse is clear.

Otherwise:
- use an openly licensed recording,
- compute the spectrogram locally,
- cite the recording/source.

Could include a real short local audio clip.
No network streaming.

## Possibility spaces
Create de novo.

Important:
the categories use incomparable units.
Do not make a standard bar chart implying direct quantitative comparability unless explicitly labelled schematic/logical.

Prefer magnitude cards or distinct scale panels.

## Scientific-method cycle
Create de novo.

---

# Licensing checklist

For every external asset, record:
- creator/source,
- URL or DOI,
- licence / reuse basis,
- modifications made,
- slide number.

Create an asset register, for example:
`docs/ASSET_REGISTER.md`

Codex should populate it during implementation.

If licensing is unclear:
**do not include the asset in the final deck.**

---

# Attribution style on slides

Use a small footer, but keep it readable:

> Fuente: Jumper et al., Nature (2021). DOI: …

For custom diagrams based on a paper:

> Esquema propio basado en Jumper et al., Nature (2021).

For conceptual simulations:

> Simulación conceptual propia; no representa una salida real del modelo.

---

# Quality test

Before accepting a visual, ask:

1. Can a 16-year-old understand what to look at in <10 seconds?
2. Does it support the sentence currently being spoken?
3. Is it scientifically honest?
4. Is the source/reuse status documented?
5. Would the slide improve if the visual were removed?

If the answer to #5 is yes, remove it.
