import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const countries = [
  { name: "Germany", slug: "germany", path: "data/gdpr/germany.yaml" },
  { name: "France", slug: "france", path: "data/gdpr/france.yaml" },
  { name: "Ireland", slug: "ireland", path: "data/gdpr/ireland.yaml" },
  { name: "Netherlands", slug: "netherlands", path: "data/gdpr/netherlands.yaml" },
  { name: "Spain", slug: "spain", path: "data/gdpr/spain.yaml" },
  { name: "Italy", slug: "italy", path: "data/gdpr/italy.yaml" },
  { name: "Belgium", slug: "belgium", path: "data/gdpr/belgium.yaml" },
  { name: "Sweden", slug: "sweden", path: "data/gdpr/sweden.yaml" },
  { name: "Austria", slug: "austria", path: "data/gdpr/austria.yaml" },
  { name: "Denmark", slug: "denmark", path: "data/gdpr/denmark.yaml" },
  { name: "Finland", slug: "finland", path: "data/gdpr/finland.yaml" },
  { name: "Poland", slug: "poland", path: "data/gdpr/poland.yaml" },
  { name: "Greece", slug: "greece", path: "data/gdpr/greece.yaml" },
  { name: "Norway", slug: "norway", path: "data/gdpr/norway.yaml" },
  { name: "Iceland", slug: "iceland", path: "data/gdpr/iceland.yaml" },
  { name: "Liechtenstein", slug: "liechtenstein", path: "data/gdpr/liechtenstein.yaml" }
];

export default function Coverage() {
  return (
    <>
      <Head>
        <title>OpenPIIMap Coverage | Country-Level PII & PHI Definitions</title>
        <meta name="description" content="Explore global coverage of PII and PHI definitions by country. OpenPIIMap offers YAML files for GDPR and global privacy laws." />
        <link rel="canonical" href="https://www.openpiimap.org/coverage" />
      </Head>

      <Header />

      <main className="container py-5">
        <h1 className="poppins-bold mb-3">Global Coverage: PII & PHI Definitions by Country</h1>

        <p className="lead mb-4">
          OpenPIIMap provides machine-readable YAML definitions of Personally Identifiable Information (PII) and Protected Health Information (PHI)
          across global privacy laws. Explore our current GDPR country coverage below.
        </p>

        <section className="mb-5">
          <h2 className="h4 poppins-semibold">GDPR Coverage (EU + EEA)</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {countries.map((country) => (
              <div key={country.slug} className="col">
                <div className="card h-100 shadow-sm border">
                  <div className="card-body">
                    <h5 className="card-title">{country.name}</h5>
                    <p className="card-text small mb-3">Framework: GDPR</p>
                    <div className="d-flex gap-2">
                      <Link href={`https://github.com/intelation/openpiimap/blob/main/${country.path}`} target="_blank" className="btn btn-sm btn-outline-primary">
                        View YAML
                      </Link>
                      <Link href={`https://raw.githubusercontent.com/intelation/openpiimap/main/${country.path}`} target="_blank" className="btn btn-sm btn-outline-secondary">
                        Download
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h4 poppins-semibold">Coming Soon</h2>
          <ul>
            <li>🇺🇸 United States (HIPAA, CPRA)</li>
            <li>🇮🇳 India (DPDPB 2023)</li>
            <li>🇧🇷 Brazil (LGPD)</li>
            <li>🇨🇦 Canada (PIPEDA)</li>
            <li>🌐 Sector templates for AI/ML, health, finance</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="h4 poppins-semibold">Want to Contribute?</h2>
          <p>
            Help expand OpenPIIMap by submitting YAML files for your country or sector.
          </p>
          <ul>
            <li><Link href="https://github.com/intelation/openpiimap" target="_blank">Submit a YAML on GitHub</Link></li>
          </ul>
        </section>

        <div className="text-center">
          <Link className="btn btn-primary" href="https://github.com/intelation/openpiimap" target="_blank">
          View Full Repository
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
