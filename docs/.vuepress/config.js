const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  title: 'massCode',
  base: isDev ? '/' : '/documentation/',
  themeConfig: {
    repo: 'https://github.com/antonreshetov/massCode',
    sidebar: [
      {
        title: 'Essentials',
        collapsable: false,
        children: [
          '/essentials/layout.md',
          '/essentials/library.md',
          '/essentials/folders.md',
          '/essentials/tags.md',
          '/essentials/snippets.md',
          '/essentials/fragments.md',
          '/essentials/assistant.md',
          '/essentials/search.md',
          '/essentials/sync.md',
        ]
      },
      {
        title: 'Markdown',
        path: '/markdown/',
      }
    ]
  }
}