'use strict'

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

import { encodeChar, decodeChar } from './utils'

export function encodeString(str) {
  if (!str) {
    return ''
  }

  var strLength = str.length
  var encodedChars = []
  for (var i = 0; i < strLength; i++) {
    encodedChars.push(encodeChar(str[i]))
  }

  return encodedChars.join('.')
}

export function decodeString(encodedStr) {
  if (!encodedStr) {
    return ''
  }

  var encodedChars = encodedStr.split('.')
  var length = encodedChars.length
  var decodedChars = []
  for (var i = 0; i < length; i++) {
    decodedChars.push(decodeChar(encodedChars[i]))
  }

  return decodedChars.join('')
}
