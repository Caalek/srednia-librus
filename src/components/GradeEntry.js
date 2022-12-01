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
          <Col className="mt-1 index" xs={2}>
            {props.index}
          </Col>
          <Col xs={5}>
            <span className="grade-text"><span className="librus-purple">{props.gradeText}</span> waga <span className="librus-purple">{props.weight}</span></span>
          </Col>
          <Col xs={5}>
            <Button size="sm" className="mt-1" onClick={() => {props.removeGrade(props.id)}}>USUŃ</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}