const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = defineConfig({
  includeShadowDom: true,
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    //disable video compress and recording every time we run the test
    CYPRESS_video:false,
    CYPRESS_videoCompression:false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile});
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

