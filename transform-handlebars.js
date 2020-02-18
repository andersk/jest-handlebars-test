const Handlebars = require("handlebars/dist/cjs/handlebars.js");
const { SourceMapConsumer, SourceNode } = require("source-map");

exports.process = (code, filename) => {
  const pc = Handlebars.precompile(code, { srcName: filename });
  const out = new SourceNode(null, null, null, [
    'const Handlebars = require("handlebars/dist/cjs/handlebars.runtime.js");\n',
    "module.exports = Handlebars.template(",
    SourceNode.fromStringWithSourceMap(pc.code, new SourceMapConsumer(pc.map)),
    ");\n",
  ]).toStringWithSourceMap();
  return { code: out.code, map: out.map.toString() };
};
