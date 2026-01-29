const contentful = require('contentful');
const fs = require('fs');
const path = require('path');

const client = contentful.createClient({
  space: 'yk9odzegnojt',
  accessToken: 'Qo-cqV0zm7ZQzXFN8BuuWmwLo4yvW23cctCiBDLnYgU'
});

async function generateSitemap() {
  try {
    console.log('Fetching projects from Contentful...');
    const response = await client.getEntries({ 
      content_type: 'projects',
      limit: 1000 // Get all projects
    });
    
    const projects = response.items;
    const today = new Date().toISOString().split('T')[0];
    
    console.log(`Found ${projects.length} projects`);
    
    // Start XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://clubhausagency.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://clubhausagency.com/who-we-are</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clubhausagency.com/services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clubhausagency.com/why-clubhaus</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://clubhausagency.com/portfolio</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://clubhausagency.com/projects</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://clubhausagency.com/our-heart</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://clubhausagency.com/team</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://clubhausagency.com/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    
    // Add individual project pages
    projects.forEach(project => {
      const lastmod = project.sys.updatedAt.split('T')[0];
      xml += `
  <url>
    <loc>https://clubhausagency.com/projects/${project.sys.id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
    
    xml += '\n</urlset>';
    
    // Write to public folder
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);
    
    console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
    console.log(`   Total URLs: ${projects.length + 9}`);
    console.log(`   Project pages: ${projects.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
