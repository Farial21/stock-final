import Head from "next/head"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supplier({ supplier }) {
  console.log('supplier 2', supplier)
  return (
    <>
      <Head>
        <title>{supplier.name}</title>
      </Head>
      <h1>{supplier.name}</h1>
      <p>{supplier.address}</p>
      <p>{supplier.phone}</p>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`https://stock-final-5916886.vercel.app/api/stock/suppliers/${params.id}`)
  const supplier = await res.json()
  console.debug('supplier 1', supplier)
  return { props: { supplier } }
}