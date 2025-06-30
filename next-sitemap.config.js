/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.openpiimap.org',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/dashboard',
        '/change-password',
        '/forgot-password',
        '/reset-password',
        '/login',
        '/logout',
        '/signup',
        '/content',
        '/dashboard/*'
    ],
};
