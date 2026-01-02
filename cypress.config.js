const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    // Base URL for SauceDemo
    baseUrl: 'https://www.saucedemo.com',
    
    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Cucumber feature file location
    specPattern: 'cypress/e2e/features/**/*.feature',
    
    // Environment variables for test data
    env: {
      // Login credentials
      username: 'standard_user',
      password: 'secret_sauce',
      
      // Checkout information
      firstName: 'John',
      lastName: 'Doe',
      postalCode: '12345'
    },
    
    // Support file
    supportFile: 'cypress/support/e2e.js',
    
    // Folders
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    
    // Timeouts
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    
    // Test isolation
    testIsolation: true,
    
    // Video recording enabled by default
    video: true,

    chromeWebSecurity: false,
    
    async setupNodeEvents(on, config) {
      // Add cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);
      
      // Add esbuild bundler for processing feature files
      on('file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      
      return config;
    },
  },
});
