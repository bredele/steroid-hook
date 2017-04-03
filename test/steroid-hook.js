/**
 * Test dependencies
 */

require('..')
const test = require('tape')
const concat = require('concat-stream')
const hello = require('./hello.html')


test('define custom tags using uppercase', assert => {
  assert.plan(1)
  hello().pipe(concat(buffer => {
    assert.equal(buffer.toString(), '<button class="world">hello</button>')
  }))
})
