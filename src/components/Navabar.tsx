import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-dark sticky top-0 z-50 shadow-lg mb-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-16 px-3 sm:justify-center">
          <div className="flex ">
            <div className="hidden sm:flex justify-center gap-14 ">
              <a
                href="#about"
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:bg-gray-700 px-0 py-2 rounded-md text-lg font-medium my-auto"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:bg-gray-700 px-0 py-2 rounded-md text-lg font-medium my-auto"
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:bg-gray-700 px-0 py-2 rounded-md text-lg font-medium my-auto"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:bg-gray-700 px-0 py-2 rounded-md text-lg font-medium my-auto"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
