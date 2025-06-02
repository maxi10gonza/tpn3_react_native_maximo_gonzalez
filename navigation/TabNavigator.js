import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TasksStack from './TasksStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Perfil') {
                iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Calculadora') {
                iconName = focused ? 'calculator' : 'calculator-outline';
            } else if (route.name === 'Ajustes') {
                iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Tareas') {
                iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: 'gray',
            headerStyle: {
            backgroundColor: '#007AFF',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        })}
        >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="Calculadora" component={CalculatorScreen} />
        <Tab.Screen name="Tareas" component={TasksStack} />
        <Tab.Screen name="Ajustes" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
