import React from 'react';
import { PROFILE } from '../constants';

const SEO: React.FC = () => {
  return (
    <>
      <title>{`${PROFILE.name} | ${PROFILE.role}`}</title>
      <meta name="description" content={PROFILE.summary} />
      <meta name="keywords" content="Software Engineer, Senior Developer, Go, React, Bangkok, Microservices, Gemini AI, Full Stack, NestJS" />
      <meta name="author" content={PROFILE.name} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={PROFILE.portfolio} />
      <meta property="og:title" content={`${PROFILE.name} - ${PROFILE.role}`} />
      <meta property="og:description" content={PROFILE.summary} />
      <meta property="og:image" content="https://picsum.photos/1200/630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={PROFILE.portfolio} />
      <meta property="twitter:title" content={`${PROFILE.name} - ${PROFILE.role}`} />
      <meta property="twitter:description" content={PROFILE.summary} />
      <meta property="twitter:image" content="https://picsum.photos/1200/630" />
      
      <link rel="canonical" href={PROFILE.portfolio} />
    </>
  );
};

export default SEO;