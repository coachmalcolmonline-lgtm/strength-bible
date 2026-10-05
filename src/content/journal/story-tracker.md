---
title: "Story Tracker"
category: "Journal"
icon: "📖"
order: 8
type: "template"
revisit_interval_days: 42
prompts:
  - "Which stories have you opened?"
  - "Which ones landed?"
  - "Which ones deserve a second read?"
---

# Story Tracker

Every story you open gets tracked here. Six weeks later, the tracker nudges you to revisit it. Same story, new meaning — because you've changed.

## Why Revisit Stories?

A story is never just a story. The first time you hear it, you hear the surface. The second time, you hear the lesson. The third time, you hear yourself.

## Your Story Board

<div id="story-board" class="my-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
  <div class="text-sm text-slate-500 italic">Loading story history…</div>
</div>

<div id="story-empty" class="hidden my-8 p-6 bg-slate-50 border border-slate-200 rounded-lg text-center">
  <div class="text-3xl mb-2">📖</div>
  <div class="text-sm text-slate-600">No stories opened yet. When you tap a 🔥 story icon on any concept page, it'll show up here.</div>
</div>

## How It Works

- Every time you open a story on a concept page, we log the date.
- After 42 days (6 weeks), the story gets a "revisit" flag.
- When you revisit, you can add a note below: what did it mean this time?

## Revisit Notes

*(After you re-read a story, jot down what shifted.)*

**Story:** __________________  **Date:** __________

**What it meant the first time:**

**What it means now:**

---

**Story:** __________________  **Date:** __________

**What it meant the first time:**

**What it means now:**

<script>
(function () {
  const PREFIX = 'bible:';
  const SIX_WEEKS_MS = 42 * 24 * 60 * 60 * 1000;

  function getStories() {
    try {
      const raw = localStorage.getItem(PREFIX + 'stories');
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  }

  function humanAgo(ms) {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    if (days === 0) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 7) return days + ' days ago';
    if (days < 14) return '1 week ago';
    if (days < 42) return Math.floor(days / 7) + ' weeks ago';
    return Math.floor(days / 7) + ' weeks ago';
  }

  function render() {
    const board = document.getElementById('story-board');
    const empty = document.getElementById('story-empty');
    if (!board) return;

    const stories = getStories().sort((a, b) => new Date(b.date) - new Date(a.date));

    if (stories.length === 0) {
      board.classList.add('hidden');
      if (empty) empty.classList.remove('hidden');
      return;
    }

    board.classList.remove('hidden');
    if (empty) empty.classList.add('hidden');

    const rows = stories.map((s) => {
      const age = Date.now() - new Date(s.date).getTime();
      const due = age > SIX_WEEKS_MS;
      const badge = due
        ? '<span class="text-xs px-2 py-0.5 bg-amber-200 text-amber-900 rounded font-medium">revisit</span>'
        : '';
      return \`
        <div class="flex items-center justify-between py-2 border-b border-slate-200 last:border-b-0">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-slate-800">\${s.id}</span>
            \${badge}
          </div>
          <span class="text-xs text-slate-500">\${humanAgo(age)}</span>
        </div>
      \`;
    }).join('');

    board.innerHTML = \`
      <div class="text-sm font-semibold text-slate-700 mb-3">Opened stories (\${stories.length})</div>
      \${rows}
    \`;
  }

  render();
  window.addEventListener('storage', (e) => {
    if (e.key === PREFIX + 'stories') render();
  });
})();
</script>
