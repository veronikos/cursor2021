const helpers = require('./helpers/numbers')
console.log(helpers.double)

const four = helpers.double(2)
console.log(four, helpers.pow(3))

const greeting = text => console.log(text)

greeting("Hello")