---
title: "Training Log — Strongman"
category: "Journal"
icon: "💪"
order: 25
type: "program-log"
program: "strongman"
cycle_length_weeks: 8
sessions_per_week: 4
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: session_type
    type: select
    options: ["Lower + Sled", "Upper + Grip", "Events Day", "Full Body + Carries", "Medley", "Test Day", "Rest"]
  - name: event_1
    type: text
  - name: event_1_load
    type: number
  - name: event_1_distance_or_reps
    type: text
  - name: event_1_time
    type: number
  - name: event_1_rpe
    type: number
    min: 1
    max: 10
  - name: event_2
    type: text
  - name: event_2_load
    type: number
  - name: event_2_distance_or_reps
    type: text
  - name: event_2_time
    type: number
  - name: event_2_rpe
    type: number
    min: 1
    max: 10
  - name: grip_status
    type: select
    options: ["Fresh", "Working", "Failing", "Dead"]
  - name: freshness
    type: number
    min: 1
    max: 10
  - name: notes
    type: text
---

# Training Log — Strongman

Living journal for the 8-week strongman block. Track event loads, distances, times, and -- critically -- grip status. Grip failure is the #1 limiter in strongman events, and this log makes it visible.

## How to Use This Log

1. Log every event with load, distance (or reps), time, and RPE.
2. Rate grip status before the session and after each carry.
3. Rate freshness. Strongman is high-CNS; fresh legs handle heavy yokes better.
4. Note any technique issues -- yoke posture, stone hugging, tire hinge.
5. Weekly reflection every Sunday. Test weeks 1 and 8.

## Grip Status Scale

| Status | Description |
|---|---|
| Fresh | Full grip, no fatigue |
| Working | Some forearm burn, grip holding |
| Failing | Losing grip on carries, need chalk or straps |
| Dead | Can't hold the implement; end session |

If grip fails early in a session, cut the volume. Grip is trainable but recovers slower than muscle.

## Progression Reminders

- **Load first, distance second.** Add load before adding distance.
- **Never add both in the same week.**
- **Deload week 5.** Test week 8.
- **Chalk every carry.** Grip is the point.
- **Belt above 85% on yoke and deadlift.**

## Warm-Up Checklist (Every Session)

- [ ] Dynamic mobility -- hips, shoulders, thoracic spine
- [ ] Light barbell warm-up on main lift
- [ ] Light yoke walk or empty sled to prime positions
- [ ] Grip activation -- light farmer carry, plate pinch, dead hang

## Daily Entry Template

**Date:** ______________________

**Session:** [ ] Lower + Sled  [ ] Upper + Grip  [ ] Events Day  [ ] Full Body + Carries  [ ] Medley  [ ] Test Day  [ ] Rest

**Freshness (1-10):** ______

**Grip status (start of session):** [ ] Fresh  [ ] Working  [ ] Failing  [ ] Dead

### Event 1

**Event:** ______________________
**Load:** ______  **Distance/Reps:** ______  **Time:** ______  **RPE:** ______

### Event 2

**Event:** ______________________
**Load:** ______  **Distance/Reps:** ______  **Time:** ______  **RPE:** ______

### Additional Work

**Barbell lift:** ______________________  **Weight:** ______  **Sets x Reps:** ______

### Grip Status (end of session)

[ ] Fresh  [ ] Working  [ ] Failing  [ ] Dead

### Notes

_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every Sunday)

**Week of:** ______________________

**Sessions completed:** ______ / 4

**1. Best carry this week:**

| Event | Load | Distance/Reps | Time |
|---|---|---|---|
| | | | |
| | | | |

**2. Grip trend this week:**
[ ] Strong  [ ] Holding  [ ] Failing earlier than last week

**3. Any technique issues that persisted?**
_____________________________________________________________

**4. Posture or bar-path issues?**
[ ] None  [ ] Yoke lean  [ ] Stone round-back  [ ] Tire hip-hinge

**5. One adjustment for next week:**
_____________________________________________________________

---

## Test Day (Weeks 1 and 8)

**Date:** ______________________

**Bodyweight:** ______

**Warm-up completed:** [ ] Yes

| Test | Result | Notes |
|---|---|---|
| Farmer carry -- max load 30m | | |
| Yoke walk -- max load 15m | | |
| Atlas stone -- max load to 48" | | |
| Sled push -- 20m at fixed load (time) | | |
| Tire flip -- max flips in 60 sec | | |
| Deadlift -- 1RM or 3RM | | |
| Grip endurance -- max dead hang (time) | | |

**8-week change:**

| Test | Week 1 | Week 8 | Change |
|---|---|---|---|
| Farmer carry | | | |
| Yoke walk | | | |
| Stone load | | | |
| Sled push time | | | |
| Tire flips | | | |

---

## Cycle Review (Week 8)

**Cycle:** ______

**1. Grip strength improved?**
[ ] Yes  [ ] Same  [ ] No

**2. Trunk stability improved?**
[ ] Yes  [ ] Same  [ ] No

**3. Any injuries or nagging issues?**
_____________________________________________________________

**4. Deload week 5 completed?**
[ ] Yes  [ ] No

**5. Ready for:**
[ ] Repeat with new loads  [ ] Shift to strength focus  [ ] Sport-specific prep  [ ] Return to barbell focus

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- Strongman Program README
- Farmer Carry (lift)
- Sled Work (lift)
- Yoke Walk (lift)
- Odd Object Lifting (lift)
- Power (concept)
- Conditioning Methods (concept)
