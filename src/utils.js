export function encodeChar(char) {
  return codeToPunctuation(char.charCodeAt(0))
}

export function decodeChar(encodedChar) {
  return String.fromCharCode(punctuationToCode(encodedChar))
}

export function codeToPunctuation(code, encodedCode) {
  if (encodedCode === undefined) {
    encodedCode = ''
  }

  if (!Number.isFinite(code) || code <= 0) {
    return encodedCode
  }

  var appendEncodedCode = function(encodedCode, code, divisor, char) {
    var numberOfChar = Math.floor(code / divisor)
    if (numberOfChar > 0) {
      encodedCode += compileString(char, numberOfChar)
    }
    return encodedCode
  }

  if (code >= 10000) {
    encodedCode = appendEncodedCode(encodedCode, code, 10000, ')')
    code = code % 10000
  } else if (code >= 5000) {
    encodedCode = appendEncodedCode(encodedCode, code, 5000, '(')
    code = code % 5000
  } else if (code >= 1000) {
    encodedCode = appendEncodedCode(encodedCode, code, 1000, "'")
    code = code % 1000
  } else if (code >= 500) {
    encodedCode = appendEncodedCode(encodedCode, code, 500, ',')
    code = code % 500
  } else if (code >= 100) {
    encodedCode = appendEncodedCode(encodedCode, code, 100, ';')
    code = code % 100
  } else if (code >= 50) {
    encodedCode = appendEncodedCode(encodedCode, code, 50, ':')
    code = code % 50
  } else if (code >= 25) {
    encodedCode = appendEncodedCode(encodedCode, code, 25, '"')
    code = code % 25
  } else if (code >= 10) {
    encodedCode = appendEncodedCode(encodedCode, code, 10, '-')
    code = code % 10
  } else if (code >= 5) {
    encodedCode = appendEncodedCode(encodedCode, code, 5, '?')
    code = code % 5
  } else if (code >= 1) {
    encodedCode = appendEncodedCode(encodedCode, code, 1, '!')
    code = code % 1
  }

  return codeToPunctuation(code, encodedCode)
}

export function punctuationToCode(encodedCode, code) {
  if (code === undefined) {
    code = 0
  }

  if (!encodedCode || encodedCode.length <= 0) {
    return code
  }

  var encodedCodeArray = encodedCode.split('')
  var char = encodedCodeArray.shift()

  if (char === ')') {
    code += 10000
  } else if (char === '(') {
    code += 5000
  } else if (char === "'") {
    code += 1000
  } else if (char === ',') {
    code += 500
  } else if (char === ';') {
    code += 100
  } else if (char === ':') {
    code += 50
  } else if (char === '"') {
    code += 25
  } else if (char === '-') {
    code += 10
  } else if (char === '?') {
    code += 5
  } else if (char === '!') {
    code += 1
  }

  return punctuationToCode(encodedCodeArray.join(''), code)
}

export function compileString(char, number) {
  if (!Number.isFinite(number) || number < 0) {
    return ''
  }

  var output = ''
  for (var i = 0; i < number; i++) {
    output += char
  }

  return output
}
