
/**
 * Dependencies
 */

const read = require('fs').readFileSync


const regex = /(\w+)\`(.*)\`/g

require.extensions['.html'] = function(mod, filename) {
  const file = read(filename, {encoding: 'utf-8'})
  return mod._compile(compile(file), filename)
}


/**
 * Compile file string.
 *
 * @param {String} file
 * @return {String}
 * @api private
 */

function compile(file) {
  file.replace()
  return file
}
