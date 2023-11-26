import { StyleSheet, Text, View, Button } from 'react-native'

import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Anasayfa</Text>
      <Button
        title="Kurs Sayfasına Git"
        onPress={() => navigation.navigate('Kurslarim')}
      />
      <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate('Kurs Bilgilerim')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})