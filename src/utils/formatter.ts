export function addThousandSeparator(value: string | number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export function twoDecimalPlaces(str: string) {
  if (str === null || str === undefined) {
    return null
  }
  if (typeof str === 'string') {
    if (str?.indexOf('.') < 0) {
      return str
    }
    return str.slice(0, str.indexOf('.') + 3).replace('.', ',')
  }
}

export const addSufixForThousands = (num: number, decimal = false) => {
  if (num === null || num === 0) {
    return '0'
  }
  num = parseFloat(String(num))
  // se não pode ser decimal.
  if (decimal === false) {
    num = Math.trunc(num)
  }
  // as mascar de fato dos números
  if (num <= 9999) {
    // 0 até 9.999 : Apresentar todos os números.
    // Quando houver decimal: Apresentar todos os números com 2 casas decimais  (Apresentar mouseover com valor)

    let temp = num.toLocaleString('pt-BR')
    if (temp.includes('.')) {
      temp = temp.substring(0, temp.toString().search('\\,') + 3)
    }
    return temp
  } else {
    if (num <= 999999) {
      let temp = num.toLocaleString('pt-BR')
      temp = temp.substring(0, temp.toString().search('\\.') + 2)
      return temp + 'k'
    } else {
      if (num <= 999999999) {
        let temp = num.toLocaleString('pt-BR')
        temp = temp.substring(0, temp.toString().search('\\.') + 2)
        temp = temp.replace('.', ',')
        let unidade = 'm'
        if (temp === '1') {
          unidade = 'm'
        }
        return temp + unidade
      }
    }
  }
}

export function toCurrency(value: number) {
  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  return formattedCurrency
}

export function toMonetaryFormat(value: number) {
  const formattedMonetary = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)

  return formattedMonetary
}
