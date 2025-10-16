import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faRocket,
  faHeart,
  faArrowRight,
  faUsers,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function StaffRecruitmentCTA() {
  const careerFeatures = [
    {
      icon: faRocket,
      title: "Growth Opportunities",
      description: "Advance your career in educational innovation"
    },
    {
      icon: faHeart,
      title: "Meaningful Work",
      description: "Make a real impact on students' lives worldwide"
    },
    {
      icon: faUsers,
      title: "Great Team",
      description: "Join a passionate community of educators"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section - Horizontal Layout */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent">
            Shape the Future of Education
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Join a team of passionate educators, innovators, and leaders committed to transforming
            learning experiences worldwide. Your expertise can make a real difference.
          </p>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Join RAZY Academy?</h3>
            </div>

            {careerFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FontAwesomeIcon icon={feature.icon} className="text-xl text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - CTA and Stats */}
          <div className="space-y-8">
            {/* CTA Card */}
            <div
              className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl"
              data-aos="fade-left"
            >
              <div className="text-center">
                <FontAwesomeIcon icon={faUsers} className="text-5xl mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
                <p className="text-emerald-100 mb-8 leading-relaxed">
                  Discover exciting career opportunities and be part of our mission to revolutionize education.
                  We're looking for talented individuals like you to join our growing team.
                </p>
                <Link
                  to="/careers"
                  className="inline-flex items-center bg-white text-emerald-700 font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Explore Opportunities
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-100" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">50+</div>
                <div className="text-slate-600 text-sm font-medium">Team Members</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-100" data-aos="fade-up" data-aos-delay="300">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">15+</div>
                <div className="text-slate-600 text-sm font-medium">Countries</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-100" data-aos="fade-up" data-aos-delay="400">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">98%</div>
                <div className="text-slate-600 text-sm font-medium">Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-100" data-aos="fade-up" data-aos-delay="500">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">24/7</div>
                <div className="text-slate-600 text-sm font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border border-emerald-100 shadow-lg">
            <FontAwesomeIcon icon={faStar} className="text-emerald-600 mr-3" />
            <span className="text-slate-700 font-medium">Join our community of educational innovators</span>
            <FontAwesomeIcon icon={faStar} className="text-emerald-600 ml-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
