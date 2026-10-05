---
title: "Training Log — StrongLifts 5x5"
category: "Journal"
icon: "📓"
order: 13
type: "program-log"
program: "stronglifts-5x5"
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
  - name: third_lift
    type: select
    options: ["Barbell Row", "Deadlift"]
  - name: third_weight
    type: number
  - name: third_rpe
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

# Training Log — StrongLifts 5x5

Living journal for athletes running StrongLifts 5x5. One page per session.
Workout A and Workout B alternate. Weight is added every session until stalls.

## How to Use This Log

1. Before each session, check readiness.
2. Log each lift: weight, sets (5x5 or 1x5), RPE.
3. Note progressions and stalls.
4. Weekly reflection every 7 days.
5. Cycle review every 12 weeks.

## Progression Reminders

- All lifts: +5 lbs per session, except Deadlift: +10 lbs
- Stall = repeat weight once, then deload 10% if stall repeats

## Daily Entry Template

**Date:** ______________________

**Workout:** [ ] A  [ ] B

**Readiness (1-10):** ______

### Back Squat

**Weight:** ______ **Sets x Reps:** 5x5 **RPE:** ______

### Press or Bench Press

**Lift:** [ ] Press  [ ] Bench Press
**Weight:** ______ **Sets x Reps:** 5x5 **RPE:** ______

### Third Lift

**Lift:** [ ] Barbell Row 5x5  [ ] Deadlift 1x5
**Weight:** ______ **RPE:** ______

### Progression This Session

[ ] Added weight as prescribed
[ ] Stalled — repeated weight
[ ] Stalled — deloaded 10%

### Notes

_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every 7 Days)

**Week of:** ______________________

**Sessions completed:** ______ / 3

**1. All progressions successful?**
[ ] Yes [ ] Mostly [ ] No

**2. Any stalls?**
_____________________________________________________________

**3. Recovery this week:**
[ ] Great [ ] Good [ ] OK [ ] Poor

**4. One adjustment for next week:**
_____________________________________________________________

---

## Deload Log

Record each deload here.

| Date | Lift | Peak Weight | Deload Weight |
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
| Bodyweight Row | | |
| 1.5x Bodyweight Squat | | |
| 2x Bodyweight Deadlift | | |

---

## Cycle Review (Every 12 Weeks)

**Cycle:** ______________________

**1. Starting weights (Week 1):**
Squat: ______  Bench: ______  Deadlift: ______  Press: ______  Row: ______

**2. Peak weights before first deload:**
Squat: ______  Bench: ______  Deadlift: ______  Press: ______  Row: ______

**3. Number of deloads:** ______

**4. Ready for a new program?**
[ ] Yes — specify: ______________________
[ ] No — continue StrongLifts 5x5

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- StrongLifts 5x5 Program README
- Progressive Overload
- Autoregulation
- Deloading
