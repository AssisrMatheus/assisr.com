// Ref: https://www.gatsbyjs.org/docs/eslint/
// Ref: https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/eslint-config.ts

// This configuration is big because it's a clone of gatsby original eslint + our own configs
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
  },
  extends: [
    require.resolve(`eslint-config-react-app`),
    'airbnb',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/react',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:mdx/recommended',
  ],
  plugins: [`graphql`, 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // My rules
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.tsx', '.ts', '.mdx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        // md: 'never',
        mdx: 'never',
      },
    ],

    'import/no-webpack-loader-syntax': [0],
    // 'graphql/template-strings': [
    //   `error`,
    //   {
    //     env: `relay`,
    //     schemaString: printSchema(schema, { commentDescriptions: true }),
    //     tagName: `graphql`
    //   }
    // ],
    'react/jsx-pascal-case': `off`, // Prevents errors with Theme-UI and Styled component
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    'jsx-a11y/accessible-emoji': `warn`,
    'jsx-a11y/alt-text': `warn`,
    'jsx-a11y/anchor-has-content': `warn`,
    'jsx-a11y/anchor-is-valid': `warn`,
    'jsx-a11y/aria-activedescendant-has-tabindex': `warn`,
    'jsx-a11y/aria-props': `warn`,
    'jsx-a11y/aria-proptypes': `warn`,
    'jsx-a11y/aria-role': `warn`,
    'jsx-a11y/aria-unsupported-elements': `warn`,
    // TODO: It looks like the `autocomplete-valid` rule hasn't been published yet
    // "jsx-a11y/autocomplete-valid": [
    //   "warn",
    //   {
    //     inputComponents: [],
    //   },
    // ],
    'jsx-a11y/click-events-have-key-events': `warn`,
    'jsx-a11y/control-has-associated-label': `warn`,
    'jsx-a11y/heading-has-content': `warn`,
    'jsx-a11y/html-has-lang': `warn`,
    'jsx-a11y/iframe-has-title': `warn`,
    'jsx-a11y/img-redundant-alt': `warn`,
    'jsx-a11y/interactive-supports-focus': `warn`,
    'jsx-a11y/label-has-associated-control': `warn`,
    'jsx-a11y/lang': `warn`,
    'jsx-a11y/media-has-caption': `warn`,
    'jsx-a11y/mouse-events-have-key-events': `warn`,
    'jsx-a11y/no-access-key': `warn`,
    'jsx-a11y/no-autofocus': `warn`,
    'jsx-a11y/no-distracting-elements': `warn`,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': `warn`,
    'jsx-a11y/no-noninteractive-element-interactions': `warn`,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': `warn`,
    'jsx-a11y/no-noninteractive-tabindex': `warn`,
    'jsx-a11y/no-onchange': `warn`,
    'jsx-a11y/no-redundant-roles': `warn`,
    'jsx-a11y/no-static-element-interactions': `warn`,
    'jsx-a11y/role-has-required-aria-props': `warn`,
    'jsx-a11y/role-supports-aria-props': `warn`,
    'jsx-a11y/scope': `warn`,
    'jsx-a11y/tabindex-no-positive': `warn`,
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.md'],
      rules: {
        'prettier/prettier': [
          2,
          {
            // unnecessary if you're not using `eslint-plugin-prettier`, but required if you are
            parser: 'markdown',
          },
        ],
      },
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/overrides'],
    },
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
