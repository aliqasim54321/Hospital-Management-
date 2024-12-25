import { formatDate } from "../../utils/formatDate";

/* eslint-disable react/prop-types */
const DoctorAbout = ({ about, name, qualifications, experiences }) => {
  return (
    <div>
      {/* About Section */}
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          About
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text__para">{about}</p>
      </div>

      {/* Education Section */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Education
        </h3>
        <ul className="pt-4 md:p-5 grid sm:grid-cols-2 gap-[30px]">
          {qualifications?.map((item, index) => (
            <li key={index}>
              <div className="p-4 rounded bg-[#e0f7fa]">
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formatDate(item.startingDate, { year: "numeric" })} -{" "}
                  {formatDate(item.endingDate, { year: "numeric" })}
                </span>
                <p className="text-[16px] leading-6 font-medium text-headingColor mt-3">
                  {item.degree}
                </p>
                <p className="text-[14px] leading-6 font-medium text-textColor">
                  {item.university}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Experience
        </h3>
        <ul className="pt-4 md:p-5 grid sm:grid-cols-2 gap-[30px]">
          {experiences?.map((item, index) => (
            <li key={index}>
              <div className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                  {formatDate(item.startingDate, { year: "numeric" })} -{" "}
                  {formatDate(item.endingDate, { year: "numeric" })}
                </span>
                <p className="text-[16px] leading-6 font-medium text-headingColor mt-3">
                  {item.position}
                </p>
                <p className="text-[14px] leading-6 font-medium text-textColor">
                  {item.hospital}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
