---
title: "Training Log — General Program"
category: "Journal"
icon: "📓"
order: 10
type: "program-log"
program: "general"
cycle_length_weeks: 6
sessions_per_week: 3
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: session_type
    type: select
    options: ["Squat + Press", "Pull + Accessory", "Squat + Press (Lighter)", "Mobility", "Recovery", "Rest"]
  - name: main_lift
    type: select
    options: ["Back Squat", "Front Squat", "Deadlift", "Press", "—"]
  - name: main_weight
    type: number
  - name: main_sets
    type: number
  - name: main_reps
    type: number
  - name: main_rpe
    type: number
    min: 1
    max: 10
  - name: secondary_lift
    type: select
    options: ["Back Squat", "Front Squat", "Deadlift", "Press", "—"]
  - name: secondary_weight
    type: number
  - name: secondary_sets
    type: number
  - name: secondary_reps
    type: number
  - name: secondary_rpe
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

# Training Log — General Program

The living journal for athletes running the General Program. One page per
training session. Weekly reflection every 7 days. Monthly review at the end
of each 6-week cycle.

## How to Use This Log

1. Before each session, check readiness (sleep, nutrition, stress).
2. During the session, log weight, sets, reps, and RPE for each lift.
3. After each session, write a 1-2 sentence note about how it felt.
4. Every 7 days, complete the Weekly Reflection.
5. Every 6 weeks, complete the Monthly Review and plan the next cycle.

## Progression Reminders

- Complete prescribed reps at prescribed RPE = add weight next session.
- Miss reps or hit RPE 9+ early = repeat same load.
- Every 6-8 weeks = deload (volume -50%, intensity -15%, RPE 5-7).

## Daily Entry Template

**Date:** ______________________

**Readiness (1-10):** ______

**Sleep (hours):** ______ **Nutrition (1-5):** ______ **Stress (1-5):** ______

### Main Lift

**Lift:** ______________________
**Weight:** ______ **Sets:** ______ **Reps:** ______ **RPE:** ______

### Secondary Lift

**Lift:** ______________________
**Weight:** ______ **Sets:** ______ **Reps:** ______ **RPE:** ______

### Notes

_____________________________________________________________
_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every 7 Days)

**Week of:** ______________________

**Sessions completed:** ______ / 3

**1. What went well this week?**
_____________________________________________________________

**2. What was hard?**
_____________________________________________________________

**3. Did you hit your targets?**
[ ] Yes [ ] Mostly [ ] No

**4. Sleep this week:**
[ ] Great [ ] Good [ ] OK [ ] Poor

**5. Nutrition this week:**
[ ] Great [ ] Good [ ] OK [ ] Poor

**6. What's one thing you'll do differently next week?**
_____________________________________________________________

**7. What's one thing you'll keep doing?**
_____________________________________________________________

---

## Monthly Review (Every 6 Weeks)

**Cycle:** ______________________

**1. Starting weights (Week 1):**
Squat: ______  Press: ______  Deadlift: ______  Front Squat: ______

**2. Ending weights (Week 6):**
Squat: ______  Press: ______  Deadlift: ______  Front Squat: ______

**3. Net progress:**
Squat: ______ lbs  Press: ______ lbs  Deadlift: ______ lbs  Front Squat: ______ lbs

**4. What worked?**
_____________________________________________________________

**5. What didn't?**
_____________________________________________________________

**6. Next cycle adjustments:**
_____________________________________________________________

**7. Ready for a new program?**
[ ] Yes — specify: ______________________
[ ] No — continue General Program

---

## Auto-Generation Rule

When 80% of this journal's blank pages are filled, a new block of blank
pages auto-generates. The athlete receives a prompt:

> "You're running low on journal pages. Ready to add more?"

Confirm = new block appended. Decline = prompt returns after next session.

## Related Resources

- General Program README — program documentation
- Progressive Overload — why weights go up
- Autoregulation — how to read RPE and adjust
- Deloading — when to back off
