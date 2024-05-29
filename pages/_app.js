import './global.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}