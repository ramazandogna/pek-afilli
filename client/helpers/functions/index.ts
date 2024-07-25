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

export function unFormatTitle(text: string) {
  const replacedText = text.replace(/-/g, ' ');
  const capitalizedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);
  return capitalizedText;
}
export const formatDate = (date: any) => {
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${day}.${formattedMonth}.${year}`;
};
