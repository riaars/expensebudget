import React from 'react';
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
          if (route.name === 'AddExpense') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Summary') {
            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
          } else if (route.name === 'BudgetPlan') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#F58B32',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="AddExpense" component={InputExpensePage} />
      <Tab.Screen name="BudgetPlan" component={BudgetPlanning} />
      <Tab.Screen name="Summary" component={SummaryPage} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default HomePage;
