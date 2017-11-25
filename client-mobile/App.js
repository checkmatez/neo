import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'

import configureApolloClient from './src/config/configureApolloClient'
import { mainTheme } from './src/themes'

import TestApollo from './src/components/TestApollo'
import { setTimeout } from 'core-js/library/web/timers'

const client = configureApolloClient()

class App extends Component {
  state = {
    waiting: true,
  }
  render() {
    if (this.state.waiting) {
      return null
    }
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={mainTheme}>
          <TestApollo />
        </ThemeProvider>
      </ApolloProvider>
    )
  }

  componentDidMount() {
    setTimeout(() => this.setState({ waiting: false }), 0)
  }
}

export default App
