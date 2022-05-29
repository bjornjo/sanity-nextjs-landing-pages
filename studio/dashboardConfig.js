export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62939c9cbec9cf5f6e4cb3f1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-w8cnqnfj',
                  apiId: '7f16a4ec-1eda-4229-bdee-6b7ed340d9e1'
                },
                {
                  buildHookId: '62939c9dbec9cf5f6e4cb3f2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-16ikmxtz',
                  apiId: 'adbdf99c-f388-4a43-91f2-173157505d16'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bjornjo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-16ikmxtz.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
