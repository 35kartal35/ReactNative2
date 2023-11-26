import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

export default function CoursesInformation() {
  return (
    <ScrollView>
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
      title="C Proglamlama Eğitimi"
      imageSource={require('../../assets/C+.png')}
      desc="Kapsamlı C+ Eğitimi"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})