/*
 *  Parse UTC to Date format
 * */
export const dateParseToTime = (date: Date) => {
    return new Date(date).toLocaleTimeString(undefined, { hour12: false })
}

export const dateParse = (date: Date) => {
    return new Date(date).toLocaleString(undefined, { hour12: false })
}

/*
 *  Calculate
 * */
export const multiplyWithDecimals = (x: number, y: number) => {
    const total: string = Number(x * y).toFixed(8)
    return Number(total)
}

export const divideWithDecimals = (x: number, y: number) => {
    if (!y) {
        return 0
    }
    const total = Number(x / y).toFixed(8)
    return Number(total)
}

/*
 *   Word save
 * */
export const saveWords = (value: string, length: number = 10) => {
    if (!value) {
        return 0
    }
    length = length ? length : 20
    if (value.length <= length) {
        return value
    }
    return value.substring(0, length) + '...'
}

export const round = (num: number, decimals = 8) => {
    const _decimals = decimals
    const _shift = Math.pow(10, _decimals)
    const _floor = Math.floor(num * _shift) / _shift
    const _integerPart = Math.floor(_floor)
    const _decimalPart = _floor.toString().split('.').length > 1 ? _floor.toString().split('.')[1] : ''
    let _num = Math.abs(_integerPart)
        .toString()
        .split(/(?=(?:\d{3})+$)/)
        .join()

    if (_num === 'NaN') {
        _num = '0'
    }

    if (_decimals > 0) {
        let zeroStr = ''
        for (let i = 0; i < _decimals - _decimalPart.length; i++) {
            zeroStr += '0'
        }
        _num += '.' + (_decimalPart + zeroStr)
    }
    return num < 0 ? '-' + _num : _num
}

export const variableRound = (data: number, digit = 5) => {
    if (data < 0) {
        data = -data
    }
    const strVal: string = String(data)
    if (strVal.lastIndexOf('.') === -1) {
        return parseFloat(strVal).toString()
    }
    const NumberUpperDot = strVal.split('.')[0]
    let NumberUnderDot = strVal.split('.')[1]
    if (NumberUnderDot.length > digit) {
        NumberUnderDot = NumberUnderDot.slice(0, digit)
    }
    return NumberUpperDot + '.' + NumberUnderDot
}

/*
 *   Decimal Length
 * */
export const getDecimalLength = (n: number) => {
    const x: string = String(n).split('.')[1]
    return x ? x.length : 0
}

/*
 *   Capitalize
 * */
export const capital = (data: string) => data.replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase())

/*
 *  Parse camel case, snake case, pascal case
 * */
export const camelCase = (str: string) => {
    str = str.charAt(0).toLowerCase() + str.slice(1)
    return str.replace(/[-_](.)/g, (match, group1) => {
        return group1.toUpperCase()
    })
}

export const snakeCase = (str: string) => {
    const camel = camelCase(str)
    return camel.replace(/[A-Z]/g, s => {
        return '_' + s.charAt(0).toLowerCase()
    })
}

export const pascalCase = (str: string) => {
    const camel = camelCase(str)
    return camel.charAt(0).toUpperCase() + camel.slice(1)
}

/*
 *   Exchange Fee calculator
 * */
export const feeCalculator = (total: number, feeRate: number) => {
    if (multiplyWithDecimals(total, 100000000) < 2000) {
        return 0.00000001
    } else {
        return Number(multiplyWithDecimals(total, Number(multiplyWithDecimals(feeRate, 0.01))))
    }
}

/*
 *   above 0
 * */
export const upperZero = (data: number) => (data <= 0 ? 0 : data)
