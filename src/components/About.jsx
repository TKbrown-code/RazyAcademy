import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUsers,
  faGlobe,
  faAward,
  faBookOpen,
  faMicroscope,
  faStethoscope,
  faCogs,
  faMusic
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div data-aos="fade-right">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                About RAZY Academy
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                RAZY Academy is a premier online educational institution committed to providing
                world-class higher education through innovative digital learning platforms. Founded
                with the vision of making quality education accessible to everyone, regardless of
                geographical location.
              </p>

              <p>
                Our comprehensive programs span across multiple disciplines including medicine,
                engineering, music, science, humanities, and business. Each program is designed
                by industry experts and accredited professionals to ensure the highest standards
                of academic excellence.
              </p>

              <p>
                With over 15,000 successful graduates worldwide and partnerships with leading
                institutions, RAZY Academy continues to redefine online education through
                cutting-edge technology, personalized learning experiences, and unwavering
                commitment to student success.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-900 mb-1">2018</div>
                <div className="text-sm text-blue-700">Founded</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-900 mb-1">50+</div>
                <div className="text-sm text-blue-700">Countries</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative" data-aos="fade-left">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="RAZY Academy students studying online"
                className="w-full h-96 object-cover"
              />

              {/* Overlay Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faUsers} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">15,000+</div>
                    <div className="text-sm text-slate-600">Happy Students</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faAward} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">AACSB</div>
                    <div className="text-sm text-slate-600">Accredited</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 text-2xl" />
            </div>

            <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faGlobe} className="text-purple-600 text-xl" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
