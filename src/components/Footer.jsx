import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
  faHeart,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import Chatbot from "./Chatbot";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: "SAT Preparation", href: "#" },
      { name: "Academic Tutoring", href: "#" },
      { name: "College Counseling", href: "#" },
      { name: "Video Courses", href: "#" },
      { name: "Study Materials", href: "#" }
    ],
    services: [
      { name: "Scholarship Search", href: "#" },
      { name: "University Applications", href: "#" },
      { name: "Career Counseling", href: "#" },
      { name: "Test Preparation", href: "#" },
      { name: "Academic Support", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "#" },
      { name: "Press Kit", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: faFacebookF, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: faTwitter, href: "#", color: "hover:text-sky-500" },
    { name: "Instagram", icon: faInstagram, href: "#", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: faLinkedinIn, href: "#", color: "hover:text-blue-700" },
    { name: "YouTube", icon: faYoutube, href: "#", color: "hover:text-red-600" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faGraduationCap} className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">RAZY Academy</h3>
                <p className="text-slate-400 text-sm">Empowering Education Worldwide</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Transforming education through innovative learning solutions, expert guidance,
              and personalized academic support. Join thousands of successful students worldwide.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg transition-colors duration-300">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-slate-400 transition-colors duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div className="text-slate-400 text-sm">
                  <p>123 Education Street</p>
                  <p>Academic City, AC 12345</p>
                  <p>United States</p>
                </div>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-blue-400 mr-3" />
                <a href="tel:+1234567890" className="text-slate-400 hover:text-white transition-colors duration-300">
                  +1 (234) 567-8900
                </a>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 mr-3" />
                <a href="mailto:info@razyacademy.com" className="text-slate-400 hover:text-white transition-colors duration-300">
                  info@razyacademy.com
                </a>
              </div>
            </div>

            {/* Quick Contact Button */}
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} RAZY Academy. All rights reserved.
              <span className="mx-2">•</span>
              Made with <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-1" /> for education
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {footerLinks.support.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Back to top"
          title="Back to top"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="transform rotate-[-90deg] text-lg group-hover:transform group-hover:rotate-[-90deg] group-hover:scale-110 transition-all duration-300"
          />
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to top
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-slate-800"></div>
          </div>
        </button>
      </div>

      {/* Chatbot Component */}
      <Chatbot />
    </footer>
  );
}
