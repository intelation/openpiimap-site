import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Intelation</title>
        <meta
          name="description"
          content="The page you’re looking for doesn’t exist or has been moved. Visit our homepage to explore Intelation’s data privacy solutions."
        />
        <meta
          name="keywords"
          content="404 page, page not found, Intelation error page, broken link, missing page, redirect to homepage"
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.intelation.com/404" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="404 - Page Not Found | Intelation" />
        <meta
          property="og:description"
          content="Oops! It looks like this page no longer exists. Use the navigation or return to the homepage to get back on track."
        />
        <meta property="og:image" content="https://www.intelation.com/images/og-image-new.jpg" />
        <meta property="og:url" content="https://www.intelation.com/404" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 - Page Not Found | Intelation" />
        <meta
          name="twitter:description"
          content="We couldn't find the page you requested. Check the URL or visit our homepage to learn more about Intelation."
        />
        <meta name="twitter:image" content="https://www.intelation.com/images/og-image-new.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "404 Page - Intelation",
        "description": "This page does not exist. Navigate to the homepage or explore Intelation's platform features.",
        "url": "https://www.intelation.com/404"
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
