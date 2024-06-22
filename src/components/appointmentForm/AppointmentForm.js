import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input required type='text' id='title' name='title' value={title} onChange={({ target }) => setTitle(target.value)}/>

        <label htmlFor='date'>Date:</label>
        <input required type='date' id='date' name='date' value={date} min={getTodayString()} onChange={({ target }) => setDate(target.value)} />

        <label htmlFor='time'>Time:</label>
        <input required type='time' id='time' name='time' value={time} onChange={({ target }) => setTime(target.value)} />

        <ContactPicker contacts={contacts} name='appointment-contact' value={contact} onChange={({ target }) => {setContact(target.value)}} />
        
        <button type='submit'>Save</button>
      </form>
    </>
  );
};
