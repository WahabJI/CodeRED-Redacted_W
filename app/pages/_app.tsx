import '../styles/globals.css'
// import "react-date-picker/dist/DatePicker.css";
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
