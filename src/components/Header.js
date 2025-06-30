import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
    const router = useRouter();
    const [isSticky, setIsSticky] = useState(false);

    const isActive = (path) => router.pathname === path;

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`mainHeader ${isSticky ? "sticky" : ""}`}>
            <div className="container-fluid">
                <div className="header-wrapper d-flex align-items-center justify-content-between flex-wrap">
                    {/* Logo */}
                    <div className="logo-area">
                        <Link className="logo-container" href="/">
                            <Image
                                src="/logo-02.svg"
                                alt="OpenPIIMap Logo"
                                className="logo-web"
                                width={64}
                                height={64}
                            />
                            <p className="logo-text poppins-light">OpenPIIMap</p>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="navbar navbar-expand-lg navbar-light mainNavbar flex-grow-1">
                        <button
                            className="navbar-toggler ms-auto"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="offcanvas offcanvas-end"
                            tabIndex="-1"
                            id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel"
                        >
                            <div className="offcanvas-header">
                                <button
                                    type="button"
                                    className="btn-close text-reset"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="offcanvas-body">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link
                                            className={`nav-link ${isActive("/coverage") ? "active-link" : ""}`}
                                            href="/coverage"
                                        >
                                            Coverage
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className={`nav-link ${isActive("/contribute") ? "active-link" : ""}`}
                                            href="/contribute"
                                        >
                                            Contribute
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
