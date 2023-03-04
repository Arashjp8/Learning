import { useState } from "react";
import "./newEventForm.css";

const NewEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("manchester");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title,
      date,
      location,
      id: Math.floor(Math.random() * 10000),
    };

    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="manchester">Manchester</option>
          <option value="london">London</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default NewEventForm;
