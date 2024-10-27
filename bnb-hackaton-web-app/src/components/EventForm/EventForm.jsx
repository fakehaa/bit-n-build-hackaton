import React, { useState } from 'react';
import './EventForm.css'

const EventForm = () => {
    const [eventData, setEventData] = useState({
            eventName: '',
            eventDate: '',
            category: '',
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
        ...eventData,
        [name]: value
    });
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eventData);
 //backedn logic here
};
return (
    <div className='Event-container'>
        <h2>Create Event</h2>
        <form className='event-form' onSubmit={handleSubmit}>
        <div className='event-details'>
            <label>Event Name:</label>
            <input 
            type="text" 
            name="eventName" 
            value={eventData.eventName} 
            onChange={handleChange} 
            required 
            />
        </div>
        <div className='event-details'>
            <label>Event Date:</label>
            <input 
            type="date" 
            name="eventDate" 
            value={eventData.eventDate} 
            onChange={handleChange} 
            required 
            />
        </div>
        <div className='event-details'>
            <label>Category:</label>
                <select name="category" value={eventData.category} onChange={handleChange} required>
                <option value="">Select Category</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Fun Sports">Fun Sports</option>
            </select>
        </div>
        <button className='event-btn' type="submit">Create Event</button>
        </form>
    </div>
);
};

export default EventForm;
