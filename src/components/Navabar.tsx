"use client";

import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(false);

  // Refs for the active indicator and nav items
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;

      // Calculate navbar height dynamically
      const navHeight = navRef.current?.offsetHeight || 0;

      window.scrollTo({ top: y - navHeight, behavior: "smooth" });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
    setIsMobileMenuOpen(false);
    setActiveSection(id);
  };

  // Update the indicator position when active section changes
  useEffect(() => {
    if (
      !isMobile &&
      indicatorRef.current &&
      navItemRefs.current[activeSection]
    ) {
      const activeItem = navItemRefs.current[activeSection];
      if (activeItem) {
        const { offsetLeft, offsetWidth } = activeItem;
        indicatorRef.current.style.left = `${offsetLeft}px`;
        indicatorRef.current.style.width = `${offsetWidth}px`;
      }
    }
  }, [activeSection, isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide navbar on mobile
      if (isMobile && Math.abs(currentScrollY - lastScrollY) > 50) {
        if (
          currentScrollY > lastScrollY &&
          currentScrollY > 0 &&
          !isMobileMenuOpen
        ) {
          setIsVisible(false); // Hide navbar when scrolling down on mobile
        } else {
          setIsVisible(true); // Show navbar when scrolling up
        }
        setLastScrollY(currentScrollY);
      } else if (!isMobile) {
        // Always visible on desktop
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMobileMenuOpen, isMobile]);

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const sectionIds = ["about", "experience", "projects", "socials"];
    const navHeight = navRef.current?.offsetHeight || 0;

    // Track section visibility percentages
    const sectionVisibility: Record<string, number> = {};
    sectionIds.forEach((id) => {
      sectionVisibility[id] = 0;
    });

    // Create multiple thresholds for more granular visibility detection
    const thresholds = Array.from({ length: 21 }, (_, i) => i * 0.05);

    const observerOptions = {
      root: null,
      rootMargin: `-${navHeight}px 0px 0px 0px`,
      threshold: thresholds, // Use multiple thresholds for better accuracy
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Update visibility percentage for this section
        sectionVisibility[entry.target.id] = entry.intersectionRatio;

        // Find the section with the highest visibility
        let maxVisibility = 0;
        let mostVisibleSection = activeSection;

        Object.entries(sectionVisibility).forEach(([id, visibility]) => {
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSection = id;
          }
        });

        // Only update if we have a section with some visibility
        if (maxVisibility > 0) {
          setActiveSection(mostVisibleSection);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [activeSection]);

  // Add this useEffect to handle scroll events for better accuracy during rapid scrolling
  useEffect(() => {
    const handleRapidScroll = () => {
      // Get all sections
      const sections = ["about", "experience", "projects", "socials"]
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      // Get the current scroll position plus half the viewport height
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find the section closest to the middle of the viewport
      let closestSection = sections[0];
      let closestDistance = Math.abs(
        scrollPosition - (sections[0].offsetTop + sections[0].offsetHeight / 2)
      );

      sections.forEach((section) => {
        const sectionMiddle = section.offsetTop + section.offsetHeight / 2;
        const distance = Math.abs(scrollPosition - sectionMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      // Update active section if needed
      if (closestSection && closestSection.id !== activeSection) {
        setActiveSection(closestSection.id);
      }
    };

    // Use both scroll and wheel events for better detection
    window.addEventListener("scroll", handleRapidScroll, { passive: true });
    window.addEventListener("wheel", handleRapidScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleRapidScroll);
      window.removeEventListener("wheel", handleRapidScroll);
    };
  }, [activeSection]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "socials", label: "Socials" },
  ];

  return (
    <nav
      ref={navRef}
      className={`bg-dark sticky top-0 z-50 shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex h-16 px-3 sm:justify-center">
          <div className="flex">
            <div className="hidden sm:flex justify-center gap-14 relative">
              {/* Sliding indicator for desktop */}
              <div
                ref={indicatorRef}
                className="absolute bottom-0 h-1 bg-white rounded-t-md transition-all duration-300 ease-in-out"
                style={{ left: 0, width: 0 }}
              />

              {navItems.map((item) => (
                <button
                  key={item.id}
                  ref={(el) => (navItemRefs.current[item.id] = el)}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-2 rounded-md text-lg font-medium my-auto transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
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
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-white bg-gray-700 font-semibold"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
