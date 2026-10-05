---
title: "Training Log — Football"
category: "Journal"
icon: "🏈"
order: 30
type: "program-log"
program: "football"
cycle_length_weeks: 16
sessions_per_week: 4
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: position
    type: select
    options: ["Offensive Line", "Defensive Line", "Linebacker", "Tight End", "Running Back", "Wide Receiver", "Defensive Back", "Quarterback", "Special Teams"]
  - name: track
    type: select
    options: ["Linemen", "LB/TE", "Skill", "Quarterback"]
  - name: phase
    type: select
    options: ["Off-season", "Pre-season", "In-season", "Post-season"]
  - name: session_type
    type: select
    options: ["Heavy Lower", "Heavy Upper", "Lower Power", "Upper Power", "Speed + COD", "Maintenance", "Position Drills", "Game/Practice", "Rest"]
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
  - name: power_work
    type: text
  - name: power_result
    type: number
  - name: sprint_40yd
    type: number
  - name: vertical_jump
    type: number
  - name: body_weight
    type: number
  - name: neck_status
    type: select
    options: ["Fresh", "Normal", "Tired", "Tight", "Pain"]
  - name: hamstring_status
    type: select
    options: ["Fresh", "Normal", "Tired", "Tight", "Pain"]
  - name: collision_soreness
    type: select
    options: ["None", "Mild", "Moderate", "Significant"]
  - name: freshness
    type: number
    min: 1
    max: 10
  - name: notes
    type: text
---

# Training Log — Football

Living journal for football athletes. Tracks position, track, lifts, power, speed, body weight, and -- critically -- neck, hamstring, and collision-related status.

## How to Use This Log

1. Log every session -- lifts, power, speed, position drills, conditioning.
2. Track body weight weekly (position-specific targets).
3. Track neck and hamstring status before and after every session.
4. Rate collision soreness (in-season especially).
5. Weekly reflection every Sunday. Phase testing at end of off-season and pre-season.

## Neck / Hamstring Status Scale

| Status | Description |
|---|---|
| Fresh | No tightness, no fatigue |
| Normal | Slight fatigue, expected |
| Tired | Noticeable fatigue -- reduce heavy loading today |
| Tight | Tightness or minor discomfort -- no max efforts |
| Pain | Stop. Rest. See a professional if it persists. |

## Collision Soreness Scale

| Status | Description |
|---|---|
| None | No collision-related soreness |
| Mild | Expected after a game -- manageable with sleep and food |
| Moderate | Noticeable, affects training -- reduce volume |
| Significant | Real pain or stiffness -- see a professional |

## Progression Reminders

- **Off-season:** add 5-10 lbs per week to main lifts (linemen 10-15).
- **Pre-season:** maintain lifts, sharpen position-specific work.
- **In-season:** 2 lifts per week, maintenance only.
- **Deload every 6-8 weeks (off-season) or 4-6 weeks (in-season).**
- **Neck work every session. Nordic curls 2x per week. No exceptions.**
- **Sleep 8-9 hours. Football is a collision sport -- recovery is non-negotiable.**

## Daily Entry Template

**Date:** ______________________

**Position:** ______________________

**Track:** [ ] Linemen  [ ] LB/TE  [ ] Skill  [ ] Quarterback

**Phase:** [ ] Off-season  [ ] Pre-season  [ ] In-season  [ ] Post-season

**Session:** [ ] Heavy Lower  [ ] Heavy Upper  [ ] Lower Power  [ ] Upper Power  [ ] Speed + COD  [ ] Maintenance  [ ] Position Drills  [ ] Game/Practice  [ ] Rest

**Freshness (1-10):** ______

**Neck status (start):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain
**Hamstring status (start):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain
**Collision soreness:** [ ] None  [ ] Mild  [ ] Moderate  [ ] Significant

### Main Lift

**Lift:** ______________________
**Weight:** ______  **Sets x Reps:** ______  **RPE:** ______

### Power Work

**Movement:** ______________________  **Result:** ______

### Speed Work

**Distance/Drill:** ______________________  **Time:** ______

### Body Weight

**Today:** ______

### Injury Prevention

- [ ] Neck work (flexion/extension/isometric)
- [ ] Nordic curls
- [ ] Single-leg work
- [ ] Copenhagen plank
- [ ] Ankle stability

**Neck status (end):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain
**Hamstring status (end):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain

### Notes

_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every Sunday)

**Week of:** ______________________

**Phase:** ______________________

**Sessions completed:** ______

**1. Body weight trend this week:**
[ ] Up  [ ] Steady  [ ] Down  [ ] On target

**2. Any neck, hamstring, or knee issues?**
_____________________________________________________________

**3. Collision soreness level this week:**
[ ] None  [ ] Mild  [ ] Moderate  [ ] Significant

**4. Speed work this week (reps):** ______

**5. One adjustment for next week:**
_____________________________________________________________

---

## Phase Testing (End of Off-Season / Pre-Season)

**Date:** ______________________

**Phase completed:** [ ] Off-season  [ ] Pre-season

**Bodyweight:** ______

| Test | Result | Notes |
|---|---|---|
| 40-yard dash | | |
| 10m sprint | | |
| Vertical jump | | |
| Broad jump | | |
| 5-10-5 shuttle | | |
| Back squat 3RM | | |
| Deadlift 3RM | | |
| Bench press 3RM | | |
| Power clean 3RM | | |

**Change from prior phase:**

| Test | Prior | Current | Change |
|---|---|---|---|
| 40-yard dash | | | |
| Vertical jump | | | |
| Back squat | | | |
| Body weight | | | |

---

## Season Review (End of Season)

**Season:** ______

**1. Best on-field moment:**
_____________________________________________________________

**2. Strength and speed maintained through season?**
[ ] Yes  [ ] Mostly  [ ] Lost significant

**3. Any injuries?**
_____________________________________________________________

**4. Body weight change:** ______

**5. Off-season plan:**
[ ] Rebuild strength + power  [ ] Add mass  [ ] Rest / recover  [ ] Position-specific focus

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- Football Program README
- Football Training (concept)
- Sport-Specific Training (concept)
- Power (concept)
- Speed (concept)
