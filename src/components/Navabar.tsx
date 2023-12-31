import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    if (id == "socials") {
      var yOffset = 0;
    } else {
      if (window.innerWidth < 760) {
        yOffset = -300;
      } else {
        yOffset = -120;
      }
    }

    const element = document.getElementById(id);
    const y =
      element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    // if (element) {
    //   const { top } = element.getBoundingClientRect();
    //   const offset =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   if (id == "socials") {
    //     var targetScrollPosition = top + offset;
    //   } else {
    //     var targetScrollPosition = top;
    //   }
    //   window.scrollTo({ top: targetScrollPosition, behavior: "smooth" });
    // }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-dark sticky top-0 z-50 shadow-lg ">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-16 px-3 sm:justify-center">
          <div className="flex ">
            <div className="hidden sm:flex justify-center gap-14 ">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:bg-gray-700 px-5 py-2 rounded-md text-lg font-medium my-auto"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:bg-gray-700 px-5 py-2 rounded-md text-lg font-medium my-auto"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:bg-gray-700 px-5 py-2 rounded-md text-lg font-medium my-auto"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("socials")}
                className="text-gray-300 hover:bg-gray-700 px-5 py-2 rounded-md text-lg font-medium my-auto"
              >
                Socials
              </button>
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
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Experience
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              onClick={() => scrollToSection("socials")}
              className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Socials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
