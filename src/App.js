import React, { useState } from "react";
import "./App.css";
import Title from "./components/title";
import Modal from "./components/modal";
import EventList from "./components/eventList";
import NewEventForm from "./components/newEventForm";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const subtitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}

      {showEvents && <EventList events={events} setEvents={setEvents} />}

      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      {!showModal && (
        <div>
          <button onClick={() => setShowModal(true)} className="show-modal">
            Add New Event
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
