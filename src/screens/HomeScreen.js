import { StyleSheet, Text, View, Button } from 'react-native'

import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Anasayfa</Text>
      <Button
        title="Kurs Sayfasına Git"
        onPress={() => navigation.navigate('Kurslarım')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})