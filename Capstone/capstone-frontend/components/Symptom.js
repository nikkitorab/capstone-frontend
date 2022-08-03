import { StyleSheet, Text, Button, View } from "react-native";

function Symptom(props) {
  const name = props.name;
  const id = props.id;

  const deleteSymptom = (id) => {
    props.deleteSymptomCallback(id);
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
