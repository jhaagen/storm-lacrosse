import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO = () => {
  const location = useLocation();
  const siteTitle = "Storm Youth Lacrosse | Fort Wayne Indiana";
  const siteUrl = "https://stormlacrosse.com";

  const getPageMetadata = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Home',
          description: "The Fort Wayne Storm is a youth lacrosse program dedicated to fostering a love for the sport and developing the skills of young athletes in grades 3-8."
        };
      case '/registration':
        return {
          title: 'Registration',
          description: "Register for the Fort Wayne Storm lacrosse team's 2025 spring season. Open for 10U, 12U, and 14U teams. Includes winter training and spring games."
        };
      case '/schedule':
        return {
          title: 'Schedule',
          description: "View the Fort Wayne Storm lacrosse team's winter training schedule, spring training schedule, and upcoming games for the 2025 season."
        };
      case '/equipment':
        return {
          title: 'Equipment',
          description: "Learn about required lacrosse equipment for the Fort Wayne Storm team, including helmets, pads, gloves, and more. We offer equipment borrowing for new players."
        };
      case '/area-teams':
        return {
          title: 'Area Teams',
          description: "Explore high school lacrosse teams in the Fort Wayne area, including Homestead, Leo, Carroll, Snider, Bishop Dwenger, and more."
        };
      case '/contact':
        return {
          title: 'Contact',
          description: "Get in touch with the Fort Wayne Storm lacrosse team. Contact our staff including Program Coordinator, Director of Coaching, and team coaches."
        };
      default:
        return {
          title: 'Page Not Found',
          description: "The page you are looking for could not be found. Please contact us with any issues you may be experiencing."
        };
    }
  };

  const { title, description } = getPageMetadata();
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultImage = "/assets/storm-game.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "website",
    "name": fullTitle,
    "description": description,
    "image": defaultImage,
    "url": `${siteUrl}${location.pathname}`,
    "logo": `${siteUrl}/assets/storm-game.jpg`,
    "sameAs": [
      "https://www.facebook.com/fortwaynestormlacrosse"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fort Wayne",
      "addressRegion": "IN",
      "addressCountry": "US"
    }
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${location.pathname}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO; 