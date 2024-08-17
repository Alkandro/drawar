import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from '../components/Container'
import Styles from '../common/Styles'
import Colors from '../constants/Colors'
import { constant } from '../constants/constants'

const Settings = () => {
  return (
    <Container style={Styles.centered} backgroundColor={Colors.dark}>
      <Text  style={{ fontSize: constant.titleFontSize, color:'white'  }}>Settings</Text>
    </Container>
  )
}

export default Settings

const styles = StyleSheet.create({})