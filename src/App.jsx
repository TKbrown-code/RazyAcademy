import { Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Hero from "./components/Hero";
import About from "./components/About";
import TableOfContent from "./components/TableOfContent";
import CoursePreview from "./components/CoursePreview";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Scholarships from "./components/Scholarships";
import Partners from "./components/Partners";
import StaffRecruitment from "./components/StaffRecruitment";
import StaffRecruitmentCTA from "./components/StaffRecruitmentCTA";
import Investments from "./components/Investments";
import InvestmentsCTA from "./components/InvestmentsCTA";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";

function App() {

  return (
   <>
    <Header/>
    <Routes>
      <Route path="/" element={
        <>
        <div className="overflow-hidden">
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="programs"><TableOfContent /></section>
          <section id="courses"><CoursePreview /></section>
          <section id="blog"><Blog /></section>
          <section id="scholarships"><Scholarships /></section>
          <section id="partners"><Partners /></section>
          <section id="testimonials"><Testimonials /></section>
          <section id="careers-cta"><StaffRecruitmentCTA /></section>
          <section id="investments-cta"><InvestmentsCTA /></section>
          <Footer />
        </div>
        </>
      } />
      <Route path="/programs" element={<TableOfContent />} />
      <Route path="/careers" element={<StaffRecruitment />} />
      <Route path="/investments" element={<Investments />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
    </>
  )
}

export default App
