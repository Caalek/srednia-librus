import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function GradeEntry(props) {
  console.log(props)
  return (
    <Card className="mt-3">
      <Card.Body>
        <Row>
          <Col>
            <span className="gradeshow"><span className="librus-purple">{props.gradeText}</span> waga <span className="librus-purple">{props.weight}</span></span>
          </Col>
          <Col>
            <Button size="sm" className="mt-1" onClick={() => {props.removeGrade(props.id)}}>USUŃ</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}