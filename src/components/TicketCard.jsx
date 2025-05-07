import React from 'react';
import { Card } from 'react-bootstrap';

const TicketCard = ({ ticket }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{ticket.title}</Card.Title>
        <Card.Text>{ticket.description}</Card.Text>
        <Card.Text>
          <small className="text-muted">Status: {ticket.status}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TicketCard;