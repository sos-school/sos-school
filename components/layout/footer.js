import Link from 'next/link'
import { useRouter } from 'next/router'
import en from '../../locales/en'
import fr from '../../locales/fr'
import de from '../../locales/de'
import lu from '../../locales/lu'

export default function Footer() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'lu' ? lu : locale === 'de' ? de : locale === 'fr' ? fr : en;

    return (
        <footer>

        </footer>
    )
}
