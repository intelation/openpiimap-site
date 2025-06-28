import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenPIIMap | Global Map of PII & PHI Definitions</title>
        <meta
          name="description"
          content="OpenPIIMap is the open-source map of Personally Identifiable Information (PII) and Protected Health Information (PHI) definitions across jurisdictions and frameworks like GDPR, HIPAA, and more."
        />
        <meta name="keywords" content="PII, PHI, GDPR, HIPAA, data privacy, compliance, open source, YAML, regulation, OpenPIIMap" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://openpiimap.org" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="OpenPIIMap | Global Privacy Reference" />
        <meta property="og:description" content="An open-source project to track and define PII/PHI globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://openpiimap.org" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OpenPIIMap | Global Privacy Reference" />
        <meta name="twitter:description" content="An open-source YAML database of sensitive data definitions around the world." />
      </Head>

      <main className="min-h-screen bg-white text-gray-800 px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          🌍 OpenPIIMap
        </h1>
        <p className="text-xl mb-8">
          OpenPIIMap is a community-driven, open-source project that maps and standardizes definitions of PII and PHI across global privacy regulations.
        </p>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">What You’ll Find</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>YAML files for GDPR, HIPAA, LGPD, and more</li>
            <li>Legal citations and categories for PII/PHI</li>
            <li>Structured definitions by country and sector</li>
            <li>Machine-readable, open-source format</li>
          </ul>

          <div className="mt-10">
            <Link
              href="https://github.com/intelation/openpiimap"
              className="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 View on GitHub
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
