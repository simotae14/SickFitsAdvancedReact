import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';

import '../components/styles/nprogress.css';

// Start di NProgress Bar
Router.events.on('routeChangeStart', () => NProgress.start());
// Stop di NProgress Bar
Router.events.on('routeChangeComplete', () => NProgress.done());
// Stop di NProgress Bar in case of Error
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
