import React, { useEffect, useState } from 'react';
// This component displays the current time, day of the week, and whether the user is at work
export default function TimeCard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
// Function to format time in 12-hour format with AM/PM
  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = seconds.toString().padStart(2, '0');

    return `${hours}:${paddedMinutes}:${paddedSeconds} ${ampm}`;
  };
// Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = currentTime.getDay();
  const currentDay = daysOfWeek[dayIndex];
// Determine if the current time is within work hours (6:15 AM to 5:45 PM) on workdays (Monday to Friday)
  const isWorkDay = [6, 0, 1, 2].includes(dayIndex); // Saturday, Sunday, Monday, Tuesday
  const minutesNow = currentTime.getHours() * 60 + currentTime.getMinutes();
  const workStart = 6 * 60 + 15;
  const workEnd = 17 * 60 + 45;
  const isAtWork = isWorkDay && minutesNow >= workStart && minutesNow <= workEnd;
// Format the date
  const date = currentTime.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
// Render the component
  return (
    <section className="time-card card-small">
      
      <p className="date">{date}</p>
      <p> Time: <strong>{formatTime(currentTime)}</strong></p>
      <p>Status: <strong>{isAtWork ? 'At Work' : 'Not at Work'}</strong></p>
    </section>
  );
}
