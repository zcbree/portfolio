// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    --primary-color: #B0B8FB;
    --primary-color-100: #D8DCFD;
    --primary-color-200: #D3D1F3;
    --primary-color-300: #C3BCE7;
    --white: #ffffff;
    --white-100: #F6F7FF;
    --white-200: #F0F3FF;
    --white-200: #E9ECF5;
    --white-200: #E2E4EB;
    --black: #050517;
  }
`


function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
