const path = require('path');
const base = path.resolve(__dirname, '..');

module.exports = global.$require = (path) => require(base + '/' + path);
