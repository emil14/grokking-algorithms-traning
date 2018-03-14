const { sorted } = require('./data');
const { r, l } = require('./simple_search');

const algorithms = {
  simpleSearch: () => `r: ${r(sorted, 0, 24)} l: ${l(sorted, 24)}`,
};

Object.keys(algorithms).forEach(key => console.log(algorithms[key]()));
