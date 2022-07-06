import Tooltip from 'react-tooltip';
import { DefaultSeo } from 'next-seo';
import SEO from '../nextseo.config.js';

// Import TailwindCSS.
import '../styles/tailwind.css';
// Import Custom CSS for modifying things outside of Tailwind.
import '../styles/style.css';

function App({ Component, pageProps }) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <DefaultSeo {...SEO} />
      <Tooltip backgroundColor="black" textColor="white" />
      <Component {...pageProps} />
    </>
  )
}

export default App