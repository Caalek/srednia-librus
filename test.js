function changeGradeFormat(grade) {
  console.log(grade)
  let result
  if (toString(grade).endsWith('.5')) {
    result = toString(Math.floor(grade)) + '+' 
  }
  else if (toString(grade).endsWith('.75')) {
    result = toString(Math.ceil(grade)) + '-' 
  }
  else {
    result = toString(grade)
  }
  return result 
}

const result = changeGradeFormat(4.5)
console.log(String(4))
console.log(toString(Math.floor(4.5)) + '+' )