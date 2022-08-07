import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Triggers" component={TriggersScreen} />
      </Tab.Navigator> */}
      <StackNavigator />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1, //so outer container takes up ALL of the space
//     paddingTop: 100,
//     paddingHorizontal: 16,
//   },
//   inputContainer: {
//     flex: 1, // 1 fifth of the outer container's (appContainer) space
//     flexDirection: "row", // puts button next to input box
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingBottom: 24,
//     borderBottomWidth: 1,
//     borderBottomColor: "green",
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "green",
//     width: "65%", // 65% of the container's width
//     marginRight: 8,
//     padding: 8,
//   },
//   symptomsContainer: {
//     flex: 4, // 4 fifths of the outer container's (appContainer) space
//   },
// });

export default App;
