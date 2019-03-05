module.exports.config = {
  specs: ['test/**/*.e2e.js', 'src/Slider/*.e2e.js'],
  baseUrl: `http://localhost:6006/`,
  jasmineNodeOpts: { defaultTimeoutInterval: 120000 },
  onPrepare() {
    browser.ignoreSynchronization = true;
  },
};
