import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mainFooter border-top py-4 bg-light text-center text-muted small">
      <div className="container">

        {/* Social Icons */}
        <div className="mb-2">
          <Link href="https://github.com/intelation/openpiimap" target="_blank" className="text-muted me-3" title="GitHub">
            <i className="bi bi-github fs-5"></i>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="mb-2">
          <Link href="/coverage" className="text-muted me-3 text-decoration-none">Coverage</Link>
          <Link href="/contribute" className="text-muted me-3 text-decoration-none">Contribute</Link>        
        </div>

        {/* Attribution */}
        <div>
          <p className="mb-0">
            &copy; 2025 OpenPIIMap — Built by the privacy community.
            <br />
            <span className="text-muted">
              Powered by <Link href="https://intelation.com" target="_blank" className="text-muted text-decoration-underline">Intelation</Link>
            </span>
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
