import { useRouter } from 'next/router'
import Head from 'next/head'
import snippets from '../locales/snippets'

export default function Home() {
    const router = useRouter();
    const t = 
    router.locale === 'lu' ? snippets.lu : 
    router.locale === 'de' ? snippets.de : 
    router.locale === 'fr' ? snippets.fr : snippets.en;

    return (
        <>
            <Head>
                <title>{t.title}</title>
            </Head>
            <main>
                <h1 className="text-5xl pt-16">{t.title}</h1>
                <section>
                    <p></p>
                </section>
            </main>
        </>
    )
}
