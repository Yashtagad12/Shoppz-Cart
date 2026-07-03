import React, { useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import { Header } from '../Components';
import { scheduleData } from '../data/dummy';

const Calendar = () => {

  // Convert Syncfusion data to FullCalendar format
  const events = useMemo(() => {
    return scheduleData.map((event) => ({
      id: event.Id,
      title: event.Subject,
      start: event.StartTime,
      end: event.EndTime,
      allDay: event.IsAllDay,
      backgroundColor: event.CategoryColor,
      borderColor: event.CategoryColor,
    }));
  }, []);

  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-xl shadow">

      <Header category="App" title="Calendar" />

      <div className="mt-8">

        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}

          initialView="dayGridMonth"

          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}

          events={events}

          editable={true}

          selectable={true}

          dayMaxEvents={true}

          height="80vh"

          eventClick={(info) => {
            alert(
              `Event : ${info.event.title}\n\nStart : ${info.event.start}`
            );
          }}

          select={(info) => {
            alert(
              `Selected\n${info.startStr}\n\n${info.endStr}`
            );
          }}

        />

      </div>

    </div>
  );
};

export default Calendar;