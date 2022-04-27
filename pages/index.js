import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stap naar de klas | home </title>
      </Head>
      <h1> homepage</h1>
      <p>Consequat minim est enim labore dolore veniam elit aliquip. Deserunt proident mollit sunt veniam aliquip consectetur nisi mollit consequat. Non ad ad labore voluptate aliquip anim nostrud labore veniam enim. Ipsum excepteur consequat laborum do. Elit laborum aliquip ullamco ea deserunt voluptate proident culpa ut officia non quis irure.</p>
      <p>Laborum consectetur culpa ullamco veniam magna pariatur dolor excepteur dolor in. Nisi minim minim adipisicing duis velit cillum ea aliqua amet ex irure. Amet exercitation esse commodo minim proident dolore enim exercitation reprehenderit nostrud ea fugiat voluptate. Dolor eiusmod enim qui ullamco aliquip deserunt ad commodo pariatur consectetur proident. </p>
      <Link href="/evenementen"><a className="bg-sky-700 text-white p-4 rounded-lg inline-block mt-4">See evenementen lijst</a></Link>
    </>
  )
}