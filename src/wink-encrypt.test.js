const { encodeString, decodeString } = require('./wink-encrypt')

describe('Method encodeString', () => {
  test('Should be equals to :-?!.;-!.;-.;?!.;-!.;-?!!.;-!!!!."?!!.:"!!.:"--!!.;-!!!!.;?.;-.;!', () => {
    expect(encodeString('Bonjour Marine')).toBe(
      ':-?!.;-!.;-.;?!.;-!.;-?!!.;-!!!!."?!!.:"!!.:"--!!.;-!!!!.;?.;-.;!'
    )
  })

  test('Should be equals to :-?.;-?!!!!.;!.;-?.;-!.;?!!!!.;!."?!!!."?!!.:"!.;-!.;-?!!!.;!."?!!.;?.;-?!."?!!!."?!!.)))))(;;;:?!!.)))))(\';;;:"--!!', () => {
    expect(encodeString('Awesome! Love it! 👍')).toBe(
      ':-?.;-?!!!!.;!.;-?.;-!.;?!!!!.;!."?!!!."?!!.:"!.;-!.;-?!!!.;!."?!!.;?.;-?!."?!!!."?!!.)))))(;;;:?!!.)))))(\';;;:"--!!'
    )
  })
})

describe('Method decodeString', () => {
  test('Should be equals to "Bonjour Marine"', () => {
    expect(
      decodeString(
        ':-?!.;-!.;-.;?!.;-!.;-?!!.;-!!!!."?!!.:"!!.:"--!!.;-!!!!.;?.;-.;!'
      )
    ).toBe('Bonjour Marine')
  })

  test('Should be equals to "Awesome! Love it! 👍"', () => {
    expect(
      decodeString(
        ':-?.;-?!!!!.;!.;-?.;-!.;?!!!!.;!."?!!!."?!!.:"!.;-!.;-?!!!.;!."?!!.;?.;-?!."?!!!."?!!.)))))(;;;:?!!.)))))(\';;;:"--!!'
      )
    ).toBe('Awesome! Love it! 👍')
  })
})
