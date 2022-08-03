import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  FlatList,
  Text,
  Button,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";
// import SymptomsList from "./components/SymptomsList";
// import Symptom from "./components/Symptom";

export default function App() {
  const symptomsDataHardCoded = [
    {
      id: 1,
      user_id: 3,
      name: "cough",
      rating_type: "num",
    },
    {
      id: 2,
      user_id: 4,
      name: "sneeze",
      rating_type: "num",
    },
  ];
  //state for text input
  const [enteredSymptomText, setEnteredSymptomText] = useState("");
  const [symptomsData, setSymptomsData] = useState(symptomsDataHardCoded);

  // const [symptomsData, setSymptomsData] = useState([]);

  // for symptom text input:
  function symptomInputHandler(enteredText) {
    setEnteredSymptomText(enteredText);
    //store enteredText as state so it can be given to addSymptomHandler function
  }

  // add new symptom to user's symptom list
  function addSymptomHandler() {
    //CALL API --> ADD NEW SYMPTOM TO DB
    //update symptomsData - append new symptom

    const newId = symptomsData.length; // change to get id from api
    const newSymptom = {
      id: newId, // change to get id from api
      name: enteredSymptomText,
    };
    setSymptomsData((currentSymptomsData) => [
      ...currentSymptomsData,
      newSymptom,
      // enteredSymptomText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a Symptom"
          onChangeText={symptomInputHandler}
        />
        <Button title="Add Symptom" onPress={addSymptomHandler} />
      </View>
      <View style={styles.symptomsContainer}>
        {symptomsData.map((symptom) => (
          <Text>{symptom.name}</Text>
        ))}
      </View>
    </View>
  );
}

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
  symptomsContainer: {
    flex: 4, // 4 fifths of the outer container's (appContainer) space
  },
});
