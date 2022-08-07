//https://www.youtube.com/watch?v=3hLQURJM7ws

//https://reactnavigation.org/docs/bottom-tab-navigator/

import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import SymptomsScreen from "./screens/SymptomsScreen";
import TriggersScreen from "./screens/TriggersScreen";
import DataScreen from "./screens/DataScreen";
import SymptomEntryScreen from "./screens/SymptomEntryScreen";
import TriggerEntryScreen from "./screens/TriggerEntryScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createNativeStackNavigator();
const Stack = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    //lots of other options for screenOptions
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Symptoms" component={SymptomsScreen} />
        <Stack.Screen name="Triggers" component={TriggersScreen} />
        {/* <Stack.Screen name="Symptoms" component={SymptomsList} />
        <Stack.Screen name="Triggers" component={TriggersList} /> */}
        <Stack.Screen name="Data" component={DataScreen} />
        {/* <Stack.Screen name="SymptomEntry" component={SymptomEntryScreen} />
        <Stack.Screen name="TriggerEntry" component={TriggerEntryScreen} /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
