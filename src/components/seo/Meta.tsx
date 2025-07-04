// src/components/seo/Meta.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { siteConfig } from '@/content/siteConfig';

type MetaProps = {
  title?: string;
  description?: string;
  image?: string;
};

const Meta = ({ title, description, image }: MetaProps) => {
  const router = useRouter();
  const defaultTitle = siteConfig.title;
  const defaultDesc = "The personal portfolio of Wayne Hlatywayo, a professional bridging life sciences and technology.";
  const siteName = siteConfig.author;
  const defaultImage = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/assets/images/social-card.png`; // A social sharing image
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${router.asPath}`;

  const seo = {
    title: title ? `${title} | ${siteName}` : defaultTitle,
    description: description || defaultDesc,
    image: image || defaultImage,
    url: currentUrl,
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Head>
  );
};

export default Meta;
