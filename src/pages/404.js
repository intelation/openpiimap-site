import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | OpenPIIMap</title>
        <meta
          name="description"
          content="The page you’re looking for doesn’t exist or has been moved. Visit our homepage to explore OpenPIIMap’s global privacy data coverage."
        />
        <meta
          name="keywords"
          content="404 page, page not found, OpenPIIMap error page, missing page, privacy coverage, YAML not found"
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.openpiimap.org/404" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="404 - Page Not Found | OpenPIIMap" />
        <meta
          property="og:description"
          content="Oops! It looks like this page no longer exists. Use the navigation or return to the homepage to explore PII and PHI definitions worldwide."
        />
        <meta property="og:image" content="https://www.openpiimap.org/images/og-image-new.jpg" />
        <meta property="og:url" content="https://www.openpiimap.org/404" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 - Page Not Found | OpenPIIMap" />
        <meta
          name="twitter:description"
          content="We couldn't find the page you requested. Check the URL or return to OpenPIIMap.org to browse our privacy coverage and YAMLs."
        />
        <meta name="twitter:image" content="https://www.openpiimap.org/images/og-image-new.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "404 Page - OpenPIIMap",
              "description": "This page does not exist. Navigate to the homepage or explore OpenPIIMap’s global coverage of PII/PHI definitions.",
              "url": "https://www.openpiimap.org/404"
            }
          `}
        </script>
      </Head>

      <div id="nextjs">
        <Header />

        <main className="container-fluid mainWrapper">
          <section className="py-5">
            <div className="container text-center">
              <h1 className="mb-4 display-4">404</h1>
              <h2 className="mb-3">Page Not Found</h2>
              <p className="mb-4">
                The page you are looking for does not exist or has been moved.
              </p>
              <Link href="/" className="btn btn-primary">
                Go to Homepage
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
