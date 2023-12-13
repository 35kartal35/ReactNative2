import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesignScreen() {
  return (
    <View style={{backgroundColor:'gray', width: '100%', height: '100%'}}>
      <View style={styles.mainOne}/>
      <View style={styles.mainTwo}/>
      <View style={styles.mainThree}/>
      <View style={styles.mainFour}/>
    </View>
  )
}

const styles = StyleSheet.create({

    mainOne:{
      top: 0,
      left: 0,
      position: 'absolute',
      width: '25%',
      height: '25%',
      backgroundColor: 'red',
    },
    mainTwo:{
      top: 0,
      right: 0,
      position: 'absolute',
      width: '25%',
      height: '25%',
      backgroundColor: 'yellow',
    },
    mainThree:{
      bottom: 0,
      left: 0,
      position: 'absolute',
      width: '25%',
      height: '25%',
      backgroundColor: 'black',
    },
    mainFour:{
      bottom: 0,
      right: 0,
      position: 'absolute',
      width: '25%',
      height: '25%',
      backgroundColor: 'green',
    }
})