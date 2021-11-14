'use strict';
/*
) == 10 000
( == 5 000
' == 1 000
, == 500
; == 100
: == 50
" == 25
- == 10
? == 5 
! == 1
. Separator
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeString = decodeString;
exports.encodeString = encodeString;

var _utils = require("./utils");

function encodeString(str) {
  if (!str) {
    return '';
  }

  var strLength = str.length;
  var encodedChars = [];

  for (var i = 0; i < strLength; i++) {
    encodedChars.push((0, _utils.encodeChar)(str[i]));
  }

  return encodedChars.join('.');
}

function decodeString(encodedStr) {
  if (!encodedStr) {
    return '';
  }

  var encodedChars = encodedStr.split('.');
  var length = encodedChars.length;
  var decodedChars = [];

  for (var i = 0; i < length; i++) {
    decodedChars.push((0, _utils.decodeChar)(encodedChars[i]));
  }

  return decodedChars.join('');
}