import React, { Component } from 'react'
import logo from './logo.svg'
import {
  BrowserRouter
} from 'react-router-dom'
import {
  Helmet
} from 'react-helmet'
import Pages from './pages'
// import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          < link
            href = "https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
            rel = "stylesheet"
          />
          <title>创新实践演讲登记</title>
        </Helmet>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
