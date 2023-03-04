import styles from "./eventList.module.css";

const EventList = ({ events, setEvents }) => {
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index + 1} - {event.title}
          </h2>
          <p>
            {event.location} - {event.date}
          </p>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
