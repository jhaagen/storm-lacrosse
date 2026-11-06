import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO = () => {
  const location = useLocation();
  const siteTitle = "Storm Youth Lacrosse | Fort Wayne Indiana";
  const siteUrl = "https://fwblacrosse.org";

  const getPageMetadata = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Home',
          description: "The Fort Wayne Storm is a youth boys lacrosse travel team in Fort Wayne, Indiana for grades 3-8, with 10U, 12U, and 14U teams. Spring 2027 registration is open."
        };
      case '/registration':
      case '/registration/':
        return {
          title: 'Registration',
          description: "Register for the Fort Wayne Storm lacrosse team's 2027 spring season. Open for 10U, 12U, and 14U teams. Includes winter training and spring games."
        };
      case '/schedule':
      case '/schedule/':
        return {
          title: 'Schedule',
          description: "View the Fort Wayne Storm lacrosse team's winter training schedule, spring training schedule, and upcoming games for the 2027 season."
        };
      case '/equipment':
      case '/equipment/':
        return {
          title: 'Equipment',
          description: "Learn about required lacrosse equipment for the Fort Wayne Storm team, including helmets, pads, gloves, and more. We offer equipment borrowing for new players."
        };
      case '/area-teams':
      case '/area-teams/':
        return {
          title: 'Area Teams',
          description: "Explore high school lacrosse teams in the Fort Wayne area, including Homestead, Leo, Carroll, Snider, Bishop Dwenger, and more."
        };
      case '/contact':
      case '/contact/':
        return {
          title: 'Contact',
          description: "Contact the Fort Wayne Storm youth boys lacrosse program by email, or follow the team on Facebook and Instagram."
        };
      default:
        return {
          title: 'Page Not Found',
          description: "The page you are looking for could not be found. Please contact us with any issues you may be experiencing.",
          notFound: true
        };
    }
  };

  const { title, description, notFound } = getPageMetadata();
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultImage = `${siteUrl}/assets/storm-game.jpg`;
  const pageUrl = `${siteUrl}${location.pathname.replace(/\/?$/, '/')}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    "name": "Fort Wayne Storm Lacrosse",
    "sport": "Lacrosse",
    "description": description,
    "image": defaultImage,
    "url": siteUrl,
    "logo": `${siteUrl}/assets/storm-logo.png`,
    "email": "fwstormlacrosse@outlook.com",
    "sameAs": [
      "https://www.facebook.com/fortwaynestormlacrosse",
      "https://www.instagram.com/fortwaynestormlacrosse"
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
      {notFound ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={pageUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
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