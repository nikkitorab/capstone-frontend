import React from "react";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import TriggersList from "./TriggersList";
import SymptomsList from "./SymptomsList";

const Home = () => {
  //buttons to navigate to other screens:
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>This is home</Text>
      <Button
        onPress={() => navigation.navigate("Symptoms")}
        title="Symptoms List!"
      />
      <Button
        onPress={() => navigation.navigate("Triggers")}
        title="Triggers List!"
      />
    </SafeAreaView>
  );
};

export default Home;
