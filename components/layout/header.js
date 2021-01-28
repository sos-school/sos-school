import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { snippets, pages } from '../../content'
import { languages } from '../../data'
import i18n from '../../lib/i18n'

function NavLinkBar(props){
    return (
        <li className="flex-grow self-center">
            <Link href={props.href} as={props.as}>
                <a>{props.children}</a>
            </Link>
        </li>
    )
}

function NavLinkDrop(props){
    return (
        <li className="my-4">
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
        <nav className="px-8 py-4 flex justify-between space-x-8">
            <Link href="/">
                <Image
                    src="/logo.png"
                    width="48"
                    height="48"
                />
            </Link>
            <ul className="hidden md:flex justify-center space-x-8">
                <NavLinkBar href="/" as={p.home.id}>{p.home.value}</NavLinkBar>
                <NavLinkBar href="/about" as={p.about.id}>{p.about.value}</NavLinkBar>
                <NavLinkBar href="/team" as={p.team.id}>{p.team.value}</NavLinkBar>
                <NavLinkBar href="/contact" as={p.contact.id}>{p.contact.value}</NavLinkBar>
            </ul>
            <select
                onChange={changeLanguage}
                defaultValue={router.locale}
                className="hidden md:block self-center"
            >
                {languages.map((language, key) => {
                    return <option value={language.short} key={key}>{language.flag} {language.short.toUpperCase()}</option>
                })}
            </select>
            <details className="md:hidden self-center">
                <summary>{t.menu}</summary>
                <ul className="absolute top-24 right-4 px-8 py-2 bg-blue-100 border rounded-xl">
                    <NavLinkDrop href="/" as={p.home.id}>{p.home.value}</NavLinkDrop>
                    <NavLinkDrop href="/about" as={p.about.id}>{p.about.value}</NavLinkDrop>
                    <NavLinkDrop href="/team" as={p.team.id}>{p.team.value}</NavLinkDrop>
                    <NavLinkDrop href="/contact" as={p.contact.id}>{p.contact.value}</NavLinkDrop>
                </ul>
            </details>
        </nav>
    )
}
