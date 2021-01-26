import { useRouter } from 'next/router'
import Head from 'next/head'
import { about } from '../content'
import i18n from '../lib/i18n'

export default function About() {
    const router = useRouter();
    const t = i18n(router.locale, about);

    return (
        <>
            <Head>
                <title>{t.title}</title>
            </Head>
            <main>
                <h1>{t.title}</h1>
                <div>
                    {t.content.map(section => {
                        return (
                            <section className="my-6">
                                <h2>{section.title}</h2>
                                <p>{section.content}</p>
                            </section>
                        )
                    })}
                </div>
            </main>
        </>
    )
}
