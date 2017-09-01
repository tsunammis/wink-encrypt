import { codeToPunctuation, punctuationToCode } from './utils'

describe('Method codeToPunctuation - Mapping int to only one char', () => {
  test('Should be equals to )', () => {
    expect(codeToPunctuation(10000)).toBe(')')
  })

  test('Should be equals to (', () => {
    expect(codeToPunctuation(5000)).toBe('(')
  })

  test("Should be equals to '", () => {
    expect(codeToPunctuation(1000)).toBe("'")
  })

  test('Should be equals to ,', () => {
    expect(codeToPunctuation(500)).toBe(',')
  })

  test('Should be equals to ;', () => {
    expect(codeToPunctuation(100)).toBe(';')
  })

  test('Should be equals to :', () => {
    expect(codeToPunctuation(50)).toBe(':')
  })

  test('Should be equals to "', () => {
    expect(codeToPunctuation(25)).toBe('"')
  })

  test('Should be equals to -', () => {
    expect(codeToPunctuation(10)).toBe('-')
  })

  test('Should be equals to ?', () => {
    expect(codeToPunctuation(5)).toBe('?')
  })

  test('Should be equals to !', () => {
    expect(codeToPunctuation(1)).toBe('!')
  })
})

describe('Method codeToPunctuation - Mapping int to multiple char', () => {
  test('Should be equals to ))', () => {
    expect(codeToPunctuation(20000)).toBe('))')
  })

  test("Should be equals to '''", () => {
    expect(codeToPunctuation(3000)).toBe("'''")
  })

  test("Should be equals to ''';", () => {
    expect(codeToPunctuation(3100)).toBe("''';")
  })

  test("Should be equals to ''';-", () => {
    expect(codeToPunctuation(3110)).toBe("''';-")
  })

  test("Should be equals to ''';-!", () => {
    expect(codeToPunctuation(3111)).toBe("''';-!")
  })

  test("Should be equals to '''\"", () => {
    expect(codeToPunctuation(3025)).toBe("'''\"")
  })

  test("Should be equals to ''':\"", () => {
    expect(codeToPunctuation(3075)).toBe("''':\"")
  })

  test("Should be equals to ''':\"!", () => {
    expect(codeToPunctuation(3076)).toBe("''':\"!")
  })

  test("Should be equals to ''':-?!", () => {
    expect(codeToPunctuation(3066)).toBe("''':-?!")
  })
})

describe('Method punctuationToCode - Mapping only one char to int', () => {
  test('Should be equals to 10000', () => {
    expect(punctuationToCode(')')).toBe(10000)
  })

  test('Should be equals to 5000', () => {
    expect(punctuationToCode('(')).toBe(5000)
  })

  test('Should be equals to 1000', () => {
    expect(punctuationToCode("'")).toBe(1000)
  })

  test('Should be equals to 500', () => {
    expect(punctuationToCode(',')).toBe(500)
  })

  test('Should be equals to 100', () => {
    expect(punctuationToCode(';')).toBe(100)
  })

  test('Should be equals to 50', () => {
    expect(punctuationToCode(':')).toBe(50)
  })

  test('Should be equals to 25', () => {
    expect(punctuationToCode('"')).toBe(25)
  })

  test('Should be equals to 10', () => {
    expect(punctuationToCode('-')).toBe(10)
  })

  test('Should be equals to 5', () => {
    expect(punctuationToCode('?')).toBe(5)
  })

  test('Should be equals to 1', () => {
    expect(punctuationToCode('!')).toBe(1)
  })
})

describe('Method punctuationToCode - Mapping multiple char to int', () => {
  test('Should be equals to 20000', () => {
    expect(punctuationToCode('))')).toBe(20000)
  })

  test('Should be equals to 3000', () => {
    expect(punctuationToCode("'''")).toBe(3000)
  })

  test('Should be equals to 3100', () => {
    expect(punctuationToCode("''';")).toBe(3100)
  })

  test('Should be equals to 3110', () => {
    expect(punctuationToCode("''';-")).toBe(3110)
  })

  test('Should be equals to 3111', () => {
    expect(punctuationToCode("''';-!")).toBe(3111)
  })

  test('Should be equals to 3025', () => {
    expect(punctuationToCode("'''\"")).toBe(3025)
  })

  test('Should be equals to 3075', () => {
    expect(punctuationToCode("''':\"")).toBe(3075)
  })

  test('Should be equals to 3076', () => {
    expect(punctuationToCode("''':\"!")).toBe(3076)
  })

  test('Should be equals to 3066', () => {
    expect(punctuationToCode("''':-?!")).toBe(3066)
  })
})
