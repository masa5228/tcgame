import { useEffect } from 'react';

const SEO = ({ title, description, keywords, canonical, ogImage }) => {
  useEffect(() => {
    // タイトルの更新
    if (title) {
      document.title = `${title} | T!C!Game (トカゲー)`;
    }

    // メタタグの更新
    const updateMetaTag = (name, content, isProperty = false) => {
      if (!content) return;

      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    // Description
    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description, true);
    }

    // Keywords
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // OG Image
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
      updateMetaTag('twitter:image', ogImage, true);
    }

    // OG Title
    if (title) {
      updateMetaTag('og:title', `${title} | T!C!Game (トカゲー)`, true);
      updateMetaTag('twitter:title', `${title} | T!C!Game (トカゲー)`, true);
    }

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // OG URL
    if (canonical) {
      updateMetaTag('og:url', canonical, true);
      updateMetaTag('twitter:url', canonical, true);
    }
  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEO;
