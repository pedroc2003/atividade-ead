import React,
{useState}
from 'react'
import {login,home,materias, form} from './src/views'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [IsSign,setIsSign]=useState(false);

  return (
   <NavigationContainer>
     <Tab.Navigator
     screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'md-home';
        } else if (route.name === 'Materias') {
          iconName = focused ? 'ios-bookmarks' : 'ios-book';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#075057',
      inactiveTintColor: 'darkgray',
    }}
     >
        <Tab.Screen name="Home" component={home} />
        <Tab.Screen name="Materias" component={materias} />
        <Tab.Screen name="Formulario" component={form} />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}



