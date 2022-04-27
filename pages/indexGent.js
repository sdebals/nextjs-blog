import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

// use with md files
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
  
}

// This function gets called at build time
/*export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://data.stad.gent/api/records/1.0/search/?dataset=stap-naar-de-klas-gent&q=&rows=30')
  const allPostsData = await res.json()
  
    // By returning { props: { posts } }, 
    // the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        allPostsData,
      },
    }
  }*/

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I am Sophie</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
          </section>

       {/*<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((record) => (
            <li className={utilStyles.listItem} key={record.recordid}>
              {record.fields.adres}
              <br />
              {record.fields.postcode}
              <br />
              {record.fields.titel}
            </li>
          ))}
        </ul>
          </section>*/}
    </Layout>
  )
}