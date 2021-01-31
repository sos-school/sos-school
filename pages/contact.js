import { useRouter } from 'next/router'
import Head from 'next/head'
import { contact } from '../content'
import i18n from '../lib/i18n'

export default function Contact() {
    const router = useRouter();
    const t = i18n(router.locale, contact);

    return (
        <>
            <Head>
                <title>{t.title}</title>
            </Head>
            <main>
                <h1>{t.title}</h1>
                <p>{t.content.email}</p>
                <p className="text-center">
                    <a href="mailto:contact@sos-school.org" className="mail">contact@sos-school.org</a>
                </p>
                <p>{t.content.entice}</p>
            </main>
        </>
    )
}
