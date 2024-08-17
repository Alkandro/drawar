import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { Container } from '../components/Container'
import Styles from '../common/Styles'
import Colors from '../constants/Colors'
import { constant } from '../constants/constants'


const Profile = () => {
  return (
    
    <ScrollView >
    <Container  style={Styles.centered} backgroundColor={Colors.light}>
      
      <Text style={{ fontSize: constant.titleFontSize }}>Profile</Text>
     
    </Container>
     </ScrollView>
    
  )
}

export default Profile

const styles = StyleSheet.create({


})