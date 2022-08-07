import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TriggersList from "../components/TriggersList";

const TriggersScreen = () => {
  return (
    <SafeAreaView>
      {/* <Text> TriggersScreen!!!!! </Text> */}
      <TriggersList> </TriggersList>
    </SafeAreaView>
  );
};

export default TriggersScreen;
