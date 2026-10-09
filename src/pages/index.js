import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, url, image } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'fr'} />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#232B45" />
        <link rel="icon" type="image/svg+xml" href="/brand/favicon.svg" />
        <link rel="apple-touch-icon" href="/brand/favicon-180.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <App />
    </>
  );
};
