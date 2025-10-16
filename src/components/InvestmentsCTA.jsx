import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faRocket,
  faArrowRight,
  faHandshake,
  faCoins,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function InvestmentsCTA() {
  const investmentFeatures = [
    {
      icon: faChartLine,
      title: "Strategic Growth",
      description: "Invest in educational innovation and technology"
    },
    {
      icon: faRocket,
      title: "High Impact",
      description: "Support initiatives that transform education globally"
    },
    {
      icon: faHandshake,
      title: "Partnership",
      description: "Join our network of forward-thinking investors"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6 shadow-xl">
            <FontAwesomeIcon icon={faCoins} className="text-3xl text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Invest in the Future of Education
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join RAZY Academy's investment opportunities and be part of transforming education worldwide.
            Discover how your investment can create lasting impact in educational innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {investmentFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FontAwesomeIcon icon={feature.icon} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faArrowUp} className="text-4xl text-blue-400 mr-4" />
              <h3 className="text-3xl font-bold text-white">Ready to Invest?</h3>
            </div>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Explore our investment opportunities and discover how you can contribute to the future of education.
              Our team is ready to discuss partnership opportunities and investment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/investments"
                className="group bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center"
              >
                Explore Investment Opportunities
                <FontAwesomeIcon icon={faArrowRight} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="text-blue-200 text-sm">
                <FontAwesomeIcon icon={faHandshake} className="mr-2" />
                Join our investor community
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">$2M+</div>
            <div className="text-blue-200 text-sm">Total Investments</div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-blue-200 text-sm">Students Impacted</div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-blue-200 text-sm">Partner Institutions</div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="500">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">95%</div>
            <div className="text-blue-200 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
