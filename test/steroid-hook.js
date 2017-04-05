/**
 * Test dependencies
 */

require('..')
const test = require('tape')
const concat = require('concat-stream')
const hello = require('./hello.html')


test('define custom tags using uppercase', assert => {
  assert.plan(1)
  hello.openTagCloseTag().pipe(concat(buffer => {
    assert.equal(buffer.toString(), '<button>hello</button>')
  }))
})

test('define custom open/close tags', assert => {
  assert.plan(1)
  hello.openCloseTag().pipe(concat(buffer => {
    assert.equal(buffer.toString(), '<button>hello</button>')
  }))
})
