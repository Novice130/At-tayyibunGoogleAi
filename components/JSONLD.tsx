
import React from 'react';
import { BRAND_NAME } from '../constants';

interface JSONLDProps {
  type: 'Organization' | 'WebSite' | 'FAQPage';
  data: any;
}

const JSONLD: React.FC<JSONLDProps> = ({ type, data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default JSONLD;
