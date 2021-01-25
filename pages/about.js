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
                <h1 className="text-4xl pt-12">{t.title}</h1>
            </main>
        </>
    )
}
