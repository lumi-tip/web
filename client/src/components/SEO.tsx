import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  namespace: string;
  metaPath?: string;
}

export default function SEO({ namespace, metaPath = 'meta' }: SEOProps) {
  const { t } = useTranslation(namespace);
  
  const title = t(`${metaPath}.title`);
  const description = t(`${metaPath}.description`);
  const keywords = t(`${metaPath}.keywords`, '');
  const ogTitle = t(`${metaPath}.ogTitle`, title);
  const ogDescription = t(`${metaPath}.ogDescription`, description);
  const twitterTitle = t(`${metaPath}.twitterTitle`, title);
  const twitterDescription = t(`${metaPath}.twitterDescription`, description);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content="LearnPack" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:creator" content="@learnpack" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="LearnPack" />
    </Helmet>
  );
}
