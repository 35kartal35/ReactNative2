import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'

import React from 'react'

const image = {uri: 'https://media.istockphoto.com/id/681388560/tr/foto%C4%9Fraf/kel-kartal-buzlu-sular-u%C3%A7an.jpg?s=2048x2048&w=is&k=20&c=zC1w_GIw-xEe5flF4R-yXWsw7DreKMMF9vS8uQamnD0='};

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, gap: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#d6de8e' }}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={{ color: 'orange',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    }}>Anasayfa</Text>
      <Button
        color="#a87158"
        title="Kurs Sayfasına Git"
        onPress={() => navigation.navigate('Kurslarim')}
      />
      <Button
        color="#a2b350"
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate('Kurs Bilgilerim')}
      />
      <Button
        color="#bf6773"
        title="Sayaç Projesi"
        onPress={() => navigation.navigate('Sayaç Projesi')}
      />
      <Button
        color="#74b9d6"
        title="Kutu Uygulaması"
        onPress={() => navigation.navigate('Kutu Uygulaması')}
      />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    
    width: '100%'
  }
})