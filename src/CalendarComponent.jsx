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
      events={[{ title: "Valentine's Day", date: '2025-02-14' }]}
    />
  );
};

export default CalendarComponent;
