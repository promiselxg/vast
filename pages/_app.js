import GlobalStyle from '../styles/globals.style';
import Providers from '../contexts/Providers'

function MyApp({ Component, ...pageProps }) {
  return (
    <Providers>
      <GlobalStyle />
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
