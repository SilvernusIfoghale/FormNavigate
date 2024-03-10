import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../authentication/Login';
import Display from '../authentication/Display';

export default function StackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Display" component={Display} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
