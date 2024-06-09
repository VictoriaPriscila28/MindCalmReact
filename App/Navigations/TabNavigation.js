import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Appointment from '../Screens/Appointment'
import Profile from '../Screens/Profile'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name='Início' component={Home}
        options={{
            tabBarIcon:({color,size}) => (
                <AntDesign name="home" size={size} color={color} />
            ) 
        }}/>
        <Tab.Screen name='Comunidade' component={Appointment}
            options={{
                tabBarIcon:({color,size}) => (
                    <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
                ) 
            }}/>
        <Tab.Screen name='Emoções' component={Profile}
        options={{
            tabBarIcon:({color,size}) => (
                <Ionicons name="happy-outline" size={size} color={color} />
            ) 
        }}/>

    </Tab.Navigator>
  )
}