// babel src/scripts --out-dir dist && browserify dist/index.js -o dist/bundle.js && node app.js

let tree = "src";
let babel = require("broccoli-babel-transpiler");
let watchify = require('broccoli-watchify');
var merge = require('broccoli-merge-trees');

var options = {
  browserify: {
    entries: ['./scripts/index.js'],
    debug: true
  },
  outputFile: 'bundled/index.js',
};

tree = babel(tree);
let bundle = watchify(tree, options);

tree = new merge([tree, bundle]);

module.exports = tree;
