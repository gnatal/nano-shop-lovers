import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import React, { FC } from 'react';
import { wrapper } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default wrapper.withRedux(MyApp);
