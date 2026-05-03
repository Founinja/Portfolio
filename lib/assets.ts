/**
 * Returns the correct path for a public asset,
 * accounting for the GitHub Pages basePath in production.
 */
export function asset(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
  return `${basePath}${path}`;
}
