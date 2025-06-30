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
        </main>
        <Footer />
      </div>
    </>
  );
}
