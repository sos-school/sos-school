import Link from 'next/link'
import { useRouter } from 'next/router'
import snippets from '../../locales/snippets'

export default function Footer() {
    const router = useRouter();
    const t =
    router.locale === 'lu' ? snippets.lu : 
    router.locale === 'de' ? snippets.de : 
    router.locale === 'fr' ? snippets.fr : snippets.en;

    return (
        <footer>

        </footer>
    )
}
