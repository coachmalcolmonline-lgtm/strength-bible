---
title: "Training Log — Weight Management"
category: "Journal"
icon: "⚖️"
order: 21
type: "program-log"
program: "weight-management"
cycle_length_weeks: 8
sessions_per_week: 4
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: body_weight
    type: number
  - name: calories
    type: number
  - name: protein_g
    type: number
  - name: carbs_g
    type: number
  - name: fat_g
    type: number
  - name: session_type
    type: select
    options: ["Upper A", "Lower A", "Upper B", "Lower B", "Cardio", "Rest"]
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
  - name: energy_level
    type: number
    min: 1
    max: 10
  - name: sleep_hours
    type: number
  - name: notes
    type: text
---

# Training Log — Weight Management

Living journal for the 8-week weight management block. Track daily weight, calories, protein, training, and — critically — **weekly averages**, not daily fluctuations.

## How to Use This Log

1. Weigh yourself every morning, fasted, post-bathroom.
2. Track calories, protein, carbs, and fat daily.
3. Log every training session (weight, sets, reps, RPE).
4. **Look at the weekly average, not daily numbers.**
5. Weekly reflection every Sunday. Body composition check every 4 weeks.

## Progression Reminders

- **Rate targets:** 0.25–0.5% BW/week gain, 0.5–1% BW/week loss.
- **Protein anchor:** 1.6–2.2 g/kg per day. Never go below.
- **Don't max out during a cut.** Maintain strength, don't chase PRs.
- **Deload week 8.** Take a diet break (maintenance) at week 8 too.
- **Adolescents: no aggressive cuts without medical supervision.**

## Daily Entry Template

**Date:** ______________________

**Body Weight (morning, fasted):** ______

### Nutrition

| Macro | Target | Actual |
|---|---|---|
| Calories | | |
| Protein (g) | | |
| Carbs (g) | | |
| Fat (g) | | |

### Training

**Session:** [ ] Upper A  [ ] Lower A  [ ] Upper B  [ ] Lower B  [ ] Cardio  [ ] Rest

**Primary Lift:** ______________________
**Weight:** ______ **Sets x Reps:** ______ **RPE:** ______

### Recovery

**Sleep:** ______ hours

**Energy level (1–10):** ______

### Notes
_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every Sunday)

**Week of:** ______________________

**1. Weekly average body weight:** ______

**2. Change from last week:** ______

**3. On target rate?**
[ ] Yes  [ ] Too fast  [ ] Too slow  [ ] Wrong direction

**4. Average protein intake:** ______ g/day

**5. Average calories:** ______

**6. Training performance holding?**
[ ] Yes  [ ] Slight drop  [ ] Significant drop

**7. One adjustment for next week:**
_____________________________________________________________

---

## Body Composition Check (Every 4 Weeks)

**Date:** ______________________

**Weight:** ______

**Waist circumference:** ______

**Other measurements:**

| Site | Prior | Current | Change |
|---|---|---|---|
| Chest | | | |
| Arm (flexed) | | | |
| Thigh | | | |
| Hips | | | |

**Progress photos taken?**
[ ] Yes  [ ] No

**Strength check:**

| Lift | Prior | Current | Change |
|---|---|---|---|
| Back Squat | | | |
| Bench Press | | | |
| Deadlift | | | |

---

## Cycle Review (Week 8)

**Cycle:** ______

**1. Body weight start / end:** ______ / ______

**2. Waist circumference change:** ______

**3. Strength maintained?**
[ ] Yes  [ ] Mostly  [ ] Lost significant strength

**4. Deload + diet break completed?**
[ ] Yes  [ ] No

**5. Ready for:**
[ ] Repeat block  [ ] Switch to hypertrophy  [ ] Switch to strength  [ ] Return to maintenance

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- Weight Management Program README
- Weight Management (concept)
- Hypertrophy (concept)
- Progressive Overload (concept)
