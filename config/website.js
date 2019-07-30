const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Give or Gig - A Skilled Staffing App', // Navigation and Site Title
  siteTitleAlt: 'Give or Gig', // Alternative Site title for SEO
  siteTitleShort: 'Give or Gig', // short_name for manifest
  siteHeadline: '', // Headline for schema.org JSONLD
  siteUrl: 'https://giveorgig.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: '',
  author: 'Give or Gig', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@giveorgig', // Twitter Username
  ogSiteName: 'giveorgig', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
