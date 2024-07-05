

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    "es6": true,
    browser: true,
  },
  extends: [

    'plugin:vue/essential', 

    'standard'
  ]
  plugins: [
    'vue'
  ],

  rules: {

    'generator-star-spacing': 'off',
  
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      "always"
    ]
  }
}
