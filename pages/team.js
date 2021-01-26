import { useRouter } from 'next/router'
import Head from 'next/head'
import { team } from '../content'
import { members } from '../data'
import i18n from '../lib/i18n'

export default function Team() {
    const router = useRouter();
    const t = i18n(router.locale, team);

    return (
        <>
            <Head>
                <title>{t.title}</title>
            </Head>
            <main>
                <h1>{t.title}</h1>
                <p>{t.description}</p>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                    {members.map(member => {
                        return <li className="text-center">{member.firstName + " " + member.lastName}</li>
                    })}
                </ul>
                <p>{t.recruit} <a href="mailto:contact@sos-school.org" className="text-green-400"> via email</a></p>
            </main>
        </>
    )
}