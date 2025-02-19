import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TM355",
  description: "TM355 Course compiled study and revision resources.",
  cleanUrls: true,
  ignoreDeadLinks: 'localhostLinks',
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chapters', link: '/chapters' },
      { text: 'Resources', link: '/resources' }
    ],

    sidebar: {
      '/':[
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/resources/':[
        {
          text: 'Resources',
          items: [
            { text: 'Book', link: '/resources/book' },
            { text: 'Slides', link: '/resources/slides' },
            { text: 'Tutorials Videos', link: '/resources/tutorials' },
            { text: 'Midterm Exams', link: '/resources/midterms' },
            { text: 'Final Exams', link: '/resources/finals' },
            { text: 'Give me EVERYTHING', link: '/resources/give-me-everything' },
          ]
        }, 
        {
          text: 'Direct Viewing',
          items: [
            { text: 'Midterms Review', link: '/resources/midterms-review' },
            { text: 'Finals Review', link: '/resources/finals-review' },
          ]
        }
      ],
      '/chapters/':[
        {
          text: 'Chapters',
          items: [
            { text: 'Chapter 1:<br>Channels for Communications', link: '/chapters/1' },
            { text: 'Chapter 2:<br>An Introduction to the theory of Signals', link: '/chapters/2' },
            { text: 'Chapter 3:<br>Noise, Interference and Coexistence', link: '/chapters/3' },
            { text: 'Chapter 4:<br>Channel Coding', link: '/chapters/4' },
            { text: 'Chapter 5:<br>Information Theory and Lossless Compression', link: '/chapters/5' },
            { text: 'Chapter 6:<br>Digitisation and Lossy Compression', link: '/chapters/6' },
            { text: 'Chapter 7:<br>Access and Core Networks', link: '/chapters/7' },
            { text: 'Chapter 8:<br>Mobile and Nomadic Communications', link: '/chapters/8' },
            { text: 'Chapter 9:<br>Fixed-Line Communications', link: '/chapters/9' },
            { text: 'Chapter 10:<br>Security', link: '/chapters/10' },
          ]
        }
      ],
    },

    socialLinks: [
      // { icon: 'github', link: '/' }
    ], 
  }
})
