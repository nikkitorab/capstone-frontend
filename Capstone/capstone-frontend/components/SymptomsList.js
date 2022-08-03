import {
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  TextInput,
} from "react-native";
import { useState } from "react";
// import Symptom from "./Symptom";

function SymptomsList(props) {
  const symptomsData = props.symptomsData;

  // const symptomsDataHardCoded = [
  //   {
  //     id: 1,
  //     user_id: 3,
  //     name: "cough",
  //     rating_type: "num",
  //   },
  //   {
  //     id: 2,
  //     user_id: 4,
  //     name: "sneeze",
  //     rating_type: "num",
  //   },
  // ];

  const [symptomsData, setSymptomsData] = useState(symptomsDataHardCoded);

  // for symptom text input:
  function symptomInputHandler(enteredText) {
    setEnteredSymptomText(enteredText);
    //store enteredText as state so it can be given to addSymptomHandler function
  }

  // add new symptom to user's symptom list
  function addSymptomHandler() {
    //CALL API --> ADD NEW SYMPTOM TO DB
    //update symptomsData - append new symptom

    const newId = symptomsData.length;
    const newSymp = {
      id: newId,
      user_id: 4,
      name: enteredSymptomText,
      rating_type: "num",
    };
    setSymptomsData((currentSymptomsData) => [
      ...currentSymptomsData,
      newSymp,
      // enteredSymptomText,
    ]);
  }

  // // const symptomsData = props.symptomsData;
  // // console.log(symptomsData);
  // // const renderItem = ({ item }) => <Symptom name={item.name} />;
  // const renderItem = ({ item }) => (
  //   <Symptom
  //     name={item.name}
  //     id={item.id}
  //     userId={item.user_id}
  //     ratingType={item.rating_type}
  //   />
  // );

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a Symptom"
          onChangeText={props.symptomInputCallback}
        />
        <Button title="Add Symptom" onPress={props.addSymptomCallback} />
      </View>

      <Text> Symptoms List:</Text>
      {/* <FlatList
        data={symptomsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}

      {symptomsData}
    </View>
  );
}

export default SymptomsList;

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
