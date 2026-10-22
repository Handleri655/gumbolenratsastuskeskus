export const languages = ['fi', 'sv', 'en'] as const;
export type Lang = (typeof languages)[number];

export const pages = [
  'home',
  'talli',
  'palvelut',
  'vuokraus',
  'valmennus',
  'jasenille',
  'historia',
  'henkilokunta',
  'ajankohtaista',
  'yhteystiedot',
  'tallipaikka',
  'tietosuoja',
  'kiitos',
] as const;

export type PageId = (typeof pages)[number];

export const navPages = [
  'talli',
  'palvelut',
  'vuokraus',
  'valmennus',
  'jasenille',
  'historia',
  'ajankohtaista',
  'yhteystiedot',
] as const satisfies readonly PageId[];

const localeTag: Record<Lang, string> = {
  fi: 'fi-FI',
  sv: 'sv-FI',
  en: 'en-GB',
};

export function localeOf(lang: Lang) {
  return localeTag[lang];
}

export function pathFor(lang: Lang, page: PageId | 'ajankohtaista', newsSlug?: string) {
  const parts: string[] = [];
  if (lang !== 'fi') parts.push(lang);
  if (page !== 'home') parts.push(page);
  if (newsSlug) parts.push(newsSlug);
  return parts.length ? `/${parts.join('/')}` : '/';
}

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(localeOf(lang), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatEuro(amount: number, lang: Lang) {
  return new Intl.NumberFormat(localeOf(lang), {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}
