import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { snippets } from '../content'
import i18n from '../lib/i18n'

export default function Custom404() {
    const router = useRouter();
    const t = i18n(router.locale, snippets);

    return (
        <>
            <Head>
                <title>404 - {t.notfound.title}</title>
            </Head>
            <main>
                <h1 className="text-5xl pt-20">404 - {t.notfound.title}</h1>
                <p className="text-center text-2xl">
                    <Link href="/"><a className="link">{t.notfound.link}</a></Link>
                </p>
            </main>
        </>
    )
}