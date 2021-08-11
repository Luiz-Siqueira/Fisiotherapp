import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from './pages/Home';
import Exercise from './pages/Exercise';


const Tab = createBottomTabNavigator();

export default function Route() {
  return (
      <Tab.Navigator
      tabBarOptions={{
          style:{
            backgroundColor:'#454545',
            borderTopColor:'transparent',
          },
          activeTintColor:'#a800fa',
        }}
      >
        <Tab.Screen 
          name="Home"
          component={Home}
          options={{
            tabBarIcon:({size , color})=>(
              <Icon name="home" size={size} color={color}/>
            ),
            headerShown: false
          }}  
        />
        <Tab.Screen name="Exercise" component={Exercise}
        options={{
          tabBarIcon:({size , color})=>(
            <Icon name="activity" size={size} color={color}/>
          ),
          headerShown: false
        }} 
        />
      </Tab.Navigator>
  );
}