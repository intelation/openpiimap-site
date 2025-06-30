import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contribute() {
  return (
    <>
      <Head>
        <title>Contribute to OpenPIIMap | Open-Source Privacy Project</title>
        <meta
          name="description"
          content="Learn how to contribute to OpenPIIMap by adding YAML files, improving citations, translating definitions, or joining discussions."
        />
        <link rel="canonical" href="https://www.openpiimap.org/contribute" />
      </Head>

      <Header />

      <main className="container py-5">
        <h1 className="poppins-bold mb-3">
          <i className="bi bi-git" aria-hidden="true"></i> Contribute to OpenPIIMap
        </h1>

        <p className="lead mb-4">
          OpenPIIMap is a community-driven project to map sensitive data definitions across global privacy frameworks. We welcome contributions from developers,
          legal professionals, and privacy enthusiasts.
        </p>

        <section className="mb-5">
          <h2 className="h4 poppins-semibold">
            <i className="bi bi-puzzle" aria-hidden="true"></i> Ways You Can Contribute
          </h2>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-primary"></i> Add or update a YAML file for your country or framework</li>
            <li><i className="bi bi-check-circle-fill text-primary"></i> Improve legal citations and metadata</li>
            <li><i className="bi bi-check-circle-fill text-primary"></i> Translate definitions into local languages</li>
            <li><i className="bi bi-check-circle-fill text-primary"></i> Join discussions and shape priorities</li>
            <li><i className="bi bi-check-circle-fill text-primary"></i> Build tools using OpenPIIMap</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h4 poppins-semibold">
            <i className="bi bi-upload" aria-hidden="true"></i> How to Submit a YAML
          </h2>
          <ol>
            <li>Fork the repo: <Link href="https://github.com/intelation/openpiimap" target="_blank">OpenPIIMap on GitHub</Link></li>
            <li>Create a YAML file under <code>/data/[framework]/[country].yaml</code></li>
            <li>Follow our <Link href="https://github.com/intelation/openpiimap/tree/main/docs" target="_blank">YAML Schema Guide</Link></li>
            <li>Submit a pull request with a clear description</li>
            <li>We’ll review and merge together!</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="h4 poppins-semibold">
            <i className="bi bi-lightbulb" aria-hidden="true"></i> Contributor Tips
          </h2>
          <ul>
            <li>No legal background required—cite your sources clearly</li>
            <li>Use English for metadata; translations can go in <code>notes:</code></li>
            <li>Keep filenames lowercase (e.g., <code>portugal.yaml</code>)</li>
            <li>Include links to your source legislation</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h4 poppins-semibold">
            <i className="bi bi-people" aria-hidden="true"></i> First Time Contributor?
          </h2>
          <p>
            We’re here to help. Join the community to ask questions or suggest ideas:
          </p>
          <ul>
            <li><Link href="https://github.com/intelation/openpiimap/issues/new" target="_blank"><i className="bi bi-bug"></i> Open an Issue</Link></li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="h4 poppins-semibold">
            <i className="bi bi-box-seam" aria-hidden="true"></i> Contributor Resources
          </h2>
          <ul>
            <li><Link href="https://github.com/intelation/openpiimap/blob/main/docs/schema.md" target="_blank"><i className="bi bi-file-earmark-code"></i> YAML Schema Guide</Link></li>
            <li><Link href="https://github.com/intelation/openpiimap/blob/main/docs/CONTRIBUTING.md" target="_blank"><i className="bi bi-journal-text"></i> CONTRIBUTING.md</Link></li>
          </ul>
        </section>

        <div className="text-center mt-4">
          <Link href="https://github.com/intelation/openpiimap" target="_blank" className="btn btn-primary">
            <i className="bi bi-github"></i> Visit GitHub Repository
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}