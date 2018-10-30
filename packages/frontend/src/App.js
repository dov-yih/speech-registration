import React, { Component } from 'react'
import logo from './logo.svg'
import {
  BrowserRouter
} from 'react-router-dom'
import Pages from './pages'
import {JssProvider,jss} from 'react-jss'

/**
 *
 *
 * @class App
 * @extends {Component}
 * @see https://github.com/cssinjs/react-jss/issues/127
 * @see https://stackoverflow.com/questions/46916402/how-to-add-visible-html-comment-in-jsx
 * @see https://github.com/cssinjs/react-jss/issues/103#issuecomment-342723646
 */
// jss.setup({
//   insertionPoint: 'custom-insertion-point'
// })

class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} className="App">
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </JssProvider>
    )
  }
}

export default App
