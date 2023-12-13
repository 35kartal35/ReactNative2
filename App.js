import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Courses from './src/screens/Courses';
import CoursesInformation from './src/screens/CoursesInformation';
import CourterScreen from './src/screens/CourterScreen';
import BoxScreen from './src/screens/BoxScreen';
import UseReducerBox from './src/screens/UseReducerBox';
import PasswordScreen from './src/screens/PasswordScreen';
import DesignScreen from './src/screens/DesignScreen';
const Stack = createNativeStackNavigator();



export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Anasayfa" component={HomeScreen} />
        <Stack.Screen name="Kurslarim" component={Courses} />
        <Stack.Screen name="Kurs Bilgilerim" component={CoursesInformation} />
        <Stack.Screen name="Sayaç Projesi" component={CourterScreen} />
        <Stack.Screen name="Kutu Uygulaması" component={BoxScreen} />
        <Stack.Screen name="Renk Degistir" component={UseReducerBox} />
        <Stack.Screen name="Şifre Ekranı" component={PasswordScreen} />
        <Stack.Screen name="Dizayn Sayfasi" component={DesignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({


});
