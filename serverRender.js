import config from './config'
import axios from 'axios'
import React from 'react' // we have jsx in this file 
import ReactDOMServer from 'react-dom/server'
import App from './src/components/App'

export default () => axios.get(`${config.serverUrl}/api/data`)
  .then(({ data }) => {
    return {
      html: ReactDOMServer.renderToString(<App data={data} />),
      data
    }
  })
  .catch(console.error)





