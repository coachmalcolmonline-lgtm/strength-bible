import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Category mapping for coloring nodes in the network graph
function categorizeConcept(slug: string): string {
  const foundational = [
    'progressive-overload',
    'autoregulation',
    'deloading',
    'technique-priority',
    'measurable-repeatable',
    'scaling',
    'competition',
  ];
  const goals = ['hypertrophy', 'speed', 'weight-management', 'power'];
  const conditioning = [
    'energy-systems',
    'conditioning-methods',
    'conditioning-for-strength-athletes',
    'recovery-between-sessions',
  ];
  const sports = [
    'sport-specific-training',
    'baseball-softball',
    'basketball',
    'field-hockey',
    'football',
    'flag-football',
    'soccer',
  ];

  if (foundational.includes(slug)) return 'foundational';
  if (goals.includes(slug)) return 'goal';
  if (conditioning.includes(slug)) return 'conditioning';
  if (sports.includes(slug)) return 'sport';
  return 'foundational'; // default fallback
}

export const GET: APIRoute = async () => {
  const concepts = await getCollection('concepts');

  const nodes = concepts.map((concept) => ({
    id: concept.slug,
    title: concept.data.title,
    icon: concept.data.icon,
    category: categorizeConcept(concept.slug),
    order: concept.data.order ?? 99,
  }));

  // Build edges from related_concepts
  const edges: Array<{ source: string; target: string }> = [];
  const seen = new Set<string>();

  concepts.forEach((concept) => {
    const related = concept.data.related_concepts ?? [];
    related.forEach((targetSlug) => {
      // Only add edge if target exists as a concept
      if (!nodes.find((n) => n.id === targetSlug)) return;

      // Deduplicate: sort the pair so A->B and B->A become one edge
      const key = [concept.slug, targetSlug].sort().join('::');
      if (seen.has(key)) return;
      seen.add(key);

      edges.push({
        source: concept.slug,
        target: targetSlug,
      });
    });
  });

  const payload = {
    nodes,
    edges,
    generated: new Date().toISOString(),
    stats: {
      conceptCount: nodes.length,
      edgeCount: edges.length,
    },
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
