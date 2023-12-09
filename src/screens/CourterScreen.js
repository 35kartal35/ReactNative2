import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'
import React, { useState } from 'react'

const image = {uri: 'https://media-cdn.t24.com.tr/media/stories/2018/07/raw_dunya-uzerinde-00-kaplan-kaldi_519648136.jpg'};
export default function CourterScreen() {
  const [counter, setCounter] = useState(5)
  return (
    <View style={styles.Buton}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Button title='Arttırır' onPress={()=>{
        setCounter(counter + 1)
      }}/>
      <Button title='Azaltır' onPress={()=>{
        setCounter(counter - 1)
      }}/>
      <Text style={styles.Texti}>Sayı: {counter}</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  Buton: {
    
    justifyContent: 'center',
    
    
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#d6de8e'
    
      },

      Texti: {

        fontSize: 100,
        color: '#e31433'
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },

})