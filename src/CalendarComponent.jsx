import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import '../styles/calendar.css';

const CalendarComponent = () => {

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      height="auto"
      headerToolbar={{
        start: 'prev next',
        center: 'title',
        end: 'dayGridMonth dayGridWeek',
      }}
      locale={'ko'}
      events={[
        { title: 'Event 1', date: '2024-06-01' },
        { title: 'Event 2', date: '2024-06-07' },
      ]}
    />
  );
};

export default CalendarComponent;
