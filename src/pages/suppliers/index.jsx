import Head from 'next/head'
import Link from 'next/link'

import { useEffect, useState } from 'react'

export default function Home({ suppliers }) {

  function deleteSupplier(id) {
    fetch(`https://stock-final-5916886.vercel.app/api/stock/suppliers/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
      <Head>
        <title>Supplier Management</title>
      </Head>
      <h3 class='heading'>Supplier Management</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Update</th>
            <th>Delete</th>
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
                  <td>
                    {/* <button onClick= "window.location.href=`/suppliers/update/${supplier._id}`;">Update</button> */}
                    <Link href={`/suppliers/update/${supplier._id}`}>Update</Link>
                  </td>
                  <td>  
                    <button onClick={() => deleteSupplier(supplier._id)}>Delete</button>
                  </td>
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