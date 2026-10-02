// Renders a schema.org JSON-LD <script>. `<` is escaped so that text inside the
// data (FAQ answers, titles) can never close the script tag early.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
