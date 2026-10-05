import Link from 'next/link'
import { ProseH2, ProseList } from '@/components/ui/prose'
import { type DocumentKind, productsWith, STANDARD_DOCUMENTS } from '@/lib/documents'

/** Closing section of a standard document: where each product's particulars live. */
export function ProductDocumentsSection({ kind }: { kind: DocumentKind }) {
  const products = productsWith(kind)
  return (
    <>
      <ProseH2 id="produtos">Detalhes por produto</ProseH2>
      <ProseList>
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={product.doc.href}>{product.name}</Link>
          </li>
        ))}
      </ProseList>
    </>
  )
}

/** Opening line of a product page, pointing back at the standard document it complements. */
export function StandardDocumentNotice({ kind }: { kind: DocumentKind }) {
  const standard = STANDARD_DOCUMENTS[kind]
  return (
    <p className="mb-10 rounded-xl border border-border-subtle bg-bg-elevated px-5 py-4 text-sm">
      Esta página complementa a <Link href={standard.href}>{standard.title}</Link> da Mettrics. O
      que não estiver descrito aqui segue o texto padrão.
    </p>
  )
}
