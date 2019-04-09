require('dotenv').config({
  path: '.env',
});
const path = require('path');

const siteUrl = 'http://localhost:8000';
module.exports = {
  siteMetadata: {
    siteUrl,
    description: 'Convert your wordpress blog to pwa using gatsby',
    keyword: 'wordpress, gatsby, blog, pwa',
    title: 'Wordpress Blog PWA',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'grafikfmu.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: 'gkmkbtAsKe9yQp4Bld0w4UnDZJ8H6E8sR4Jf4x0k3TRnQ9lyYXAR6pTis5OnWZ2h',
          wpcom_app_clientId: '65334',
          wpcom_user: 'antonioc57@gmail.com',
          wpcom_pass: 'Acl@20193',
        },
        verboseOutput: false,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Wordpress Blog PWA',
        short_name: 'Blog PWA',
        start_url: '/blog',
        background_color: '#1d69ab',
        theme_color: '#1d69ab',
        display: 'standalone',
        icon: path.join(__dirname, 'src/images/logo.png'),
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '' }],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
