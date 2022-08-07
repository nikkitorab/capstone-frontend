import { StyleSheet, Text, Button, View } from "react-native";

const Trigger = (props) => {
  const name = props.name;
  const id = props.id;

  const deleteTrigger = () => {
    console.log("***");
    props.deleteTriggerCallback(id);
  };

  return (
    <View>
      <Text>{name}</Text>
      <Button title="Delete" onPress={deleteTrigger} />
    </View>
  );
};

export default Trigger;
