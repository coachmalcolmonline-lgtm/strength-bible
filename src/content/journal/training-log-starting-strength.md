---
title: "Training Log — Starting Strength"
category: "Journal"
icon: "📓"
order: 12
type: "program-log"
program: "starting-strength"
cycle_length_weeks: 12
sessions_per_week: 3
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: workout
    type: select
    options: ["A", "B"]
  - name: squat_weight
    type: number
  - name: squat_sets
    type: number
  - name: squat_reps
    type: number
  - name: squat_rpe
    type: number
    min: 1
    max: 10
  - name: press_or_bench
    type: select
    options: ["Press", "Bench Press"]
  - name: press_bench_weight
    type: number
  - name: press_bench_rpe
    type: number
    min: 1
    max: 10
  - name: pull_lift
    type: select
    options: ["Deadlift", "Power Clean", "Barbell Row"]
  - name: pull_weight
    type: number
  - name: pull_rpe
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

# Training Log — Starting Strength

Living journal for athletes running Starting Strength. One page per session.
Workout A and Workout B alternate. Weight is added every session until stalls.

## How to Use This Log

1. Before each session, check readiness.
2. Log each lift with weight, sets, reps, RPE.
3. Note if progression happened (+5/+10) or if a stall occurred.
4. Weekly reflection every 7 days.
5. Reset log every time a reset happens.

## Progression Reminders

- Squat, Bench, Press, Power Clean: +5 lbs per session
- Deadlift: +10 lbs per session
- Stall = repeat weight once, then reset 10% if stall repeats

## Daily Entry Template

**Date:** ______________________

**Workout:** [ ] A  [ ] B

**Readiness (1-10):** ______

### Back Squat

**Weight:** ______ **Sets x Reps:** 3x5 **RPE:** ______

### Press or Bench Press

**Lift:** [ ] Press  [ ] Bench Press
**Weight:** ______ **Sets x Reps:** 3x5 **RPE:** ______

### Pull Lift

**Lift:** [ ] Deadlift 1x5  [ ] Power Clean 5x3  [ ] Barbell Row 3x5
**Weight:** ______ **RPE:** ______

### Progression This Session

[ ] Added weight as prescribed
[ ] Stalled — repeated weight
[ ] Stalled — reset 10%

### Notes

_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every 7 Days)

**Week of:** ______________________

**Sessions completed:** ______ / 3

**1. All progressions successful this week?**
[ ] Yes [ ] Mostly [ ] No

**2. Any stalls?**
_____________________________________________________________

**3. Sleep this week:**
[ ] Great [ ] Good [ ] OK [ ] Poor

**4. Nutrition this week:**
[ ] Great [ ] Good [ ] OK [ ] Poor

**5. One adjustment for next week:**
_____________________________________________________________

---

## Reset Log

Record each reset (10% reduction after stall) here.

| Date | Lift | Peak Weight | Reset Weight |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

---

## Milestone Tracking

| Milestone | Weight | Date |
|---|---|---|
| Bodyweight Squat | | |
| Bodyweight Bench | | |
| Bodyweight Deadlift | | |
| Bodyweight Press | | |
| 1.5x Bodyweight Squat | | |
| 2x Bodyweight Deadlift | | |

---

## Cycle Review (Every 12 Weeks)

**Cycle:** ______________________

**1. Starting weights (Week 1):**
Squat: ______  Bench: ______  Deadlift: ______  Press: ______

**2. Peak weights before first reset:**
Squat: ______  Bench: ______  Deadlift: ______  Press: ______

**3. Number of resets:** ______

**4. Ready for a new program?**
[ ] Yes — specify: ______________________
[ ] No — continue Starting Strength

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- Starting Strength Program README
- Progressive Overload
- Autoregulation
- Deloading
