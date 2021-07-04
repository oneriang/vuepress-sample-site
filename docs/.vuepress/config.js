module.exports = {
  title: "Sample VuePress Blog",
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/news/",
            itemPermalink: '/news/:year/:month/:day/:slug',
            layout: 'IndexPost',
            itemLayout: 'Post',
            pagination: {
              lengthPerPage: 2
            }
          }
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag"],
            path: "/tag/",
            layout: "Tag",
            frontmatter: { title: "Tag" },
            itemlayout: "Tag",
            pagination: {
              perPagePosts: 10
            }
          }
        ],
        // comment: {
        //   // Which service you'd like to use
        //   service: 'vssue',
        //   // The owner's name of repository to store the issues and comments.
        //   owner: 'You',
        //   // The name of repository to store the issues and comments.
        //   repo: 'Your repo',
        //   // The clientId & clientSecret introduced in OAuth2 spec.
        //   clientId: 'Your clientId',
        //   clientSecret: 'Your clientSecret',
        // },
      }
    ]
  ],
  }