import 'Farial21/styles/globals.css'
import 'Farial21/styles/nav.css'
import { Fragment } from "react"
import Navigation from '../../components/navigation.jsx'

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Navigation/>
      <Component {...pageProps} />
    </Fragment>
  )
}
