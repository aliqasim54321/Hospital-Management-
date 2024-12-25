import { Link } from "react-router-dom";
import heroImg01 from "../assets/images/hero-img01.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import About from "../components/About/About.jsx";
import faqImg from "../assets/images/faq-img.png";
import { BsArrowRight } from "react-icons/bs";

import ServicesList from "../components/Services/ServicesList";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import DoctorsList from "../components/Doctors/DoctorsList";
import Testimonial from "../components/Testimonial/Testimonial";
import FaqList from "../components/Faq/FaqList";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ====== hero content ========== */}
            <div>
              <div className=" lg:w-[570px]">
                <h1 className="text-headingColor text-[36px] leading-[46px] md:text-[60px] md:leading-[70px] font-[800] ">
                Your Health, Our Priority.
                </h1>
                <p className="text__para">
                At Medical Care, we are committed to providing exceptional healthcare services tailored to your individual needs. Whether it's a routine check-up or a specialized treatment, our team of dedicated professionals is here to support your wellness journey. Experience personalized care in a comfortable and compassionate environment.
                </p>
                <Link to="/doctors">
                  <button className="btn rounded-[10px]">Request an Appointment</button>
                </Link>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    12
                  </h2>
                  <span className="w-[100px] h-2 bg-[#1F2B6C] rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    11
                  </h2>
                  <span className="w-[100px] h-2 bg-[#1F2B6C] rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Specialties Available</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    96%
                  </h2>
                  <span className="w-[100px] h-2 bg-[#1F2B6C] rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* =========== hero img ============ */}
            <div className="flex gap-[30px] justify-end">
              <div>
              <img className="w-[591px]" src={heroImg01} alt="hero_img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
            Top-tier healthcare for all. Our medical services provide unparalleled expertise and comprehensive care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
              <img className="h-[150px]" src={icon01} alt=""/>
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Personalized Care
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Receive healthcare services tailored to your unique needs and preferences. Our team is dedicated to providing compassionate and professional care to ensure your well-being
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
              <img className="h-[150px]" src={icon02} alt=""/>
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Convenient Locations
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                With multiple locations, accessing quality healthcare has never been easier. Find a clinic near you and book your appointment in just a few clicks
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
              <img className="h-[150px]" src={icon03} alt=""/>
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Flexible Scheduling
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Book appointments at a time that works best for you. Our online scheduling system allows you to select your preferred date and time for consultations.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <ServicesList />
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between items-center flex-col lg:flex-row">
            {/* =========== feature content ============ */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
              Key Benefits of Our Healthcare <br /> Services.
              </h2>
              <ul className="pl-4">
                <li className="text__para ">
                  1. Easy online consultations with experienced doctors.
                </li>
                <li className="text__para ">
                  2. Schedule appointments that fit your busy lifestyle.
                </li>
                <li className="text__para">
                  3. Access your medical history and health records anytime, anywhere.
                </li>
              </ul>
              <Link to="/doctors">
                <button className="btn rounded-[10px]">Learn More</button>
              </Link>
            </div>

            {/* ========= feature img ======== */}
            <div className="relative z-10  xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-[600px] rounded-[30px]" alt="about_img" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0  md:bottom-[100px]  md:left-[20px] z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[600] text-headingColor">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[400] text-textColor">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded-[4px] py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] rounded-full  text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 font-[500] text-irisBlueColor mt-2 lg:mt-4 ">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Meet Our Experts</h2>
            <p className="text__para text-center">
              Providing top-tier medical care with personalized attention.
            </p>
          </div>

          <DoctorsList />
        </div>
      </section>

      <section>
  <div className="container">
    <div className="flex justify-between gap-[50px] lg:gap-0">
      <div className="w-2/3 hidden md:block">
        <img className="mt-[75px] rounded-[24px]" src={faqImg} alt="" />
      </div>

      <div className="w-full md:w-1/2">
      <h2 className="heading">Frequently Asked Questions</h2>

      <FaqList />
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
  <div className="xl:w-[470px] mx-auto">
    <h2 className="heading text-center">What Our Patients Are Saying</h2>
    <p className="text__para text-center">
    See how our healthcare services have positively impacted the lives of our patients.
    </p>
  </div>

  <Testimonial />
  </div>
</section>
    </>
  );
};

export default Home;
