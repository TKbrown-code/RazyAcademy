import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faGraduationCap,
  faMusic,
  faStethoscope,
  faCogs,
  faMicroscope,
  faBookOpen,
  faGlobe,
  faUsers,
  faStar,
  faShoppingCart,
  faArrowRight,
  faPlay,
  faPlayCircle,
  faBriefcase,
  faRocket,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

export default function TableOfContent() {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  // DATA
  const musicCourses = {
    beginner: {
      title: "Beginner Level",
      icon: faPlay,
      price: 500,
      courses: [
        {
          name: "Introduction to Music Production",
          details: [
            "Basics of sound, DAWs (FL Studio, Ableton, Logic, Pro Tools, etc.)",
            "Home studio setup essentials.",
          ],
        },
        {
          name: "Music Theory for Producers",
          details: [
            "Scales, chords, melody, rhythm.",
            "How to apply theory in beat making.",
          ],
        },
        {
          name: "Beat Making Basics",
          details: [
            "Hip-hop, Afrobeats, Dancehall, EDM.",
            "Drum patterns and loop creation.",
          ],
        },
      ],
    },
    intermediate: {
      title: "Intermediate Level",
      icon: faPlayCircle,
      price: 1000,
      courses: [
        {
          name: "Sound Design & Synthesis",
          details: ["Using VSTs (Serum, Massive, Omnisphere).", "Designing custom sounds."],
        },
        {
          name: "Mixing Essentials",
          details: ["EQ, compression, reverb, delay.", "Balancing instruments and vocals."],
        },
        {
          name: "Songwriting & Arrangement",
          details: ["Structuring a track (intro, verse, chorus, bridge, outro).", "Writing hooks and lyrics."],
        },
        {
          name: "Recording & Vocal Production",
          details: ["Microphone techniques.", "Vocal tuning, harmonies, adlibs."],
        },
      ],
    },
    advanced: {
      title: "Advanced Level",
      icon: faRocket,
      courses: [
        {
          name: "Advanced Mixing & Mastering",
          details: ["Stereo imaging, multi-band compression, limiting.", "Preparing tracks for streaming platforms."],
        },
        {
          name: "Genre-Specific Production",
          details: ["Afrobeats, Trap/Hip-hop, EDM & House production."],
        },
        {
          name: "Live Performance & DJing",
          details: ["Using Ableton Live, Serato, Rekordbox.", "Performing with MIDI controllers."],
        },
      ],
    },
    business: {
      title: "Business & Career",
      icon: faBriefcase,
      price: 2000,
      courses: [
        {
          name: "Music Marketing & Distribution",
          details: ["How to release music on Spotify, Apple Music, Audiomack.", "Branding as an artist/producer."],
        },
        {
          name: "Music Business & Copyright",
          details: ["Royalties, publishing, licensing."],
        },
      ],
    },
    standalone: {
      title: "Standalone Courses",
      icon: faStar,
      courses: [{ name: "Mixing & Mastering", details: [], price: 500 }],
    },
  };

  const medicalPrograms = {
    programs: {
      title: "Medical Science",
      icon: faStethoscope,
      courses: [
        {
          name: "Intro to Medical",
          details: [],
          price: 100,
        },
        {
          name: "Certificate in Medical Science",
          details: [],
          price: 1000,
        },
        {
          name: "Diploma in Medical",
          details: [],
          price: 2000,
        },
        {
          name: "Foundation",
          details: [],
          price: 3000,
        },
        {
          name: "Bachelor's",
          details: [],
          price: 5000,
        },
      ],
    },
  };

  const Engineering = {
    Programs: {
      title: "Course Level",
      icon: faCogs,
      courses: [
        {
          name: "Intro/Short Course",
          details: ["CAD basics", "Software Engineering", "Skills Upskill"],
        },
        {
          name: "Certificate in Engineering",
          details: ["basic foundational topics"],
        },
        {
          name: "Diploma in Engineering",
          details: ["Mechanical Engineering", "Electrical Engineering", "Civil Tech Focus"],
        },
        {
          name: "Bachelor's Degree in Engineering",
          details: [],
        },
        {
          name: "Master's Degree in Engineering",
          details: [],
        },
      ],
    },
  };

  const SchoolOfEngineering = {
    Programs: {
      title: "Technology",
      icon: faMicroscope,
      courses: [
        {
          name: "Intro/Short Course",
          details: ["Basic Coding", "Web Design", "IT Fundamentals"],
        },
        {
          name: "Certificate Program",
          details: ["Front-End Development", "Network Basics", "Tech Support"],
        },
        {
          name: "Diploma",
          details: ["Software Dev", "Cybersecurity", "AI Foundation"],
        },
        {
          name: "Bachelor's Degree in Technology",
          details: ["Computer Science", "Information System", "etc."],
        },
        {
          name: "Master's Degree/Advanced Specialization",
          details: ["Data Science", "Software Engineering"],
        },
      ],
    },
  };

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-3">Our Programs</h1>
        <p className="text-lg text-blue-900 max-w-2xl mx-auto">
          Discover our comprehensive range of accredited programs designed to prepare you
          for success in medicine, engineering, music, and technology.
        </p>
      </div>

      {/* 4-Column Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* MUSIC ACADEMY */}
        <div className="bg-white rounded-xl shadow-lg border border-blue-200 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <FontAwesomeIcon icon={faMusic} className="text-lg" />
              <h2 className="text-lg font-bold">Music Academy</h2>
            </div>
            <p className="text-cyan-100 text-xs">Professional music production training</p>
          </div>

          <div className="p-4">
            {Object.values(musicCourses).map((section, idx) => (
              <div key={idx} className="mb-4">
                <div className="mb-2 flex items-center gap-1">
                  <FontAwesomeIcon icon={section.icon} className="text-cyan-600 text-sm" />
                  <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-1">
                  {section.courses.map((c, i) => {
                    const id = `${idx}-${i}`;
                    return (
                      <li key={id} className="border border-gray-200 rounded-md overflow-hidden">
                        <button
                          className="w-full p-2 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                          onClick={() => toggle(id)}
                        >
                          <strong className="text-xs text-gray-900">{c.name}</strong>
                          <FontAwesomeIcon
                            icon={open === id ? faChevronDown : faChevronRight}
                            className="text-gray-400 text-xs"
                          />
                        </button>
                        {open === id && (
                          <div className="px-2 pb-2 bg-white">
                            {c.details.length > 0 && (
                              <ul className="mt-1 space-y-1">
                                {c.details.map((d, j) => (
                                  <li key={j} className="text-xs text-gray-700 flex items-start gap-1">
                                    <span className="text-blue-500 mt-0.5">•</span>
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {c.price && (
                              <p className="mt-1 text-xs font-semibold text-blue-600">
                                Price: ${c.price}
                              </p>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <div className="pt-3 border-t border-gray-200">
              <button
                onClick={() => navigate('/music')}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
              >
                View more
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
            </div>
          </div>
        </div>

        {/* MEDICAL SCIENCE */}
        <div className="bg-white rounded-xl shadow-lg border border-blue-200 overflow-hidden" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <FontAwesomeIcon icon={faStethoscope} className="text-lg" />
              <h2 className="text-lg font-bold">Medical Science</h2>
            </div>
            <p className="text-cyan-100 text-xs">Healthcare education and training</p>
          </div>

          <div className="p-4">
            {Object.values(medicalPrograms).map((section, idx) => (
              <div key={idx} className="mb-4">
                <div className="mb-2 flex items-center gap-1">
                  <FontAwesomeIcon icon={section.icon} className="text-cyan-600 text-sm" />
                  <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-1">
                  {section.courses.map((c, i) => {
                    const id = `med-${i}`;
                    return (
                      <li key={id} className="border border-gray-200 rounded-md overflow-hidden">
                        <button
                          className="w-full p-2 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                          onClick={() => toggle(id)}
                        >
                          <strong className="text-xs text-gray-900">{c.name}</strong>
                          <FontAwesomeIcon
                            icon={open === id ? faChevronDown : faChevronRight}
                            className="text-gray-400 text-xs"
                          />
                        </button>
                        {open === id && (
                          <div className="px-2 pb-2 bg-white">
                            {c.details.length > 0 && (
                              <ul className="mt-1 space-y-1">
                                {c.details.map((d, j) => (
                                  <li key={j} className="text-xs text-gray-700 flex items-start gap-1">
                                    <span className="text-blue-500 mt-0.5">•</span>
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {c.price && (
                              <p className="mt-1 text-xs font-semibold text-blue-600">
                                Price: ${c.price}
                              </p>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ENGINEERING */}
        <div className="bg-white rounded-xl shadow-lg border border-blue-200 overflow-hidden" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <FontAwesomeIcon icon={faCogs} className="text-lg" />
              <h2 className="text-lg font-bold">Engineering</h2>
            </div>
            <p className="text-blue-100 text-xs">Technical innovation and design</p>
          </div>

          <div className="p-4">
            {Object.entries(Engineering).map(([sectionKey, section], idx) => (
              <div key={sectionKey} className="mb-4">
                <div className="mb-2 flex items-center gap-1">
                  <FontAwesomeIcon icon={section.icon} className="text-blue-600 text-sm" />
                  <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-1">
                  {section.courses.map((c, i) => {
                    const id = `Engineering-${sectionKey}-${i}`;
                    return (
                      <li key={id} className="border border-gray-200 rounded-md overflow-hidden">
                        <button
                          className="w-full p-2 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                          onClick={() => toggle(id)}
                        >
                          <strong className="text-xs text-gray-900">{c.name}</strong>
                          <FontAwesomeIcon
                            icon={open === id ? faChevronDown : faChevronRight}
                            className="text-gray-400 text-xs"
                          />
                        </button>
                        {open === id && (
                          <div className="px-2 pb-2 bg-white">
                            {c.details.length > 0 && (
                              <ul className="mt-1 space-y-1">
                                {c.details.map((d, j) => (
                                  <li key={`${id}-detail-${j}`} className="text-xs text-gray-700 flex items-start gap-1">
                                    <span className="text-blue-500 mt-0.5">•</span>
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {c.price && (
                              <p className="mt-1 text-xs font-semibold text-blue-600">
                                Price: ${c.price}
                              </p>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <div className="pt-3 border-t border-gray-200">
              <button
                onClick={() => navigate('/engineering')}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
              >
                View more
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
            </div>
          </div>
        </div>

        {/* SCHOOL OF TECHNOLOGY */}
        <div className="bg-white rounded-xl shadow-lg border border-blue-200 overflow-hidden" data-aos="fade-up" data-aos-delay="800">
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <FontAwesomeIcon icon={faMicroscope} className="text-lg" />
              <h2 className="text-lg font-bold">Technology</h2>
            </div>
            <p className="text-cyan-100 text-xs">Modern tech education and skills</p>
          </div>

          <div className="p-4">
            {Object.entries(SchoolOfEngineering).map(([sectionKey, section], idx) => (
              <div key={sectionKey} className="mb-4">
                <div className="mb-2 flex items-center gap-1">
                  <FontAwesomeIcon icon={section.icon} className="text-cyan-600 text-sm" />
                  <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-1">
                  {section.courses.map((c, i) => {
                    const id = `SchoolOfEngineering-${sectionKey}-${i}`;
                    return (
                      <li key={id} className="border border-gray-200 rounded-md overflow-hidden">
                        <button
                          className="w-full p-2 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                          onClick={() => toggle(id)}
                        >
                          <strong className="text-xs text-gray-900">{c.name}</strong>
                          <FontAwesomeIcon
                            icon={open === id ? faChevronDown : faChevronRight}
                            className="text-gray-400 text-xs"
                          />
                        </button>
                        {open === id && (
                          <div className="px-2 pb-2 bg-white">
                            {c.details.length > 0 && (
                              <ul className="mt-1 space-y-1">
                                {c.details.map((d, j) => (
                                  <li key={`${id}-detail-${j}`} className="text-xs text-gray-700 flex items-start gap-1">
                                    <span className="text-blue-500 mt-0.5">•</span>
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enrollment CTA Section */}
      <div className="bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-800 rounded-2xl p-8 text-center text-white relative overflow-hidden" data-aos="fade-up" data-aos-delay="1000">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8">
            <FontAwesomeIcon icon={faGraduationCap} className="text-6xl" />
          </div>
          <div className="absolute bottom-4 right-8">
            <FontAwesomeIcon icon={faStar} className="text-5xl" />
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <FontAwesomeIcon icon={faGraduationCap} className="text-4xl text-blue-200" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h2>

          <p className="text-xl text-blue-100 mb-6 leading-relaxed">
            Join thousands of successful graduates who started their journey at RAZY Academy.
            Our accredited programs open doors to prestigious careers in medicine, engineering, music, and beyond.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-cyan-400" />
              <span>Accredited Programs</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faGlobe} className="text-blue-300" />
              <span>Global Recognition</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faUsers} className="text-cyan-300" />
              <span>Expert Faculty</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faStar} className="text-blue-300" />
              Explore All Programs
            </button>

            <button
              onClick={() => navigate("/admissions")}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faRocket} />
              Apply for Admission
            </button>
          </div>

          <p className="text-blue-200 text-sm mt-6">
            🎓 Start your academic journey today • No entrance exams required • Flexible payment plans available
          </p>
        </div>
      </div>
    </div>
  );
}
