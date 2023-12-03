import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'
import React from 'react'

const image = {uri: 'https://webdosya.csb.gov.tr/db/tabiat/projeler/tuzgolu-sulak--8230-20190123171748.jpg'};

export default function Courses() {
    const courses = [
        {name: 'Angular', id:1},
        {name: 'React Js', id:2},
        
        {name: 'Bootstrap', id:5},
        {name: 'SAP', id:6},
        {name: 'Pyhton', id:7}
      ]
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <FlatList 
    data={courses}
    //horizontal={true}
    //showsHorizontalScrollIndicator={false}
    keyExtractor={item=>item.id}
    renderItem={({item})=>{
      return <Text style={styles.content}>{item.name}</Text>
    }}
    />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    content:{
      color: 'white',
      fontSize: 42,
      lineHeight: 100,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
      
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
})