import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function Event(props) {
    const [e, setEvent] = useState(props.e);
    const like= ()=>{
        setEvent((previousE)=>({
            ...previousE,
                like:!previousE.like
                }))
    }
    const bookEvent = () => {
        props.showAlert()
        if (e.nbTickets > 0) {
            var newProp = { ...e };
            newProp.nbTickets--;
            newProp.nbParticipants++;
            setEvent(newProp);
        }
    }
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={e.nbTickets == 0 ? `images/sold_out.png` : `images/${e.img}`} />
            <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>Price: {e.price}</Card.Text>
                <Card.Text>Number of tickets: {e.nbTickets}</Card.Text>
                <Button variant="danger"  onClick={like}>{e.like?"dislike":"like"}</Button>
                <Card.Text>Number of participants: {e.nbParticipants}</Card.Text>
                <Button variant="primary" disabled={e.nbTickets==0?true:false} onClick={()=>bookEvent()}>Book an event</Button>
            </Card.Body>
        </Card>
    </>
}