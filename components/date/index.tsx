import { parseISO, format } from 'date-fns';
import { tr } from 'date-fns/locale'; // Türkçe locale'yi içe aktarın

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time>{format(date, 'dd.MM.yyyy', { locale: tr })}</time>;
}
