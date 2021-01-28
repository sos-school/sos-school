import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/icon.png"/>
            </Head>

            <Header/>
            <hr/>
            <Component {...pageProps} />
            <hr/>
            <Footer/>
        </>
    )
}
