import Head from 'next/head';
import { Fragment } from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, user-scalable=no"
                />
                <title>Curso Tailwind</title>
            </Head>
            <body className="bg-body-pattern bg-scroll">
                <Component {...pageProps} />
            </body>
        </Fragment>
    );
}

export default MyApp;
