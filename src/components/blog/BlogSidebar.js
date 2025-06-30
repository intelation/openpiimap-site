import Link from 'next/link';

export default function BlogSidebar({ shareUrl, title }) {
    return (
        <aside className="col-3 blog-sidebar top-0 p-4">
            <div className="mb-4">
                <h5 className="poppins-bold mb-2">Share</h5>
                <ul className="list-unstyled">
                    <li>
                        <Link
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-linkedin bsicon"></i> Share on LinkedIn
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=Check%20this%20out`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-twitter-x bsicon"></i> Share on Twitter
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`mailto:?subject=${title}&body=Check out this guide: ${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-envelope bsicon"></i> Share via Email
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mb-4">
                <h5 className="poppins-bold mb-2">Explore Intelation</h5>
                <ul className="list-unstyled">
                    <li><Link href="/how-it-works">How It Works</Link></li>
                    <li><Link href="/product-features">Product Features</Link></li>
                    <li><Link href="/use-cases">Use Cases</Link></li>
                    <li><Link href="/compliance-center">Compliance Center</Link></li>
                    <li><Link href="/risk-and-compliance-tools/enterprise-tech-maturity-benchmark">Enterprise Tech Maturity Benchmark</Link></li>
                    <li><Link href="/risk-and-compliance-tools/breach-response-simulation">Breach Response Simulation</Link></li>
                    <li><Link href="/early-signup">Request Early Access</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </aside>
    );
}
