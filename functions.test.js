const functions = require("./functions")

test("Add 2 + 2 equal 4", () => {
  expect(functions.add(2, 2)).toBe(4)
})

test("Add 2 + 2 not equal 5", () => {
  expect(functions.add(2,2)).not.toBe(5)
})

test("Should be null", () => {
  expect(functions.isNull()).toBeNull()
})

test("Check value", () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

test("create user should be brad traversy object", () => {
  expect(functions.createUser()).toBe({firstName: "Brad", lastName: "traversy"})
})