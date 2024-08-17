import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from '../components/Container'
import Styles from '../common/Styles'
import Colors from '../constants/Colors'
import { constant } from '../constants/constants'

const Home = () => {
  return (
    <Container style={Styles.centered} backgroundColor={Colors.menu3}>
      <View >
      <Text style={{ fontSize: constant.titleFontSize }}>Home</Text>
      </View>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({})