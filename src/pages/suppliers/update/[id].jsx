import Head from "next/head"
import Link from "next/link"

import { useState } from "react";
import { useForm } from "react-hook-form";



// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supplier({ supplier }) {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");


  const saveSupplier = async (data) => {
    const response = await fetch(`http://localhost:3000/api/stock/suppliers/${supplier._id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // serialisation
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const result = await response.json();   // deserialise
    if (result.error) {
      alert("Error: " + result.error)
    } else {
      alert("Supplier updated")
      window.location.href = "/suppliers"
    }
    console.log(result)
    setData(JSON.stringify(data))
  }

  console.log('supplier 2', supplier)
  if (!supplier) return (
    <div>
      <p>Supplier not found</p>
      <Link href="/suppliers">Back</Link>
    </div>
  );

  return (
    <>
      <Head>
        <title>Update {supplier.name}</title>
      </Head>
      <h3 class="heading">Update Supplier</h3>

      <div class="formDiv" style={{ margin: '1rem' }}>
            
        <form onSubmit={handleSubmit(saveSupplier)}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name", { required: true })} placeholder="Supplier Name" /><br />

            <label htmlFor="address">Address</label>
            <input type="text" id="text" {...register("address", { required: true })} placeholder="Address" /><br />

            <label htmlFor="phone">Phone Number </label>
            <input type="text" id="phone" {...register("phone", { required: true })} placeholder="Phone Number" /><br />

            <input type="submit"/>
            <p>{data}</p><br />
        </form>
      </div>

      <p>{supplier.name}</p>
      <p>{supplier.address}</p>
      <p>{supplier.phone}</p>
      <Link href="/suppliers">Back</Link>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`http://localhost:3000/api/stock/suppliers/${params.id}`)
  const supplier = await res.json()
  console.debug('supplier 1', supplier)
  return { props: { supplier } }
}