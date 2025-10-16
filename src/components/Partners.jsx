import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faGlobe,
  faUniversity,
  faBuilding,
  faAward,
  faUsers,
  faStar,
  faCheckCircle,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export default function Partners() {
  const universityPartners = [
    {
      name: "Harvard University",
      logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      type: "Ivy League",
      partnership: "Full Scholarship Partner"
    },
    {
      name: "Stanford University",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      type: "Top Research University",
      partnership: "Merit Scholarship Partner"
    },
    {
      name: "MIT",
      logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      type: "Technology Institute",
      partnership: "STEM Scholarship Partner"
    },
    {
      name: "Oxford University",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      type: "Russell Group",
      partnership: "International Scholarship Partner"
    },
    {
      name: "Cambridge University",
      logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      type: "Russell Group",
      partnership: "Academic Excellence Partner"
    },
    {
      name: "Yale University",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      type: "Ivy League",
      partnership: "Leadership Scholarship Partner"
    }
  ];

  const corporatePartners = [
    {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Technology Giant",
      partnership: "Internship & Career Partner"
    },
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Software Corporation",
      partnership: "Technology Education Partner"
    },
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "E-commerce Leader",
      partnership: "Business Development Partner"
    },
    {
      name: "Goldman Sachs",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Investment Bank",
      partnership: "Finance Career Partner"
    },
    {
      name: "McKinsey & Company",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Management Consulting",
      partnership: "Strategy & Leadership Partner"
    },
    {
      name: "Deloitte",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      type: "Professional Services",
      partnership: "Career Development Partner"
    }
  ];

  const partnershipBenefits = [
    {
      icon: faAward,
      title: "Exclusive Scholarships",
      description: "Access to partner-exclusive scholarship opportunities not available elsewhere"
    },
    {
      icon: faUsers,
      title: "Direct Admissions",
      description: "Fast-tracked application processes with priority consideration from partner institutions"
    },
    {
      icon: faStar,
      title: "Internship Opportunities",
      description: "Guaranteed interview opportunities with leading companies and organizations"
    },
    {
      icon: faGlobe,
      title: "Global Network",
      description: "Connect with a worldwide network of alumni, professionals, and industry leaders"
    }
  ];

  const stats = [
    { number: "50+", label: "Partner Universities", icon: faUniversity },
    { number: "200+", label: "Corporate Partners", icon: faBuilding },
    { number: "$50M+", label: "Scholarships Awarded", icon: faAward },
    { number: "95%", label: "Partner Satisfaction", icon: faCheckCircle }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.04'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section - Different from others */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full mb-8 shadow-xl">
            <FontAwesomeIcon icon={faHandshake} className="text-white text-3xl" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Global Partnership Network
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our extensive network of prestigious universities and leading corporations creates unparalleled
            opportunities for RAZY Academy students to excel academically and professionally worldwide.
          </p>
        </div>

        {/* Partnership Journey Timeline - Unique Layout */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {/* University Partners Section */}
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-4xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left Content */}
                  <div className="order-2 lg:order-1 text-center lg:text-left" data-aos="fade-right">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
                      <FontAwesomeIcon icon={faUniversity} className="text-white text-2xl" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Academic Excellence Partners</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      World-renowned universities collaborate with RAZY Academy to offer exclusive scholarships,
                      accelerated admissions, and academic excellence programs for our exceptional students.
                    </p>
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="text-4xl font-bold text-blue-600 mr-4">50+</div>
                      <div className="text-slate-600">Partner Universities</div>
                    </div>
                  </div>

                  {/* Right Visual - University Logos */}
                  <div className="order-1 lg:order-2" data-aos="fade-left">
                    <div className="grid grid-cols-2 gap-4">
                      {universityPartners.slice(0, 4).map((partner, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <FontAwesomeIcon icon={faUniversity} className="text-blue-600 text-xl" />
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm mb-1">{partner.name}</h4>
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {partner.partnership.split(' ')[0]} Partner
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
            </div>

            {/* Corporate Partners Section */}
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-4xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left Visual - Corporate Logos */}
                  <div data-aos="fade-right">
                    <div className="grid grid-cols-2 gap-4">
                      {corporatePartners.slice(0, 4).map((partner, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <FontAwesomeIcon icon={faBuilding} className="text-slate-600 text-xl" />
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm mb-1">{partner.name}</h4>
                          <span className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                            {partner.partnership.split(' ')[0]} Partner
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="text-center lg:text-left" data-aos="fade-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full mb-6 shadow-lg">
                      <FontAwesomeIcon icon={faBuilding} className="text-white text-2xl" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Industry Leadership Partners</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      Fortune 500 companies and innovative startups partner with RAZY Academy to identify
                      and develop top talent, providing internships, career opportunities, and mentorship programs.
                    </p>
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="text-4xl font-bold text-slate-600 mr-4">200+</div>
                      <div className="text-slate-600">Corporate Partners</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full border-4 border-white shadow-lg"></div>
            </div>

            {/* Partnership Benefits Section */}
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-6xl">
                <div className="text-center" data-aos="fade-up">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg">
                    <FontAwesomeIcon icon={faAward} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Exclusive Partnership Benefits</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                    Through our extensive partnership network, RAZY Academy students gain access to
                    opportunities that accelerate their academic and professional success.
                  </p>

                  {/* Benefits in a different layout - circular arrangement */}
                  <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {partnershipBenefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                          data-aos="fade-up"
                          data-aos-delay={200 + (index * 100)}
                        >
                          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <FontAwesomeIcon icon={benefit.icon} className="text-white text-2xl" />
                          </div>
                          <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Partnership CTA - Different from other CTAs */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden" data-aos="fade-up">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-8 left-8">
              <FontAwesomeIcon icon={faHandshake} className="text-4xl" />
            </div>
            <div className="absolute bottom-8 right-8">
              <FontAwesomeIcon icon={faGlobe} className="text-4xl" />
            </div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">Join Our Partnership Network</h3>
            <p className="text-slate-300 text-xl mb-8 leading-relaxed">
              Universities, corporations, and organizations worldwide are discovering the value of partnering with RAZY Academy.
              Together, we're shaping the future of education and creating unprecedented opportunities.
            </p>

            {/* CTA Buttons in a unique layout */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-8">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-900 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center">
                <FontAwesomeIcon icon={faHandshake} className="mr-3" />
                Become a Partner
                <FontAwesomeIcon icon={faArrowRight} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 border border-white/30 backdrop-blur-sm flex items-center">
                <FontAwesomeIcon icon={faGlobe} className="mr-3" />
                Explore Partnerships
                <FontAwesomeIcon icon={faUsers} className="ml-3 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>

            {/* Stats in a horizontal layout */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-blue-400 mr-2">$50M+</div>
                <div className="text-slate-300 text-sm">Scholarships Awarded</div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl font-bold text-green-400 mr-2">95%</div>
                <div className="text-slate-300 text-sm">Partner Satisfaction</div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl font-bold text-purple-400 mr-2">24/7</div>
                <div className="text-slate-300 text-sm">Support Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
