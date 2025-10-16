import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGraduationCap, 
  faHome, 
  faBook, 
  faInfoCircle, 
  faEnvelope, 
  faUserPlus, 
  faBars,
  faTimes,
  faSearch,
  faXmark,
  faStar,
  faNewspaper,
  faChevronDown,
  faChevronUp,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
    setIsMenuOpen(false);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsProgramsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const toggleProgramsDropdown = () => {
    setIsProgramsDropdownOpen(!isProgramsDropdownOpen);
    setIsAboutDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsProgramsDropdownOpen(false);
  };

  // Smooth scroll to section with routing support
  const scrollToSection = (sectionId) => {
    // If we're not on the homepage, navigate there first with hash
    if (window.location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    // If we're already on homepage, just scroll
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80; // Account for fixed header height
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeAll();
  };

  // Close menus when clicking outside - improved for mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("mobile-menu");
      const search = document.getElementById("search-bar");
      const searchButton = document.getElementById("search-button");
      const menuButton = document.getElementById("menu-button");
      const programsDropdown = document.getElementById("programs-dropdown");
      const aboutDropdown = document.getElementById("about-dropdown");
      
      // Only handle click outside for desktop dropdowns
      if (programsDropdown && !programsDropdown.contains(event.target)) {
        setIsProgramsDropdownOpen(false);
      }
      if (aboutDropdown && !aboutDropdown.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }

      // Handle mobile menu and search
      if (menu && !menu.contains(event.target) && menuButton && !menuButton.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (search && !search.contains(event.target) && searchButton && !searchButton.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    // Use both mouse and touch events for better mobile support
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="w-full bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100 py-2 sticky top-0 z-50" data-aos="fade-down" data-aos-delay="100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-down" data-aos-delay="200">
        <div className="flex justify-between items-center h-12" data-aos="fade-down" data-aos-delay="300">
          {/* Enhanced Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-3 text-2xl font-bold transition-all duration-300"
            onClick={closeAll}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-extrabold text-xl leading-tight">
                RAZY
              </span>
              <span className="text-blue-700 text-sm font-semibold tracking-wide">
                ACADEMY
              </span>
            </div>
          </Link>

          {/* Enhanced Search Bar (visible on md and lg screens) */}
          <div className="hidden md:flex lg:hidden items-center flex-1 max-w-sm mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search programs..."
                className="w-full px-3 py-2 pl-9 pr-3 border border-blue-200 rounded-full bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-300 placeholder-blue-400 text-sm"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"
              />
            </div>
          </div>

          {/* Enhanced Desktop Navigation with Search */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" onClick={closeAll} className="group flex items-center text-blue-700 hover:text-blue-900 px-4 py-2 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300">
              <FontAwesomeIcon icon={faHome} className="mr-2 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
            </Link>

            {/* Programs Dropdown */}
            <div className="relative hidden lg:block" id="programs-dropdown">
              <button
                onClick={toggleProgramsDropdown}
                className="group flex items-center text-blue-700 hover:text-blue-900 px-4 py-2 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faBook} className="mr-2 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">Programs</span>
                <FontAwesomeIcon
                  icon={isProgramsDropdownOpen ? faChevronUp : faChevronDown}
                  className="ml-2 w-3 group-hover:scale-110 transition-transform duration-300"
                />
              </button>

              {/* Programs Dropdown Menu */}
              {isProgramsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-blue-100 py-2 z-50">
                  <button
                    onClick={() => scrollToSection('programs')}
                    className="w-full text-left px-4 py-3 text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200 flex items-center"
                  >
                    <FontAwesomeIcon icon={faBook} className="mr-3 w-4" />
                    <span className="font-medium">Programs Overview</span>
                  </button>
                  <button
                    onClick={() => scrollToSection('courses')}
                    className="w-full text-left px-4 py-3 text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200 flex items-center"
                  >
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-3 w-4" />
                    <span className="font-medium">Video Courses</span>
                  </button>
                  <button
                    onClick={() => scrollToSection('scholarships')}
                    className="w-full text-left px-4 py-3 text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200 flex items-center"
                  >
                    <FontAwesomeIcon icon={faStar} className="mr-3 w-4" />
                    <span className="font-medium">Scholarships</span>
                  </button>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative hidden lg:block" id="about-dropdown">
              <button
                onClick={toggleAboutDropdown}
                className="group flex items-center text-blue-700 hover:text-blue-900 px-4 py-2 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">About</span>
                <FontAwesomeIcon
                  icon={isAboutDropdownOpen ? faChevronUp : faChevronDown}
                  className="ml-2 w-3 group-hover:scale-110 transition-transform duration-300"
                />
              </button>

              {/* About Dropdown Menu */}
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-blue-100 py-2 z-50">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="w-full text-left px-4 py-3 text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200 flex items-center"
                  >
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-3 w-4" />
                    <span className="font-medium">About Us</span>
                  </button>
                  <button
                    onClick={() => scrollToSection('blog')}
                    className="w-full text-left px-4 py-3 text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200 flex items-center"
                  >
                    <FontAwesomeIcon icon={faNewspaper} className="mr-3 w-4" />
                    <span className="font-medium">Blog</span>
                  </button>
                  <Link
                    to="/investments"
                    onClick={closeAll}
                    className="w-full text-left px-4 py-3 text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200 flex items-center"
                  >
                    <FontAwesomeIcon icon={faChartLine} className="mr-3 w-4" />
                    <span className="font-medium">Investments</span>
                  </Link>
                  <button
                    onClick={() => scrollToSection('partners')}
                    className="w-full text-left px-4 py-3 text-blue-700 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200 flex items-center"
                  >
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-3 w-4" />
                    <span className="font-medium">Partners</span>
                  </button>
                </div>
              )}
            </div>

            <NavLink to="/careers" icon={faUserPlus} onClick={closeAll}>Careers</NavLink>

            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search academic programs..."
                className="w-full px-3 py-2 pl-9 pr-3 border border-blue-200 rounded-full bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-300 placeholder-blue-400 text-sm"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"
              />
            </div>

            <Link
              to="/signup"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-800 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-full text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
              onClick={closeAll}
            >
              <FontAwesomeIcon icon={faUserPlus} className="text-sm" />
              Register
            </Link>
          </div>

          {/* Enhanced Mobile controls */}
          <div className="flex items-center lg:hidden space-x-3">
            {/* Enhanced Search Toggle */}
            <button
              id="search-button"
              className="md:hidden p-3 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-xl transition-all duration-300 touch-manipulation"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <FontAwesomeIcon icon={isSearchOpen ? faXmark : faSearch} className="h-5 w-5" />
            </button>

            {/* Enhanced Mobile Menu Toggle */}
            <button
              id="menu-button"
              className="p-3 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-xl transition-all duration-300 touch-manipulation"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Search Bar */}
        <div
          id="search-bar"
          className={`md:hidden mt-4 transition-all duration-500 overflow-hidden ${
            isSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          }`}
          data-aos="fade-down" data-aos-delay="400"
        >
          <div className="relative px-4">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search programs..."
              className="w-full px-3 py-2 pl-9 pr-3 border border-blue-200 rounded-2xl bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-300 placeholder-blue-400 text-sm"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-7 top-1/2 transform -translate-y-1/2 text-blue-500"
            />
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-blue-900/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeAll}
        ></div>
      )}

      {/* Enhanced Mobile Sidebar */}
      <aside
        id="mobile-menu"
        className={`fixed top-0 left-0 h-[100dvh] w-full max-w-[280px] bg-white shadow-2xl transform transition-all duration-500 ease-in-out z-50 border-r-4 border-blue-600 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden overflow-hidden`}
        style={{ maxWidth: 'min(280px, calc(100vw - 8px))' }}
      >
        <div className="p-6 border-b border-blue-100 bg-white">
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={closeAll}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white" />
            </div>
            <div>
              <div className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-bold text-lg">
                RAZY ACADEMY
              </div>
              <div className="text-blue-600 text-xs font-medium">Excellence in Education</div>
            </div>
          </Link>
        </div>

        <nav className="p-6 space-y-1 bg-white">
          <Link to="/" onClick={closeAll} className="group flex items-center w-full px-4 py-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300 touch-manipulation">
            <FontAwesomeIcon icon={faHome} className="mr-4 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold group-hover:translate-x-2 transition-transform duration-300">Home</span>
          </Link>

          {/* Programs Section */}
          <div className="space-y-1">
            <div className="px-4 py-2 text-blue-800 font-bold text-sm uppercase tracking-wide">Programs</div>
            <button 
              onClick={() => scrollToSection('programs')} 
              className="group flex items-center w-full px-4 py-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300 touch-manipulation"
            >
              <FontAwesomeIcon icon={faBook} className="mr-4 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold group-hover:translate-x-2 transition-transform duration-300">Programs Overview</span>
            </button>
            <button 
              onClick={() => scrollToSection('courses')} 
              className="group flex items-center w-full px-4 py-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300 touch-manipulation"
            >
              <FontAwesomeIcon icon={faGraduationCap} className="mr-4 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold group-hover:translate-x-2 transition-transform duration-300">Video Courses</span>
            </button>
            <button 
              onClick={() => scrollToSection('scholarships')} 
              className="group flex items-center w-full px-4 py-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300 touch-manipulation"
            >
              <FontAwesomeIcon icon={faStar} className="mr-4 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold group-hover:translate-x-2 transition-transform duration-300">Scholarships</span>
            </button>
          </div>

          {/* About Section */}
          <div className="space-y-1">
            <div className="px-4 py-2 text-blue-800 font-bold text-sm uppercase tracking-wide">About</div>
            <button 
              onClick={() => scrollToSection('about')} 
              className="group flex items-center w-full px-4 py-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300 touch-manipulation"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="mr-4 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold group-hover:translate-x-2 transition-transform duration-300">About Us</span>
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="group flex items-center w-full px-4 py-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300 touch-manipulation"
            >
              <FontAwesomeIcon icon={faNewspaper} className="mr-4 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold group-hover:translate-x-2 transition-transform duration-300">Blog</span>
            </button>
            <Link 
              to="/investments" 
              onClick={closeAll} 
              className="group flex items-center w-full px-4 py-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300 touch-manipulation"
            >
              <FontAwesomeIcon icon={faChartLine} className="mr-4 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold group-hover:translate-x-2 transition-transform duration-300">Investments</span>
            </Link>
            <button 
              onClick={() => scrollToSection('partners')} 
              className="group flex items-center w-full px-4 py-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300 touch-manipulation"
            >
              <FontAwesomeIcon icon={faGraduationCap} className="mr-4 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold group-hover:translate-x-2 transition-transform duration-300">Partners</span>
            </button>
          </div>

          <MobileNavLink to="/careers" icon={faUserPlus} onClick={closeAll}>Careers</MobileNavLink>

          <Link
            to="/signup"
            className="flex items-center justify-center w-full mt-6 px-4 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 font-semibold"
            onClick={closeAll}
          >
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
            Register
          </Link>
        </nav>
      </aside>
    </header>
  );
}

function NavLink({ to, icon, children, onClick }) {
  return (
    <Link
      to={to}
      className="group flex items-center text-blue-700 hover:text-blue-900 px-4 py-2 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="mr-2 w-4 group-hover:scale-110 transition-transform duration-300" />
      <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
    </Link>
  );
}

function MobileNavLink({ to, icon, children, onClick }) {
  return (
    <Link
      to={to}
      className="group flex items-center px-4 py-4 text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-xl transition-all duration-300"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="mr-4 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      <span className="font-semibold group-hover:translate-x-2 transition-transform duration-300">{children}</span>
    </Link>
  );
}