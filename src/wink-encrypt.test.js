const { encodeString, decodeString } = require('./wink-encrypt')

describe('Method encodeString', () => {
  test('Should be equals to :"-!!.;!.;?!!!.:"--!!!!.;-!.;?!!!!.;!."?!!.;-?!.;-!."?!!.:"-!!.;?.;-.;?!!."?!!.:-?!!!!.;-.:"--!!!!.;-!!!!.;--!.;-!!.;-?!', () => {
    expect(encodeString('Welcome to Wink Encrypt')).toBe(
      ':"-!!.;!.;?!!!.:"--!!!!.;-!.;?!!!!.;!."?!!.;-?!.;-!."?!!.:"-!!.;?.;-.;?!!."?!!.:-?!!!!.;-.:"--!!!!.;-!!!!.;--!.;-!!.;-?!'
    )
  })

  test('Should be equals to :-?.;-?!!!!.;!.;-?.;-!.;?!!!!.;!."?!!!."?!!.:"!.;-!.;-?!!!.;!."?!!.;?.;-?!."?!!!."?!!.)))))(;;;:?!!.)))))(\';;;:"--!!', () => {
    expect(encodeString('Awesome! Love it! 👍')).toBe(
      ':-?.;-?!!!!.;!.;-?.;-!.;?!!!!.;!."?!!!."?!!.:"!.;-!.;-?!!!.;!."?!!.;?.;-?!."?!!!."?!!.)))))(;;;:?!!.)))))(\';;;:"--!!'
    )
  })
})

describe('Method decodeString', () => {
  test('Should be equals to "Welcome to Wink Encrypt"', () => {
    expect(
      decodeString(
        ':"-!!.;!.;?!!!.:"--!!!!.;-!.;?!!!!.;!."?!!.;-?!.;-!."?!!.:"-!!.;?.;-.;?!!."?!!.:-?!!!!.;-.:"--!!!!.;-!!!!.;--!.;-!!.;-?!'
      )
    ).toBe('Welcome to Wink Encrypt')
  })

  test('Should be equals to "Awesome! Love it! 👍"', () => {
    expect(
      decodeString(
        ':-?.;-?!!!!.;!.;-?.;-!.;?!!!!.;!."?!!!."?!!.:"!.;-!.;-?!!!.;!."?!!.;?.;-?!."?!!!."?!!.)))))(;;;:?!!.)))))(\';;;:"--!!'
      )
    ).toBe('Awesome! Love it! 👍')
  })
})
