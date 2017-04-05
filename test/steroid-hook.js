/**
 * Test dependencies
 */

require('..')
const test = require('tape')
const concat = require('concat-stream')
const hello = require('./hello.html')


test('define simple custom tag', assert => {
  assert.plan(1)
  hello.openTagCloseTag().pipe(concat(buffer => {
    assert.equal(buffer.toString(), '<button>hello</button>')
  }))
})

test('define simple custom open/close tags', assert => {
  assert.plan(1)
  hello.openCloseTag().pipe(concat(buffer => {
    assert.equal(buffer.toString(), '<button>hello</button>')
  }))
})

test('define multiple sibling custom tags', assert => {
  assert.plan(1)
  hello.multipleSibling().pipe(concat(buffer => {
    assert.equal(buffer.toString(), '<button>hello</button><br><button>hello</button>')
  }))
})


test('define custom tags imbricated together', assert => {
  assert.plan(1)
  hello.imbricatedTags().pipe(concat(buffer => {
    assert.equal(buffer.toString(), '<button>hello<br><button>hello</button><span>world</span></button>')
  }))
})


test('define simple custom tag with Attributes', assert => {
  assert.plan(1)
  hello.tagWithAttributes().pipe(concat(buffer => {
    assert.equal(buffer.toString(), '<span>bar</span>')
  }))
})
