import Head from 'next/head'
import Link from 'next/link'

export default function Home({ suppliers }) {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h3 class='heading'>Supplier List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {
            suppliers.map(supplier => {
              return (
                <tr key={supplier._id}>
                  <td>{supplier.name}</td>
                  <td>{supplier.address}</td>
                  <td>{supplier.phone}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`https://stock-final-5916886.vercel.app/api/stock/suppliers`)
  const suppliers = await res.json()
  return { props: { suppliers } }
}