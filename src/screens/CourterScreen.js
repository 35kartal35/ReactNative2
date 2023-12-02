import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'


export default function CourterScreen() {
  const [counter, setCounter] = useState(5)
  return (
    <View style={styles.Buton}>
      <Button title='Arttırır' onPress={()=>{
        setCounter(counter + 1)
      }}/>
      <Button title='Azaltır' onPress={()=>{
        setCounter(counter - 1)
      }}/>
      <Text style={styles.Texti}>Sayı: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Buton: {
    
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    gap:20,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#d6de8e'
    
      },

      Texti: {

        fontSize: 40,
        color: '#961e74'
      }
})