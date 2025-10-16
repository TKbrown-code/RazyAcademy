import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUsers,
  faCertificate,
  faClock,
  faHandshake,
  faRocket,
  faShieldAlt,
  faLightbulb,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  const features = [
    {
      icon: faGlobe,
      title: "Global Recognition",
      description: "Internationally accredited programs recognized by universities and employers worldwide.",
      color: "text-blue-600"
    },
    {
      icon: faUsers,
      title: "Expert Faculty",
      description: "Learn from industry leaders, renowned professors, and successful professionals.",
      color: "text-green-600"
    },
    {
      icon: faCertificate,
      title: "Accredited Degrees",
      description: "Earn legitimate degrees and certifications from accredited institutions.",
      color: "text-purple-600"
    },
    {
      icon: faClock,
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to course materials and resources.",
      color: "text-orange-600"
    },
    {
      icon: faHandshake,
      title: "Career Support",
      description: "Comprehensive career guidance, internship opportunities, and job placement assistance.",
      color: "text-indigo-600"
    },
    {
      icon: faRocket,
      title: "Practical Experience",
      description: "Hands-on projects, real-world applications, and industry-relevant curriculum.",
      color: "text-red-600"
    }
  ];

  const benefits = [
    "No entrance exams required",
    "Flexible payment plans available",
    "Lifetime access to course materials",
    "Industry-recognized certifications",
    "Personal mentor support",
    "Global alumni network"
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose RAZY Academy?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover what sets RAZY Academy apart and why thousands of students worldwide
            choose us for their educational journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 ${feature.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-2xl flex items-center justify-center mr-4`}>
                  <FontAwesomeIcon icon={feature.icon} className={`${feature.color} text-2xl`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16" data-aos="fade-up" data-aos-delay="400">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-3xl mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Trusted by Industry Leaders</h3>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                RAZY Academy partners with leading companies and institutions to ensure our
                graduates are equipped with the skills and knowledge that employers demand.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-slate-800 font-semibold">500+ Partner Companies</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-slate-800 font-semibold">95% Job Placement Rate</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-slate-800 font-semibold">$80K Average Salary</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faLightbulb} className="text-white text-4xl" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-white text-sm" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Innovation First</h4>
              <p className="text-slate-600">
                We continuously update our curriculum to stay ahead of industry trends and technological advancements.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-slate-900 rounded-3xl p-12 text-white" data-aos="fade-up" data-aos-delay="600">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">What You Get With RAZY Academy</h3>
            <p className="text-slate-300 text-lg">
              Everything you need for a successful academic and professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-white text-sm" />
                </div>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates and transform your future with RAZY Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-800 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Explore Programs
            </button>
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
