import { useRouter } from 'next/router'
import Head from 'next/head'
import en from '../locales/en'
import fr from '../locales/fr'
import de from '../locales/de'
import lu from '../locales/lu'

export default function Home() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'lu' ? lu : locale === 'de' ? de : locale === 'fr' ? fr : en;

    return (
        <>
            <Head>
                <title>{t.title}</title>
            </Head>
            <main>
                <h1 className="text-5xl pt-16">{t.title}</h1>
            </main>
        </>
    )
}
