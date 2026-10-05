---
title: "Training Log — Soccer"
category: "Journal"
icon: "⚽"
order: 31
type: "program-log"
program: "soccer"
cycle_length_weeks: 16
sessions_per_week: 4
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: position
    type: select
    options: ["Goalkeeper", "Center Back", "Fullback", "Defensive Mid", "Central Mid", "Attacking Mid", "Winger", "Striker"]
  - name: phase
    type: select
    options: ["Off-season", "Pre-season", "In-season", "Post-season"]
  - name: session_type
    type: select
    options: ["Lower + Speed", "Conditioning + Core", "Lower + Power", "Conditioning + COD", "Small-Sided Games", "Full Body (Maintenance)", "Game/Practice", "Rest"]
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
  - name: conditioning_duration
    type: number
  - name: conditioning_type
    type: select
    options: ["LISS (Zone 2)", "Tempo", "HIIT", "Repeated Sprints", "Small-Sided Games", "None"]
  - name: sprint_result
    type: number
  - name: shuttle_result
    type: number
  - name: nordic_curl_reps
    type: number
  - name: hamstring_status
    type: select
    options: ["Fresh", "Normal", "Tired", "Tight", "Pain"]
  - name: ankle_status
    type: select
    options: ["Fresh", "Normal", "Tired", "Tight", "Pain"]
  - name: groin_status
    type: select
    options: ["Fresh", "Normal", "Tired", "Tight", "Pain"]
  - name: freshness
    type: number
    min: 1
    max: 10
  - name: notes
    type: text
---

# Training Log — Soccer

Living journal for soccer athletes. Tracks phase, lifts, conditioning, sprint times, and -- critically -- hamstring, ankle, and groin health.

## How to Use This Log

1. Log every session -- lifts, conditioning, speed work, sport-specific.
2. Track conditioning volume (duration and type) every week.
3. Track hamstring, ankle, and groin status before and after every session.
4. Log Nordic curl reps every session.
5. Weekly reflection every Sunday. Phase testing at end of off-season and pre-season.

## Status Scale (Hamstring / Ankle / Groin)

| Status | Description |
|---|---|
| Fresh | No tightness, no fatigue |
| Normal | Slight fatigue, expected |
| Tired | Noticeable fatigue -- reduce sprint volume |
| Tight | Tightness or minor discomfort -- no max sprints |
| Pain | Stop. Rest. See a professional if it persists. |

## Progression Reminders

- **Off-season:** add 5-10 lbs per week to main lifts, increase conditioning slowly.
- **Pre-season:** maintain lifts, sharpen speed and RSA.
- **In-season:** 2 lifts per week, practice provides conditioning.
- **Deload every 6-8 weeks (off-season) or 4-6 weeks (in-season).**
- **Nordic curls 2-3x per week. FIFA 11+ before every session. No exceptions.**
- **Single-leg balance work every session.**

## Daily Entry Template

**Date:** ______________________

**Position:** ______________________

**Phase:** [ ] Off-season  [ ] Pre-season  [ ] In-season  [ ] Post-season

**Session:** [ ] Lower + Speed  [ ] Conditioning + Core  [ ] Lower + Power  [ ] Conditioning + COD  [ ] Small-Sided Games  [ ] Full Body (Maintenance)  [ ] Game/Practice  [ ] Rest

**Freshness (1-10):** ______

**Hamstring status (start):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain
**Ankle status (start):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain
**Groin status (start):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain

### Main Lift

**Lift:** ______________________
**Weight:** ______  **Sets x Reps:** ______  **RPE:** ______

### Conditioning

**Type:** ______________________  **Duration:** ______

### Speed / COD Work

**Distance/Drill:** ______________________  **Time:** ______

### Injury Prevention

**Nordic curl reps:** ______

- [ ] FIFA 11+ warm-up
- [ ] Single-leg balance
- [ ] Copenhagen plank
- [ ] Lateral band walks
- [ ] Plank / dead bug
- [ ] Hip flexor mobility
- [ ] Ankle mobility

**Hamstring status (end):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain
**Ankle status (end):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain
**Groin status (end):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain

### Notes

_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every Sunday)

**Week of:** ______________________

**Phase:** ______________________

**Sessions completed:** ______

**1. Total conditioning volume this week (min):** ______

**2. Total sprint volume this week (reps):** ______

**3. Any hamstring, ankle, or groin tightness?**
_____________________________________________________________

**4. Nordic curls done this week:**
[ ] 3x  [ ] 2x  [ ] 1x  [ ] 0x

**5. FIFA 11+ done before every session?**
[ ] Yes  [ ] Mostly  [ ] No

**6. One adjustment for next week:**
_____________________________________________________________

---

## Phase Testing (End of Off-Season / Pre-Season)

**Date:** ______________________

**Phase completed:** [ ] Off-season  [ ] Pre-season

**Bodyweight:** ______

| Test | Result | Notes |
|---|---|---|
| Yo-Yo IR1 | | |
| 10m sprint | | |
| 30m sprint | | |
| 5-10-5 shuttle | | |
| Pro-agility shuttle | | |
| Back squat 3RM | | |
| Deadlift 3RM | | |
| Nordic curl (max reps) | | |
| Vertical jump | | |

**Change from prior phase:**

| Test | Prior | Current | Change |
|---|---|---|---|
| Yo-Yo IR1 | | | |
| 30m sprint | | | |
| Back squat | | | |

---

## Season Review (End of Season)

**Season:** ______

**1. Best on-pitch moment:**
_____________________________________________________________

**2. Strength and endurance maintained through season?**
[ ] Yes  [ ] Mostly  [ ] Lost significant

**3. Any injuries?**
_____________________________________________________________

**4. Off-season plan:**
[ ] Rebuild strength + endurance  [ ] Rest  [ ] Position-specific focus

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- Soccer Program README
- Soccer Training (concept)
- Sport-Specific Training (concept)
- Conditioning Methods (concept)
- Speed (concept)
