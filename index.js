'use strict'

var postcss = require('postcss')
var classPostfix = require('class-postfix')
var isPresent = require('is-present')
var hasClass = require('has-class-selector')

module.exports = postcss.plugin('postcss-class-postfix', function (opts) {
  return function classPostfixPlugin (root, result) {
    root.walkRules(function (node) {
      if (isPresent(node.selectors)) {
        node.selectors = node.selectors.map(function (selector) {
          return hasClass(selector) ? classPostfix(selector, opts) : selector
        })
      }
      return node
    })
  }
})
