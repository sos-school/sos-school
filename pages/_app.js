import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/icon.png"/>
                <meta name="description" content="We are a student initiative founded by Mathis Oberlé. Our team of young and motivated students seek to provide educational support to the primary school children most severely impacted by CoViD-19."></meta>
            </Head>

            <Header/>
            <hr/>
            <Component {...pageProps} />
            <hr/>
            <Footer/>
        </>
    )
}
