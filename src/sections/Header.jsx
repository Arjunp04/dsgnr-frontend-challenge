import { useEffect, useState } from "react";
import { navLinks } from "../data/content.js";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/hamburger.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="relative z-20 page-container flex items-center justify-between pt-6 xl:pt-8">
        <a href="#" aria-label="dsgnr. home">
          <img src={logo} alt="dsgnr." className="w-18 lg:w-24" />
        </a>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex cursor-pointer items-center justify-center transition-opacity hover:opacity-80"
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 xl:h-6 xl:w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          ) : (
            <img src={menuIcon} alt="menu icon" className="w-8 lg:w-12" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="site-menu"
          aria-label="Main"
          className="fixed inset-0 z-10 flex items-center justify-center bg-hero-yellow"
        >
          <ul className="flex flex-col items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="text-2xl font-bold underline-offset-6 hover:underline xs:text-3xl md:text-4xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
