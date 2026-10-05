---
title: "Mastery Tracker"
category: "Journal"
icon: "🗺️"
order: 9
type: "template"
prompts:
  - "Where are you on each concept?"
  - "Which levels are still locked?"
  - "What's next?"
---

# Mastery Tracker

This board shows your CFU progress on every concept, lift, bodyweight exercise, and mobility flow. The same data that unlocks higher levels on detail pages lives here — surfaced as a map.

## The Map Is Not the Territory

This board shows where you've been. It doesn't show where you're going. The territory is the gym, the bar, the reps, the sleep, the food, the consistency. Use the map. Then go live in the territory.

## Your Mastery Board

<div id="mastery-board" class="my-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
  <div class="text-sm text-slate-500 italic">Loading mastery data…</div>
</div>

<div id="mastery-empty" class="hidden my-8 p-6 bg-slate-50 border border-slate-200 rounded-lg text-center">
  <div class="text-3xl mb-2">🗺️</div>
  <div class="text-sm text-slate-600">No concepts passed yet. Answer a Level 1 CFU on any concept page to start your map.</div>
</div>

## How to Read This

- **Level 1** = you passed the 8th-grade CFU
- **Level 2** = high school senior
- **Level 3** = college
- **Level 4** = PhD / full mastery

Only the **next unlocked level** is visible on concept pages. This board shows the whole ladder.

## Reset

If you want to reset your progress and start over:

Open DevTools (Cmd+Option+I) → Console → paste:

\`\`\`
localStorage.removeItem('bible:mastery')
localStorage.removeItem('bible:stories')
location.reload()
\`\`\`

<script>
(function () {
  const PREFIX = 'bible:';

  function getMastery() {
    try {
      const raw = localStorage.getItem(PREFIX + 'mastery');
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  }

  function render() {
    const board = document.getElementById('mastery-board');
    const empty = document.getElementById('mastery-empty');
    if (!board) return;

    const mastery = getMastery();
    const slugs = Object.keys(mastery).sort();

    if (slugs.length === 0) {
      board.classList.add('hidden');
      if (empty) empty.classList.remove('hidden');
      return;
    }

    board.classList.remove('hidden');
    if (empty) empty.classList.add('hidden');

    const rows = slugs.map((slug) => {
      const level = mastery[slug] || 0;
      const cells = [1, 2, 3, 4].map((l) => {
        const passed = l <= level;
        return \`<span class="inline-block w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center \${passed ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-400'}">\${passed ? '✓' : '·'}</span>\`;
      }).join('');
      return \`
        <div class="flex items-center justify-between py-2 border-b border-slate-200 last:border-b-0">
          <span class="text-sm font-medium text-slate-800">\${slug}</span>
          <span class="flex gap-1">\${cells}</span>
        </div>
      \`;
    }).join('');

    board.innerHTML = \`
      <div class="text-sm font-semibold text-slate-700 mb-3">Concepts touched (\${slugs.length})</div>
      \${rows}
    \`;
  }

  render();
  window.addEventListener('storage', (e) => {
    if (e.key === PREFIX + 'mastery') render();
  });
})();
</script>
