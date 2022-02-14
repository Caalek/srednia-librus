import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GradeForm from './components/GradeForm'

function App() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <img src="img/libruslogo.jpg" alt="logo librusa" height="125"></img>
          <h2 className="mt-4">KALKULATOR ŚREDNIEJ LIBRUS</h2>
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
