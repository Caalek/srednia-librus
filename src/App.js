import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GradeForm from './components/GradeForm'

function App() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <img src="img/libruslogo.jpg" alt="logo librusa" height="100"></img>
          <h3 className="mt-4">KALKULATOR ŚREDNIEJ LIBRUS</h3>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <GradeForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
