/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress';
import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env = {
        ...process.env,
        ...config.env,
      };

      return config;
    },
  },
});
