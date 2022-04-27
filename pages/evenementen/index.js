import Layout from '../../components/Layout'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/ninjas.module.css'
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
        <Layout users>
            <div>
                <h2 className={utilStyles.headingLg}>Alle evenementen</h2>
                {evenementen.map(evenement => (
                    <Link href={'/evenementen/' + evenement.record.id} key={evenement.record.id} >
                        <a className={styles.single}>
                            <h3>{evenement.record.fields.titel}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}

export default Evenementen;