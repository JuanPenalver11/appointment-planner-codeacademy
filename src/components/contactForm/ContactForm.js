import React from "react";
import { Form } from "react-router-dom";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for='name'> Name: </label>
      <input
      name="name"
      value={name}
      type="text"
      placeholder="Enter your name"
      onChange={(e)=>setName(e.target.value)}
      required
      />
      <br/>
      <label for="phone">Phone:</label>
      <input
      name="phone"
      value={phone}
      type="text"
      placeholder="Enter your phone number (### ### ###)"
      onChange={(e)=>setPhone(e.target.value)}
      required
      pattern="[0-9]{9}"
      />
      <br/>
      <label for="email">Email:</label>
      <input
      name="email"
      value={email}
      type="email"
      placeholder="Enter your email"
      onChange={(e)=>setEmail(e.target.value)}
      required/>
      <br />
      <input type="submit" value="Add Contact" aria-label="Add Contact"/>
    </form>
    </>
  );
};

