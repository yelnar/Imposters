import { False, True, toInt, Zero, If, One, Two, Three } from "./church"

test(`True should return first argument`, () => {
  expect(True(1)(2)).toEqual(1)
})

test(`False should return second argument`, () => {
  expect(False(1)(2)).toEqual(2)
})

test(`If of True should return first argument`, () => {
  expect(If(True)(1)(2)).toEqual(1)
})

test(`If of False should return second argument`, () => {
  expect(If(False)(1)(2)).toEqual(2)
})

test(`Zero should be equal to 0`, () => {
  expect(toInt(Zero)).toEqual(0)
  expect(toInt(One)).toEqual(1)
  expect(toInt(Two)).toEqual(2)
  expect(toInt(Three)).toEqual(3)
})
