---
title: "Training Log — Baseball / Softball"
category: "Journal"
icon: "⚾"
order: 27
type: "program-log"
program: "baseball-softball"
cycle_length_weeks: 16
sessions_per_week: 4
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: position
    type: select
    options: ["Pitcher", "Catcher", "First Base", "Second Base", "Third Base", "Shortstop", "Outfield", "Designated Hitter", "Utility"]
  - name: phase
    type: select
    options: ["Off-season", "Pre-season", "In-season", "Post-season"]
  - name: session_type
    type: select
    options: ["Lower + Rotational", "Upper + Arm Care", "Lower + Power Clean", "Upper + Rotational", "Sprint + Arm Care", "Maintenance", "Game/Practice", "Rest"]
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
  - name: rotational_work
    type: text
  - name: rotational_result
    type: text
  - name: sprint_result
    type: number
  - name: arm_status
    type: select
    options: ["Fresh", "Normal", "Tired", "Tight", "Pain"]
  - name: freshness
    type: number
    min: 1
    max: 10
  - name: notes
    type: text
---

# Training Log — Baseball / Softball

Living journal for baseball and softball athletes. Tracks phase, main lifts, rotational power work, sprint times, and -- most importantly -- arm health.

## How to Use This Log

1. Log every session -- lifts, rotational work, sprint work, arm care.
2. Track arm status before and after each session. Anything other than Fresh or Normal is a red flag.
3. Track sprint times (10m, 30m, 60-yard) at each phase test.
4. Track rotational work: med ball throw distance, cable chop load.
5. Weekly reflection every Sunday. Phase testing at end of off-season and pre-season.

## Arm Status Scale

| Status | Description |
|---|---|
| Fresh | No tightness, no fatigue |
| Normal | Slight fatigue from recent throwing, but expected |
| Tired | Noticeable fatigue, don't push it today |
| Tight | Tightness or minor discomfort -- reduce throwing volume |
| Pain | Stop. Rest. See a professional if it persists. |

If your arm status is Tired, Tight, or Pain, cut the session's upper-body volume and skip anything overhead.

## Progression Reminders

- **Off-season:** add 5-10 lbs per week to main lifts.
- **Pre-season:** maintain lifts, increase power and speed.
- **In-season:** 2 lifts per week, no soreness-inducing work.
- **Deload every 6-8 weeks (off-season) or 4-6 weeks (in-season).**
- **Arm care every session. No exceptions.**
- **Full off-season rest from throwing for 2-4 weeks.**

## Daily Entry Template

**Date:** ______________________

**Position:** ______________________

**Phase:** [ ] Off-season  [ ] Pre-season  [ ] In-season  [ ] Post-season

**Session:** [ ] Lower + Rotational  [ ] Upper + Arm Care  [ ] Lower + Power Clean  [ ] Upper + Rotational  [ ] Sprint + Arm Care  [ ] Maintenance  [ ] Game/Practice  [ ] Rest

**Freshness (1-10):** ______

**Arm status (start):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain

### Main Lift

**Lift:** ______________________
**Weight:** ______  **Sets x Reps:** ______  **RPE:** ______

### Rotational Work

**Movement:** ______________________  **Result:** ______

### Sprint Work

**Distance:** ______  **Time:** ______

### Arm Care

- [ ] Band external rotations
- [ ] Face pulls
- [ ] YTW raises
- [ ] Scapular work

**Arm status (end):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain

### Notes

_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every Sunday)

**Week of:** ______________________

**Phase:** ______________________

**Sessions completed:** ______

**1. Hitting / throwing felt good this week?**
[ ] Great  [ ] Good  [ ] OK  [ ] Off

**2. Any arm tightness or pain?**
_____________________________________________________________

**3. Sprint work this week (total volume):**
______

**4. Rotational power work this week:**
______

**5. One adjustment for next week:**
_____________________________________________________________

---

## Phase Testing (End of Off-Season / Pre-Season)

**Date:** ______________________

**Phase completed:** [ ] Off-season  [ ] Pre-season

**Bodyweight:** ______

| Test | Result | Notes |
|---|---|---|
| 60-yard dash | | |
| 10m sprint | | |
| Vertical jump | | |
| Broad jump | | |
| Back squat 3RM | | |
| Deadlift 3RM | | |
| Exit velocity | | |
| Throwing velocity | | |
| Pull-up (max reps) | | |

**Change from prior phase:**

| Test | Prior | Current | Change |
|---|---|---|---|
| 60-yard dash | | | |
| Back squat | | | |
| Exit velocity | | | |

---

## Season Review (End of Season)

**Season:** ______

**1. Best on-field moment:**
_____________________________________________________________

**2. Strength maintained through season?**
[ ] Yes  [ ] Mostly  [ ] Lost significant

**3. Any arm issues?**
_____________________________________________________________

**4. Off-season rest planned?**
[ ] Yes -- start date: ____________

**5. Ready for:**
[ ] Off-season rebuild  [ ] Post-season rest  [ ] Sport-specific focus

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- Baseball / Softball Program README
- Baseball / Softball Training (concept)
- Sport-Specific Training (concept)
- Power (concept)
- Speed (concept)
