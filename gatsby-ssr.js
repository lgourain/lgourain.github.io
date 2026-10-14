const React = require("react");

// Cloudflare Web Analytics : mesure d'audience sans cookies (pas de bandeau de consentement).
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="cloudflare-web-analytics"
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "5e7fa4665ec14a33a4a45503e9cc59b5"}'
    />,
  ]);
};
