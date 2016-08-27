var hljs = require('./highlight');

hljs.registerLanguage('javascript', require('./languages/javascript'));
hljs.registerLanguage('php', require('./languages/php'));

module.exports = hljs;