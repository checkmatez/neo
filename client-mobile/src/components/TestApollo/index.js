import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const QUERY = gql`
  query allPartners {
    allPartners {
      id
      name
      legalName
      notes
      contactInformation {
        id
        type
        value
      }
    }
  }
`

class Test extends Component {
  render() {
    const { loading, error, allPartners } = this.props.data
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {loading && <Text>Loading</Text>}
        {error && <Text style={{ color: 'red' }}>{JSON.stringify(error)}</Text>}
        <Text>{JSON.stringify(allPartners)}</Text>
      </View>
    )
  }
}

export default graphql(QUERY)(Test)
