import { useRouter } from 'next/router'
import Head from 'next/head'
import snippets from '../locales/snippets'

export default function Custom404() {
    const router = useRouter();
    const t =
    router.locale === 'lu' ? snippets.lu : 
    router.locale === 'de' ? snippets.de : 
    router.locale === 'fr' ? snippets.fr : snippets.en;

    return (
        <>
            <Head>
                <title>404 - {t.notfound}</title>
            </Head>
            <main>
                <h1 className="text-5xl pt-20">404 - {t.notfound}</h1>
            </main>
        </>
    )
}