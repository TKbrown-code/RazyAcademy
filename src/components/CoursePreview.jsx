import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faClock,
  faUsers,
  faStar,
  faCertificate,
  faBookOpen,
  faVideo,
  faChevronRight,
  faGraduationCap,
  faLightbulb,
  faRocket,
  faBrain,
  faGlobe,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

export default function CoursePreview() {
  const courses = [
    {
      id: 1,
      title: "SAT Preparation Mastery",
      instructor: "Dr. Sarah Chen",
      duration: "24 hours",
      lessons: 48,
      rating: 4.9,
      students: 2500,
      price: "$299",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Test Prep",
      description: "Comprehensive SAT preparation with proven strategies and practice tests.",
      features: ["Full-length practice tests", "Score improvement guarantee", "Expert instructors"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Advanced Calculus & Mathematics",
      instructor: "Prof. Marcus Johnson",
      duration: "32 hours",
      lessons: 64,
      rating: 4.8,
      students: 1800,
      price: "$399",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Mathematics",
      description: "Master advanced calculus concepts with real-world applications.",
      features: ["Interactive problem-solving", "Step-by-step explanations", "Practice worksheets"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "English Literature & Writing",
      instructor: "Dr. Aisha Patel",
      duration: "28 hours",
      lessons: 56,
      rating: 4.9,
      students: 3200,
      price: "$349",
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Literature",
      description: "Develop strong writing skills and literary analysis abilities.",
      features: ["Essay writing workshops", "Literature analysis", "Grammar mastery"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      title: "Physics Fundamentals & Applications",
      instructor: "Dr. James Wilson",
      duration: "36 hours",
      lessons: 72,
      rating: 4.7,
      students: 1500,
      price: "$429",
      thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Science",
      description: "Explore the laws of physics through experiments and real-world applications.",
      features: ["Virtual lab experiments", "Problem-solving techniques", "Concept visualization"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 5,
      title: "Business & Entrepreneurship",
      instructor: "Ms. Lisa Rodriguez",
      duration: "20 hours",
      lessons: 40,
      rating: 4.8,
      students: 2800,
      price: "$249",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Business",
      description: "Learn business fundamentals and develop entrepreneurial skills.",
      features: ["Business plan creation", "Financial modeling", "Market analysis"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 6,
      title: "Computer Science & Programming",
      instructor: "Mr. Alex Chen",
      duration: "40 hours",
      lessons: 80,
      rating: 4.9,
      students: 4100,
      price: "$499",
      thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Technology",
      description: "Master programming fundamentals and computer science concepts.",
      features: ["Coding projects", "Algorithm design", "Web development basics"],
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const courseStats = [
    { number: "50+", label: "Video Courses", icon: faVideo },
    { number: "10,000+", label: "Students Enrolled", icon: faUsers },
    { number: "4.8", label: "Average Rating", icon: faStar },
    { number: "95%", label: "Completion Rate", icon: faCertificate }
  ];

  const categories = [
    { name: "Test Prep", count: 8, icon: faGraduationCap },
    { name: "STEM", count: 15, icon: faRocket },
    { name: "Humanities", count: 12, icon: faBookOpen },
    { name: "Business", count: 6, icon: faLightbulb },
    { name: "Languages", count: 10, icon: faGlobe },
    { name: "Arts", count: 5, icon: faBrain }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-6">
            <FontAwesomeIcon icon={faVideo} className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Video Course Library
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access our comprehensive collection of high-quality video courses designed by expert instructors
            to help you excel in your academic and professional journey.
          </p>
        </div>

        {/* Course Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {courseStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={stat.icon} className="text-white text-lg" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Course Categories */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Explore by Category</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover courses across various subjects and disciplines
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={500 + (index * 50)}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={category.icon} className="text-blue-600 text-2xl" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">{category.name}</h4>
                <p className="text-slate-600 text-xs">{category.count} courses</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Courses */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="600">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Featured Video Courses</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Start your learning journey with our most popular and highly-rated video courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={700 + (index * 100)}
              >
                {/* Course Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                      <FontAwesomeIcon icon={faPlay} className="text-slate-900 text-xl ml-1" />
                    </div>
                  </div>
                  {/* Course Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">
                      {course.category}
                    </span>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-bold text-white flex items-center">
                      <FontAwesomeIcon icon={faClock} className="mr-1 text-xs" />
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-slate-900 leading-tight flex-1 mr-4">
                      {course.title}
                    </h4>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>
                      {course.price}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faUsers} className="mr-1 text-xs" />
                      {course.students.toLocaleString()} students
                    </span>
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1 text-xs" />
                      {course.rating}
                    </span>
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faVideo} className="mr-1 text-xs" />
                      {course.lessons} lessons
                    </span>
                  </div>

                  {/* Course Features */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {course.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-600 text-sm">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-cyan-500 text-xs mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructor & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mr-3">
                        <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 text-sm" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{course.instructor}</span>
                    </div>
                    <button className={`px-4 py-2 bg-gradient-to-r ${course.color} text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Watch Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white text-center" data-aos="fade-up" data-aos-delay="900">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their academic performance with our video courses.
            Start your learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-800 hover:to-cyan-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <FontAwesomeIcon icon={faVideo} className="mr-2" />
              Browse All Courses
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 border border-white/30">
              <FontAwesomeIcon icon={faCertificate} className="mr-2" />
              Free Trial Course
            </button>
          </div>
          <p className="text-slate-400 text-sm mt-6">
            30-day money-back guarantee • Lifetime access • Certificate of completion
          </p>
        </div>
      </div>
    </div>
  );
}
