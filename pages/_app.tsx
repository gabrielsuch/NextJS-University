import React from "react"

import {Provider} from "../providers/index"
import {GlobalStyle} from "../styles/global"


const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Component {...pageProps} />
      <GlobalStyle/>
    </Provider>
  )
}

export default MyApp
