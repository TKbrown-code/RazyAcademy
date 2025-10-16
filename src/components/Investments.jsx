import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCoins,
  faArrowTrendUp,
  faShieldAlt,
  faCalculator,
  faHandshake,
  faStar,
  faCheckCircle,
  faRocket,
  faLock,
  faPiggyBank
} from "@fortawesome/free-solid-svg-icons";

export default function Investments() {
  const shareOfferings = [
    {
      percentage: "5%",
      price: "$6,000",
      monthlyProfit: "2%",
      duration: "1 Year",
      totalReturn: "$1,440",
      features: ["Low entry barrier", "Stable monthly returns", "1-year commitment"],
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      percentage: "10%",
      price: "$10,000",
      monthlyProfit: "3%",
      duration: "1 Year",
      totalReturn: "$3,600",
      features: ["Higher returns", "Balanced risk", "Popular choice"],
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      percentage: "20%",
      price: "$25,000",
      monthlyProfit: "5%",
      duration: "1 Year",
      totalReturn: "$15,000",
      features: ["Premium returns", "Growth potential", "Exclusive benefits"],
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      percentage: "30%",
      price: "$50,000",
      monthlyProfit: "10%",
      duration: "2 Years",
      totalReturn: "$60,000",
      features: ["Maximum returns", "Long-term growth", "VIP investor status"],
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      percentage: "40%",
      price: "$80,000",
      monthlyProfit: "15%",
      duration: "2 Years",
      totalReturn: "$144,000",
      features: ["Elite investment", "Highest returns", "Strategic partnership"],
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50"
    }
  ];

  const benefits = [
    {
      icon: faArrowTrendUp,
      title: "Consistent Returns",
      description: "Monthly profit payments directly to your account"
    },
    {
      icon: faShieldAlt,
      title: "Secure Investment",
      description: "Backed by RAZY Academy's proven track record and growth"
    },
    {
      icon: faPiggyBank,
      title: "Passive Income",
      description: "Earn profits without active involvement in operations"
    },
    {
      icon: faHandshake,
      title: "Ownership Stake",
      description: "Become a shareholder in our growing educational platform"
    }
  ];

  const stats = [
    { number: "15%", label: "Average Annual Return", icon: faChartLine },
    { number: "$2.5M+", label: "Total Investment", icon: faCoins },
    { number: "500+", label: "Happy Investors", icon: faStar },
    { number: "99.9%", label: "Payment Success Rate", icon: faCheckCircle }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-6">
            <FontAwesomeIcon icon={faChartLine} className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Investment Opportunities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Become a shareholder in RAZY Academy and earn consistent monthly profits
            while supporting the growth of quality education worldwide.
          </p>
        </div>

        {/* Investment Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={stat.icon} className="text-white text-lg" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Share Offerings */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Share Offerings</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose the investment level that best fits your goals. All shares include monthly profit distributions
              and a stake in RAZY Academy's continued success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shareOfferings.map((offering, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 border border-slate-200/60 hover:border-slate-300/80 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden group`}
                data-aos="fade-up"
                data-aos-delay={500 + (index * 100)}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offering.bgColor} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Premium Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${offering.color} text-white shadow-lg`}>
                    {offering.percentage}
                  </div>
                </div>

                {/* Header Section */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${offering.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <FontAwesomeIcon icon={faCoins} className="text-white text-2xl" />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Share Investment</h3>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${offering.color} bg-clip-text text-transparent`}>
                        {offering.price}
                      </span>
                      <span className="text-slate-500 text-sm">one-time</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-slate-600 mb-1">Monthly Profit</div>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${offering.color} bg-clip-text text-transparent`}>
                        {offering.monthlyProfit}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">{offering.duration} commitment</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-4 mb-6">
                    <div className="text-center">
                      <div className="text-xs text-slate-400 mb-1">Total Return</div>
                      <div className="text-2xl font-bold text-white mb-1">{offering.totalReturn}</div>
                      <div className="text-xs text-slate-300">over {offering.duration.toLowerCase()}</div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="relative z-10 mb-8">
                  <h4 className="font-semibold text-slate-800 mb-4">Investment Benefits:</h4>
                  <ul className="space-y-3">
                    {offering.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${offering.color} flex items-center justify-center mr-3 flex-shrink-0`}>
                          <FontAwesomeIcon icon={faCheckCircle} className="text-white text-xs" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="relative z-10">
                  <button className={`w-full bg-gradient-to-r ${offering.color} hover:opacity-90 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg`}>
                    <FontAwesomeIcon icon={faRocket} className="mr-2" />
                    Secure Investment
                  </button>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r ${offering.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="700">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Invest in RAZY Academy?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join thousands of investors who believe in our mission to revolutionize education through technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={800 + (index * 100)}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={benefit.icon} className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Disclosure */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white mb-16" data-aos="fade-up" data-aos-delay="900">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faLock} className="text-yellow-400 text-2xl mr-3" />
              <h3 className="text-3xl font-bold">Important Information</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3">Investment Risks</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                All investments carry risk. Past performance does not guarantee future results.
                Please consult with a financial advisor before investing.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold mb-3">Profit Payments</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Monthly profits are paid directly to your registered account within 7 business days
                of the profit calculation date.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold mb-3">Terms & Conditions</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Investment terms are fixed for the specified duration. Early withdrawal may
                result in penalties. Full terms available upon request.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="1000">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Start Your Investment Journey Today
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join our community of investors who are building the future of education.
            Contact our investment team to learn more about available opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-800 hover:to-teal-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <FontAwesomeIcon icon={faCalculator} className="mr-2" />
              Calculate Returns
            </button>
            <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              <FontAwesomeIcon icon={faHandshake} className="mr-2" />
              Schedule Consultation
            </button>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Minimum investment requirements apply • Professional financial advice recommended • Terms subject to change
          </p>
        </div>
      </div>
    </div>
  );
}
