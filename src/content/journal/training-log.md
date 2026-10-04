---
title: "Training Log"
category: "Journal"
icon: "📓"
order: 1
type: "template"
fields:
  - name: date
    type: date
    required: true
  - name: lift
    type: select
    options: ["Back Squat", "Front Squat", "Deadlift", "Press", "Push Press", "Push Jerk", "Overhead Squat", "Bench Press", "Power Clean", "Snatch", "Clean & Jerk", "Push-up", "Pull-up", "Dip", "Other"]
  - name: weight
    type: number
    unit: "lbs or kg"
  - name: sets
    type: number
  - name: reps
    type: number
  - name: target_rpe
    type: number
    min: 1
    max: 10
  - name: actual_rpe
    type: number
    min: 1
    max: 10
  - name: rir
    type: number
    min: 0
    max: 5
  - name: notes
    type: text
---

# Training Log

Log every session. Weight, sets, reps, RPE. Notes on what happened — how it felt, what you noticed, what changed.

## Why This Matters

The athlete who logs their training sees patterns. The athlete who doesn't, guesses.

- You'll see when RPE creeps above target.
- You'll see when progress stalls.
- You'll see which days you felt strong and which you didn't.
- You'll see what actually works.

## How to Log

**Percentage-based:** When the program says "squat 80% of 1RM for 3×5," log the load, sets, reps, and actual RPE.

**RPE/RIR-based:** When the program says "work up to RPE 8," log the load you used, the sets, reps, and whether RPE matched.

**Both:** Track both when possible. Percentages give structure. RPE tells the truth about how the day actually went.

## The Columns

| Field | What It Means |
|---|---|
| Date | When you trained |
| Lift | The exercise |
| Weight | What was on the bar |
| Sets × Reps | 3×5, 5×3, etc. |
| Target RPE | What the program prescribed |
| Actual RPE | What it felt like |
| RIR | Reps in reserve at end of last set |
| Notes | Anything worth remembering |

## The Notes Field Is The Most Important

Weight and reps tell you what happened. Notes tell you **why**.

Write down:
- Sleep quality the night before
- Nutrition / hydration
- Stress levels
- Joint pain or discomfort
- What felt strong
- What felt weak
- Any technique cues that worked

## Adaptive Frequency

**Newer athletes (0–6 months):** Log every single session. Notes should be 2–3 sentences minimum.

**Intermediate (6–24 months):** Log every session. Notes can be shorter — focus on deviations from normal.

**Advanced (24+ months):** Log every session. Notes can be brief — only flag what changed.

## Journal Integration

The log feeds the **Weekly Reflection** and **Monthly Reflection** templates. Entries auto-populate reflection prompts.

## Story Reference

`[📓]` The 1% Rule — small improvements compound over time.
