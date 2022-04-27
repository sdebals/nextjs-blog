import Layout from '../../components/Layout'
import Link from 'next/link'

export const getStaticProps = async () => {
    /** runs at build time */
    const res = await fetch('https://data.stad.gent/api/v2/catalog/datasets/stap-naar-de-klas-gent/records/');
    const data = await res.json(); /*** now gives an array */

    return {
        props: { evenementen : data.records }
    }
}

const Evenementen = ({ evenementen }) => {
    return (
            <div>
                <h2>Alle evenementen</h2>
                {evenementen.map(evenement => (
                    <Link href={'/evenementen/' + evenement.record.id} key={evenement.record.id} >
                        <a >
                            <h3>{evenement.record.fields.titel}</h3>
                        </a>
                    </Link>
                ))}
            </div>
    );
}

export default Evenementen;