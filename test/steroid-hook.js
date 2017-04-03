/**
 * Test dependencies
 */

const test = require('tape')
const html = require('steroid')
const hook = require('..')


test('define custom tags using uppercase', assert => {
  assert.plan(1)
  
})

/**
 * Hello component.
 *
 * @api private
 */

function Hello(params) {
  return <button class="${params.style}">hello</button>
}
