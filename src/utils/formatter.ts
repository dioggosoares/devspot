export function addThousandSeparator(value: string | number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export function twoDecimalPlaces(value: string) {
  if (value === null || value === undefined) {
    return null
  }
  if (typeof value === 'string') {
    if (value?.indexOf('.') < 0) {
      return value
    }
    return value.slice(0, value.indexOf('.') + 3).replace('.', ',')
  }
}

export function addSufixForThousands(num: number, decimal = false) {
  if (num === null || num === 0) {
    return '0'
  }
  num = parseFloat(String(num))

  if (decimal === false) {
    num = Math.trunc(num)
  }

  if (num <= 9999) {
    let value = num.toLocaleString('pt-BR')

    if (value.includes(',')) {
      value = value.substring(0, value.toString().search('\\,') + 3)
    }

    return value
  }

  if (num <= 999999) {
    let value = num.toLocaleString('pt-BR')

    value = value.substring(0, value.toString().search('\\.') + 2)
    return value + 'k'
  }

  if (num <= 999999999) {
    let value = num.toLocaleString('pt-BR')

    value = value.substring(0, value.toString().search('\\.') + 2)
    return value + 'm'
  }
}
