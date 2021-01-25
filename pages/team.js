import { useRouter } from 'next/router'
import Head from 'next/head'
import snippets from '../locales/snippets'
import members from '../data/members.json'

export default function Team() {
    const router = useRouter();
    const t = 
    router.locale === 'lu' ? snippets.lu : 
    router.locale === 'de' ? snippets.de : 
    router.locale === 'fr' ? snippets.fr : snippets.en;

    return (
        <>
            <Head>
                <title>{t.team}</title>
            </Head>
            <main>
                <h1>{t.team}</h1>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {members.map(member=>{
                        return <li className="text-center">{member.firstName + " " + member.lastName}</li>
                    })}
                </ul>
            </main>
        </>
    )
}