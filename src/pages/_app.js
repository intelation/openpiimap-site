import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Poppins } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/styles/main.css';
import '@/styles/fonts.css';
import CookieManager from '@/components/CookieManager';
import Head from 'next/head';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600'] });


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const handleAcceptAnalytics = () => {
    // Analytics acceptance logic placeholder
  };

  const canonicalUrl = `https://www.intelation.com${router.asPath.split('?')[0]}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
      <CookieManager onAcceptAnalytics={handleAcceptAnalytics} />
    </>
  );
}

export default MyApp;
