const $ = document.querySelector.bind(document)

const resultado = (event) => {
  event.preventDefault()

  const areawidth = convertStringToFloat ('area-width')
  const areaLength = convertStringToFloat ('area-length')
  const floorValue = convertStringToFloat ('floor-type')

  const valuesQtd = calcularPiso(areawidth, areaLength, floorValue)
  const valueCompra = calcularValor(areawidth, areaLength, floorValue)


  $('#result').innerText = `
    Quantidade de pisos: ${valuesQtd.toFixed(2)}
    Valor da compra: ${valueCompra.toFixed(2)}
  `

}

const convertStringToFloat = (id) => {
  let aux = $(`#${id}`).value
  const value = parseFloat(aux)
  return value
}

const calcularPiso = (areawidth, areaLength) => {
  const numberFloors = areawidth * areaLength / 2
  return numberFloors
}

const calcularValor = (areawidth, areaLength, floorValue) => {
  const numberFloors = areawidth * areaLength / 2
  const purchaseValue = numberFloors * floorValue
  return purchaseValue
}