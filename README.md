# The Strength B.I.B.L.E.

**Basic Instructions Before Lifting Everything**

A progressive, interactive digital book + living journal that teaches high-school novice athletes how to build strength safely and intelligently — while remaining valuable to advanced lifters.

## Core Philosophy

- Teach the fundamentals clearly.
- Equip the athlete to develop their own best practices by evaluating numbers, notes, RPE/RIR, recovery, and real-world results.
- Training is an ever-evolving science experiment.

## Adaptive Learning System

Every concept and movement is taught at four intellectual levels: 8th Grade (default), High School Senior, College, and PhD / Scientific Depth.

Each level ends with a Check for Understanding (CFU). Correct → unlock next level. Incorrect → re-explain differently at the current level.

## Repository Structure

cat > docs/build-spec.md << 'EOF'
# Build Specification — The Strength B.I.B.L.E.

Technical requirements for the digital build.

## Content Layer

- **Format:** Markdown + YAML frontmatter
- **Location:** `src/content/{category}/{slug}.md`
- **Version control:** Git

### Content Types

| Category | Purpose |
|---|---|
| front-matter | How to use, adaptive system, journal system, safety |
| concepts | Foundational concepts |
| lifts | Barbell lifts |
| bodyweight | Bodyweight exercises |
| mobility | Mobility flows |
| journal | Journal templates |
| stories | Quiet stories |

## Build Phases

| Phase | Deliverable | Status |
|---|---|---|
| 1 | Content files + repo structure | In progress |
| 2 | Astro site + basic rendering | Pending |
| 3 | Interactive CFU + journal memory | Pending |
| 4 | Live deployment (GitHub Pages) | Pending |
| 5 | PDF/ePub export | Pending |
| 6+ | Modular expansion | Pending |

## Corrections Log

| Date | Location | Issue | Status |
|---|---|---|---|
| 2026-10-04 | Back Squat — Level 2 CFU | Knees caving inward cause: "weak adductors" is incorrect. Correct cause: overactive adductors + inability to control activation. | Pending |
| 2026-10-04 | Deep Squat | Avoid offensive label "third-world squat" | Pending |
