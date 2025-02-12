import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = () => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
                { title: 'Event 1', date: '2025-02-13' },
            ]}
        />
    );
}

export default CalendarComponent;