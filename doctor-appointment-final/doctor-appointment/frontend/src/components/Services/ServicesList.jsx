import ServiceCard from "./ServiceCard";
import { services } from "../../assets/data/services";

const ServicesList = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Medical Services</h2>
          <p className="text__para text-center">
            Explore our wide range of healthcare services designed to meet all your medical needs. We are dedicated to providing top-quality care for every patient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;