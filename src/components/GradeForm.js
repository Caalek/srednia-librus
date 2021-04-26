import { Form } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import uuid from 'react-uuid'
import GradeEntry from './GradeEntry'

export default function GradeForm() {
  const [grades, setGrades] = useState([])
  const [grade, setGrade] = useState(6)
  const [weight, setWeight] = useState(5)

  function handleSubmit(e) {
    e.preventDefault()

    const newGrade = {
      grade: grade,
      gradeText: changeGradeFormat(grade),
      weight: weight,
      id: uuid()
    }
    console.log(changeGradeFormat(grade))
    setGrades(grades.concat([newGrade]))
  }

  function changeGradeFormat(grade) {
    console.log(grade)
    let result
    if (String(grade).endsWith('.5')) {
      result = String(Math.floor(grade)) + '+' 
    }
    else if (String(grade).endsWith('.75')) {
      result = String(Math.ceil(grade)) + '-' 
    }
    else {
      result = String(grade)
    }
    return result 
  }

  function calculateAverage(grades) {
    if (grades.length === 0) {
      return 0
    }
    let multipliedGrades = 0
    let sumOfWeights = 0
    for (let i in grades) {
      multipliedGrades += grades[i].grade * grades[i].weight
      sumOfWeights += grades[i].weight
    }
    const result = multipliedGrades / sumOfWeights
    return result
  }

  function removeGrade(id) {
    setGrades(grades.filter(grade => grade.id !== id))
  }

  console.log('grades', grades)
  return (
    <div>
      <div className="big mb-2">
        {calculateAverage(grades).toFixed(2)}
      </div>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>OCENA:</Form.Label>
                <Form.Control as="select" onChange={(e) => {setGrade(parseFloat(e.target.value))}}>
                  <option value="6">6</option>
                  <option value="5.5">5+</option>
                  <option value="5">5</option>
                  <option value="4.75">5-</option>
                  <option value="4.5">4+</option>
                  <option value="4">4</option>
                  <option value="3.75">4-</option>
                  <option value="3.5">3+</option>
                  <option value="3">3</option>
                  <option value="2.75">3-</option>
                  <option value="2.5">2+</option>
                  <option value="2">2</option>
                  <option value="1.75">2-</option>
                  <option value="1.5">1+</option>
                  <option value="1">1</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>WAGA:</Form.Label>
                <Form.Control as="select" onChange={(e) => {setWeight(parseInt(e.target.value))}}>
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Button variant="primary" type="submit" size="lg" className="mt-3">DODAJ</Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        </Card.Body>
      </Card>
      <div className="mt-3">
        {
          grades.map(grade => {
            return <GradeEntry key={grade.id} id={grade.id} gradeText={grade.gradeText} weight={grade.weight} removeGrade={removeGrade}></GradeEntry>
          })
        }
      </div>
    </div>
  )
}