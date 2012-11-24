"use strict";

var reducible = require("reducible/reducible")
var reduce = require("reducible/reduce")

function normalize(source) {
  /**
  Takes potentially broken `source` collection and returns normalized,
  version of it. That suppress values after `source` is being ended, or
  errored.
  **/

  // If source is instance of reducible it's already normalized so there is
  // no longer needs normalization.
  if (source instanceof reducible.type) return source
  return reducible(function reduceNormalized(next, initial) {
    reduce(source, next, initial)
  })
}

module.exports = normalize
