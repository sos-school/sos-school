import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { snippets } from '../content'

export default function Custom404() {
    const router = useRouter();
    const t =
    router.locale === 'lu' ? snippets.lu : 
    router.locale === 'de' ? snippets.de : 
    router.locale === 'fr' ? snippets.fr : snippets.en;

    return (
        <>
            <Head>
                <title>404 - {t.notfound.title}</title>
            </Head>
            <main>
                <h1 className="text-5xl pt-20">404 - {t.notfound.title}</h1>
                <p className="text-center text-2xl">
                    <Link href="/"><a className="text-blue-400">{t.notfound.link}</a></Link>
                </p>
            </main>
        </>
    )
}