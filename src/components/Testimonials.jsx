import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapMarkerAlt, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "MD, Emergency Medicine",
      program: "Bachelor of Medicine",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "RAZY Academy transformed my career in medicine. The online format allowed me to balance my studies with clinical work.",
      achievements: ["Top 5% of class", "Published 3 research papers"],
      location: "Boston, USA",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Software Engineer",
      program: "Master of Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "The flexibility of RAZY Academy's online programs allowed me to advance my career while working full-time.",
      achievements: ["Senior Engineer at Google", "Led 5 major projects"],
      location: "Singapore",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Maria Rodriguez",
      role: "PhD in Engineering",
      program: "Doctor of Engineering",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "RAZY Academy provided me with the research opportunities and academic rigor I needed for my PhD.",
      achievements: ["Published in Nature", "Research Fellow at MIT"],
      location: "Madrid, Spain",
      rating: 5
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Concert Pianist",
      program: "Master of Music",
      image: "https://images.unsplash.com/photo-1472099645785-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "The music program at RAZY Academy exceeded my expectations with virtual masterclasses from world-renowned professors.",
      achievements: ["Performed at Carnegie Hall", "Grammy nominee"],
      location: "London, UK",
      rating: 5
    },
    // Add more testimonials for carousel functionality
    {
      id: 5,
      name: "Dr. Ahmed Hassan",
      role: "Cardiologist",
      program: "Master of Medicine",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "RAZY Academy's advanced medical curriculum prepared me for leadership in cardiology research and patient care.",
      achievements: ["Board Certified Cardiologist", "Research Director"],
      location: "Dubai, UAE",
      rating: 5
    },
    {
      id: 6,
      name: "Sophie Laurent",
      role: "Data Scientist",
      program: "PhD in Technology",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "The interdisciplinary approach at RAZY Academy gave me the perfect foundation for cutting-edge data science research.",
      achievements: ["Published in Science", "Tech Lead at DeepMind"],
      location: "Paris, France",
      rating: 5
    },
    {
      id: 7,
      name: "Carlos Mendoza",
      role: "Civil Engineer",
      program: "Bachelor of Engineering",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "RAZY Academy's practical engineering curriculum and industry partnerships launched my successful career in infrastructure.",
      achievements: ["Project Manager", "PE License", "Award-winning Designs"],
      location: "Mexico City, Mexico",
      rating: 5
    },
    {
      id: 8,
      name: "Emma Thompson",
      role: "Professional Violinist",
      program: "Master of Music Performance",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      quote: "The virtual performance opportunities and masterclasses at RAZY Academy elevated my violin performance to professional levels.",
      achievements: ["Berlin Philharmonic", "Multiple Recordings", "Teaching Artist"],
      location: "Vienna, Austria",
      rating: 5
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('testimonials-container');
    const cardWidth = container.children[0].offsetWidth + 24; // card width + gap
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('testimonials-container');
    const cardWidth = container.children[0].offsetWidth + 24; // card width + gap
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories from RAZY Academy graduates who transformed their careers through our programs.
          </p>
        </div>

        {/* Testimonials Horizontal Scroll */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          {/* Scrollable Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white">
            <div
              id="testimonials-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth p-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full sm:w-80 md:w-96"
                >
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    {/* Student Photo */}
                    <div className="text-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-blue-100"
                      />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} className="text-sm" />
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-slate-700 italic text-sm leading-relaxed mb-4 text-center">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Student Info */}
                    <div className="text-center">
                      <h3 className="font-bold text-slate-900 text-base mb-1">{testimonial.name}</h3>
                      <p className="text-blue-600 font-medium text-sm mb-1">{testimonial.role}</p>
                      <p className="text-slate-600 text-xs mb-2">{testimonial.program}</p>

                      {/* Location */}
                      <div className="flex items-center justify-center gap-1 text-slate-500 text-xs mb-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>{testimonial.location}</span>
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-1">
                        {testimonial.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-slate-600 text-xs">
                            <FontAwesomeIcon icon={faStar} className="text-blue-500 text-xs" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            aria-label="Scroll left"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-slate-700" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            aria-label="Scroll right"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-slate-700" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="600">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-2">15,000+</div>
            <div className="text-slate-600 text-sm">Graduates</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
            <div className="text-slate-600 text-sm">Success Rate</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
            <div className="text-slate-600 text-sm">Partners</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-900 mb-2">$80K</div>
            <div className="text-slate-600 text-sm">Avg Salary</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="800">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-800 hover:to-blue-900 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Apply for Admission
          </button>
        </div>
      </div>
    </div>
  );
}
