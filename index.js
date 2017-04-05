
/**
 * Dependencies
 */

const read = require('fs').readFileSync

const regex = /html\`(.*)\`/g

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
  return file.replace(regex, function(str, expr) {
    return 'html`' + transform(expr)+ '`'
  })
}


function transform(str) {
  var i = 0
  var length = str.length
  var cache = ''
  var result = ''
  var isText = true
  while(i !== length) {
    let char = str[i++]
    if(char === '<') {
      isText = false
      cache = ''
      result += cache
      continue
    } else if(char === '>') {
      isText = true
      let node = cache.split(' ')
      result += replace(node.shift(), node)
      cache = ''
      continue
    } else if(isText) {
      result += char
    }
    cache += char
  }
  return result
}


function replace(str, attributes) {
  const first = str[0]
  const second = str[1]
  if(first === '/') {
    if(second !== second.toLowerCase()) {
      return ')}'
    } else {
      return `<${str}>`
    }
  } else {
    if(first !== first.toLowerCase()) {
      return '${' + str + '('
    } else {
      const attrs = attributes.join(' ')
      return `<${str}${attrs.length ? ' ' + attrs : ''}>`
    }
  }
}
