import React, {useMemo} from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";


const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label For="name">Name:</label>
      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Appointment Name"required/>
      <br />
      <label>
        <ContactPicker
          name="contact"
          value={contact}
          contacts={contactNames}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <br />
      <label For="date">Date:</label>
      <input type="date" name="date" value={date} min={getTodayString()} onChange={(e)=>setDate(e.target.value)}/>
      <br />
      <label For="time">Time:</label>
      <input type="time" name="time" value={time} onChange={(e)=>setTime(e.target.value)} required/>
      <input aria-label="Add Appointment" type="submit" value="Add Appointment" />
    </form>
    </>
  );
};
