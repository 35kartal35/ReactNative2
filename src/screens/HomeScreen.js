import { StyleSheet, Text, View, Button } from 'react-native'

import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#7ddbc7' }}>
      <Text>Anasayfa</Text>
      <Button
        title="Kurs Sayfasına Git"
        onPress={() => navigation.navigate('Kurslarim')}
      />
      <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate('Kurs Bilgilerim')}
      />
      <Button
        style={styles.counter}
        title="Sayaç Projesi"
        onPress={() => navigation.navigate('Sayaç Projesi')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  counter: {
    backgroundColor: '#7ddbc7'
  }
})