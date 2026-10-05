---
title: "Training Log — Flag Football"
category: "Journal"
icon: "🏳️"
order: 32
type: "program-log"
program: "flag-football"
cycle_length_weeks: 16
sessions_per_week: 4
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: position
    type: select
    options: ["Rusher", "Receiver", "Running Back", "Safety / DB", "Center", "Quarterback", "Utility"]
  - name: phase
    type: select
    options: ["Off-season", "Pre-season", "In-season", "Post-season"]
  - name: session_type
    type: select
    options: ["Lower + Speed", "Conditioning + Agility", "Speed + COD", "Upper + Power", "Full Body (Maintenance)", "Game/Practice", "Rest"]
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
  - name: sprint_10m
    type: number
  - name: sprint_40yd
    type: number
  - name: shuttle_result
    type: number
  - name: vertical_jump
    type: number
  - name: cod_drill
    type: text
  - name: body_weight
    type: number
  - name: nordic_curl_reps
    type: number
  - name: hamstring_status
    type: select
    options: ["Fresh", "Normal", "Tired", "Tight", "Pain"]
  - name: ankle_status
    type: select
    options: ["Fresh", "Normal", "Tired", "Tight", "Pain"]
  - name: freshness
    type: number
    min: 1
    max: 10
  - name: notes
    type: text
---

# Training Log — Flag Football

Living journal for flag football athletes. Tracks phase, speed results, COD times, body weight, and injury prevention work.

## How to Use This Log

1. Log every session -- lifts, speed work, COD drills, conditioning.
2. Track sprint times (10m, 40yd) and shuttle times regularly.
3. Track body weight weekly -- flag football rewards lean.
4. Track hamstring and ankle status before and after every session.
5. Weekly reflection every Sunday. Phase testing at end of off-season and pre-season.

## Status Scale (Hamstring / Ankle)

| Status | Description |
|---|---|
| Fresh | No tightness, no fatigue |
| Normal | Slight fatigue, expected |
| Tired | Noticeable fatigue -- reduce sprint volume |
| Tight | Tightness or minor discomfort -- no max sprints |
| Pain | Stop. Rest. See a professional if it persists. |

## Progression Reminders

- **Off-season:** add 5-10 lbs per week to main lifts, increase speed volume slowly.
- **Pre-season:** maintain lifts, sharpen speed and COD.
- **In-season:** 2 lifts per week, practice provides conditioning.
- **Deload every 6-8 weeks (off-season) or 4-6 weeks (in-season).**
- **Nordic curls 2-3x per week. Single-leg balance every session.**
- **Speed work on fresh legs -- never when tired.**
- **Stay lean. Extra mass slows you down.**

## Daily Entry Template

**Date:** ______________________

**Position:** ______________________

**Phase:** [ ] Off-season  [ ] Pre-season  [ ] In-season  [ ] Post-season

**Session:** [ ] Lower + Speed  [ ] Conditioning + Agility  [ ] Speed + COD  [ ] Upper + Power  [ ] Full Body (Maintenance)  [ ] Game/Practice  [ ] Rest

**Freshness (1-10):** ______

**Hamstring status (start):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain
**Ankle status (start):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain

### Main Lift

**Lift:** ______________________
**Weight:** ______  **Sets x Reps:** ______  **RPE:** ______

### Speed Work

**Distance:** ______  **Time:** ______

### COD / Agility Work

**Drill:** ______________________  **Time:** ______

### Body Weight

**Today:** ______

### Injury Prevention

**Nordic curl reps:** ______

- [ ] Single-leg balance
- [ ] Copenhagen plank
- [ ] Lateral band walks
- [ ] Landing mechanics
- [ ] Hip flexor mobility
- [ ] Ankle mobility

**Hamstring status (end):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain
**Ankle status (end):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain

### Notes

_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every Sunday)

**Week of:** ______________________

**Phase:** ______________________

**Sessions completed:** ______

**1. Speed work this week (total sprints):** ______

**2. Body weight trend:**
[ ] Up  [ ] Steady  [ ] Down  [ ] On target

**3. Any hamstring or ankle tightness?**
_____________________________________________________________

**4. Nordic curls done this week:**
[ ] 3x  [ ] 2x  [ ] 1x  [ ] 0x

**5. One adjustment for next week:**
_____________________________________________________________

---

## Phase Testing (End of Off-Season / Pre-Season)

**Date:** ______________________

**Phase completed:** [ ] Off-season  [ ] Pre-season

**Bodyweight:** ______

| Test | Result | Notes |
|---|---|---|
| 10m sprint | | |
| 30m sprint | | |
| 40-yard dash | | |
| 5-10-5 shuttle | | |
| Pro-agility shuttle | | |
| Vertical jump | | |
| Broad jump | | |
| Back squat 3RM | | |
| Nordic curl (max reps) | | |

**Change from prior phase:**

| Test | Prior | Current | Change |
|---|---|---|---|
| 40-yard dash | | | |
| Vertical jump | | | |
| Body weight | | | |

---

## Season Review (End of Season)

**Season:** ______

**1. Best on-field moment:**
_____________________________________________________________

**2. Speed and agility maintained through season?**
[ ] Yes  [ ] Mostly  [ ] Lost significant

**3. Any injuries?**
_____________________________________________________________

**4. Body weight change:** ______

**5. Off-season plan:**
[ ] Build speed + power  [ ] Lean out  [ ] Rest  [ ] Position-specific focus

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- Flag Football Program README
- Flag Football Training (concept)
- Football Training (concept -- for skill position overlap)
- Sport-Specific Training (concept)
- Speed (concept)
