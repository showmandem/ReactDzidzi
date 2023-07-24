import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Views/Main';
import Breakfast from './Views/Breakfast';
import Lunch from './Views/Lunch';
import Supper from './Views/Supper';
import HomeView from './Views/HomeView';
import MyStack from './navigation/MyStack';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
