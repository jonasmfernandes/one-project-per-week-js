function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
  let degreeSign = 'C'

  if(celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32
    degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  // coloque os graus celsius dentro de transformDegree('AQUI'), EXEMPLO: console.log(transformDegree('23C'))
  console.log(transformDegree('30C'))
  // coloque os graus fahrenheit dentro de transformDegree('AQUI'), EXEMPLO: console.log(transformDegree('66F'))
  console.log(transformDegree('50F'))
} catch (error) {
  console.log(error.message)
}