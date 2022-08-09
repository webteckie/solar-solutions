import type {Config} from '@jest/types';
import { defaults } from 'jest-config';

// Sync object
const config: Config.InitialOptions = {
  ...defaults,
  "preset": "ts-jest",
  testEnvironment: 'jsdom'
};
export default config;
