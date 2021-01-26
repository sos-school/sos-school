import { useRouter } from 'next/router'
import Head from 'next/head'
import { about } from '../content'

export default function About() {
    const router = useRouter();
    const t =
    router.locale === 'lu' ? about.lu : 
    router.locale === 'de' ? about.de : 
    router.locale === 'fr' ? about.fr : about.en;
    const sections = t.content;

    return (
        <>
            <Head>
                <title>{t.title}</title>
            </Head>
            <main>
                <h1>{t.title}</h1>
                <div>
                    {sections.map(section => {
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
