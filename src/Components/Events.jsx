import { useEffect, useState } from 'react';
import listEvents from '../../data/events.json';
import Event from './Event.jsx';
import { Container, Col, Row , Alert} from 'react-bootstrap';

export default function Events(props) {
    const [showAlert, setShowAlert] = useState(false);
    const [showWelcome , setShowWelcome]= useState(false);
    const modifAlert = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    };
  useEffect(()=>{
    setShowWelcome(true);
    setTimeout(()=>setShowWelcome(false),3000)
    return ()=>{
        console.log("Welcome unmouting!")
        
    }
  },[])
    return (
      <>
        <Container>
            {showWelcome && <Alert variant="success">Welcome!</Alert>}
          <Row>
            {listEvents.map((e) => {
              return (
                <Col>
                  <Event e={e} showAlert={modifAlert} ></Event>
                </Col>
              );
            })}
          </Row>
          {showAlert && (
            <Alert variant="success">
              you have booked an event!
            </Alert>
          )}
        </Container>
      </>
    );
  }