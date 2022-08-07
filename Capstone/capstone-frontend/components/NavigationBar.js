// import { useNavigation } from "@react-navigation/native";
// import reactDom from "react-dom";
// import { StyleSheet, View, Button, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const BUTTONS = ["Home", "Symptoms", "Triggers", "Data"];

// const NavigationBar = (props) => {
//   const navigation = useNavigation();

//   // take in button to HIDE as a prop (button of selected page)
//   const hidden = props.hidden;

//   // get rid of current page's button
//   const displayButtons = BUTTONS.filter(function (button) {
//     return button !== hidden;
//   });

//   // if hidden == Home --> NavType (for styles) = Home
//   // else:

//   return (
//     <SafeAreaView>
//       <Button
//         onPress={() => navigation.navigate(displayButtons[2])}
//         title={displayButtons[2]}
//       />
//       <Button
//         onPress={() => navigation.navigate(displayButtons[1])}
//         title={displayButtons[1]}
//       />
//       <SafeAreaView style={styles.outerContainer}>
//         {/* <View style={styles.outerContainer}> */}
//         {/* <SafeAreaView style={styles.NavContainer}> */}
//         <Text> Heeeello</Text>
//         {/* <Button
//         onPress={() => navigation.navigate(displayButtons[0])}
//         title={displayButtons[0]}
//       />
//       <Button
//         onPress={() => navigation.navigate(displayButtons[1])}
//         title={displayButtons[1]}
//       />
//       <Button
//         onPress={() => navigation.navigate(displayButtons[2])}
//         title={displayButtons[2]}
//       /> */}
//         {/* {displayButtons.map((button) => (
//         <Button onPress={() => navigation.navigate(button)} title={button} />
//       ))} */}
//         {/* </View> */}
//       </SafeAreaView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1, //so outer container takes up ALL of the space
//     // paddingTop: 0,
//     // paddingHorizontal: 16,
//     // border: 1,
//     // borderColor: "red",
//   },
//   // NavContainer: {
//   //   flex: 1, //so outer container takes up ALL of the space
//   //   paddingTop: 10,
//   //   paddingBottom: 10,
//   //   paddingHorizontal: 16,
//   // },
//   NavContainer: {
//     flex: 1, // 1 fifth of the outer container's (appContainer) space
//     flexDirection: "row", // puts button next to input box
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingTop: 10,
//     paddingBottom: 10,
//     border: 1,
//     // borderColor: "red",
//   },
// });

// // inputContainer: {
// //   flex: 1, // 1 fifth of the outer container's (appContainer) space
// //   flexDirection: "row", // puts button next to input box
// //   justifyContent: "space-between",
// //   alignItems: "center",
// //   paddingBottom: 24,
// //   borderBottomWidth: 1,
// //   borderBottomColor: "green",
// // },
// // textInput: {
// //   borderWidth: 1,
// //   borderColor: "green",
// //   width: "65%", // 65% of the container's width
// //   marginRight: 8,
// //   padding: 8,
// // },

// export default NavigationBar;
