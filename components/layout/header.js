import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { snippets, pages } from '../../content'
import { languages } from '../../data'
import i18n from '../../lib/i18n'

export default function Header() {
    const router = useRouter();
    const t = i18n(router.locale, snippets);
    const p = i18n(router.locale, pages);

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.pathname, { locale })
    };

    return (
        <nav className="px-4 md:px-8 lg:px-12 xl:px-16 py-4 flex justify-between">
            <Link href="/">
                <Image 
                    src="/logo.png" 
                    width="48" 
                    height="48"
                />
            </Link>
            <ul className="hidden sm:flex justify-center space-x-8">
                <li className="flex-grow self-center">
                    <Link href="/" as={p.home.id}>
                        <a>{p.home.value}</a>
                    </Link>
                </li>
                <li className="flex-grow self-center">
                    <Link href="/about" as={p.about.id}>
                        <a>{p.about.value}</a>
                    </Link>
                </li>
                <li className="flex-grow self-center">
                    <Link href="/team" as={p.team.id}>
                        <a>{p.team.value}</a>
                    </Link>
                </li>
                <li className="flex-grow self-center">
                    <Link href="/contact" as={p.contact.id}>
                        <a>{p.contact.value}</a>
                    </Link>
                </li>
            </ul>
            <select
                onChange={changeLanguage}
                defaultValue={router.locale}
                className="self-center"
            >
                {languages.map(language => {
                    return <option value={language.short}>{language.flag} {language.short.toUpperCase()}</option>
                })}
            </select>
        </nav>
    )
}
