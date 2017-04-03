/**
 * Test dependencies
 */

const test = require('tape')
const html = require('steroid')
const concat = require('concat-stream')
require('..')


test('define custom tags using uppercase', assert => {
  assert.plan(1)
  html`<Hello style="world"></Hello>`
    .pipe(concat(buffer) {
      assert.equal(buffer.toString(), '<button class="world">hello</button>')
    })
})

/**
 * Hello component.
 *
 * @api private
 */

function Hello(params) {
  return html`<button class="${params.style}">hello</button>``
}
