import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import DemoRequestForm from "@/components/DemoRequestForm";
import PricingSection from "@/components/PricingSection";
import StatsDisplay from '../components/StatsDisplay';
import BlogCardGrid from "@/components/BlogCardGrid";


export default function Home() { 
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Intelation",
        "description": "AI-powered data anonymization for secure & compliant data sharing.",
        "operatingSystem": "Cloud-based",
        "applicationCategory": "SecurityApplication",
        "offers": {
            "@type": "Offer",
            "price": "Contact for pricing",
            "priceCurrency": "USD"
        },
        "url": "https://intelation.com",
        "author": {
            "@type": "Organization",
            "name": "Intelation"
        }
    };

    return (
        <>
            <Head>
                {/* SEO Meta Tags */}
                <title>Intelation - AI-Powered Data Anonymization & Compliance</title>
                <meta name="description" content="Intelation provides AI-powered data anonymization for secure and compliant data sharing. Ensure GDPR, HIPAA, and CPRA compliance while preserving AI model utility." />
                <meta name="keywords" content="data anonymization, AI privacy, GDPR compliance, HIPAA security, secure AI data sharing" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags (For Social Media) */}
                <meta property="og:title" content="Intelation - AI-Powered Data Anonymization & Compliance" />
                <meta property="og:description" content="AI-powered data anonymization for secure & compliant data sharing. GDPR, HIPAA, CPRA-ready." />
                <meta property="og:image" content="https://www.intelation.com/images/og-image-new.jpg" />
                <meta property="og:url" content="https://www.intelation.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Intelation - AI-Powered Data Anonymization & Compliance" />
                <meta name="twitter:description" content="AI-powered data anonymization for secure & compliant data sharing. GDPR, HIPAA, CPRA-ready." />
                <meta name="twitter:image" content="https://www.intelation.com/og-image-new.jpg" />

                {/* Structured Data (JSON-LD) */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            </Head>
            <div id='nextjs'>
                <Header />
                <main className="container-fluid mainWrapper">
                    <div className="row align-center mainRow firstRow">
                        <section id="mainText" className="col-lg-12 poppins-bold">
                            <h1>Module Library</h1>
                            <p>All Modules</p>
                        </section>
                    </div>
                    <div className="row mainRow">
                        <section className="col-lg-12 poppins-regular pageContent">
                            <h2>Input your data</h2>
                            <p>We support a wide range of data types: text, documents (PDF, DOCX), emails, chat logs, AI training sets, and audio transcripts. Upload, paste, or stream securely via API or dashboard.</p>

                            <h3>Integration options</h3>
                            <p>Custom logic ensures compliance with your industry’s privacy requirements.</p>
                            <ul>
                                <li>REST API for automation</li>
                                <li>Batch file upload support</li>
                                <li>Live preview anonymization</li>
                                <li>Custom rule configuration</li>
                            </ul>
                            <div className="table-responsive">
                                <table style={{ borderCollapse: 'separate', borderSpacing: '10px' }} className="table table-rounded table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Technique</th>
                                            <th>Example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Masking</td><td>John Doe → J*** D**</td></tr>
                                        <tr><td>Redaction</td><td>SSN: 123-45-6789 → [REDACTED]</td></tr>
                                        <tr><td>Pseudonymization</td><td>John Doe → User-2983</td></tr>
                                        <tr><td>Hashing</td><td>4111-1111-1111-1111 → a1b2c3d4...</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                    <div className="row mainRow contactUs">
                        <section className="col-lg-6 contactText">
                            <h2>Contact Us</h2>
                            <p>Experience our anonymization engine for healthcare, finance, legal, and real-time API testing.
                                Experience our anonymization engine for healthcare, finance, legal, and real-time API testing.
                            </p>
                        </section>
                        <section className="col-lg-6 fillForm"> <DemoRequestForm /> </section>
                    </div>
                    <div className="row mainRow">
                        <PricingSection />
                    </div>
                    <div className="row mainRow">
                        <StatsDisplay />
                    </div>
                    <div className="row mainRow">
                        <BlogCardGrid />
                    </div>

                    <div className="row bigBox rounded mainRow bs_default">
                        <div className="col-lg-12 text-center">
                            <h2 className='poppins-bold'>Live Demo</h2>
                            <p>Built for privacy and compliance first</p>
                            <a className='btn btn-primary' href="#">Try Live Demo<i className='bi bi-arrow-right-short'></i></a>
                        </div>
                    </div>

                    <div className="row mt-4 mb-4">
                        <div className="col-md-4 ">
                            <div className="squareBox boxDark bs_default">
                                <p className='squareBoxTitle'>Lite Blue BG H1</p>
                                <p className='squareBoxText'>Comprehensive data privacy regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="squareBox boxDark bs_default">
                                <p className='squareBoxTitle'>Lite Blue BG H1</p>
                                <p className='squareBoxText'>Comprehensive data privacy regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="squareBox boxDark bs_default">
                                <p className='squareBoxTitle'>Lite Blue BG H1</p>
                                <p className='squareBoxText'>Comprehensive data privacy regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-4 ">
                            <div className="squareBox  bs_default">
                                <p className='squareBoxTitle'>Lite Blue BG H1</p>
                                <p className='squareBoxText'>Comprehensive data privacy regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="squareBox bs_default">
                                <p className='squareBoxTitle'>Lite Blue BG H1</p>
                                <p className='squareBoxText'>Comprehensive data privacy regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="squareBox bs_default">
                                <p className='squareBoxTitle'>Lite Blue BG H1</p>
                                <p className='squareBoxText'>Comprehensive data privacy regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mainRow">
                        <div className='row'>
                            <div className="col-md-4">
                                <h3 className="fw-bold">Integration H3</h3>
                                <p className="fw-medium">Bulleted List (Intro)</p>
                                <ul className="custom-bullet-list">
                                    <li className="mb-2"><strong>REST API</strong> for automation</li>
                                    <li className="mb-2"><strong>Batch file</strong> upload support</li>
                                    <li className="mb-2"><strong>Live preview</strong> anonymization</li>
                                    <li className="mb-2">Custom rule <strong>configuration</strong></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h3 className="fw-bold">Integration H3</h3>
                                <p className="fw-medium">Bulleted List (Intro)</p>
                                <ul className="custom-bullet-list">
                                    <li className="mb-2"><strong>REST API</strong> for automation</li>
                                    <li className="mb-2"><strong>Batch file</strong> upload support</li>
                                    <li className="mb-2"><strong>Live preview</strong> anonymization</li>
                                    <li className="mb-2">Custom rule <strong>configuration</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-4">
                                <h3 className="fw-bold">Integration H3</h3>
                                <p className="fw-medium">Bulleted List (Intro)</p>
                                <ul className="custom-bullet-list">
                                    <li className="mb-2"><strong>REST API</strong> for automation</li>
                                    <li className="mb-2"><strong>Batch file</strong> upload support</li>
                                    <li className="mb-2"><strong>Live preview</strong> anonymization</li>
                                    <li className="mb-2">Custom rule <strong>configuration</strong></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h3 className="fw-bold">Integration H3</h3>
                                <p className="fw-medium">Bulleted List (Intro)</p>
                                <ul className="custom-bullet-list">
                                    <li className="mb-2"><strong>REST API</strong> for automation</li>
                                    <li className="mb-2"><strong>Batch file</strong> upload support</li>
                                    <li className="mb-2"><strong>Live preview</strong> anonymization</li>
                                    <li className="mb-2">Custom rule <strong>configuration</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* First Row: 4 Cards */}
                    <div className="row g-4 mb-4">
                        <div className="col-md-3">
                            <div className="p-4 h-100 squareBox boxDark bs_default">
                                <p className='squareBoxTitle'>GDPR H1</p>
                                <p className='squareBoxText'><strong>Comprehensive data privacy</strong> regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="p-4  h-100 squareBox  bs_default">
                                <p className='squareBoxTitle'>GDPR H1</p>
                                <p className='squareBoxText'><strong>Comprehensive data privacy</strong> regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="p-4  h-100 squareBox boxDark bs_default">
                                <p className='squareBoxTitle'>GDPR H1</p>
                                <p className='squareBoxText'><strong>Comprehensive data privacy</strong> regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="p-4  h-100 squareBox  bs_default">
                                <p className='squareBoxTitle'>GDPR H1</p>
                                <p className='squareBoxText'><strong>Comprehensive data privacy</strong> regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Row: 2 Cards */}
                    <div className="row g-4 mb-4">
                        <div className="col-md-6">
                            <div className="p-4  h-100 squareBox boxDark bs_default">
                                <p className='squareBoxTitle'>GDPR H1</p>
                                <p className='squareBoxText'><strong>Comprehensive data privacy</strong> regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="p-4  h-100 squareBox boxDark bs_default">
                                <p className='squareBoxTitle'>GDPR H1</p>
                                <p className='squareBoxText'><strong>Comprehensive data privacy</strong> regulation for the EU — data minimization, rights to access, and erasure.</p>
                            </div>
                        </div>
                    </div>

                </main>
                <Footer />
            </div>
        </>
    );
}
