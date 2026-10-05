---
videos:
  - title: "The Best Reps, Sets And Rest When Training?"
    url: "https://youtu.be/WxDaaFVXFyU"
  - title: "The surprising reason our muscles get tired (TED-Ed)"
    url: "https://youtu.be/rLsimrBoYXc"
title: "Autoregulation"
category: "Concept"
icon: "🎚️"
order: 3
levels:
  - level: 1
    title: "What Is Autoregulation?"
    body: |
      Autoregulation means: adjust today's training based on how you feel today.

      A program says "squat 225 for 5x5." But some days you slept 5 hours, ate poorly, and are stressed from school. Other days you're fresh, fed, and ready to move a mountain.

      Autoregulation means you don't blindly follow the plan. You adjust. You push when you're ready. You pull back when you're not.

      It's not laziness. It's not cheating. It's using your body's signals to make better decisions than a piece of paper can.
    cfu:
      question: "What does autoregulation mean?"
      options:
        - "Doing whatever you want"
        - "Adjusting today's training based on today's readiness"
        - "Skipping workouts when tired"
        - "Never pushing hard"
      correct_index: 1
    stories:
      - id: "the-two-athletes"
        icon: "🎚️"
        title: "The Two Athletes"

  - level: 2
    title: "RPE and RIR — The Tools of Autoregulation"
    body: |
      Two simple scales do most of the work.

      **RPE — Rate of Perceived Exertion (1–10):**

      | RPE | What It Feels Like |
      |---|---|
      | 10 | Max effort — no reps left |
      | 9 | 1 rep left in the tank |
      | 8 | 2 reps left |
      | 7 | 3 reps left |
      | 6 | Warm-up / technique work |

      **RIR — Reps in Reserve:**
      How many more reps could you have done? RPE 8 = 2 RIR. RPE 9 = 1 RIR. RPE 10 = 0 RIR.

      **Most productive training happens at RPE 7–9.**

      Below RPE 7: not enough stimulus.
      Above RPE 9: too much fatigue, technique breaks down, recovery suffers.

      **How to use it:**
      - Program says 5x5 at RPE 8.
      - Warm up. Feel out the working weight.
      - If it feels like RPE 8, execute.
      - If it feels like RPE 9+, reduce weight.
      - If it feels like RPE 6, add weight.
    cfu:
      question: "RPE 8 means roughly how many reps left in the tank?"
      options:
        - "0 reps"
        - "1 rep"
        - "2 reps"
        - "5 reps"
      correct_index: 2
    stories:
      - id: "the-two-athletes"
        icon: "🎚️"
        title: "The Two Athletes (revisit)"
      - id: "the-pilot"
        icon: "✈️"
        title: "The Pilot"

  - level: 3
    title: "Autoregulation in Practice"
    body: |
      Autoregulation sounds simple. It's not. It requires:

      **1. Calibration.** You need to know what RPE 7 vs. RPE 9 actually feels like. This takes weeks of honest tracking. Beginners often overestimate readiness. Intermediates overshoot. Advanced lifters are usually accurate within half a point.

      **2. Readiness markers.** Before training, note:

      - Sleep hours & quality
      - Nutrition & hydration
      - Life stress
      - Soreness / joint pain
      - Motivation
      - Resting heart rate (if tracked)

      **3. Push vs. Pull-Back framework:**

      **PUSH signs:**
      - Woke up naturally, slept 8+ hours
      - Body feels springy
      - Motivation high
      - Bar speed on warm-ups is fast
      - RPE feels lower than expected

      **PULL-BACK signs:**
      - Slept poorly 2+ nights
      - Body feels heavy, joints achy
      - Low motivation
      - Bar speed slow
      - RPE creeping above target

      **4. Action rules:**
      - If both PUSH and clean warm-ups: push the session.
      - If PULL-BACK signs dominate: reduce load 5–15%, reduce volume, or convert to technique work.
      - If PULL-BACK signs persist 3+ sessions: plan a deload.

      **5. Do NOT negotiate with yourself.**
      Autoregulation is not "I don't feel like it today." It's objective signals leading to specific adjustments.
    cfu:
      question: "Which is a legitimate PULL-BACK signal?"
      options:
        - "I just don't feel like training"
        - "RPE is 2 points above target for 3 sessions in a row"
        - "It's raining"
        - "My training partner is tired"
      correct_index: 1
    stories:
      - id: "the-pilot"
        icon: "✈️"
        title: "The Pilot (revisit)"

  - level: 4
    title: "Evidence & Mechanisms"
    body: |
      **Evidence base:** Zourdos et al. (2016) validated the RPE scale for resistance training. Helms et al. (2016, 2018) demonstrated that autoregulated training produces comparable or superior strength and hypertrophy outcomes to fixed-percentage programming, particularly in trained populations.

      **Why it works:**

      **1. Daily readiness variance.** Strength performance fluctuates day-to-day by up to 10–20% due to sleep, nutrition, stress, hormonal cycles, and accumulated fatigue. Fixed percentages ignore this.

      **2. Fatigue management.** Autoregulation prevents under-training on good days and over-training on bad days. This produces better chronic adaptation.

      **3. Adherence.** Athletes who feel they have agency in their training stick with it longer.

      **4. Self-efficacy.** Learning to read your body builds the skill of self-coaching — essential for long-term independence.

      **Physiological markers used for autoregulation:**

      - **Velocity-based training (VBT):** Bar velocity drops as fatigue accumulates. Target velocities (e.g., 0.5 m/s for strength work) can be tracked with devices.
      - **Heart rate variability (HRV):** Lower HRV suggests sympathetic dominance — often a pull-back signal.
      - **Resting heart rate:** Elevated RHR is a stress marker.
      - **Grip strength or countermovement jump:** Simple daily readiness tests.

      **Complexity trade-off:** The more markers you track, the more precise you can be — and the more likely you are to overcomplicate things. For most athletes, RPE + sleep + motivation catches 90% of the signal.

      **Autoregulation scales with training age:** Beginners often do better with simple linear progression (less to autoregulate against). Intermediates and advanced athletes benefit most from autoregulation because their daily variance is more impactful.
    cfu:
      question: "Why does autoregulation outperform fixed-percentage programming for intermediate and advanced lifters?"
      options:
        - "It's easier"
        - "It accounts for day-to-day readiness variance that fixed percentages ignore"
        - "It allows more rest"
        - "It's more fun"
      correct_index: 1
    stories:
      - id: "the-pilot"
        icon: "✈️"
        title: "The Pilot (revisit)"

journal:
  training_log_prompt: "RPE target vs. actual — did they match? Any PUSH or PULL-BACK signs?"
  reflection_prompt: "How accurate is your RPE calibration this week?"
  goal_prompt: "What are your top 3 readiness markers going forward?"

sources:
  - "Zourdos et al. (2016) — RPE validity in resistance training"
  - "Helms et al. (2016, 2018) — Autoregulated training outcomes"
  - "NSCA Essentials of Strength Training and Conditioning (4th ed.)"
related_concepts:
  - measurable-repeatable
  - scaling
  - deloading
  - progressive-overload
---

# Autoregulation

Adjust today's training based on today's readiness.
