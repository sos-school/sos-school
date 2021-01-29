import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { snippets, pages } from '../../content'
import { languages } from '../../data'
import i18n from '../../lib/i18n'

function LanguageSelect(props) {
    const router = useRouter();
    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.pathname, { locale })
    };

    return (
        <div className={props.className}>
            <select
                onChange={changeLanguage}
                defaultValue={router.locale}
                className="px-2 py-1 border"
            >
                {languages.map((language, key) => {
                    return (
                        <option 
                            className="" 
                            value={language.short} 
                            key={key}
                        >
                            {language.flag}
                            {language.short.toUpperCase()}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default function Header() {
    const router = useRouter();
    const t = i18n(router.locale, snippets);
    const p = i18n(router.locale, pages);

    return (
        <nav className="px-8 py-4 flex justify-between space-x-8">
            <Link href="/">
                <Image
                    src="/logo.png"
                    width="48"
                    height="48"
                />
            </Link>
            <ul className="hidden md:flex justify-center space-x-8">
                {p.map((page, index) => {
                    return (
                        <li key={index} className="flex-grow self-center">
                            <Link href={page.file} as={page.url}>
                                <a>{page.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <LanguageSelect className="hidden md:block self-center" />
            <details className="md:hidden self-center">
                <summary className="border rounded-lg px-4 py-2">{t.menu}</summary>
                <div className="absolute top-24 right-4 px-8 py-2 bg-white border rounded-xl">
                    <ul>
                        {p.map(page => {
                            return (
                                <li className="my-4">
                                    <Link href={page.file} as={page.url}>
                                        <a>{page.title}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <LanguageSelect className="my-4" />
                </div>
            </details>
        </nav>
    )
}
