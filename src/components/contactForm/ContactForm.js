import React from "react";

export const ContactForm = ({
  currentName,
  setCurrentName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input required type='text' id='name' name='name' value={currentName} onChange={({target}) => setCurrentName(target.value)}/>

        <label htmlFor='phone'>Phone:</label>
        <input required pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}' id='phone' name='phone' type='tel' value={phone} onChange={({target}) => setPhone(target.value)} />

        <label htmlFor='email'>Email:</label>
        <input required id='email' name='email' type='email' value={email} onChange={({target}) => setEmail(target.value)} />
        
        <button type='submit'>Save</button>
      </form>
    </>
  );
};

