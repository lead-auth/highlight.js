var hljs = require('./highlight');

hljs.registerLanguage('javascript', require('./languages/javascript'));
hljs.registerLanguage('php', require('./languages/php'));
hljs.registerLanguage('yaml', require('./languages/yaml'));

module.exports = hljs;
