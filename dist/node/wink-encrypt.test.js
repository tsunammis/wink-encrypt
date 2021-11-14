"use strict";

var _require = require('./wink-encrypt'),
    encodeString = _require.encodeString,
    decodeString = _require.decodeString;

describe('Method encodeString', function () {
  test('Should be equals to :"-!!.;!.;?!!!.:"--!!!!.;-!.;?!!!!.;!."?!!.;-?!.;-!."?!!.:"-!!.;?.;-.;?!!."?!!.:-?!!!!.;-.:"--!!!!.;-!!!!.;--!.;-!!.;-?!', function () {
    expect(encodeString('Welcome to Wink Encrypt')).toBe(':"-!!.;!.;?!!!.:"--!!!!.;-!.;?!!!!.;!."?!!.;-?!.;-!."?!!.:"-!!.;?.;-.;?!!."?!!.:-?!!!!.;-.:"--!!!!.;-!!!!.;--!.;-!!.;-?!');
  });
  test('Should be equals to :-?.;-?!!!!.;!.;-?.;-!.;?!!!!.;!."?!!!."?!!.:"!.;-!.;-?!!!.;!."?!!.;?.;-?!."?!!!."?!!.)))))(;;;:?!!.)))))(\';;;:"--!!', function () {
    expect(encodeString('Awesome! Love it! 👍')).toBe(':-?.;-?!!!!.;!.;-?.;-!.;?!!!!.;!."?!!!."?!!.:"!.;-!.;-?!!!.;!."?!!.;?.;-?!."?!!!."?!!.)))))(;;;:?!!.)))))(\';;;:"--!!');
  });
});
describe('Method decodeString', function () {
  test('Should be equals to "Welcome to Wink Encrypt"', function () {
    expect(decodeString(':"-!!.;!.;?!!!.:"--!!!!.;-!.;?!!!!.;!."?!!.;-?!.;-!."?!!.:"-!!.;?.;-.;?!!."?!!.:-?!!!!.;-.:"--!!!!.;-!!!!.;--!.;-!!.;-?!')).toBe('Welcome to Wink Encrypt');
  });
  test('Should be equals to "Awesome! Love it! 👍"', function () {
    expect(decodeString(':-?.;-?!!!!.;!.;-?.;-!.;?!!!!.;!."?!!!."?!!.:"!.;-!.;-?!!!.;!."?!!.;?.;-?!."?!!!."?!!.)))))(;;;:?!!.)))))(\';;;:"--!!')).toBe('Awesome! Love it! 👍');
  });
});