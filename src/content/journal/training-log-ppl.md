---
title: "Training Log — PPL"
category: "Journal"
icon: "📓"
order: 16
type: "program-log"
program: "ppl"
cycle_length_weeks: 8
sessions_per_week: 6
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: session
    type: select
    options: ["Push", "Pull", "Legs", "Rest"]
  - name: primary_lift
    type: text
  - name: primary_weight
    type: number
  - name: primary_sets_reps
    type: text
  - name: primary_rpe
    type: number
    min: 1
    max: 10
  - name: accessory_1
    type: text
  - name: accessory_2
    type: text
  - name: accessory_3
    type: text
  - name: readiness
    type: number
    min: 1
    max: 10
  - name: notes
    type: text
---

# Training Log — PPL

Living journal for athletes running PPL. Six sessions per week. Push, Pull,
Legs, repeat. Log primary lifts, accessories, RPE, and readiness. Focus on
accumulating quality volume.

## How to Use This Log

1. Before each session, check readiness.
2. Log primary lift weight, sets, reps, RPE.
3. Log 3-4 accessory exercises briefly.
4. Weekly reflection every Sunday.
5. Cycle review every 8 weeks.

## Progression Reminders

- Primary lifts: +5 lbs when top of rep range hit at RPE 8.
- Accessory lifts: add reps first, then weight.
- Volume target: 10-20 hard sets per muscle group per week.
- Deload every 6-8 weeks.

## Daily Entry Template

**Date:** ______________________

**Session:** [ ] Push  [ ] Pull  [ ] Legs  [ ] Rest

**Readiness (1-10):** ______

### Primary Lift

**Lift:** ______________________
**Weight:** ______ **Sets x Reps:** ______ **RPE:** ______

### Accessory 1
**Exercise:** ______________________ **Sets x Reps:** ______ **RPE:** ______

### Accessory 2
**Exercise:** ______________________ **Sets x Reps:** ______ **RPE:** ______

### Accessory 3
**Exercise:** ______________________ **Sets x Reps:** ______ **RPE:** ______

### Notes
_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every Sunday)

**Week of:** ______________________

**Sessions completed:** ______ / 6

**1. Push sessions quality:**
[ ] Great [ ] Good [ ] OK [ ] Poor

**2. Pull sessions quality:**
[ ] Great [ ] Good [ ] OK [ ] Poor

**3. Legs sessions quality:**
[ ] Great [ ] Good [ ] OK [ ] Poor

**4. Any joints feeling beat up?**
_____________________________________________________________

**5. One adjustment for next week:**
_____________________________________________________________

---

## Cycle Review (Every 8 Weeks)

**Cycle:** ______

**1. Primary lift progress:**

| Lift | Start | End | Change |
|---|---|---|---|
| Bench Press | | | |
| Deadlift | | | |
| Back Squat | | | |
| Overhead Press | | | |

**2. Body weight change:** ______

**3. Deload completed?**
[ ] Yes [ ] No

**4. Ready to continue or switch?**
[ ] Continue PPL
[ ] Switch — specify: ______________________

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- PPL Program README
- Progressive Overload
- Autoregulation
- Deloading
- Hypertrophy
