import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

export default function CoursesInformation() {
  return (
    <ScrollView style={styles.Arka}>
      <Information 
      title="Angular Eğitimi"
      imageSource={require('../../assets/Angular.png')}
      desc="Kapsamlı Angular Eğitimi"
      />
      <Information 
      title="React Eğitimi"
      imageSource={require('../../assets/React.png')}
      desc="Kapsamlı React Eğitimi"
      />
      
      <Information 
      title="SAP Proglamlama Eğitimi"
      imageSource={require('../../assets/SAP.png')}
      desc="Kapsamlı SAP Eğitimi"
      />
      <Information 
      title="Python Eğitimi"
      imageSource={require('../../assets/Python-Symbol.png')}
      desc="Kapsamlı Python Eğitimi"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Arka: {
    backgroundColor: '#ebedb9'
  }
})