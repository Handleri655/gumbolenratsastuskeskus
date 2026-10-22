import type { Lang } from '../lib/routes';
import { en } from './en';
import { fi, type Dict } from './fi';
import { sv } from './sv';

export type { Dict };

export const dictionaries: Record<Lang, Dict> = { fi, sv, en };

export function getDict(lang: Lang) {
  return dictionaries[lang];
}
