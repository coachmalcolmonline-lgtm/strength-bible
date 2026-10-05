/**
 * localStorage utilities for The Strength B.I.B.L.E.
 * All athlete-specific data is stored in the browser, keyed by a consistent
 * prefix. No server, no accounts, no data leaves the device.
 */

const PREFIX = 'bible:';

export function getItem<T>(key: string, fallback: T): T {
  if (typeof localStorage === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function setItem<T>(key: string, value: T): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Quota exceeded or private browsing — silently ignore
  }
}

export function removeItem(key: string): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {
    // Ignore
  }
}

export function clearAll(): void {
  if (typeof localStorage === 'undefined') return;
  const keys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(PREFIX)) keys.push(k);
  }
  keys.forEach(k => localStorage.removeItem(k));
}

// --- Mastery ---

export type MasteryMap = Record<string, number>;

export function getMastery(): MasteryMap {
  return getItem<MasteryMap>('mastery', {});
}

export function setMasteryLevel(slug: string, level: number): void {
  const mastery = getMastery();
  mastery[slug] = Math.max(mastery[slug] ?? 0, level);
  setItem('mastery', mastery);
}

export function getMasteryLevel(slug: string): number {
  return getMastery()[slug] ?? 0;
}

// --- Stories opened ---

export type StoryRecord = { id: string; date: string };

export function getStoriesOpened(): StoryRecord[] {
  return getItem<StoryRecord[]>('stories', []);
}

export function markStoryOpened(id: string): void {
  const stories = getStoriesOpened();
  if (!stories.find(s => s.id === id)) {
    stories.push({ id, date: new Date().toISOString() });
    setItem('stories', stories);
  }
}

export function hasStoryBeenOpened(id: string): boolean {
  return getStoriesOpened().some(s => s.id === id);
}

// --- Journal entries ---

export type JournalEntry = {
  id: string;
  templateSlug: string;
  date: string;
  data: Record<string, any>;
};

export function getJournalEntries(templateSlug?: string): JournalEntry[] {
  const all = getItem<JournalEntry[]>('journal', []);
  return templateSlug ? all.filter(e => e.templateSlug === templateSlug) : all;
}

export function addJournalEntry(entry: JournalEntry): void {
  const all = getJournalEntries();
  all.push(entry);
  setItem('journal', all);
}

// --- Export / Import ---

export function exportAll(): string {
  return JSON.stringify({
    version: 1,
    exportedAt: new Date().toISOString(),
    mastery: getMastery(),
    stories: getStoriesOpened(),
    journal: getJournalEntries(),
  }, null, 2);
}

export function importAll(json: string): boolean {
  try {
    const data = JSON.parse(json);
    if (data.mastery) setItem('mastery', data.mastery);
    if (data.stories) setItem('stories', data.stories);
    if (data.journal) setItem('journal', data.journal);
    return true;
  } catch {
    return false;
  }
}
