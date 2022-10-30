import '../styles/globals.css'
// import "react-date-picker/dist/DatePicker.css";
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { UserProvider } from '@auth0/nextjs-auth0'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    )
}
