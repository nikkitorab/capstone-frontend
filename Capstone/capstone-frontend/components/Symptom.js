import {
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  TextInput,
} from "react-native";
import { useState } from "react";

// const Symptom = (props) => {
function Symptom(props) {
  const name = props.name;

  const deleteSymptom = () => {
    // props.deleteSymptomCallback(props.id);
    console.log(name);
    console.log("hii");
  };

  return (
    <View>
      <Text>{name}</Text>
      <Button title="Delete" onPress={deleteSymptom} />
    </View>
  );
}

export default Symptom;
