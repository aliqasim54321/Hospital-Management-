/* eslint-disable react/prop-types */

import convertTime from "../../utils/convertTime";
import { BASE_URL, token } from "./../../config";
import { useState } from "react";

const SidePanel = ({ ticketPrice, timeSlots, doctorId }) => {
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

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
          {/* {JSON.stringify(timeSlots)} */}
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

      <DateTimePicker allowedDates={timeSlots} />
      <button onClick={bookingHandler} className="px-2 btn w-full rounded-md">
        Book Appointment
      </button>
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
    const dayOfWeek = getDay(date); // 0 (Sunday) to 6 (Saturday)
    const dayString = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][dayOfWeek];
    const matchingDay = allowedDates.find(({ day }) => day === dayString);

    console.log(matchingDay)
    if (!matchingDay) return false;

    const { startingTime, endingTime } = matchingDay;
    const { hours: startHours, minutes: startMinutes } = parseTime(startingTime);
    const { hours: endHours, minutes: endMinutes } = parseTime(endingTime);

    console.log(startHours, startMinutes)
    console.log(endHours, endMinutes)

    const start = setHours(setMinutes(new Date(date), startMinutes), startHours);
    const end = setHours(setMinutes(new Date(date), endMinutes), endHours);

    return true
    // return date >= start && date <= end;
  };

  const filterDates = (date) => isDateAllowed(date);

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
        />
      </span>
    </div>
  );
};

export default SidePanel;
