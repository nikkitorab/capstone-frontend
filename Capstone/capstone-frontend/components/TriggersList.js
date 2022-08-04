import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

// import Home from "./Home";
// import SymptomsList from "./SymptomsList";
import Trigger from "./Trigger";

import { useNavigation } from "@react-navigation/native";

const TriggersList = () => {
  //buttons to navigate to other screens:
  const navigation = useNavigation();

  const triggersDataHardCoded = [
    {
      id: 1,
      name: "sun",
    },
    {
      id: 2,
      name: "coffee",
    },
  ];
  //state for text input
  const [enteredTriggerText, setEnteredTriggerText] = useState("");
  const [triggersData, setTriggerssData] = useState(triggersDataHardCoded);

  // for trigger text input:
  function triggerInputHandler(enteredText) {
    setEnteredTriggerText(enteredText);
    //store enteredText as state so it can be given to addTriggerHandler function
  }

  // add new trigger to user's trigger list
  function addTriggerHandler() {
    //CALL API --> ADD NEW trigger TO DB
    //update triggersData - append new trigger
    const newId = triggersData.length; // change to get id from api
    const newTrigger = {
      id: newId, // change to get id from api
      name: enteredTriggerText,
    };
    setTriggerssData((currentTriggersData) => [
      ...currentTriggersData,
      newTrigger,
    ]);
  }

  function deleteTriggerHandler(id) {
    console.log("delete triggerrrr!!");
  }

  return (
    // <SafeAreaView>
    <View style={styles.appContainer}>
      <Text>This is triggersList</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a Trigger"
          onChangeText={triggerInputHandler}
        />
        <Button title="Add Trigger!!!" onPress={addTriggerHandler} />
      </View>
      <View style={styles.triggersContainer}>
        {triggersData.map((trigger) => (
          <Trigger
            key={trigger.id}
            id={trigger.id}
            name={trigger.name}
            deleteTriggerCallback={deleteTriggerHandler}
          />
        ))}
      </View>
      <Button onPress={() => navigation.navigate("Home")} title="Home!" />
      <Button
        onPress={() => navigation.navigate("Symptoms")}
        title="Symptoms List!"
      />
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, //so outer container takes up ALL of the space
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1, // 1 fifth of the outer container's (appContainer) space
    flexDirection: "row", // puts button next to input box
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "green",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "green",
    width: "65%", // 65% of the container's width
    marginRight: 8,
    padding: 8,
  },
  triggersContainer: {
    flex: 4, // 4 fifths of the outer container's (appContainer) space
  },
});

export default TriggersList;
