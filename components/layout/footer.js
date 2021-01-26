import { useRouter } from 'next/router'
import { snippets } from '../../content'

export default function Footer() {
    const router = useRouter();
    const t =
    router.locale === 'lu' ? snippets.lu : 
    router.locale === 'de' ? snippets.de : 
    router.locale === 'fr' ? snippets.fr : snippets.en;

    return (
        <footer className="p-7 text-center leading-relaxed">
            <p>
                {t.attr.built} 
                <a href="https://nicobachner.com" className="text-blue-400"> Nico Bachner </a>
                {t.attr.date} 2021
            </p>
            <p>Hosted on <a href="https://vercel.com/?utm_source=sos-school&utm_campaign=oss" className="text-blue-400">Vercel</a></p>
        </footer>
    )
}
