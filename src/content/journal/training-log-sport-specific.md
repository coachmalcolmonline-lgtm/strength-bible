---
title: "Training Log — Sport-Specific"
category: "Journal"
icon: "🎯"
order: 26
type: "program-log"
program: "sport-specific"
cycle_length_weeks: 16
sessions_per_week: 4
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: sport
    type: text
  - name: phase
    type: select
    options: ["Off-season", "Pre-season", "In-season", "Post-season"]
  - name: session_type
    type: select
    options: ["Lower + Power", "Upper + Grip", "Lower + Speed", "Upper + Core", "Speed/Agility", "Conditioning", "Maintenance", "Game/Practice", "Rest"]
  - name: main_lift
    type: text
  - name: main_lift_weight
    type: number
  - name: main_lift_sets_reps
    type: text
  - name: main_lift_rpe
    type: number
    min: 1
    max: 10
  - name: power_work
    type: text
  - name: power_result
    type: number
  - name: speed_work
    type: text
  - name: speed_result
    type: number
  - name: freshness
    type: number
    min: 1
    max: 10
  - name: notes
    type: text
---

# Training Log — Sport-Specific

Living journal for sport-specific training. Tracks phase, session type, main lifts, and sport-specific metrics (jumps, sprints, throws). The goal is to verify that gym work transfers to the field.

## How to Use This Log

1. Log every session -- lifts, power work, speed work, conditioning.
2. Track sport-specific metrics -- jumps, sprints, med ball throws.
3. Note the phase -- off-season, pre-season, in-season, post-season.
4. Track freshness. In-season athletes can't afford to train tired.
5. Weekly reflection every Sunday. Phase testing at end of each phase.

## Phase Reference

| Phase | Focus | Volume | Intensity |
|---|---|---|---|
| Off-season | Build strength + size | High | Moderate |
| Pre-season | Sport-specific power + speed | Moderate | High |
| In-season | Maintain, stay healthy | Low | Moderate |
| Post-season | Rest + recover | Very low | Low |

## In-Season Rules

- **2 sessions per week, 45-60 min each.**
- **No soreness-inducing work.** You can't sprint with dead legs.
- **Maintain the big lifts.** Squat, deadlift, press, olympic derivative.
- **No PRs in-season.** Save those for the off-season.
- **Sleep 8-9 hours.** In-season is when recovery matters most.

## Daily Entry Template

**Date:** ______________________

**Sport:** ______________________

**Phase:** [ ] Off-season  [ ] Pre-season  [ ] In-season  [ ] Post-season

**Session:** [ ] Lower + Power  [ ] Upper + Grip  [ ] Lower + Speed  [ ] Upper + Core  [ ] Speed/Agility  [ ] Conditioning  [ ] Maintenance  [ ] Game/Practice  [ ] Rest

**Freshness (1-10):** ______

### Main Lift

**Lift:** ______________________
**Weight:** ______  **Sets x Reps:** ______  **RPE:** ______

### Power Work

**Movement:** ______________________  **Result:** ______

### Speed / Agility Work

**Movement:** ______________________  **Result:** ______

### Notes

_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every Sunday)

**Week of:** ______________________

**Phase:** ______________________

**Sessions completed:** ______

**1. On-field performance this week:**
[ ] Great  [ ] Good  [ ] OK  [ ] Poor

**2. Any injuries or nagging issues?**
_____________________________________________________________

**3. Is gym work transferring to the field?**
[ ] Yes  [ ] Somewhat  [ ] No  [ ] Too soon to tell

**4. Freshness trend:**
[ ] Fresh  [ ] Managing  [ ] Worn down

**5. One adjustment for next week:**
_____________________________________________________________

---

## Phase Testing (End of Off-Season / Pre-Season)

**Date:** ______________________

**Phase completed:** [ ] Off-season  [ ] Pre-season

**Bodyweight:** ______

| Test | Result | Notes |
|---|---|---|
| Back squat 3RM | | |
| Deadlift 3RM | | |
| Press 5RM | | |
| Vertical jump | | |
| Broad jump | | |
| 10m sprint | | |
| 30m sprint | | |
| 5-10-5 shuttle | | |

**Change from prior phase:**

| Test | Prior | Current | Change |
|---|---|---|---|
| Squat | | | |
| Vertical | | | |
| 10m sprint | | | |

---

## Season Review (End of Season)

**Season:** ______

**1. Best on-field performance of the season:**
_____________________________________________________________

**2. Strength maintained through season?**
[ ] Yes  [ ] Mostly  [ ] Lost significant strength

**3. Any injuries?**
_____________________________________________________________

**4. Ready for:**
[ ] Off-season rebuild  [ ] Post-season rest  [ ] Sport-specific focus

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- Sport-Specific Program README
- Sport-Specific Training (concept)
- Progressive Overload (concept)
- Power (concept)
- Speed (concept)
