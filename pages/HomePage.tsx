import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CatogeryDetails from '../components/CatogeryDetails';
import BudgetPlanning from './BudgetPlanning';
import InputExpensePage from './InputExpensePage';
import SummaryPage from './SummaryPage';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

function HomePage() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'InputExpense') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'SummaryPage') {
            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
          } else if (route.name === 'BudgetPlanning') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'ProfilePage') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#F58B32',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="InputExpense" component={InputExpensePage} />
      <Tab.Screen name="BudgetPlanning" component={BudgetPlanning} />
      <Tab.Screen name="SummaryPage" component={SummaryPage} />
      <Tab.Screen name="ProfilePage" component={Profile} />
    </Tab.Navigator>
  );
}

export default HomePage;
