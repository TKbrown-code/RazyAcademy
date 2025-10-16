import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faTrophy,
  faUsers,
  faGlobe,
  faCheckCircle,
  faCalendarAlt,
  faRocket,
  faLightbulb,
  faHandshake,
  faStar,
  faAward,
  faUniversity,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

export default function Scholarships() {
  const services = [
    {
      icon: faLightbulb,
      title: "Scholarship Strategy",
      description: "Personalized guidance to identify scholarships that match your profile, interests, and goals.",
      features: ["Profile analysis", "Scholarship matching", "Application timeline", "Success probability assessment"]
    },
    {
      icon: faTrophy,
      title: "Application Support",
      description: "Expert assistance in crafting compelling scholarship applications and personal statements.",
      features: ["Essay writing help", "Recommendation letter guidance", "Application review", "Interview preparation"]
    },
    {
      icon: faHandshake,
      title: "University Partnerships",
      description: "Direct connections with universities and access to exclusive scholarship opportunities.",
      features: ["Partner university access", "Early application deadlines", "Internal recommendations", "Priority consideration"]
    },
    {
      icon: faRocket,
      title: "Success Coaching",
      description: "Ongoing mentorship and coaching to maximize your chances of winning scholarships.",
      features: ["Regular check-ins", "Performance tracking", "Strategy adjustments", "Motivation support"]
    }
  ];

  const successStats = [
    { number: "85%", label: "Success Rate", icon: faTrophy },
    { number: "$2.5M+", label: "Total Scholarships Won", icon: faAward },
    { number: "50+", label: "Partner Universities", icon: faUniversity },
    { number: "1200+", label: "Students Helped", icon: faUsers }
  ];

  const scholarshipTypes = [
    "Merit-based scholarships",
    "Need-based financial aid",
    "Athletic scholarships",
    "STEM scholarships",
    "International student awards",
    "Leadership scholarships",
    "Research fellowships",
    "Creative arts scholarships"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      university: "Harvard University",
      scholarship: "$150,000",
      quote: "RAZY Academy helped me secure a full scholarship to Harvard. Their personalized strategy and application support made all the difference.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Marcus Johnson",
      university: "Stanford University",
      scholarship: "$200,000",
      quote: "From profile analysis to interview preparation, RAZY Academy provided comprehensive support that led to my Stanford scholarship.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Aisha Patel",
      university: "MIT",
      scholarship: "$180,000",
      quote: "Their university partnerships and insider knowledge helped me navigate the complex scholarship application process successfully.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
            <FontAwesomeIcon icon={faTrophy} className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Scholarship Admission Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We don't provide scholarships - we help you win them! RAZY Academy's expert guidance
            and university partnerships have helped thousands of students secure millions in scholarship funding.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {successStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={stat.icon} className="text-white text-lg" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-12" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">How We Help You Win Scholarships</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our comprehensive scholarship admission services provide everything you need to compete successfully
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={400 + (index * 100)}
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={service.icon} className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-slate-600 text-sm">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-cyan-500 text-xs mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scholarship Types */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 mb-16 text-white" data-aos="fade-up" data-aos-delay="600">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Types of Scholarships We Help With</h3>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Our expertise spans across all major scholarship categories, giving you access to diverse funding opportunities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scholarshipTypes.map((type, index) => (
              <div key={index} className="flex items-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm mr-3 flex-shrink-0" />
                <span className="text-sm">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories - Horizontal Scroll */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="700">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Success Stories</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real students who transformed their educational futures with our scholarship admission services
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white">
            <div
              id="scholarships-testimonials-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth p-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-80 md:w-96"
                >
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="text-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-blue-100"
                      />
                    </div>

                    <blockquote className="text-slate-700 italic text-sm leading-relaxed mb-4 text-center">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="text-center">
                      <h4 className="font-bold text-slate-900 text-base mb-1">{testimonial.name}</h4>
                      <p className="text-blue-600 font-semibold text-sm mb-1">{testimonial.university}</p>
                      <p className="text-cyan-600 font-bold text-lg">{testimonial.scholarship}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                const container = document.getElementById('scholarships-testimonials-container');
                if (container) {
                  const cardWidth = container.children[0]?.offsetWidth || 0;
                  const gap = 24; // gap-6 = 1.5rem = 24px
                  const scrollAmount = cardWidth + gap;
                  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
              aria-label="Scroll left"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-slate-700" />
            </button>

            <button
              onClick={() => {
                const container = document.getElementById('scholarships-testimonials-container');
                if (container) {
                  const cardWidth = container.children[0]?.offsetWidth || 0;
                  const gap = 24; // gap-6 = 1.5rem = 24px
                  const scrollAmount = cardWidth + gap;
                  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
              aria-label="Scroll right"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-slate-700" />
            </button>
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6">
            <div className="text-slate-500 text-sm">
              ← Scroll horizontally to see more success stories →
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white mb-16" data-aos="fade-up" data-aos-delay="900">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Your Scholarship Journey</h3>
            <p className="text-blue-200 text-lg">From application to acceptance - we guide you every step</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Initial Consultation</h4>
              <p className="text-blue-200 text-sm">Profile assessment and goal setting</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Strategy Development</h4>
              <p className="text-blue-200 text-sm">Customized scholarship plan</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Application Support</h4>
              <p className="text-blue-200 text-sm">Complete application assistance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Scholarship Success</h4>
              <p className="text-blue-200 text-sm">Celebrating your achievements</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="1000">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Win Scholarships?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have secured scholarships to top universities
            with RAZY Academy's expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <FontAwesomeIcon icon={faRocket} className="mr-2" />
              Start Your Scholarship Journey
            </button>
            <button className="bg-white border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Schedule Free Consultation
            </button>
          </div>
          <p className="text-slate-500 text-sm mt-4">
            No upfront costs • Money-back guarantee • Results-driven approach
          </p>
        </div>
      </div>
    </div>
  );
}
