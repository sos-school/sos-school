import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { snippets } from '../../content'
import { languages } from '../../data'
import i18n from '../../lib/i18n'

export default function Header() {
    const router = useRouter();
    const t = i18n(router.locale, snippets);

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
            <ul className="hidden sm:flex justify-center space-x-4">
                <li className="flex-grow self-center">
                    <Link href="/about">
                        <a>{t.about}</a>
                    </Link>
                </li>
                <li className="flex-grow self-center">
                    <Link href="/team">
                        <a>{t.team}</a>
                    </Link>
                </li>
                <li className="flex-grow self-center">
                    <Link href="/contact">
                        <a>{t.contact}</a>
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
