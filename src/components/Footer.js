import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mainFooter py-4 pb-0">
      <div className="container">
        <div className="row mb-4">
          {/* Project Info */}
          <div className="col-md-8">
            <p className="poppins-semibold footerLogo">OpenPIIMap</p>
            <p>Open-source map of sensitive data definitions under global privacy laws.</p>
            <div className="d-flex gap-3 mt-3 mb-4 footerSocialIcons">
              <Link href="https://github.com/intelation/openpiimap" target="_blank" title="GitHub">
                <i className="bi bi-github fs-4"></i>
              </Link>
              <Link href="https://linkedin.com/company/intelation1" target="_blank" title="LinkedIn">
                <i className="bi bi-linkedin fs-4"></i>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-md-2">
            <ul className="list-unstyled footerLinks">
              <li><Link href="/coverage">Coverage</Link></li>
              <li><Link href="/contribute">Contribute</Link></li>
             
            </ul>
          </div>

          
        </div>

        {/* Copyright */}
        <div className="row pt-3 pb-1">
          <div className="col text-center">
            <p id="copyRight">&copy; 2025 OpenPIIMap. Built by the privacy community. Powered by <Link href="https://intelation.com" target="_blank">Intelation</Link>.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
