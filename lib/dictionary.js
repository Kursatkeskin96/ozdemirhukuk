import 'server-only'
import { i18n } from '@/i18n.config'

const dictionaries = {
  tr: () => import('@/dictionaries/tr.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()