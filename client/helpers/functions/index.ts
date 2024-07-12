export function truncateText(text: string, wordLimit: number) {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '..';
  }
  return text;
}

export function formatTitle(title: string) {
  return title.toLowerCase().replace(/\s+/g, '-');
}
