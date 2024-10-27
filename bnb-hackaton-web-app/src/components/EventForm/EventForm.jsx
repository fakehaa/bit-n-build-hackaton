import React, { useState } from 'react';
import './EventForm.css';

const EventForm = () => {
const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    activityStyle: '',
    scoringCriteria: ''
});
const [events, setEvents] = useState([]);
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

    const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, formData]); 
    setFormData({ date: '', time: '', location: '', activityStyle: '', scoringCriteria: '' });
};
return (
    
    <div className="event-creation-container">
        <h1>Create Event</h1>
        <form onSubmit={handleSubmit} className="event-form">
        <div>
            <label>Date:</label>
            <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
            />
        </div>
        <div>
            <label>Time:</label>
            <input 
            type="time" 
            name="time" 
            value={formData.time} 
            onChange={handleChange} 
            required 
            />
        </div>
        <div>
            <label>Location:</label>
            <input 
            type="text" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            required 
            />
        </div>
        <div>
            <label>Activity Style:</label>
            <input 
            type="text" 
            name="activityStyle" 
            value={formData.activityStyle} 
            onChange={handleChange} 
            required 
            />
        </div>
        <div>
            <label>Scoring Criteria:</label>
            <input 
            type="text" 
            name="scoringCriteria" 
            value={formData.scoringCriteria} 
            onChange={handleChange} 
            required 
            />
        </div>
            <button type="submit">Create Event</button>
        </form>

      {/* Event Table */}
        {events.length > 0 && (
        <div className="events-table">
            <h2>Scheduled Events</h2>
            <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Activity Style</th>
                    <th>Scoring Criteria</th>
                </tr>
            </thead>
            <tbody>
                {events.map((event, index) => (
                <tr key={index}>
                    <td>{event.date}</td>
                    <td>{event.time}</td>
                    <td>{event.location}</td>
                    <td>{event.activityStyle}</td>
                    <td>{event.scoringCriteria}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        )}
    </div>
);
};

export default EventForm;
