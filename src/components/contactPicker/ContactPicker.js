import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <>
      <label htmlFor='contact'>Contact:</label>
      <select id='contact' onChange={onChange} value={value} name={name}>
        <option value=''>No Contact Selected</option>
        {
          contacts.map((contact, index) => {
            return (
              <option value={contact.phone} key={index}>{contact.phone}</option>
            )
          })
        }
      </select>
    </>
  );
};
