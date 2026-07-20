export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', 
    },
    sitemap: 'https://www.otonistephen.vercel.app/sitemap.xml',
  };
}