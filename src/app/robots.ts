import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Example
        },
        sitemap: 'https://lautarodesouches.com/sitemap.xml',
    };
}
