import Breakfast from '../Views/Breakfast';
import Lunch from '../Views/Lunch';
import Supper from '../Views/Supper';
import Main from '../Views/Main';
import Recipe from '../Views/Recipe';
import Feedback from '../Views/Feedback';
import Search from '../Views/Search';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeView"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
          name="Home"
          component={Main}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Breakfast" component={Breakfast} />
        <Stack.Screen name="Lunch" component={Lunch} />
        <Stack.Screen name="Supper" component={Supper} />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
  );
};

export default MyStack;