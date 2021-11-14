"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codeToPunctuation = codeToPunctuation;
exports.compileString = compileString;
exports.decodeChar = decodeChar;
exports.encodeChar = encodeChar;
exports.punctuationToCode = punctuationToCode;

function encodeChar(_char) {
  return codeToPunctuation(_char.charCodeAt(0));
}

function decodeChar(encodedChar) {
  return String.fromCharCode(punctuationToCode(encodedChar));
}

function codeToPunctuation(code, encodedCode) {
  if (encodedCode === undefined) {
    encodedCode = '';
  }

  if (!Number.isFinite(code) || code <= 0) {
    return encodedCode;
  }

  var appendEncodedCode = function appendEncodedCode(encodedCode, code, divisor, _char2) {
    var numberOfChar = Math.floor(code / divisor);

    if (numberOfChar > 0) {
      encodedCode += compileString(_char2, numberOfChar);
    }

    return encodedCode;
  };

  if (code >= 10000) {
    encodedCode = appendEncodedCode(encodedCode, code, 10000, ')');
    code = code % 10000;
  } else if (code >= 5000) {
    encodedCode = appendEncodedCode(encodedCode, code, 5000, '(');
    code = code % 5000;
  } else if (code >= 1000) {
    encodedCode = appendEncodedCode(encodedCode, code, 1000, "'");
    code = code % 1000;
  } else if (code >= 500) {
    encodedCode = appendEncodedCode(encodedCode, code, 500, ',');
    code = code % 500;
  } else if (code >= 100) {
    encodedCode = appendEncodedCode(encodedCode, code, 100, ';');
    code = code % 100;
  } else if (code >= 50) {
    encodedCode = appendEncodedCode(encodedCode, code, 50, ':');
    code = code % 50;
  } else if (code >= 25) {
    encodedCode = appendEncodedCode(encodedCode, code, 25, '"');
    code = code % 25;
  } else if (code >= 10) {
    encodedCode = appendEncodedCode(encodedCode, code, 10, '-');
    code = code % 10;
  } else if (code >= 5) {
    encodedCode = appendEncodedCode(encodedCode, code, 5, '?');
    code = code % 5;
  } else if (code >= 1) {
    encodedCode = appendEncodedCode(encodedCode, code, 1, '!');
    code = code % 1;
  }

  return codeToPunctuation(code, encodedCode);
}

function punctuationToCode(encodedCode, code) {
  if (code === undefined) {
    code = 0;
  }

  if (!encodedCode || encodedCode.length <= 0) {
    return code;
  }

  var encodedCodeArray = encodedCode.split('');

  var _char3 = encodedCodeArray.shift();

  if (_char3 === ')') {
    code += 10000;
  } else if (_char3 === '(') {
    code += 5000;
  } else if (_char3 === "'") {
    code += 1000;
  } else if (_char3 === ',') {
    code += 500;
  } else if (_char3 === ';') {
    code += 100;
  } else if (_char3 === ':') {
    code += 50;
  } else if (_char3 === '"') {
    code += 25;
  } else if (_char3 === '-') {
    code += 10;
  } else if (_char3 === '?') {
    code += 5;
  } else if (_char3 === '!') {
    code += 1;
  }

  return punctuationToCode(encodedCodeArray.join(''), code);
}

function compileString(_char4, number) {
  if (!Number.isFinite(number) || number < 0) {
    return '';
  }

  var output = '';

  for (var i = 0; i < number; i++) {
    output += _char4;
  }

  return output;
}