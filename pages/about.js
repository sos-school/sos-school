import { useRouter } from 'next/router'
import Head from 'next/head'
import en from '../locales/en'
import fr from '../locales/fr'
import de from '../locales/de'
import lu from '../locales/lu'

export default function About() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'lu' ? lu : locale === 'de' ? de : locale === 'fr' ? fr : en;

    return (
        <>
            <Head>
                <title>{t.about}</title>
            </Head>
            <main>
                <h1 className="text-4xl pt-12">{t.about}</h1>
            </main>
        </>
    )
}
