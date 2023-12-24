import Tooltip from 'react-tooltip';
import { DefaultSeo } from 'next-seo';
import SEO from '../nextseo.config.js';
import { SessionProvider } from "next-auth/react"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
// Import TailwindCSS.
import '../styles/tailwind.css';
// Import Custom CSS for modifying things outside of Tailwind.
import '../styles/style.css';

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <DefaultSeo {...SEO} />
      <Tooltip backgroundColor="black" textColor="white" />
      <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
      
    </>
  )
}

export default App