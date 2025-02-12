import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = () => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
                { title: 'Event 1', date: '2024-06-01' },
                { title: 'Event 2', date: '2024-06-07' }
            ]}
        />
    );
}

export default CalendarComponent;