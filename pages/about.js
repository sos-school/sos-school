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
            <main>
                <h1>{t.title}</h1>
                <section className="my-4">
                    <h2>{t.about.title}</h2>
                    <p>{t.about.content}</p>
                </section>
                <section className="my-4">
                    <h2>{t.purpose.title}</h2>
                    <p>{t.purpose.content}</p>
                </section>
                <section className="my-4">
                    <h2>{t.methods.title}</h2>
                    <p>{t.methods.content}</p>
                </section>
                <section className="my-4">
                    <h2>{t.price.title}</h2>
                    <p>{t.price.content}</p>
                </section>
            </main>
        </>
    )
}
