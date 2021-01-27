import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { snippets, pages } from '../../content'
import { languages } from '../../data'
import i18n from '../../lib/i18n'

function NavLink(props){
    return (
        <li className="flex-grow self-center">
            <Link href={props.href} as={props.as}>
                <a>{props.children}</a>
            </Link>
        </li>
    )
}

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
                <NavLink href="/" as={p.home.id}>{p.home.value}</NavLink>
                <NavLink href="/about" as={p.about.id}>{p.about.value}</NavLink>
                <NavLink href="/team" as={p.team.id}>{p.team.value}</NavLink>
                <NavLink href="/contact" as={p.contact.id}>{p.contact.value}</NavLink>
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
