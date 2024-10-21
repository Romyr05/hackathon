'use client';
import React, { useState } from "react";



function EventForm({ addEvent }) {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [creatorName, setCreatorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, description, date, location, creatorName });
  };

  return (
    <div class ="flex-container">
      <div><h1>Event Planner</h1></div>
      <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Event Title" required />
      <div class="a"><input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required /></div>
      <div class="a"><input type="date" value={date} onChange={(e) => setDate(e.target.value)} required /></div>
      <div class="a"><input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required /></div>
      <div class="a"><input type="text" value={creatorName} onChange={(e) => setCreatorName(e.target.value)} placeholder="Creator's Name" required /></div>
      <div class="a"><button type="submit">Create Event</button></div>
      </form>
    </div>
   
  );
}

export default EventForm;