import { StyleSheet, Text, View, Button } from 'react-native'

import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, gap: 20, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30}}>Anasayfa</Text>
      <Button
        title="Kurs Sayfasına Git"
        onPress={() => navigation.navigate('Kurslarim')}
      />
      <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate('Kurs Bilgilerim')}
      />
      <Button
        
        title="Sayaç Projesi"
        onPress={() => navigation.navigate('Sayaç Projesi')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
})