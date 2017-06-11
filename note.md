## server rendering with react 

fetching data from the serverside: 

- you make an extra file on the server and you make an api call to get the data  .. 
- you import the file server side to invoke it ... ( why would I do that if I already have the data on the server)

render react components on the server `reactDOMServer` 
```javascript 
// serverRender.js
const ReactDOMRender = require('react-dom/render')
const App = require('../client/app') 
const axios = require('axios') 

axios.get('...').then( data => {
  ReactDOMRender.renderToString("<app />")
})

// you can pass the data to App to prerender it . 


```

the checksum problem 

- you are rendering server side with the data you got from the api call on the server `{x:'y'}` 
- react have a default state for data of = {} then it makes api call to get the data 
- when server send the html to the client it sends the data then react immediately override that 
  because its state is different , then it makes another api call to render it as it was again . 

now how to fix this problem 

one solution is to make react render after fetching the data ( same as that the server fetched prev ) 
now the markup that the server returns matches with the markup that react produced
however we have to make one extra api call to get the data . 

```javascript 
import axios 
axios.get( ...).then( data => {
  ReacDOM.render( .... ) // with data 
})

```


another solution is  to cache the data when its coming back from the server so that react wouldn't 
have to make an api call to get it 



```javascript 


```












