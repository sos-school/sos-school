import { useRouter } from 'next/router'
import Head from 'next/head'
import { home } from '../content'
import i18n from '../lib/i18n'

export default function Home() {
    const router = useRouter();
    const t = i18n(router.locale, home);

    return (
        <>
            <Head>
                <title>{t.title}</title>
            </Head>
            <main className="md:pt-6">
                <h1 className="text-5xl my-16">{t.title}</h1>
                <p>{t.content.description}</p>
            </main>
        </>
    )
}
