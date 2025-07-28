import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => {
  const router = useRouter();
  const siteTitle = "Förderverein Freibad Steinrausch e.V.";
  const defaultDescription = "Offizielle Website des Fördervereins Freibad Steinrausch e.V. – Informationen, Neuigkeiten und wie Sie uns unterstützen können.";
  const defaultImage = "/images/og-image.jpg"; // Pfad zu einem Standard-Open-Graph-Bild
  const defaultUrl = "https://www.freibad-steinrausch.de"; // Ihre Website-URL

  const seoTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image || defaultImage;
  const seoUrl = url || `${defaultUrl}${router.asPath}`;

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />
    </Head>
  );
};

export default SEO;