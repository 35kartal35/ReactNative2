import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function Courses() {
    const courses = [
        {name: 'Angular', id:1},
        {name: 'React Js', id:2},
        {name: 'C#', id:3},
        {name: 'c Proglamlama', id:4},
        {name: 'Bootstrap', id:5},
        {name: 'SAP', id:6},
        {name: 'Pyhton', id:7}
      ]
  return (
    <FlatList 
    data={courses}
    //horizontal={true}
    //showsHorizontalScrollIndicator={false}
    keyExtractor={item=>item.id}
    renderItem={({item})=>{
      return <Text style={styles.content}>{item.name}</Text>
    }}
    />
  )
}

const styles = StyleSheet.create({
    content:{
        fontSize:20,
        backgroundColor: '#d4996a',
        padding:20,
        margin:20,
      }
})