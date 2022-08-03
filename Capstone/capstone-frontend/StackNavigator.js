//https://www.youtube.com/watch?v=3hLQURJM7ws

import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import SymptomsList from "./components/SymptomsList";
import TriggersList from "./components/TriggersList";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    //lots of other options for screenOptions
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Symptoms" component={SymptomsList} />
        <Stack.Screen name="Triggers" component={TriggersList} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
