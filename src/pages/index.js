import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenPIIMap | Global Map of PII & PHI Definitions</title>
        <meta
          name="description"
          content="OpenPIIMap is the open-source project mapping personally identifiable and protected health information (PII/PHI) definitions across GDPR, HIPAA, and global laws."
        />
        <meta
          name="keywords"
          content="PII, PHI, GDPR, HIPAA, data privacy, compliance, open source, YAML, regulation, OpenPIIMap"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.openpiimap.org/" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="OpenPIIMap | Global Privacy Reference" />
        <meta
          property="og:description"
          content="An open-source map of sensitive data definitions across jurisdictions. Built for developers, privacy teams, and legal professionals."
        />
        <meta property="og:url" content="https://www.openpiimap.org" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OpenPIIMap | Global Privacy Reference" />
        <meta
          name="twitter:description"
          content="Machine-readable YAML and JSON files defining PII/PHI under GDPR, HIPAA, and more."
        />
      </Head>

      <div id="nextjs">
        <Header />
        <main className="container-fluid mainWrapper">
          {/* Hero Section */}
          <div className="row align-center firstRow">
            <section id="mainText" className="col-lg-12 poppins-bold">
              <h1><span className="highlight">OpenPIIMap</span>: Mapping Sensitive Data Definitions Globally</h1>
              <h2><span className="highlight">Understand and track PII/PHI</span> across jurisdictions like GDPR, HIPAA, and more.</h2>
              <div className="actions">
                <Link className='btn btn-primary' href="/coverage">Explore Coverage<i className='bi bi-arrow-right-short'></i></Link>
                <Link className='btn btn-primary' href="/contribute">Contribute<i className='bi bi-arrow-right-short'></i></Link>
              </div>
            </section>
          </div> 
 

{/* How It Works Section */}
<div className="row mainRow py-5 border-top">
  <div className="col-lg-12 text-center mb-4">
    <h2 className="poppins-bold">How OpenPIIMap Works</h2>
    <p className="text-muted">
      Structured, machine-readable definitions of PII and PHI across countries — accessible to both developers and compliance teams.
    </p>
  </div>

  <div className="col-md-4 text-center mb-4">
    <div className="p-4 h-100 border rounded">
      <i className="bi bi-map fs-1 text-primary mb-3"></i>
      <h5 className="poppins-semibold">Mapped by Country & Law</h5>
      <p className="small text-muted">
        Every YAML file corresponds to a specific jurisdiction (e.g. Germany under GDPR) with citations and tags.
      </p>
    </div>
  </div>

  <div className="col-md-4 text-center mb-4">
    <div className="p-4 h-100 border rounded">
      <i className="bi bi-code-slash fs-1 text-primary mb-3"></i>
      <h5 className="poppins-semibold">Developer-Friendly YAML</h5>
      <p className="small text-muted">
        Definitions use a structured schema with `type`, `required_masking`, `citations`, and category tags.
      </p>
    </div>
  </div>

  <div className="col-md-4 text-center mb-4">
    <div className="p-4 h-100 border rounded">
      <i className="bi bi-git fs-1 text-primary mb-3"></i>
      <h5 className="poppins-semibold">Open on GitHub</h5>
      <p className="small text-muted">
        All definitions are public, version-controlled, and easy to contribute. Pull requests and issues welcome!
      </p>
    </div>
  </div>
</div>


{/* Why It Matters Section */}
<div className="row mainRow py-5 border-top">
  <div className="col-lg-12 text-center mb-4">
    <h2 className="poppins-bold">Why OpenPIIMap Matters</h2>
    <p className="text-muted">
      Privacy laws vary by region. OpenPIIMap brings consistency, clarity, and automation to sensitive data handling across borders.
    </p>
  </div>

  <div className="col-md-3 text-center mb-4">
    <div className="p-4 h-100 border rounded">
      <i className="bi bi-shield-lock fs-1 text-primary mb-2"></i>
      <h6 className="fw-bold">Compliance Clarity</h6>
      <p className="small text-muted">Know exactly what qualifies as PII or PHI in each country and law.</p>
    </div>
  </div>

  <div className="col-md-3 text-center mb-4">
    <div className="p-4 h-100 border rounded">
      <i className="bi bi-globe fs-1 text-primary mb-2"></i>
      <h6 className="fw-bold">Cross-Border Coverage</h6>
      <p className="small text-muted">Harmonize privacy logic across GDPR, HIPAA, CPRA, and more.</p>
    </div>
  </div>

  <div className="col-md-3 text-center mb-4">
    <div className="p-4 h-100 border rounded">
      <i className="bi bi-cpu fs-1 text-primary mb-2"></i>
      <h6 className="fw-bold">AI & Automation Ready</h6>
      <p className="small text-muted">Use YAML definitions in your anonymizers, validators, or ML workflows.</p>
    </div>
  </div>

  <div className="col-md-3 text-center mb-4">
    <div className="p-4 h-100 border rounded">
      <i className="bi bi-people fs-1 text-primary mb-2"></i>
      <h6 className="fw-bold">Community-Driven</h6>
      <p className="small text-muted">Built and maintained by privacy engineers, legal experts, and open-source contributors.</p>
    </div>
  </div>
</div>

{/* Global Privacy Framework Highlights */}
<div className="row mt-4 mb-4">
  <div className="col-md-4">
    <div className="squareBox boxDark bs_default">
      <p className='squareBoxTitle'>GDPR – Europe</p>
      <p className='squareBoxText'>Defines personal data as any information relating to an identified or identifiable person. Includes strict rules for consent, access, and erasure.</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="squareBox boxDark bs_default">
      <p className='squareBoxTitle'>HIPAA – United States</p>
      <p className='squareBoxText'>Focuses on protecting health data (PHI). Defines 18 identifiers and mandates anonymization or expert determination for compliance.</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="squareBox boxDark bs_default">
      <p className='squareBoxTitle'>CPRA – California</p>
      <p className='squareBoxText'>Expands CCPA by defining sensitive personal information (SPI), adding rights to limit data use, and requiring data minimization.</p>
    </div>
  </div>
</div>

<div className="row mt-4 mb-4">
  <div className="col-md-4">
    <div className="squareBox bs_default">
      <p className='squareBoxTitle'>DPDPB – India</p>
      <p className='squareBoxText'>India’s new Digital Personal Data Protection Bill introduces consent-based processing, cross-border controls, and privacy-by-design principles.</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="squareBox bs_default">
      <p className='squareBoxTitle'>LGPD – Brazil</p>
      <p className='squareBoxText'>Defines personal data broadly and includes legal bases for processing, data subject rights, and national enforcement authority (ANPD).</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="squareBox bs_default">
      <p className='squareBoxTitle'>PIPEDA – Canada</p>
      <p className='squareBoxText'>Applies to private-sector organizations. Requires meaningful consent and safeguards for identifiable information in commercial activity.</p>
    </div>
  </div>
</div>


        </main>
        <Footer />
      </div>
    </>
  );
}
