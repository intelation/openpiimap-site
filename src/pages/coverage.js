import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const simplifyFrameworkName = (framework) => {
  if (!framework) return '';
  return framework.replace(/\s*\(.*\)/, '').trim();
};


const gdprCountries = [
  { name: "Austria", slug: "austria", path: "data/gdpr/austria.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Belgium", slug: "belgium", path: "data/gdpr/belgium.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Denmark", slug: "denmark", path: "data/gdpr/denmark.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Finland", slug: "finland", path: "data/gdpr/finland.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "France", slug: "france", path: "data/gdpr/france.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Germany", slug: "germany", path: "data/gdpr/germany.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Greece", slug: "greece", path: "data/gdpr/greece.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Iceland", slug: "iceland", path: "data/gdpr/iceland.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Ireland", slug: "ireland", path: "data/gdpr/ireland.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Italy", slug: "italy", path: "data/gdpr/italy.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Liechtenstein", slug: "liechtenstein", path: "data/gdpr/liechtenstein.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Netherlands", slug: "netherlands", path: "data/gdpr/netherlands.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Norway", slug: "norway", path: "data/gdpr/norway.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Poland", slug: "poland", path: "data/gdpr/poland.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Spain", slug: "spain", path: "data/gdpr/spain.yaml", framework: simplifyFrameworkName("GDPR") },
  { name: "Sweden", slug: "sweden", path: "data/gdpr/sweden.yaml", framework: simplifyFrameworkName("GDPR") },
].sort((a, b) => a.name.localeCompare(b.name));


const otherGlobalCountries = [
  { name: "Argentina", slug: "argentina", path: "data/pdpa-argentina/argentina.yaml", framework: simplifyFrameworkName("PDPA Argentina") },
  { name: "Australia", slug: "australia", path: "data/privacyact/australia.yaml", framework: simplifyFrameworkName("Privacy Act (Australia)") },
  { name: "Bahamas", slug: "bahamas", path: "data/privacyact/bahamas.yaml", framework: simplifyFrameworkName("Privacy Act (Bahamas)") },
  { name: "Brazil", slug: "brazil", path: "data/lgpd/brazil.yaml", framework: simplifyFrameworkName("LGPD") },
  { name: "California", slug: "california", path: "data/cpra/california.yaml", framework: simplifyFrameworkName("CPRA (US)") },
  { name: "Canada", slug: "canada", path: "data/pipeda/canada.yaml", framework: simplifyFrameworkName("PIPEDA") },
  { name: "China", slug: "china", path: "data/pipl/china.yaml", framework: simplifyFrameworkName("PIPL (China)") },
  { name: "India", slug: "india", path: "data/dpdpb/india.yaml", framework: simplifyFrameworkName("DPDPB 2023") },
  { name: "Indonesia", slug: "indonesia", path: "data/pdp/indonesia.yaml", framework: simplifyFrameworkName("PDP (Indonesia)") },
  { name: "Japan", slug: "japan", path: "data/appi/japan.yaml", framework: simplifyFrameworkName("APPI (Japan)") },
  { name: "Malaysia", slug: "malaysia", path: "data/pdpa/malaysia.yaml", framework: simplifyFrameworkName("PDPA (Malaysia)") },
  { name: "Mexico", slug: "mexico", path: "data/lfpdppp/mexico.yaml", framework: simplifyFrameworkName("LFPDPPP (Mexico)") },
  { name: "New Zealand", slug: "new-zealand", path: "data/privacyact/new-zealand.yaml", framework: simplifyFrameworkName("Privacy Act (New Zealand)") },
  { name: "Nigeria", slug: "nigeria", path: "data/ndpr/nigeria.yaml", framework: simplifyFrameworkName("NDPR (Nigeria)") },
  { name: "Philippines", slug: "philippines", path: "data/dpa/philippines.yaml", framework: simplifyFrameworkName("DPA (Philippines)") },
  { name: "Singapore", slug: "singapore", path: "data/pdpa/singapore.yaml", framework: simplifyFrameworkName("PDPA (Singapore)") },
  { name: "South Africa", slug: "south-africa", path: "data/popia/south-africa.yaml", framework: simplifyFrameworkName("POPIA (South Africa)") },
  { name: "South Korea", slug: "south-korea", path: "data/pipa/south-korea.yaml", framework: simplifyFrameworkName("PIPA (South Korea)") },
  { name: "Switzerland", slug: "switzerland", path: "data/fadp/switzerland.yaml", framework: simplifyFrameworkName("FADP (Switzerland)") },
  { name: "Thailand", slug: "thailand", path: "data/pdpa-thailand/thailand.yaml", framework: simplifyFrameworkName("PDPA (Thailand)") },
  { name: "United Arab Emirates", slug: "united-arab-emirates", path: "data/uae-dpl/united-arab-emirates.yaml", framework: simplifyFrameworkName("UAE DPL") },
  { name: "United Kingdom", slug: "united-kingdom", path: "data/uk-gdpr/united-kingdom.yaml", framework: simplifyFrameworkName("UK GDPR") },
  { name: "USA", slug: "usa", path: "data/hippa/usa.yaml", framework: simplifyFrameworkName("HIPAA, CPRA") },
].sort((a, b) => a.name.localeCompare(b.name)); 


const comingSoonItems = [
  { name: "Sector templates for AI/ML, health, finance", flag: "🌐", description: "Explore templates for various sectors." }
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
          across global privacy laws. Explore our current GDPR country coverage and other global privacy frameworks below.
        </p>

        {/* GDPR Coverage Section */}
        <section className="mb-5">
          <h2 className="h4 poppins-semibold">GDPR Coverage (EU + EEA)</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {gdprCountries.map((country) => (
              <div key={country.slug} className="col">
                <div className="card h-100 shadow-sm border rounded-lg">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title poppins-medium">{country.name}</h5>
                    <p className="card-text small mb-3 text-muted">Framework: {country.framework}</p>
                    <div className="d-flex gap-2 mt-auto">
                      <Link href={`https://github.com/intelation/openpiimap/blob/main/${country.path}`} target="_blank" className="btn btn-sm btn-outline-primary rounded-pill">
                        View YAML
                      </Link>
                      <Link href={`https://raw.githubusercontent.com/intelation/openpiimap/main/${country.path}`} target="_blank" className="btn btn-sm btn-outline-secondary rounded-pill">
                        Download
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Global Frameworks Section */}
        <section className="mb-5">
          <h2 className="h4 poppins-semibold">Other Global Frameworks</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {otherGlobalCountries.map((country) => (
              <div key={country.slug} className="col">
                <div className="card h-100 shadow-sm border rounded-lg">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title poppins-medium">{country.name}</h5>
                    <p className="card-text small mb-3 text-muted">Framework: {country.framework}</p>
                    <div className="d-flex gap-2 mt-auto">
                      <Link href={`https://github.com/intelation/openpiimap/blob/main/${country.path}`} target="_blank" className="btn btn-sm btn-outline-primary rounded-pill">
                        View YAML
                      </Link>
                      <Link href={`https://raw.githubusercontent.com/intelation/openpiimap/main/${country.path}`} target="_blank" className="btn btn-sm btn-outline-secondary rounded-pill">
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
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {comingSoonItems.map((item, index) => (
              <div key={index} className="col">
                <div className="card h-100 shadow-sm border rounded-lg d-flex align-items-center justify-content-center p-4 text-center">
                  <div className="card-body">
                    <span className="display-4 mb-2 d-block">{item.flag}</span>
                    <h5 className="card-title poppins-medium">{item.name}</h5>
                    {item.description && <p className="card-text small text-muted">{item.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <Link className="btn btn-primary rounded-pill px-4 py-2" href="https://github.com/intelation/openpiimap" target="_blank">
            View Full Repository
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
