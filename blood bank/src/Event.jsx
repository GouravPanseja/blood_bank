import React, { useState, useEffect } from 'react';

const eventsData = [
    { title: "ISBT Webinar", date: "2024-10-16", type: "webinar", location: "Online" },
    { title: "AfSBT Educational Webinars", date: "2024-10-17", type: "webinar", location: "Online" },
    { title: "10th Molecular Blood Group Forum", date: "2024-11-04", type: "external", location: "Frankfurt" },
    { title: "TRANSCON 2024", date: "2024-11-21", type: "external", location: "Ahmedabad" },
];

export const Event = () => {
    const [events, setEvents] = useState(eventsData);
    const [filters, setFilters] = useState({
        date: '',
        type: 'all',
        location: ''
    });

    useEffect(() => {
        filterEvents();
    }, [filters]);

    const filterEvents = () => {
        const { date, type, location } = filters;
        const filtered = eventsData.filter(event => {
            return (
                (!date || event.date.startsWith(date)) &&
                (type === 'all' || event.type === type) &&
                (!location || event.location.toLowerCase().includes(location.toLowerCase()))
            );
        });
        setEvents(filtered);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div style={styles.eventsContainer}>
            <h1 style={styles.title}>Upcoming Events</h1>
            <div style={styles.filters}>
                <div>
                    <label style={styles.label} htmlFor="date">Date:</label>
                    <input
                        type="month"
                        id="date"
                        name="date"
                        style={styles.input}
                        value={filters.date}
                        onChange={handleFilterChange}
                    />
                </div>
                <div>
                    <label style={styles.label} htmlFor="type">Event Type:</label>
                    <select
                        id="type"
                        name="type"
                        style={styles.select}
                        value={filters.type}
                        onChange={handleFilterChange}
                    >
                        <option value="all">All</option>
                        <option value="congress">ISBT Congress</option>
                        <option value="webinar">Webinar</option>
                        <option value="external">External Event</option>
                    </select>
                </div>
                <div>
                    <label style={styles.label} htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        style={styles.input}
                        placeholder="Enter location"
                        value={filters.location}
                        onChange={handleFilterChange}
                    />
                </div>
            </div>
            <div id="events-list" style={styles.eventsList}>
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <div key={index} style={styles.eventItem}>
                            <h2 style={styles.eventTitle}>{event.title}</h2>
                            <p style={styles.eventText}>Date: {event.date}</p>
                            <p style={styles.eventText}>Location: {event.location}</p>
                        </div>
                    ))
                ) : (
                    <p>No events found.</p>
                )}
            </div>
        </div>
    );
};

const styles = {
    eventsContainer: {
        width: '90%',
        margin: '30px auto',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(to bottom, #fdfbfb, #ebedee)',
    },
    title: {
        textAlign: 'center',
        fontSize: '2.5em',
        color: '#2f4f4f',
    },
    filters: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '25px',
        backgroundColor: '#f7f7f7',
        padding: '15px',
        borderRadius: '8px',
    },
    label: {
        marginRight: '10px',
        fontWeight: 'bold',
        color: '#4b0082',
    },
    input: {
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #dcdcdc',
        width: '150px',
    },
    select: {
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #dcdcdc',
        width: '150px',
    },
    eventsList: {
        display: 'flex',
        flexDirection: 'column',
    },
    eventItem: {
        backgroundColor: '#d1e8e2',
        padding: '20px',
        margin: '10px 0',
        borderRadius: '10px',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
    },
    eventTitle: {
        margin: '0',
        fontSize: '1.8em',
        color: '#3b3b3b',
    },
    eventText: {
        margin: '5px 0',
        fontSize: '1.1em',
        color: '#6b6b6b',
    },
};


