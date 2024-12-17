import reactPlugin from 'eslint-plugin-react'
import parser from '@babel/eslint-parser'

export default [
  {
    ignores: ['node_modules/**', 'build/**'],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
        ecmaFeatures: {
          jsx: true,
        },
        deprecatedImportAssert: true
      },
      globals: {
        // Node.js globals
        process: true,

        // Browser Window APIs
        window: true,
        self: true,

        // DOM APIs
        document: true,
        Document: true,
        DocumentFragment: true,
        HTMLElement: true,
        Element: true,
        Node: true,
        MutationObserver: true,

        // Storage APIs
        localStorage: true,
        sessionStorage: true,

        // Utility APIs
        console: true,
        setTimeout: true,
        setInterval: true,
        clearTimeout: true,
        clearInterval: true,

        // Browser APIs
        navigator: true,
        location: true,
        history: true,

        // Chrome Extension APIs
        chrome: true,

        // Performance APIs
        performance: true,

        // Promise APIs
        Promise: true,

        // Web APIs
        fetch: true,
        Request: true,
        Response: true,
        Headers: true,

        // Events
        Event: true,
        CustomEvent: true,
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'no-undef': 'error',
    },
  },
]
