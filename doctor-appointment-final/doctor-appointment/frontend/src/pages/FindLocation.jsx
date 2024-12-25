import React from 'react';
import locationImg1 from '../assets/images/location1.jpg';
import locationImg2 from '../assets/images/location2.jpg';
import locationImg3 from '../assets/images/location3.jpg';

const FindLocation = () => {
  const locations = [
    {
      img: locationImg1,
      name: 'Downtown Medical Center',
      address: '123 King St W, Toronto, ON, M5H 3T9',
    },
    {
      img: locationImg2,
      name: 'Uptown Health Facility',
      address: '456 Yonge St, Toronto, ON, M4Y 1W9',
    },
    {
      img: locationImg3,
      name: 'Etobicoke Clinic',
      address: '789 Islington Ave, Etobicoke, ON, M8Z 4S8',
    },
  ];

  return (
    <section className="pt-16 pb-16">
      <div className="container">
        <h2 className="heading text-center mb-8">Find a Location</h2>
        <p className="text-center text__para mb-12">
          
          At Medical Care, we are dedicated to providing exceptional healthcare in modern, fully equipped facilities that prioritize both quality and comfort. Our clinics are designed to ensure that every patient feels welcomed and at ease, from the moment they arrive to the moment they leave. We utilize the latest advancements in medical technology, allowing our specialists to deliver accurate diagnoses and treatments across various medical fields.
          <br /><br />
          Our commitment to personalized care means that each patient receives attention tailored to their unique needs, whether they are visiting for routine check-ups, specialized treatments, or urgent care. At Medical Care, we believe that healthcare should be comprehensive, accessible, and patient-focused. Our facilities are built to provide a seamless experience, ensuring that you can trust us with every aspect of your health and well-being.

        
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="bg-white shadow-md rounded-md p-4">
              <img
                src={location.img}
                alt={location.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-headingColor font-bold text-xl mt-4">
                {location.name}
              </h3>
              <p className="text-textColor mt-2">{location.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindLocation;
