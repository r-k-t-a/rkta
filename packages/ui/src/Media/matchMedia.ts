export const matchMedia = (mediaQuery: string): boolean => window.matchMedia(mediaQuery).matches;
export default matchMedia;
