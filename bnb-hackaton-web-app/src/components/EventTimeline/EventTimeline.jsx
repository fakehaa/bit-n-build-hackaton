import React from 'react';
import './EventTimeline.css';

const EventTimeline = ({ events }) => {
  return (
    <div className="event-timeline-container">
      <h1>Event Timeline</h1>
      {events.length > 0 ? (
        <div className="timeline-table">
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
      ) : (
        <p>No events scheduled yet.</p>
      )}
    </div>
  );
};

export default EventTimeline;
