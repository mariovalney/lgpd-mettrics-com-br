/**
 * The documents the site publishes. The home page lists them and each page reads its own
 * `updated` from here, so the date shown on the card and on the page cannot disagree.
 */
export const DOCUMENTS = {
  privacyPolicy: {
    href: '/politica-de-privacidade',
    title: 'Política de Privacidade',
    summary:
      'Quais dados coletamos no site e na plataforma, para quê, com qual base legal, com quem compartilhamos e por quanto tempo guardamos.',
    updated: 'maio de 2026',
  },
  dataSubjectRights: {
    href: '/direitos-do-titular',
    title: 'Direitos do titular',
    summary:
      'O que você pode pedir à Mettrics sobre os seus dados pessoais, como fazer o pedido e a quem recorrer se a resposta não resolver.',
    updated: 'outubro de 2026',
  },
} as const
