import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faCalendarAlt,
  faUser,
  faTags,
  faClock,
  faEye,
  faShare,
  faBookmark,
  faGraduationCap,
  faLightbulb,
  faRocket,
  faHeart,
  faComments,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  const featuredPosts = [
    {
      id: 1,
      title: "10 Proven Strategies to Ace Your SAT Exam",
      excerpt: "Master the SAT with these evidence-based strategies that have helped thousands of students achieve their target scores.",
      author: "Dr. Sarah Chen",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      date: "2024-10-15",
      readTime: "8 min read",
      views: 12450,
      category: "Test Prep",
      tags: ["SAT", "Study Tips", "Exam Strategies"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Online Education: Trends to Watch in 2025",
      excerpt: "Explore the emerging trends shaping the future of digital education and how RAZY Academy is adapting to serve students worldwide.",
      author: "Prof. Marcus Johnson",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      date: "2024-10-12",
      readTime: "6 min read",
      views: 8920,
      category: "Education Technology",
      tags: ["EdTech", "Innovation", "Future Learning"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      featured: true
    },
    {
      id: 3,
      title: "From Failing Grades to Ivy League: A Student's Journey",
      excerpt: "An inspiring story of transformation through dedication, smart study habits, and the right educational support system.",
      author: "Dr. Aisha Patel",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      date: "2024-10-10",
      readTime: "5 min read",
      views: 15600,
      category: "Success Stories",
      tags: ["Motivation", "Success", "Study Habits"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "How to Build Effective Study Habits in College",
      author: "Ms. Lisa Rodriguez",
      date: "2024-10-08",
      category: "Study Tips",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "The Impact of AI on Modern Education",
      author: "Mr. Alex Chen",
      date: "2024-10-05",
      category: "Technology",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Mental Health and Academic Success",
      author: "Dr. James Wilson",
      date: "2024-10-03",
      category: "Wellness",
      readTime: "6 min read"
    }
  ];

  const categories = [
    { name: "Study Tips", count: 24, icon: faLightbulb, color: "from-blue-500 to-cyan-600" },
    { name: "Success Stories", count: 18, icon: faRocket, color: "from-green-500 to-emerald-600" },
    { name: "Education Technology", count: 15, icon: faGraduationCap, color: "from-purple-500 to-indigo-600" },
    { name: "Career Advice", count: 12, icon: faHeart, color: "from-pink-500 to-rose-600" },
    { name: "Exam Preparation", count: 20, icon: faBookmark, color: "from-orange-500 to-red-600" }
  ];

  const blogStats = [
    { number: "150+", label: "Blog Posts", icon: faNewspaper },
    { number: "500K+", label: "Monthly Readers", icon: faEye },
    { number: "50+", label: "Expert Writers", icon: faUser },
    { number: "95%", label: "Reader Satisfaction", icon: faHeart }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 40c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Magazine-style Header - Different from others */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8 shadow-2xl">
            <FontAwesomeIcon icon={faNewspaper} className="text-white text-4xl" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-800 via-pink-700 to-indigo-800 bg-clip-text text-transparent leading-tight">
            RAZY INSIGHTS
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Where education meets innovation • Expert perspectives • Student success stories • Future of learning
          </p>
        </div>

        {/* Magazine Layout - Hero Feature + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Main Feature - Large Article */}
          <div className="lg:col-span-2" data-aos="fade-right">
            {featuredPosts.length > 0 && (
              <article className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                {/* Hero Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={featuredPosts[0].image}
                    alt={featuredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-900 font-bold text-sm rounded-full">
                      {featuredPosts[0].category}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {featuredPosts[0].title}
                    </h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <img
                        src={featuredPosts[0].authorImage}
                        alt={featuredPosts[0].author}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span className="font-medium">{featuredPosts[0].author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(featuredPosts[0].date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {featuredPosts[0].excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPosts[0].tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Engagement */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-6 text-slate-500">
                      <span className="flex items-center">
                        <FontAwesomeIcon icon={faEye} className="mr-2" />
                        {featuredPosts[0].views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <FontAwesomeIcon icon={faComments} className="mr-2" />
                        42
                      </span>
                    </div>
                    <button className="text-purple-600 hover:text-purple-800 font-semibold flex items-center transition-colors duration-300">
                      Read Full Article
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
                    </button>
                  </div>
                </div>
              </article>
            )}
          </div>

          {/* Sidebar - Stats & Categories */}
          <div className="space-y-8" data-aos="fade-left">
            {/* Blog Metrics */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Publication Metrics</h3>
              <div className="space-y-4">
                {blogStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                        <FontAwesomeIcon icon={stat.icon} className="text-white text-sm" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-slate-900">{stat.number}</div>
                        <div className="text-sm text-slate-600">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Explore Topics</h3>
              <div className="space-y-3">
                {categories.slice(0, 3).map((category, index) => (
                  <div key={index} className={`p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${index === 0 ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' : 'bg-slate-50 hover:bg-slate-100'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={category.icon} className={`mr-3 ${index === 0 ? 'text-white' : 'text-purple-600'}`} />
                        <span className={`font-semibold ${index === 0 ? 'text-white' : 'text-slate-900'}`}>{category.name}</span>
                      </div>
                      <span className={`text-sm ${index === 0 ? 'text-purple-100' : 'text-slate-500'}`}>{category.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Articles - Magazine Grid Layout */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Latest Articles</h3>
            <p className="text-slate-600 text-lg">Fresh perspectives on education, careers, and innovation</p>
          </div>

          {/* Magazine-style grid - different sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large featured article */}
            {recentPosts.slice(0, 1).map((post, index) => (
              <article key={`large-${index}`} className="md:col-span-2 lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" data-aos="fade-up" data-aos-delay={200}>
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPosts[1]?.image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium mb-3">
                      {post.category}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {post.title.length > 50 ? `${post.title.substring(0, 80)}...` : post.title}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Smaller articles in sidebar style */}
            <div className="space-y-6">
              {recentPosts.slice(1).map((post, index) => (
                <article key={`small-${index}`} className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay={400 + (index * 100)}>
                  <div className="flex gap-4">
                    <img
                      src={featuredPosts[index + 2]?.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full mb-2">
                        {post.category}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {/* Newsletter signup in magazine style */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white" data-aos="fade-up" data-aos-delay="700">
                <div className="text-center">
                  <FontAwesomeIcon icon={faNewspaper} className="text-2xl mb-3 opacity-90" />
                  <h4 className="font-bold mb-2">Weekly Digest</h4>
                  <p className="text-purple-100 text-sm mb-4">
                    Get the best articles delivered to your inbox
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 rounded-lg text-slate-900 placeholder-slate-500 text-sm mb-3"
                  />
                  <button className="w-full bg-white text-purple-700 font-bold py-2 px-4 rounded-lg text-sm hover:bg-purple-50 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Magazine-style CTA - Different from other CTAs */}
        <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-16 text-white text-center relative overflow-hidden" data-aos="fade-up">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8">
              <FontAwesomeIcon icon={faNewspaper} className="text-4xl" />
            </div>
            <div className="absolute top-8 right-8">
              <FontAwesomeIcon icon={faComments} className="text-3xl" />
            </div>
            <div className="absolute bottom-8 left-8">
              <FontAwesomeIcon icon={faShare} className="text-3xl" />
            </div>
            <div className="absolute bottom-8 right-8">
              <FontAwesomeIcon icon={faBookmark} className="text-3xl" />
            </div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <FontAwesomeIcon icon={faNewspaper} className="text-4xl text-purple-300" />
              </div>
            </div>

            <h3 className="text-4xl font-bold mb-6">Share Your Story</h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Have insights about education, career advice, or success stories to share?
              Join our community of writers and educators contributing to the future of learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <FontAwesomeIcon icon={faLightbulb} className="text-3xl text-yellow-400 mb-3" />
                <h4 className="font-bold mb-2">Expert Insights</h4>
                <p className="text-slate-400 text-sm">Share your knowledge and experience</p>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon={faRocket} className="text-3xl text-green-400 mb-3" />
                <h4 className="font-bold mb-2">Success Stories</h4>
                <p className="text-slate-400 text-sm">Inspire others with your journey</p>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon={faHeart} className="text-3xl text-red-400 mb-3" />
                <h4 className="font-bold mb-2">Community Impact</h4>
                <p className="text-slate-400 text-sm">Help build a supportive network</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-800 hover:to-pink-800 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                <FontAwesomeIcon icon={faNewspaper} className="mr-3" />
                Become a Contributor
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 border border-white/30 backdrop-blur-sm flex items-center justify-center">
                <FontAwesomeIcon icon={faComments} className="mr-3" />
                Start a Discussion
              </button>
            </div>

            <p className="text-slate-400 text-sm mt-6">
              📝 Reach thousands of readers • 💡 Share your expertise • 🌟 Make an impact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
