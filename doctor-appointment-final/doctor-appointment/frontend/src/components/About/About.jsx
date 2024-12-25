import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between flex-col  lg:flex-row gap-[50px] lg:gap-[130px] xl:gap-0 ">
          {/* ========= about img ======== */}
          <div className="relative z-10 w-3/4 lg:w-1/2  xl:w-[770px] order-2 lg:order-1">
            <img src={aboutImg} alt="about_img" />
            <div className=" w-[200px] md:w-[300px] absolute bottom-4 right-[-30%]  md:right-[-7%]  lg:right-[22%] z-20">
            <img className="rounded-[12px] shadow-[0px_10px_30px_rgba(0,0,0,0.1)]" src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* =========== about content ============ */}
          <div className=" w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">About Us</h2>
            <p className="text__para">
            At Medical Care, we are dedicated to delivering compassionate and world-class healthcare. Our team of expert doctors and nurses is committed to providing personalized care, ensuring that every patient receives the attention they deserve. With years of experience and cutting-edge medical practices, we strive to make a difference in the lives of our patients.
            </p>
            <p className="text__para mt-[30px]">
            Led by Dr. Sarah Connor, our Chief Doctor of Nursing, we continue to push the boundaries of healthcare excellence, creating a safe and welcoming environment for everyone. Your health is our priority, and we are here to support you every step of the way.
            </p>
            <Link to="/find-location">
              <button className="btn rounded-[10px]">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
