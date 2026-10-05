---
title: "Training Log — Basketball"
category: "Journal"
icon: "🏀"
order: 28
type: "program-log"
program: "basketball"
cycle_length_weeks: 16
sessions_per_week: 4
auto_generate_threshold: 0.8
fields:
  - name: date
    type: date
  - name: position
    type: select
    options: ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"]
  - name: phase
    type: select
    options: ["Off-season", "Pre-season", "In-season", "Post-season"]
  - name: session_type
    type: select
    options: ["Lower + Power", "Upper + Skill", "Lower + Sprint", "Upper + Conditioning", "Maintenance", "Game/Practice", "Rest"]
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
  - name: jump_type
    type: select
    options: ["Vertical", "Broad", "Box", "Depth", "Single-leg", "None"]
  - name: jump_result
    type: number
  - name: jump_contacts
    type: number
  - name: sprint_result
    type: number
  - name: kod_result
    type: number
  - name: landing_quality
    type: number
    min: 1
    max: 10
  - name: knee_status
    type: select
    options: ["Fresh", "Normal", "Tired", "Tight", "Pain"]
  - name: freshness
    type: number
    min: 1
    max: 10
  - name: notes
    type: text
---

# Training Log — Basketball

Living journal for basketball athletes. Tracks phase, main lifts, jump results, sprint times, change of direction, and knee/ankle health.

## How to Use This Log

1. Log every session -- lifts, jumps, sprints, COD work.
2. Track jump results and total ground contacts per session.
3. Track knee and ankle status. Anything other than Fresh or Normal is a red flag.
4. Rate landing quality (1-10) every jump session.
5. Weekly reflection every Sunday. Phase testing at end of off-season and pre-season.

## Knee / Ankle Status Scale

| Status | Description |
|---|---|
| Fresh | No tightness, no fatigue |
| Normal | Slight fatigue, expected |
| Tired | Noticeable fatigue, reduce jump volume |
| Tight | Tightness or minor discomfort -- no max jumps today |
| Pain | Stop. Rest. See a professional if it persists. |

## Landing Quality Scale

| Rating | Description |
|---|---|
| 10 | Perfect -- soft landing, knees over toes, hip hinge, quiet |
| 8-9 | Very good -- minor foot noise, knees tracking well |
| 6-7 | Acceptable -- some knee valgus, loud landing |
| 4-5 | Poor -- visible valgus, hard landing, needs correction |
| 1-3 | Bad -- stop and reset. Landing mechanics must be trained, not ignored. |

## Progression Reminders

- **Off-season:** add 5-10 lbs per week to main lifts, increase jump volume slowly.
- **Pre-season:** maintain lifts, sharpen jump and cut.
- **In-season:** 2 lifts per week, maintenance jumps only.
- **Deload every 6-8 weeks (off-season) or 4-6 weeks (in-season).**
- **Landing mechanics every jump session.**
- **ACL prevention work every session -- no exceptions.**

## Daily Entry Template

**Date:** ______________________

**Position:** ______________________

**Phase:** [ ] Off-season  [ ] Pre-season  [ ] In-season  [ ] Post-season

**Session:** [ ] Lower + Power  [ ] Upper + Skill  [ ] Lower + Sprint  [ ] Upper + Conditioning  [ ] Maintenance  [ ] Game/Practice  [ ] Rest

**Freshness (1-10):** ______

**Knee status (start):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain

### Main Lift

**Lift:** ______________________
**Weight:** ______  **Sets x Reps:** ______  **RPE:** ______

### Jump Work

**Type:** ______________________  **Result:** ______  **Contacts:** ______

**Landing quality (1-10):** ______

### Sprint / COD Work

**Distance/Drill:** ______________________  **Time:** ______

### ACL Prevention

- [ ] Single-leg strength work
- [ ] Nordic curls
- [ ] Lateral band walks
- [ ] Balance work
- [ ] Landing drills

**Knee status (end):** [ ] Fresh  [ ] Normal  [ ] Tired  [ ] Tight  [ ] Pain

### Notes

_____________________________________________________________
_____________________________________________________________

---

## Weekly Reflection (Every Sunday)

**Week of:** ______________________

**Phase:** ______________________

**Sessions completed:** ______

**1. Best jump this week:** ______

**2. Total jump contacts this week:** ______

**3. Any knee or ankle issues?**
_____________________________________________________________

**4. Landing quality trend:**
[ ] Improving  [ ] Holding  [ ] Needs work

**5. One adjustment for next week:**
_____________________________________________________________

---

## Phase Testing (End of Off-Season / Pre-Season)

**Date:** ______________________

**Phase completed:** [ ] Off-season  [ ] Pre-season

**Bodyweight:** ______

| Test | Result | Notes |
|---|---|---|
| Vertical jump | | |
| Standing broad jump | | |
| 10m sprint | | |
| 30m sprint | | |
| 5-10-5 shuttle | | |
| Back squat 3RM | | |
| Trap bar deadlift 3RM | | |
| Pull-up (max reps) | | |

**Change from prior phase:**

| Test | Prior | Current | Change |
|---|---|---|---|
| Vertical jump | | | |
| 10m sprint | | | |
| Back squat | | | |

---

## Season Review (End of Season)

**Season:** ______

**1. Best on-court moment:**
_____________________________________________________________

**2. Strength and jump maintained through season?**
[ ] Yes  [ ] Mostly  [ ] Lost significant

**3. Any injuries?**
_____________________________________________________________

**4. Off-season plan:**
[ ] Rebuild strength + jump  [ ] Rest  [ ] Sport-specific focus

---

## Auto-Generation Rule

When 80% of blank pages are filled, new blank pages auto-generate.

## Related Resources

- Basketball Program README
- Basketball Training (concept)
- Sport-Specific Training (concept)
- Power (concept)
- Speed (concept)
