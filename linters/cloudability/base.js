module.exports = {
  parser : 'babel-eslint',
  extends: [
    '../../packages/eslint-config-airbnb',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion : 2017,
    ecmaFeatures: {
      impliedStrict: false,
    },
  },
  globals: {
    // testing-related
    describe: false,
    expect  : false,
    it      : false,
  },

  rules: {

    /*
     *
     * Rules related to react and other modules
     *
     */

    // Not worth the effort of refactoring all `this.props` usage
    'react/destructuring-assignment': 'off',

    // Forcing spacing with braces in jsx
    'react/jsx-curly-spacing': ['error', 'always'],

    // We want to explicitly define boolean values within jsx
    'react/jsx-boolean-value': ['error', 'always'],

    // Can cause weird spacing. Revisit once https://github.com/yannickcr/eslint-plugin-react/issues/1775 is fixed
    'react/jsx-one-expression-per-line': 'off',

    // AirBnB defaults to useless warnings. Devs should just disable this rule line-by-line as needed
    'react/no-danger': 'error',

    // We heavily use array keys as index throught our code. Benefits are too theoretical to be worth the effort
    'react/no-array-index-key': 'error',

    // AirBnB disabled this for server-rendering scenario, which does not apply to us
    'react/no-did-mount-set-state': 'error',

    // Too many false errors when passing around `props` as fn arg
    'react/no-unused-prop-types': 'off',

    // Check stateless functional components for 'this' in case it was refactored incorrectly
    'react/no-this-in-sfc': 'error',

    // TODO revisit. Does not work well with our custom `propsValidators` usage
    'react/no-typos': 'off',

    // Allow devs to prefer PureComponents when appropriate
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    // AirBnB overrides default set of options, but those overrides are outdated. Default good enough for us.
    'react/sort-comp': ['error', {}],

    // Theoretically, we should turn this on so we remind ourselves not to depend on webpack too much, but oh well
    'import/no-webpack-loader-syntax': 'off',

    // Ideally should be active to further cement dev-intention in Components props, but not currently worth effort
    'react/require-default-props': 'off',


    /*
     *
     * Extra ES6-related restrictions and misc AirBnB overrides
     *
     */

    'callback-return': 'error',

    // Force trailing commas when code is spread over multiple line for cleaner git changes
    'comma-dangle': ['error', {
      arrays   : 'always-multiline',
      objects  : 'always-multiline',
      imports  : 'always-multiline',
      exports  : 'always-multiline',
      functions: 'always-multiline',
    }],

    // The consistency checks do not match our early-returns + normal callback coding style
    'consistent-return': 'off',

    // Relaxed but consistent usage of braces
    curly: ['error', 'multi-line', 'consistent'],

    // Ensures that debug traces will give readable function names
    'func-names': ['error', 'as-needed'],

    // Devs can choose most readable style as long as consistent for every arg
    'function-paren-newline': ['error', 'consistent'],

    // Enforces styling similar to how MDN writes their generators
    'generator-star-spacing': ['error', { before: false, after: true }],

    'handle-callback-err': ['error', '^(err|.*(e|E)rror)'],

    // Rule should be identical to AirBnB except for VariableDeclarator & MemberExpression
    indent: ['error', 2, {
      SwitchCase            : 1,
      VariableDeclarator    : { var: 2, let: 2, const: 3 },
      outerIIFEBody         : 1,
      MemberExpression      : 'off',
      FunctionDeclaration   : { parameters: 1, body: 1 },
      FunctionExpression    : { parameters: 1, body: 1 },
      CallExpression        : { arguments: 1 },
      ArrayExpression       : 1,
      ObjectExpression      : 1,
      ImportDeclaration     : 1,
      flatTernaryExpressions: false,
      ignoredNodes          : ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments        : false,
    }],

    // Align on colon to use auto-fix to prettify large objects
    'key-spacing': [
      2, {
        singleLine: { beforeColon: false, afterColon: true },
        multiLine : { beforeColon: false, afterColon: true, align: 'colon' },
      },
    ],

    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      beforeLineComment : true,
      allowBlockStart   : true,
      allowObjectStart  : true,
    }],

    // Devs can choose best style here
    'multiline-ternary': 'off',

    // Should not leak stuff to clientside
    'no-console': 'error',

    // Allow multiple spaces only in certain situations involving aligned white spaces
    'no-multi-spaces': ['error', {
      exceptions: {
        ImportDeclaration : true,
        Property          : true,
        LogicalExpression : true,
        VariableDeclarator: true,
      },
    }],

    // Do not allow shadowed functions except in cases of extremely common parameter names
    'no-shadow': ['error', { allow: ['callback', 'cb', 'done', 'err', 'error', 'next', 'req', 'res'] }],

    // Currently a standard usage in GUI js
    'no-underscore-dangle': 'off',

    // Only start enforcing rule when there are 5 or more props
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 5,
          multiline    : true,
          consistent   : true,
        },
        ObjectPattern: {
          minProperties: 5,
          multiline    : true,
          consistent   : true,
        },
        ImportDeclaration: { minProperties: 5, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 5, multiline: true, consistent: true },
      },
    ],

    // Only enforce shorthand on properties because doing so on methods produces weird behavior with anonymous fn
    'object-shorthand': ['error', 'properties'],

    // Aggregate uninitialized declarations into one line. Otherwise, use multiple
    'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],

    // We allow developers to add padded blocks if they aid readability
    'padded-blocks': 'off',

    // Override default by allowing named functions, which makes stack traces more readable
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true,
      allowUnboundThis   : true,
    }],

    // Interferes with other rules when trying to destructure off of `this`. Also, too heavy handed a rule
    'prefer-destructuring': 'off',

    // Benefit of string templates is not worth all the white noise of current GUI infractions
    'prefer-template': 'off',

    // We do not like space before the first parenthesis in function decl
    'space-before-function-paren': ['error', 'never'],
    'spaced-comment'             : ['error', 'always', {
      line: {
        markers: ['/', 'global'],
      },
      block: {
        exceptions: ['*'],
        balanced  : true,
      },
    }],

    // Always specify `use-strict` at top-level
    strict: ['error', 'global'],

    /*
     *
     * Taken & adapted from Cloudability GUI's eslint
     *
     */
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    // A very large chunk of our code base puts operator at end
    'operator-linebreak': ['error', 'after'],

    // Stuff taken & adapted from Datahero's unfinished eslint
    'no-alert'             : 'error',
    'no-constant-condition': 'error',
    'no-use-before-define' : ['error', 'nofunc'],
    'max-len'              : ['error', {
      code    : 120,
      tabWidth: 2,

      ignoreComments: true,

      ignoreRegExpLiterals: true,

      // require / import statements can be as long as they need to be
      ignorePattern: ".*(\\(|\\s)+(require|import)\\(\\'",
    }],
  },
};
