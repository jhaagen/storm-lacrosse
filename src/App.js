import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/home';
import PageNotFound from './pages/pagenotfound';
import Registration from './pages/registration';
import Schedule from './pages/schedule';
import Equipment from './pages/equipment';
import AreaTeams from './pages/area-teams';
import Contact from './pages/contact';

// Reusable SEO component
export const SEO = ({ title, description, image, type = 'website' }) => {
  const siteTitle = "Storm Youth Lacrosse | Fort Wayne Indiana";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Fort Wayne Indiana's youth boys lacrosse team. Join us for competitive lacrosse training and games.";
  const defaultImage = "/assets/storm-game.jpg";
  const siteUrl = "https://stormlacrosse.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    "name": fullTitle,
    "description": description || defaultDescription,
    "image": image || defaultImage,
    "url": siteUrl,
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
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/equipment' element={<Equipment />} />
        <Route path='/area-teams' element={<AreaTeams />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;

