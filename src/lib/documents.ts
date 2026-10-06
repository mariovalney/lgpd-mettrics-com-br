/**
 * What the site publishes. Each standard document (privacy, terms) applies to every Mettrics
 * product; a product page only carries what is particular to that product. Pages read their
 * title and `updated` from here, so the home cards and the page headers cannot disagree.
 */

import { ACCOUNT_URL } from './site'

export type DocumentKind = 'privacy' | 'terms'

export const STANDARD_DOCUMENTS = {
  privacy: {
    href: '/privacidade',
    title: 'Política de Privacidade',
    summary:
      'Como a Mettrics trata dados pessoais em todos os seus produtos: bases legais, compartilhamento, retenção, segurança e os seus direitos.',
    updated: 'outubro de 2026',
  },
  terms: {
    href: '/termos',
    title: 'Termos de Uso',
    summary:
      'As regras de acesso e uso das plataformas da Mettrics, as responsabilidades de cada parte e a lei aplicável.',
    updated: 'outubro de 2026',
  },
} as const satisfies Record<DocumentKind, unknown>

/** Guide to LGPD art. 18 rights. Not a contract, so it has no per-product variant. */
export const DATA_SUBJECT_RIGHTS = {
  href: '/direitos-do-titular',
  title: 'Direitos do titular',
  summary: 'O que você pode pedir à Mettrics sobre os seus dados pessoais e como fazer o pedido.',
  updated: 'outubro de 2026',
} as const

type ProductDocument = { href: string; updated: string }

export type Product = {
  slug: string
  name: string
  url: string
  documents: Partial<Record<DocumentKind, ProductDocument>>
}

/** A product without an entry for a kind has nothing particular to add to the standard text. */
export const PRODUCTS: ReadonlyArray<Product> = [
  {
    slug: 'site',
    name: 'Site institucional',
    url: 'https://mettrics.com.br',
    documents: {
      privacy: { href: '/privacidade/site', updated: 'outubro de 2026' },
    },
  },
  {
    slug: 'auditt',
    name: 'Auditt',
    url: 'https://auditt.mettrics.com.br',
    documents: {
      privacy: { href: '/privacidade/auditt', updated: 'outubro de 2026' },
      terms: { href: '/termos/auditt', updated: 'outubro de 2026' },
    },
  },
  {
    slug: 'minha-conta',
    name: 'Minha Conta',
    url: ACCOUNT_URL,
    documents: {
      privacy: { href: '/privacidade/minha-conta', updated: 'outubro de 2026' },
      terms: { href: '/termos/minha-conta', updated: 'outubro de 2026' },
    },
  },
]

export function productsWith(kind: DocumentKind) {
  return PRODUCTS.flatMap((product) => {
    const doc = product.documents[kind]
    return doc ? [{ ...product, doc }] : []
  })
}

export function productDocument(slug: string, kind: DocumentKind) {
  const product = PRODUCTS.find((item) => item.slug === slug)
  const doc = product?.documents[kind]
  if (!product || !doc) throw new Error(`No ${kind} document for product "${slug}".`)
  return { product, doc }
}
