/* eslint-disable react/prop-types */

import convertTime from "../../utils/convertTime";
import { BASE_URL, token } from "./../../config";
import { useState } from "react";

const SidePanel = ({ ticketPrice, timeSlots, doctorId, appointmentLink }) => {
  const bookingHandler = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create booking session");
      }

      if (data?.session?.url) {
        window.location.href = data.session.url;
      } else {
        throw new Error("Session URL not found");
      }
    } catch (error) {
      console.error("Booking error:", error.message);
    }
  };

  return (
    <div className=" shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} CAD
        </span>
      </div>

      {/* <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}:
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(item.startingTime)}
                <span> - </span>
                {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <DateTimePicker allowedDates={timeSlots} /> */}

      {/* <button onClick={bookingHandler} className="px-2 btn w-full rounded-md">
        Book Appointment
      </button> */}

      <a href={appointmentLink}  >
        <button className="px-2 btn w-full rounded-md">
          Book Appointment
        </button>
      </a>


    </div>
  );
};


import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes, getDay } from 'date-fns';

const DateTimePicker = ({ allowedDates }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const parseTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return { hours, minutes };
  };

  const isDateAllowed = (date) => {

    // Helper function to parse time in HH:MM format
    const parseTime = (timeStr) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      return { hours, minutes };
    };

    // Get day of the week from date
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    const dayString = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][dayOfWeek];

    // Find the allowed day object
    const matchingDay = allowedDates.find(({ day }) => day === dayString);

    if (!matchingDay) return false; // Day is not allowed

    const { startingTime, endingTime } = matchingDay;
    const { hours: startHours, minutes: startMinutes } = parseTime(startingTime);
    const { hours: endHours, minutes: endMinutes } = parseTime(endingTime);

    // Create Date objects for the allowed start and end times
    const start = new Date(date);
    start.setHours(startHours, startMinutes, 0, 0); // Set hours and minutes to start time

    const end = new Date(date);
    end.setHours(endHours, endMinutes, 0, 0); // Set hours and minutes to end time


    console.log("----------")
    console.log(start)
    console.log(end)
    console.log(date)
    console.log("----------")

    // Check if the date is within the allowed range
    return date <= start && date <= end;
  };


  const isTimeAllowed = (date) => {

    // Helper function to parse time in HH:MM format
    const parseTime = (timeStr) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      return { hours, minutes };
    };

    // Extract the time part of the input date
    const inputHours = date.getHours();
    const inputMinutes = date.getMinutes();

    // Check if the time falls within any allowed range
    return allowedDates.some(({ startingTime, endingTime }) => {
      const { hours: startHours, minutes: startMinutes } = parseTime(startingTime);
      const { hours: endHours, minutes: endMinutes } = parseTime(endingTime);

      const inputTotalMinutes = inputHours * 60 + inputMinutes;
      const startTotalMinutes = startHours * 60 + startMinutes;
      const endTotalMinutes = endHours * 60 + endMinutes;

      return inputTotalMinutes >= startTotalMinutes && inputTotalMinutes <= endTotalMinutes;
    });
  };


  const filterDates = (date) => isDateAllowed(date);
  const filterTime = (date) => isTimeAllowed(date)

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <label>Select Date and Time:</label>
      {/* {JSON.stringify(allowedDates)} */}
      <span className="border-2 border-black-700 p-5" >
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="MMMM d, yyyy h:mm aa"
          filterDate={filterDates}
          filterTime={filterTime}
        />
      </span>
    </div>
  );
};

export default SidePanel;
