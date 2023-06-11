module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://brandonjamesmarshall.github.io/`,
    // Your Name
    name: 'Brandon Marshall',
    // Main Site Title
    title: `Brandon Marshall | Social Media Manager`,
    // Description that goes under your name in main bio
    description: `I write about Bitcoin and lead social at Trust Machines, a Bitcoin company.`,
    // Optional: Twitter account handle
    author: `marshallmixing`,
    // Optional: Github account URL
    //github: `https://github.com/brandonjamesmarshall`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/brandonjamesmarshall/`,
    // Content of the About Me section
    about: `I first bought Bitcoin in 2014 after hearing some buzz about it on the internet, only to sell it all a few months later. In early 2017, one of my customers struck up a conversation with me about Bitcoin, which prompted me to take a second look. After doing much more research this time around, I fell down the rabbit hole and have been a fan ever since.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Shorty Awards - Finalist: Integrated Campaign',
        description:
          "I was nominated with my team for a Shorty Award for our work in launching the world's first crypto rewards credit card. Activation across social media played a big part in the card's success",
        link:
          'https://shortyawards.com/14th/blockfi-the-worlds-first-crypto-rewards-credit-card',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Trust Machines',
        description: 'Social Media Manager, January 2023 - Present',
        link: 'https://twitter.com/trustmachinesco',
      },
      {
        name: 'BlockFi',
        description:
          'Social Media & Community Manager, March 2021 - January 2023',
        link:
          'https://twitter.com/search?q=(from%3Ablockfi)%20until%3A2022-11-09%20since%3A2021-04-01%20-filter%3Areplies&src=typed_query&f=top',
      },
      {
        name: 'Microsoft',
        description: 'Various Sales & Support Roles, March 2012 - March 2021',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Trust Machines',
        description: 'Social Media Manager, January 2023 - Present',
        link: 'https://twitter.com/trustmachinesco',
      },
      {
        name: 'BlockFi',
        description:
          'Social Media & Community Manager, March 2021 - January 2023',
        link:
          'https://twitter.com/search?q=(from%3Ablockfi)%20until%3A2022-11-09%20since%3A2021-04-01%20-filter%3Areplies&src=typed_query&f=top',
      },
      {
        name: 'Microsoft',
        description: 'Various Sales & Support Roles, March 2012 - March 2021',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    // skills: [
    //   {
    //     name: 'Languages & Frameworks',
    //     description:
    //       'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
    //   },
    //   {
    //     name: 'Databases',
    //     description: 'MongoDB, PostreSQL, MySQL',
    //   },
    //   {
    //     name: 'Other',
    //     description:
    //       'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
    //   },
    // ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    'gatsby-plugin-twitter',
    // `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brandon Marshall | SOcial Media Manager`,
        short_name: `Brandon Marshall`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
