---
title: "Training Log — Bodyweight Program"
category: "Journal"
icon: "📓"
order: 11
type: "program-log"
program: "bodyweight"
cycle_length_weeks: 6
sessions_per_week: 3
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: session_type
    type: select
    options: ["Push + Core", "Pull + Hinge", "Legs + Full Body", "Mobility", "Recovery", "Rest"]
  - name: movement
    type: text
  - name: variation
    type: text
  - name: sets
    type: number
  - name: reps
    type: number
  - name: tempo
    type: text
  - name: rpe
    type: number
    min: 1
    max: 10
  - name: readiness
    type: number
    min: 1
    max: 10
  - name: notes
    type: text
---

# Training Log — Bodyweight Program

Living journal for athletes running the Bodyweight Program. Track movements,
variations, reps, tempo, and RPE. Progress through variations when reps become
easy at RPE 7.

## How to Use This Log

1. Before each session, check readiness.
2. Log movement, variation, sets, reps, tempo, RPE.
3. Note what got harder and what got easier.
4. Weekly reflection every 7 days.
5. Cycle review every 6 weeks.

## Progression Reminders

- Complete prescribed reps at RPE 7 = add reps or progress variation.
- RPE creeping above 8 = hold or regress variation.
- Every 6-8 weeks = deload.

## Daily Entry Template

**Date:** ______________________

**Readiness (1-10):** ______

**Session Type:** ______________________

### Movement 1

**Movement:** ______________________
**Variation:** ______________________
**Sets:** ______ **Reps:** ______ **Tempo:** ______ **RPE:** ______

### Movement 2

**Movement:** ______________________
**Variation:** ______________________
**Sets:** ______ **Reps:** ______ **Tempo:** ______ **RPE:** ______

### Movement 3

**Movement:** ______________________
**Variation:** ______________________
**Sets:** ______ **Reps:** ______ **Tempo:** ______ **RPE:** ______

### Notes

_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every 7 Days)

**Week of:** ______________________

**Sessions completed:** ______ / 3

**1. What progressed this week?**
_____________________________________________________________

**2. What stalled?**
_____________________________________________________________

**3. Any movement ready for a harder variation?**
_____________________________________________________________

**4. Readiness trend this week:**
[ ] Rising [ ] Holding [ ] Falling

**5. One adjustment for next week:**
_____________________________________________________________

---

## Monthly Review (Every 6 Weeks)

**Cycle:** ______________________

**1. Movements progressed:**
_____________________________________________________________

**2. Movements that need work:**
_____________________________________________________________

**3. Benchmark performance:**

- Max push-ups: ______
- Max pull-ups: ______
- Max bodyweight squats (2 min): ______
- Longest plank: ______

**4. Ready for a new program?**
[ ] Yes — specify: ______________________
[ ] No — continue Bodyweight Program

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- Bodyweight Program README
- Progressive Overload
- Autoregulation
- Deloading
