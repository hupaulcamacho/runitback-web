import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import component
import EventCard from '../eventCard/eventCard';
import TournamentCard from '../tournamentCard/tournamentCard';

import './eventDetails.css';

function EventDetails() {
    let params = useParams();

    const [ eventData, setEventData ] = useState({});
    const [ tournaments, setTournaments] =  useState([]);

    let eventId = params.id;
    useEffect(() => {
        getEventData();
        getTournaments();
    }, [])

    function getEventData() {
        // let url = `http://localhost:3333/events/${eventId}`;
        let url = `https://runitback-api.herokuapp.com/events/${eventId}`;


        fetch(url)
        .then(response => response.json())
        .then(data => {
            setEventData(data.payload)
        });
    }

    function getTournaments() {
        // let url = `http://localhost:3333/events/${eventId}/tournaments`;
        let url = `https://runitback-api.herokuapp.com/events/${eventId}/tournaments`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setTournaments(data.payload)
        });
    }

    return (
        <div className='event-details-main'>
            <EventCard event={eventData} />
            {tournaments.map((tournament) => {
                return (
                    <TournamentCard tournament={tournament} />
                )
            })}
        </div>
    )
}
export default EventDetails;