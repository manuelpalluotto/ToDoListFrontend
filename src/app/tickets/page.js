'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTicketsForUser } from '../../api'; 
import { Card } from 'react-bootstrap';

const TicketPage = () => {
  const [tickets, setTickets] = useState([]);
  const [userId, setUserId] = useState('');

  const fetchData = async () => {
    try {
    const response = await fetchTicketsForUser(userId)
    setTickets(response)
    }
    catch {
      console.log("Hat nicht funktioniert")
    }
  } 

  return (
    <div className="container mt-4">
      <h2>Deine Tickets (Benutzer {userId})</h2>
      <div className="row">
        {tickets.map(ticket => (
          <div className="col-md-4" key={ticket.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{ticket.title}</Card.Title>
                <Card.Text>{ticket.description}</Card.Text>
                <Card.Text><small>Status: {ticket.status}</small></Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketPage;