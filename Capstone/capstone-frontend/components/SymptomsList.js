import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import Symptom from "./Symptom";
// import NavigationBar from "./NavigationBar";
import { SafeAreaView } from "react-native-safe-area-context";

const SymptomsList = (props) => {
  const symptomsData = props.symptomsData;
  //state for text input
  // const [enteredSymptomText, setEnteredSymptomText] = useState("");
  // //state for symptoms
  // const [symptomsData, setSymptomsData] = useState([]);

  // // GET SYMPTOMS FROM API:
  // const getSymptomsFromAPI = () => {
  //   return fetch("http://localhost:3000/symptoms")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setSymptomsData(json);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // useEffect(() => {
  //   getSymptomsFromAPI();
  // }, []);

  // // for symptom text input:
  // function symptomInputHandler(enteredText) {
  //   setEnteredSymptomText(enteredText);
  //   //store enteredText as state so it can be given to addSymptomHandler function
  // }

  // // add new symptom to user's symptom list
  // function addSymptomHandler() {
  //   //CALL API --> ADD NEW SYMPTOM TO DB
  //   //update symptomsData - append new symptom
  //   //THIS IS JUST TO GET A UNIQUE ID, WHEN CONNECTED TO API DELETE THIS
  //   let newId = symptomsData.length + 10; // change to get id from api
  //   const newSymptom = {
  //     id: newId, // change to get id from api
  //     name: enteredSymptomText,
  //   };
  //   setSymptomsData((currentSymptomsData) => [
  //     ...currentSymptomsData,
  //     newSymptom,
  //   ]);
  // }

  // function deleteSymptomHandler(id) {
  //   console.log("delete symptom!!");
  // }

  return (
    <SafeAreaView style={styles.symptomsContainer}>
      {/* <Text>This is symptomsList</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a Symptom"
          onChangeText={symptomInputHandler}
        />
        <Button title="Add Symptom" onPress={addSymptomHandler} />
      </View> */}
      {/* <View style={styles.symptomsContainer}> */}
      {/* <View style={styles.symptomsContainer}> */}
      {symptomsData.map((symptom) => (
        <Symptom
          key={symptom.id}
          id={symptom.id}
          name={symptom.name}
          deleteSymptomCallback={props.deleteSymptomHandler}
        />
      ))}
      {/* </View> */}

      {/* <NavigationBar hidden="Symptoms"></NavigationBar> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // appContainer: {
  //   flex: 1, //so outer container takes up ALL of the space
  //   paddingTop: 100,
  //   paddingHorizontal: 16,
  // },
  // inputContainer: {
  //   flex: 1, // 1 fifth of the outer container's (appContainer) space
  //   flexDirection: "row", // puts button next to input box
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   paddingBottom: 24,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "green",
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: "green",
  //   width: "65%", // 65% of the container's width
  //   marginRight: 8,
  //   padding: 8,
  // },
  symptomsContainer: {
    // flex: 4, // 4 fifths of the outer container's (appContainer) space
    flex: 1, // 4 fifths of the outer container's (appContainer) space
  },
});

export default SymptomsList;
