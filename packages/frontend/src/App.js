import React, { Component } from 'react'
import logo from './logo.svg'
import {
  BrowserRouter
} from 'react-router-dom'
import {
  Helmet
} from 'react-helmet'
import Pages from './pages'
import {JssProvider,jss} from 'react-jss'
import './utils/react-comment'
/**
 *
 *
 * @class App
 * @extends {Component}
 * @see https://github.com/cssinjs/react-jss/issues/127
 * @see https://stackoverflow.com/questions/46916402/how-to-add-visible-html-comment-in-jsx
 * @see https://github.com/cssinjs/react-jss/issues/103#issuecomment-342723646
 */
jss.setup({
  insertionPoint: 'custom-insertion-point'
})

class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} className="App">
        <div>
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </div>
      </JssProvider>
    )
  }
}

export default App
