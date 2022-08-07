import { StyleSheet, Text, Button, View } from "react-native";

const Symptom = (props) => {
  const name = props.name;
  const id = props.id;

  const deleteSymptom = (id) => {
    // CALL API !
    // props.deleteSymptomCallback(id);
    // console.log(name);
    console.log("deleteSymptom called");
  };

  return (
    <View>
      <Text>{name}</Text>
      <Button title="Delete" onPress={deleteSymptom} />
    </View>
  );
};

export default Symptom;
