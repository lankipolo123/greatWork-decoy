import React, { useEffect, useState } from 'react';
import { useNavbar } from '@/components/NavBarTop/NavBarContext'; // Import context
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'; // Import moment
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Ensure CSS is loaded

interface Event {
  title: string;
  start: Date;
  end: Date;
}

const CalendarPage: React.FC = () => {
  const { setNavbarTitle } = useNavbar(); // Get the function to set the title
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setNavbarTitle("Calendar"); // Set dynamic title on page load

    const fetchedEvents: Event[] = [
      {
        title: 'Event 1',
        start: new Date(2025, 3, 10), // April 10, 2025
        end: new Date(2025, 3, 10, 2), // April 10, 2025, 2:00 AM
      },
      {
        title: 'Event 2',
        start: new Date(2025, 3, 15), // April 15, 2025
        end: new Date(2025, 3, 15, 4), // April 15, 2025, 4:00 AM
      },
    ];
    setEvents(fetchedEvents); // Set the fetched events
  }, [setNavbarTitle]);

  // Use momentLocalizer for older versions
  const localizer = momentLocalizer(moment);

  // Disable dates outside of the current month
  const dayPropGetter = (date: Date) => {
    const currentMonth = moment().month(); // Get current month
    const currentYear = moment().year(); // Get current year

    if (moment(date).month() !== currentMonth || moment(date).year() !== currentYear) {
      return {
        className: 'rbc-day-disabled', // Apply a disabled class
        style: { backgroundColor: '#f0f0f0', cursor: 'not-allowed' }, // Change background color and cursor for disabled dates
      };
    }
    return {}; // Default behavior for dates in the current month
  };

  return (
    <div className="bg-gray-50">
      <div style={{ height: '100vh' }} className="ml-2">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="month" // Set to month view by default
          views={['month']} // Only show the month view
          dayPropGetter={dayPropGetter} // Add dayPropGetter to disable dates outside the current month
          style={{ height: '90%' }} // Ensure full height
        />
      </div>

      {/* Additional CSS styles for calendar customization */}
      <style>{`
        .rbc-header {
          font-size: 1.25rem; /* Make the header text (days of the week) bigger */
        }
        .rbc-day {
          background-color: white; /* Set date boxes to white */
        }
        .rbc-day-header {
          font-size: 1.5rem; /* Increase size of day labels (Sunday-Saturday) */
        }
        .rbc-day-bg {
          background-color: white !important; /* Ensure the date boxes are white */
        }
        .rbc-day-disabled {
          background-color: #f0f0f0 !important; /* Disable days outside the current month */
          cursor: not-allowed; /* Make cursor show that the day is disabled */
        }
      `}</style>
    </div>
  );
};

export default CalendarPage;
