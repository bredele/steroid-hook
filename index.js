
/**
 * Dependencies
 */

const read = require('fs').readFileSync


/**
 * Regex to parse tagged templates
 */

const tagged = /html\`(.*)\`/g


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
  return file.replace(tagged, function(str, expr) {
    return 'html`' + transform(expr)+ '`'
  })
}


/**
 * Transform html tagged template having custom tags.
 *
 * Examples:
 *
 *  transform('<Hello></Hello>')
 *  // => '${Hello()}'
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

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
      let openClose = false
      let first = cache[0]
      if(cache.slice(-1) === '/' && (first !== first.toLowerCase())) {
        cache = cache.slice(0, -1)
        openClose = true
      }
      let node = cache.split(' ')
      let name = node.shift()
      result += replace(name, node)
      if(openClose) result += replace(`/${name}`)
      cache = ''
      continue
    } else if(isText) {
      result += char
    }
    cache += char
  }
  return result
}


/**
 * Replace custom tags with function call.
 *
 * @param {String} str
 * @param {Array} attributes
 * @return {String}
 * @api private
 */

function replace(str, attributes) {
  const first = str[0]
  const second = str[1]
  if(first === '/') {
    if(second !== second.toLowerCase()) {
      return '`)}'
    } else {
      return `<${str}>`
    }
  } else {
    if(first !== first.toLowerCase()) {
      return '${' + str + '({},html`'
    } else {
      const attrs = attributes.join(' ')
      return `<${str}${attrs.length ? ' ' + attrs : ''}>`
    }
  }
}
