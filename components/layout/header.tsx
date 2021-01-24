import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import en from '../../locales/en'
import fr from '../../locales/fr'
import de from '../../locales/de'
import lu from '../../locales/lu'

export default function Header() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'lu' ? lu : locale === 'de' ? de : locale === 'fr' ? fr : en;

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push('/','/', { locale })
    };

    return (
        <nav className="px-8 py-2 flex justify-between">
            <Link href="/">
                <Image 
                    src="/logo.png" 
                    width="48" 
                    height="48"
                />
            </Link>
            <ul className="flex justify-center space-x-4">
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
                defaultValue={locale}
                className="self-center"
            >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="de">DE</option>
                <option value="lu">LU</option>
            </select>
        </nav>
    )
}
