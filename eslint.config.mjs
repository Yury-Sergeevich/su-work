import antfu from '@antfu/eslint-config'

export default antfu ({
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },

  typescript: true,
  vue: true,
})
