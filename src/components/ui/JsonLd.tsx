type JsonLdProps = {
  data: Record<string, unknown>;
};

/** JSON-LD を安全に出力する（XSS対策として < をエスケープ） */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
