import { useRouter } from 'next/router'
import Head from 'next/head'
import team from '../locales/content/team'
import members from '../data/members.json'

export default function Team() {
    const router = useRouter();
    const t = 
    router.locale === 'lu' ? team.lu : 
    router.locale === 'de' ? team.de : 
    router.locale === 'fr' ? team.fr : team.en;

    return (
        <>
            <Head>
                <title>{t.title}</title>
            </Head>
            <main>
                <h1>{t.title}</h1>
                <p>{t.description}</p>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                    {members.map(member=>{
                        return <li className="text-center">{member.firstName + " " + member.lastName}</li>
                    })}
                </ul>
                <p>{t.recruit}</p>
            </main>
        </>
    )
}