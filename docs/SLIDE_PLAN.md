# Definitive slide plan

Target: **13 slides**, approximately **17–18 min** total.

The speaker script in `SPEAKER_SCRIPT.md` is authoritative for oral content. Slides should show only the minimum visual/text content needed to support it.

---

## Slide 1 — Title

### Title
**Cómo la inteligencia artificial está aprendiendo el lenguaje de la vida**

Subtitle:
**De las moléculas a los ecosistemas**

### Purpose
Open with the question:

> **¿Puede una máquina aprender a leer la vida?**

### Visual
Custom scientific collage / visual system combining:
- DNA,
- protein structure,
- histology,
- molecule,
- bird/spectrogram.

Create de novo. Avoid generic AI iconography.

### Interaction
None.

### Time
~0:40

---

## Slide 2 — La vida está llena de información

### Message
Biology generates many kinds of structured information.

### Visual
Clean custom mosaic:
- DNA — 4-letter sequence,
- protein — amino-acid sequence / structure,
- histology — image,
- chemical compound — molecular graph,
- bird song — waveform/spectrogram,
- ecosystem — sensor network or landscape abstraction.

### Minimal text
**Secuencias · formas · imágenes · moléculas · sonidos**

### Interaction
Optional hover/reveal, but not required.

### Time
~1:15

---

## Slide 3 — Cinco verbos

### Title
**¿Qué está aprendiendo a hacer la IA?**

### Main visual
Five large words:

**RECONOCER · PREDECIR · BUSCAR · DISEÑAR · MONITORIZAR**

### Interaction
Required/strongly preferred:
click or keyboard-select each verb to show:
- one-line definition,
- one representative example,
- icon/mini visual.

The default state must already show all five.

### Examples
- RECONOCER → patrones tumorales en histología
- PREDECIR → estructura / efecto de una variante
- BUSCAR → antibióticos
- DISEÑAR → proteínas nuevas
- MONITORIZAR → biodiversidad

### Time
~1:10

---

## Slide 4 — PREDECIR: AlphaFold

### Title
**PREDECIR · De una secuencia a una máquina molecular**

### Message
Amino-acid sequence → predicted 3D structure → functional hypotheses.

### Visual
Custom three-stage progression:
1. sequence,
2. conceptual folding,
3. 3D protein representation.

### Interaction
Required:
sequence → fold → structure progression. Could be step buttons, scrubber or fragments.

Important:
this is a **conceptual explanatory animation**, not an AlphaFold simulation.

Label accordingly.

### Secondary message
AlphaFold 3 extends prediction toward complexes/interactions involving proteins, DNA, RNA, ligands and ions.

### Source
Jumper et al. 2021; Abramson et al. 2024; AlphaFold DB.

### Time
~1:55

---

## Slide 5 — DISEÑAR: RFdiffusion

### Title
**DISEÑAR · ¿Y si la proteína todavía no existe?**

### Message
Generative AI can help design novel protein structures/functions, followed by experimental validation.

### Visual
Custom pipeline:

**objetivo → modelo generativo → diseños → selección → experimento**

### Interaction
Simple progressive reveal is enough.

### Source
Watson et al. 2023.

### Time
~0:45

This slide may be vertically grouped with slide 4 in Reveal.js if that improves flow.

---

## Slide 6 — RECONOCER: pathology

### Title
**RECONOCER · ¿Qué ve la IA en esta imagen?**

### Opening
Show an unannotated histology image first.

Ask audience:
> **¿Alguien ve un cáncer aquí?**

### Interaction
Required:
reveal overlay / annotation state after audience has looked.

Possible sequence:
1. raw histology,
2. regions/features highlighted,
3. AI score/label concept.

Do not claim that heatmaps literally explain all model reasoning.

### Message
Models learn statistical visual patterns associated with tissues/pathology; they can assist specialists, not replace them.

### Example
Virchow foundation model / computational pathology.

### Source
Vorontsov et al. 2024.

### Time
~1:45

---

## Slide 7 — PREDECIR: AlphaGenome

### Title
**PREDECIR · ¿Qué ocurre si cambio una sola letra?**

### Opening analogy
**CASA → COSA**

A one-letter change can alter meaning, depending on context.

### Main visual
DNA sequence with one highlighted base.

### Interaction
Required:
single-base conceptual selector/slider changes an illustrative downstream regulatory plot.

Possible outputs:
- expresión,
- splicing,
- accesibilidad de cromatina.

Important label:
**Simulación conceptual — no es una predicción real de AlphaGenome.**

### Message
Knowing DNA letters is not the same as understanding their regulatory consequences.

### Source
AlphaGenome paper and official AlphaGenome resource.

### Time
~2:10

---

## Slide 8 — AlphaGenome Atlas / scale

### Title
Option A:
**9.000.000.000**

Option B:
**No podemos probarlo todo**

### Main visual
Huge central number:
**~9.000 millones**

Subtitle:
**posibles sustituciones de una sola base en el genoma humano**

Only use this number if reverified from the official AlphaGenome Atlas source at implementation time.

### Transition message
The challenge is not just predicting one variant; it is exploring an enormous space.

### Interaction
Progressively reveal comparison categories:
- variants,
- protein structures,
- molecules,
- images,
- recordings.

### Time
~0:50

---

## Slide 9 — BUSCAR: halicin

### Title
**BUSCAR · Encontrar una aguja en un pajar químico**

### Message
Machine learning can prioritise promising compounds from enormous chemical libraries.

### Visual
A custom 2D conceptual “chemical space” with many candidate points.

### Interaction
Preferred:
threshold/prioritisation control reduces thousands/millions conceptually to a small candidate subset, ending with “halicina” highlighted.

Label clearly:
**Representación conceptual del proceso de priorización.**

### Important scientific point
The AI did not produce a finished medicine.
It prioritised a candidate, which researchers then tested experimentally.

### Source
Stokes et al. 2020.

### Time
~1:40

---

## Slide 10 — MONITORIZAR: BirdNET

### Title
**MONITORIZAR · Escuchar un ecosistema**

### Message
Automated recorders + acoustic AI can convert massive environmental audio into biodiversity observations.

### Visual
Sound waveform + spectrogram + species prediction.

### Interaction
Preferred:
- reveal acoustic pattern,
- reveal species label/confidence,
- optional short locally embedded audio clip.

Audio must not be required for understanding.

### Connection to event
Briefly connect to automated insect/biodiversity monitoring covered elsewhere in AI Co-FLY.

### Source
Kahl et al. 2021; BirdNET official resource.

### Time
~1:35

---

## Slide 11 — Possibility spaces

### Title
**¿Qué tienen todos estos ejemplos en común?**

### Central message
**No podemos probarlo todo.**

Then:
**La IA nos ayuda a decidir dónde mirar primero.**

### Visual
Comparative scale visual:
- >200M predicted protein structures (verify exact current public figure before final),
- ~9B possible SNVs (verify),
- millions / >100M chemical compounds in screening contexts,
- millions of images,
- thousands of hours of environmental audio.

Do not create a mathematically misleading common axis if units are incomparable.

Better:
five separate “magnitude cards” or an intentionally schematic log-scale concept.

### Interaction
Required/strongly preferred:
progressive reveal or animated scaling.

### Time
~1:20

---

## Slide 12 — Prediction is not truth

### Title
**Una predicción no es una verdad**

### Visual
Large loop/pipeline:

**DATOS → IA → PREDICCIÓN → EXPERIMENTO / OBSERVACIÓN → NUEVOS DATOS**

### Examples beneath or via fragments
- estructura predicha → validación estructural/funcional
- variante priorizada → evidencia experimental/clínica
- molécula candidata → ensayos
- especie detectada → verificación/ecología

### Interaction
Highlight each stage sequentially.

### Message
AI extends the scientific method; it does not abolish it.

### Time
~1:15

---

## Slide 13 — Closing

### Title
**De las moléculas a los ecosistemas**

### Visual
Return to the five verbs and the scale journey:
protein → tissue → genome → molecule → ecosystem

### Final message
Preferred final line:

> **La IA no sustituye a la biología: amplía nuestra capacidad para hacer preguntas, explorar posibilidades y decidir dónde mirar primero.**

Then return briefly to the opening question:

> **¿Puede una máquina aprender el lenguaje de la vida?**

End with the future-facing message to students:
they may be the generation that finds out how far these tools can go.

### Interaction
No complex interaction. Calm ending.

### Time
~0:50

---

# Timing summary

Approximate total:
- slides 1–3: 3:05
- slides 4–5: 2:40
- slide 6: 1:45
- slides 7–8: 3:00
- slide 9: 1:40
- slide 10: 1:35
- slide 11: 1:20
- slide 12: 1:15
- slide 13: 0:50

Total ≈ 17:10 plus natural pauses.

Keep under 18 minutes in rehearsal if possible.
