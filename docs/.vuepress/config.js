const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  title: 'massCode',
  base: isDev ? '/' : '/documentation/',
  head: [
    ['link', {rel: 'icon', href: '/favicon.png'} ]
  ],
  themeConfig: {
    repo: 'https://github.com/antonreshetov/massCode',
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Site', link: 'https://masscode.io', target:'_self', rel:''},
    ],
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
          '/essentials/storage.md',
          '/essentials/sync.md',
          // '/essentials/backup.md',
        ]
      },
      {
        title: 'Markdown',
        path: '/markdown/',
      }
    ]
  }
}