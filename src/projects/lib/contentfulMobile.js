/**
 * Contentful helper for mobile swipe deck
 * Transforms Contentful project data to match mobile version's expected format
 */

function toUrl(raw) {
  if (!raw) return "";
  return raw.startsWith("//") ? `https:${raw}` : raw;
}

/**
 * Transform Contentful project items to mobile format
 * @param {Array} items - Contentful items array
 * @returns {Array} Array of project objects in mobile format
 */
export function transformContentfulProjects(items) {
  if (!items || !Array.isArray(items)) return [];

  return items
    .map((item) => {
      const fields = item.fields || {};
      const sys = item.sys || {};
      
      // Get image URL
      let imageUrl = '';
      if (fields.image?.fields?.file?.url) {
        imageUrl = toUrl(fields.image.fields.file.url);
      }
      
      // Get logo URL
      let logoUrl = '';
      if (fields.logo?.fields?.file?.url) {
        logoUrl = toUrl(fields.logo.fields.file.url);
      }
      
      // Skip if no image or logo
      if (!imageUrl && !logoUrl) return null;
      
      const id = sys.id || '';
      if (!id) return null;
      
      return {
        id,
        title: String(fields.title || "Project"),
        subtitle: String(fields.subtitle || ""),
        image: imageUrl,
        logo: logoUrl,
        link: typeof fields.link === "string" ? fields.link : undefined,
        slug: fields.title ? String(fields.title).toLowerCase().replace(/\s+/g, "-") : undefined,
      };
    })
    .filter((p) => p !== null);
}
