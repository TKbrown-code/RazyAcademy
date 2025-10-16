import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faGraduationCap,
  faGlobe,
  faRocket,
  faHeart,
  faLightbulb,
  faHandshake,
  faTrophy,
  faCheckCircle,
  faMapMarkerAlt,
  faClock,
  faDollarSign,
  faBriefcase,
  faStar,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

export default function StaffRecruitment() {
  const benefits = [
    {
      icon: faGlobe,
      title: "Remote Work",
      description: "Work from anywhere in the world with flexible hours and modern tools"
    },
    {
      icon: faUsers,
      title: "Collaborative Culture",
      description: "Join a diverse team of passionate educators and innovators"
    },
    {
      icon: faGraduationCap,
      title: "Professional Development",
      description: "Continuous learning opportunities and career advancement paths"
    },
    {
      icon: faClock,
      title: "Work-Life Balance",
      description: "Flexible schedules, generous PTO, and mental health support"
    },
    {
      icon: faDollarSign,
      title: "Competitive Compensation",
      description: "Attractive salaries, performance bonuses, and comprehensive benefits"
    },
    {
      icon: faStar,
      title: "Impactful Work",
      description: "Make a real difference in students' lives and educational futures"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      position: "Academic Advisor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quote: "Working at RAZY Academy allows me to combine my passion for education with the flexibility to work remotely. Every day I help students achieve their dreams."
    },
    {
      name: "Marcus Rodriguez",
      position: "Scholarship Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quote: "The impact we make on students' lives is incredible. Seeing someone go from uncertainty to attending their dream university is why I love my job here."
    },
    {
      name: "Dr. Aisha Patel",
      position: "Partnership Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quote: "The collaborative environment and opportunity to work with universities worldwide keeps every day exciting and rewarding."
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mb-6">
            <FontAwesomeIcon icon={faUsers} className="text-white text-2xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Be part of a mission-driven organization that's transforming education worldwide.
            We're seeking passionate individuals who want to make a difference in students' lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-800 hover:to-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              View Open Positions
            </button>
            <button className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Schedule an Interview
            </button>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose RAZY Academy?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're more than just a workplace - we're a community of educators, innovators, and dreamers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={benefit.icon} className="text-indigo-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Testimonials */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="600">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet the passionate professionals who make RAZY Academy a great place to work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={700 + (index * 100)}
              >
                <div className="text-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-indigo-100"
                  />
                </div>

                <blockquote className="text-slate-700 italic text-sm leading-relaxed mb-6 text-center">
                  "{testimonial.quote}"
                </blockquote>

                <div className="text-center">
                  <h4 className="font-bold text-slate-900 text-base mb-1">{testimonial.name}</h4>
                  <p className="text-indigo-600 font-semibold text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white mb-16" data-aos="fade-up" data-aos-delay="800">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Application Process</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              We believe in finding the right fit for both you and our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Apply</h3>
              <p className="text-slate-300 text-sm">Submit your resume and cover letter through our application portal</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Review</h3>
              <p className="text-slate-300 text-sm">Our team reviews applications and reaches out within 5 business days</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Interview</h3>
              <p className="text-slate-300 text-sm">Virtual or in-person interviews with team members and leadership</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Welcome</h3>
              <p className="text-slate-300 text-sm">Join our team and start making a difference in education</p>
            </div>
          </div>
        </div>

        {/* Contact & FAQ */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="900">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Join Our Mission?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Have questions about our positions or the application process?
            We're here to help you take the next step in your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-800 hover:to-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Contact HR Team
            </button>
            <button className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              View All Positions
            </button>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Equal Opportunity Employer • Remote Work Available • Competitive Benefits Package
          </p>
        </div>
      </div>
    </div>
  );
}
