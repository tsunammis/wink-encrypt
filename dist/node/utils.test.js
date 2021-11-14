"use strict";

var _utils = require("./utils");

describe('Method codeToPunctuation - Mapping int to only one char', function () {
  test('Should be equals to )', function () {
    expect((0, _utils.codeToPunctuation)(10000)).toBe(')');
  });
  test('Should be equals to (', function () {
    expect((0, _utils.codeToPunctuation)(5000)).toBe('(');
  });
  test("Should be equals to '", function () {
    expect((0, _utils.codeToPunctuation)(1000)).toBe("'");
  });
  test('Should be equals to ,', function () {
    expect((0, _utils.codeToPunctuation)(500)).toBe(',');
  });
  test('Should be equals to ;', function () {
    expect((0, _utils.codeToPunctuation)(100)).toBe(';');
  });
  test('Should be equals to :', function () {
    expect((0, _utils.codeToPunctuation)(50)).toBe(':');
  });
  test('Should be equals to "', function () {
    expect((0, _utils.codeToPunctuation)(25)).toBe('"');
  });
  test('Should be equals to -', function () {
    expect((0, _utils.codeToPunctuation)(10)).toBe('-');
  });
  test('Should be equals to ?', function () {
    expect((0, _utils.codeToPunctuation)(5)).toBe('?');
  });
  test('Should be equals to !', function () {
    expect((0, _utils.codeToPunctuation)(1)).toBe('!');
  });
});
describe('Method codeToPunctuation - Mapping int to multiple char', function () {
  test('Should be equals to ))', function () {
    expect((0, _utils.codeToPunctuation)(20000)).toBe('))');
  });
  test("Should be equals to '''", function () {
    expect((0, _utils.codeToPunctuation)(3000)).toBe("'''");
  });
  test("Should be equals to ''';", function () {
    expect((0, _utils.codeToPunctuation)(3100)).toBe("''';");
  });
  test("Should be equals to ''';-", function () {
    expect((0, _utils.codeToPunctuation)(3110)).toBe("''';-");
  });
  test("Should be equals to ''';-!", function () {
    expect((0, _utils.codeToPunctuation)(3111)).toBe("''';-!");
  });
  test("Should be equals to '''\"", function () {
    expect((0, _utils.codeToPunctuation)(3025)).toBe("'''\"");
  });
  test("Should be equals to ''':\"", function () {
    expect((0, _utils.codeToPunctuation)(3075)).toBe("''':\"");
  });
  test("Should be equals to ''':\"!", function () {
    expect((0, _utils.codeToPunctuation)(3076)).toBe("''':\"!");
  });
  test("Should be equals to ''':-?!", function () {
    expect((0, _utils.codeToPunctuation)(3066)).toBe("''':-?!");
  });
});
describe('Method punctuationToCode - Mapping only one char to int', function () {
  test('Should be equals to 10000', function () {
    expect((0, _utils.punctuationToCode)(')')).toBe(10000);
  });
  test('Should be equals to 5000', function () {
    expect((0, _utils.punctuationToCode)('(')).toBe(5000);
  });
  test('Should be equals to 1000', function () {
    expect((0, _utils.punctuationToCode)("'")).toBe(1000);
  });
  test('Should be equals to 500', function () {
    expect((0, _utils.punctuationToCode)(',')).toBe(500);
  });
  test('Should be equals to 100', function () {
    expect((0, _utils.punctuationToCode)(';')).toBe(100);
  });
  test('Should be equals to 50', function () {
    expect((0, _utils.punctuationToCode)(':')).toBe(50);
  });
  test('Should be equals to 25', function () {
    expect((0, _utils.punctuationToCode)('"')).toBe(25);
  });
  test('Should be equals to 10', function () {
    expect((0, _utils.punctuationToCode)('-')).toBe(10);
  });
  test('Should be equals to 5', function () {
    expect((0, _utils.punctuationToCode)('?')).toBe(5);
  });
  test('Should be equals to 1', function () {
    expect((0, _utils.punctuationToCode)('!')).toBe(1);
  });
});
describe('Method punctuationToCode - Mapping multiple char to int', function () {
  test('Should be equals to 20000', function () {
    expect((0, _utils.punctuationToCode)('))')).toBe(20000);
  });
  test('Should be equals to 3000', function () {
    expect((0, _utils.punctuationToCode)("'''")).toBe(3000);
  });
  test('Should be equals to 3100', function () {
    expect((0, _utils.punctuationToCode)("''';")).toBe(3100);
  });
  test('Should be equals to 3110', function () {
    expect((0, _utils.punctuationToCode)("''';-")).toBe(3110);
  });
  test('Should be equals to 3111', function () {
    expect((0, _utils.punctuationToCode)("''';-!")).toBe(3111);
  });
  test('Should be equals to 3025', function () {
    expect((0, _utils.punctuationToCode)("'''\"")).toBe(3025);
  });
  test('Should be equals to 3075', function () {
    expect((0, _utils.punctuationToCode)("''':\"")).toBe(3075);
  });
  test('Should be equals to 3076', function () {
    expect((0, _utils.punctuationToCode)("''':\"!")).toBe(3076);
  });
  test('Should be equals to 3066', function () {
    expect((0, _utils.punctuationToCode)("''':-?!")).toBe(3066);
  });
});