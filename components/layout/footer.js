import { useRouter } from 'next/router'
import { snippets } from '../../content'
import i18n from '../../lib/i18n'

export default function Footer() {
    const router = useRouter();
    const t = i18n(router.locale, snippets);

    return (
        <footer className="p-7 text-center leading-relaxed">
            <p>
                {t.attr.built} 
                <a href="https://nicobachner.com" className="link"> Nico Bachner </a>
                {t.attr.date} 2021
            </p>
            <p>
                {t.attr.opensource} 
                <a href="https://github.com/sos-school/sos-school" className="link"> Open Source </a>
                {t.attr.support} 
                <a href="https://vercel.com/?utm_source=sos-school&utm_campaign=oss" className="link"> Vercel </a>
            </p>
        </footer>
    )
}
