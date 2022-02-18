import '../styles/style.css'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
   <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta property="og:site_name" content="HussGB's Website" />
      <meta property="og:title" content="HussGB" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hussgb.dev" />
      <meta property="og:image" content="/favicons/favicon.ico" />
      <meta property="og:description" content="Hello, I am HussGB mostly called Huss. I am a front and back-end developer, click the website URL to find out more!" />
      <meta name="description" content="Hello, I am HussGB mostly called Huss. I am a front and back-end developer, click the website URL to find out more!" />
      <meta name="theme-color" content="#00008b" />
      

      <title>Husnain</title>
    </Head>
    
    <Component {...pageProps} />
   </>
  )
}

export default App