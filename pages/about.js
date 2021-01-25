import { useRouter } from 'next/router'
import Head from 'next/head'
import about from '../locales/content/about'

export default function About() {
    const router = useRouter();
    const t =
    router.locale === 'lu' ? about.lu : 
    router.locale === 'de' ? about.de : 
    router.locale === 'fr' ? about.fr : about.en;

    return (
        <>
            <Head>
                <title>{t.title}</title>
            </Head>
            <main className="max-w-prose mx-auto">
                <h1>{t.title}</h1>
                <h2>{t.about.title}</h2>
                <p>{t.about.content}</p>
                <h2>{t.purpose.title}</h2>
                <p>{t.purpose.content}</p>
                <h2>{t.methods.title}</h2>
                <p>{t.methods.content}</p>
                <h2>{t.price.title}</h2>
                <p>{t.price.content}</p>
            </main>
        </>
    )
}
