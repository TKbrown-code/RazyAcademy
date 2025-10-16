import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faStethoscope,
  faCogs,
  faMusic,
  faMicroscope,
  faBookOpen,
  faUsers,
  faGlobe,
  faArrowRight,
  faStar,
  faUsers as faStudents
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  // Schools matching TableOfContent structure
  const schools = [
    {
      title: "Music Academy",
      icon: faMusic,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      description: "Professional music production training"
    },
    {
      title: "Medical Science",
      icon: faStethoscope,
      color: "text-cyan-700",
      bgColor: "bg-cyan-50",
      description: "Healthcare education and training"
    },
    {
      title: "Engineering",
      icon: faCogs,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Technical innovation and design"
    },
    {
      title: "Technology",
      icon: faMicroscope,
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
      description: "Modern tech education and skills"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-16 opacity-10">
          <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 text-5xl" />
        </div>
        <div className="absolute top-32 right-20 opacity-10">
          <FontAwesomeIcon icon={faGlobe} className="text-blue-600 text-4xl" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-10">
          <FontAwesomeIcon icon={faStar} className="text-blue-600 text-4xl" />
        </div>
        <div className="absolute bottom-20 right-16 opacity-10">
          <FontAwesomeIcon icon={faStudents} className="text-blue-600 text-5xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Mature, Professional Header */}
          <div className="mb-12" data-aos="fade-down" data-aos-delay="200">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full mb-8 shadow-lg" data-aos="zoom-in" data-aos-delay="400">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white text-2xl" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight" data-aos="fade-up" data-aos-delay="300">
              RAZY ACADEMY
            </h1>

            <p className="text-xl sm:text-2xl text-slate-700 mb-6 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              Excellence in Higher Education. Transform your future with accredited degree programs
              in medicine, engineering, music, science, humanities, and business.
            </p>

            <div className="flex items-center justify-center gap-6 text-slate-600 mb-8" data-aos="fade-up" data-aos-delay="500">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGlobe} className="text-blue-600" />
                <span className="font-medium">Accredited</span>
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600" />
                <span className="font-medium">Online Degrees</span>
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} className="text-blue-600" />
                <span className="font-medium">Global Recognition</span>
              </span>
            </div>
          </div>

          {/* Schools in 4-column Grid (matching TableOfContent) */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Academic Schools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {schools.map((school, index) => (
                <div key={index} className="group bg-white rounded-xl p-6 border border-blue-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay={700 + (index * 100)}>
                  <div className="flex items-center justify-center w-14 h-14 ${school.bgColor} rounded-lg mb-4 group-hover:bg-blue-100 transition-colors">
                    <FontAwesomeIcon icon={school.icon} className={`${school.color} text-2xl`} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {school.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {school.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link
                      to="/programs"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Programs
                      <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-xs" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mature CTA Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="900">
            <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="1000">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Begin Your Academic Journey</h3>
              <p className="text-slate-700 mb-6">
                Join thousands of students worldwide who trust RAZY Academy for their higher education goals.
              </p>

              <Link
                to="/programs"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                data-aos="zoom-in" data-aos-delay="1100"
              >
                <FontAwesomeIcon icon={faGraduationCap} className="text-xl" />
                Explore Degree Programs
                <FontAwesomeIcon icon={faArrowRight} className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-200" data-aos="fade-up" data-aos-delay="1200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-1">15,000+</div>
                <div className="text-slate-600 text-sm">Students Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-1">98%</div>
                <div className="text-slate-600 text-sm">Graduation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-1">50+</div>
                <div className="text-slate-600 text-sm">Partner Universities</div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-6 pt-6 border-t border-slate-200" data-aos="fade-up" data-aos-delay="1300">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-lg" />
                ))}
              </div>
              <span className="text-slate-700 font-medium">4.9/5 Student Satisfaction Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}