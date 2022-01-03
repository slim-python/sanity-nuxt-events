export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-studio-oitwnknh',
                  apiId: 'bcf15e6b-fe45-4954-8991-99e56c91c2ef'
                },
                {
                  buildHookId: '61d35ac20b7920c80e8503ca',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-web-v56vn7sv',
                  apiId: '1884792b-901e-4847-998b-35c9c5bdf47c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slim-python/sanity-nuxt-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-web-v56vn7sv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
