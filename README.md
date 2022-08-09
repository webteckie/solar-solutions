# React Hooks Tutorial With Vite App

## Setup
Requirements:
- nodejs 14.20.0

If using nvm do:
- nvm install 14.20.0
- nvm use 14.20.0

## Testing Setup
Requirements:
- Jest

    ```npm install -D jest```

- ts-jest

    ```npm install -D ts-jest```

    ```npm install -D @types/jest```

- react testing library (for DOM testing)

    ```npm install -D @testing-library/react```

- js-dom

    ```npm install -D jest-environment-jsdom```

- ts-node

    ```npm install -D ts-node```
    
Update package.json with the following script:
  
    ...
    "scripts": {
        "test": "jest"
    },
    ...

Update jest.config.ts:

    import type {Config} from '@jest/types';
    import { defaults } from 'jest-config';

    // Sync object
    const config: Config.InitialOptions = {
        ...defaults,
        "preset": "ts-jest",
        testEnvironment: 'jsdom'
    };
    export default config;

## Creating Tests
Tests modules conform to the following regex:

    **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)

So, for example, name your file something like `<component>.test.tsx`
