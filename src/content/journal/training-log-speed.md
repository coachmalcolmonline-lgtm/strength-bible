---
title: "Training Log — Speed"
category: "Journal"
icon: "⚡"
order: 20
type: "program-log"
program: "speed"
cycle_length_weeks: 8
sessions_per_week: 4
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: session
    type: select
    options: ["Speed A + Plyo", "Strength A", "Speed B + Plyo", "Strength B", "Test Day", "Rest"]
  - name: sprint_distance
    type: select
    options: ["10m", "20m", "30m", "Flying 30m", "60m", "Other"]
  - name: sprint_time
    type: number
  - name: sprint_reps
    type: number
  - name: sprint_rpe
    type: number
    min: 1
    max: 10
  - name: jump_type
    type: select
    options: ["Vertical", "Broad", "Box", "Depth", "Bounds", "None"]
  - name: jump_result
    type: number
  - name: plyo_contacts
    type: number
  - name: strength_lift
    type: text
  - name: strength_weight
    type: number
  - name: strength_sets_reps
    type: text
  - name: freshness
    type: number
    min: 1
    max: 10
  - name: notes
    type: text
---

# Training Log — Speed

Living journal for the 8-week speed block. Track sprint times, jump heights, plyometric volume, and — critically — how fresh you felt before the session. Speed is a CNS quality; freshness is not optional.

## How to Use This Log

1. Log every sprint rep with distance, time, and RPE.
2. Log every jump with type and result.
3. Log plyometric ground contacts (total for the session).
4. **Rate your freshness before training** — this is the single most predictive field.
5. Weekly reflection every Sunday. Testing weeks 1 and 8.

## Progression Reminders

- **Speed before strength.** Same day → sprint first.
- **Full recovery between reps.** 90 sec minimum, 3–5 min for max velocity.
- **Stop when speed drops.** If a rep feels slow, end the set.
- **Two speed sessions per week, max.**
- **Never sprint on sore hamstrings.**

## Sprint Time Benchmarks

For context — these are general high-school athlete ranges. Individual athletes vary widely.

| Distance | Beginner | Intermediate | Advanced |
|---|---|---|---|
| 10m | 2.0–2.2s | 1.85–2.0s | 1.75–1.85s |
| 30m | 4.5–5.0s | 4.2–4.5s | 4.0–4.2s |
| Flying 30m | 3.8–4.2s | 3.5–3.8s | 3.3–3.5s |
| Vertical Jump | 16–20" | 20–24" | 24–30"+ |
| Broad Jump | 5'0"–6'0" | 6'0"–7'6" | 7'6"–9'0"+ |

Track your own trend, not absolute numbers.

## Daily Entry Template

**Date:** ______________________

**Session:** [ ] Speed A + Plyo  [ ] Strength A  [ ] Speed B + Plyo  [ ] Strength B  [ ] Test Day  [ ] Rest

**Freshness (1–10):** ______

### Sprint Work

| Distance | Reps | Best Time | Avg RPE |
|---|---|---|---|
| | | | |
| | | | |

### Plyometrics

**Type:** ______________________  **Contacts:** ______  **Best Result:** ______

### Strength Work

**Lift:** ______________________
**Weight:** ______ **Sets x Reps:** ______

### Notes
_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every Sunday)

**Week of:** ______________________

**Sessions completed:** ______ / 4

**1. Any sprint PRs this week?**
_____________________________________________________________

**2. Average freshness before speed sessions:**
______

**3. Hamstring or calf tightness?**
[ ] None  [ ] Mild  [ ] Concerning

**4. Plyometric contacts this week (total):**
______

**5. One adjustment for next week:**
_____________________________________________________________

---

## Test Day (Weeks 1 and 8)

**Date:** ______________________

**Conditions:** Weather ____________  Surface ____________  Shoes ____________  Time of day ____________

| Test | Result | Notes |
|---|---|---|
| 10m sprint | | |
| 30m sprint | | |
| Flying 30m | | |
| Vertical jump | | |
| Broad jump | | |
| 5-10-5 shuttle | | |

**8-week change:**

| Test | Week 1 | Week 8 | Change |
|---|---|---|---|
| 10m | | | |
| 30m | | | |
| Flying 30m | | | |
| Vertical | | | |
| Broad | | | |

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- Speed Program README
- Speed (concept)
- Power (concept)
- Progressive Overload (concept)
- Deloading (concept)
