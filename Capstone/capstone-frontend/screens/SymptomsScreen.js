import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SymptomsList from "../components/SymptomsList";
import { useState, useEffect } from "react";

const SymptomsScreen = () => {
  const [enteredSymptomText, setEnteredSymptomText] = useState("");
  //state for symptoms
  const [symptomsData, setSymptomsData] = useState([]);

  // GET SYMPTOMS FROM API:
  const getSymptomsFromAPI = () => {
    return fetch("http://localhost:3000/symptoms")
      .then((response) => response.json())
      .then((json) => {
        console.log("!!!!");
        setSymptomsData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getSymptomsFromAPI();
  }, []);

  // for symptom text input:
  function symptomInputHandler(enteredText) {
    setEnteredSymptomText(enteredText);
    //store enteredText as state so it can be given to addSymptomHandler function
  }

  const requestData = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: enteredSymptomText,
      rating_type: "num",
      user_id: 5,
    }),
  };
  const addNewSymptom = () => {
    // const requestData = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name: enteredSymptomText,
    //     rating_type: "num",
    //     user_id: 5,
    //   }),
    // };
    // const addSymptomAPI = async = () => {
    // const requestData = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name: enteredSymptomText,
    //     rating_type: "num",
    //     user_id: 5,
    //   })
    // };
    // const addSymptomToDb = async = () => {
    fetch("http://localhost:3000/symptoms", requestData)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  //   try {
  //     fetch("http://localhost:3000/symptoms", requestData).then((response) => {
  //       response.json();
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // });
  // }

  //   // return (
  //     fetch("http://localhost:3000/symptoms", requestData)
  //       .then((response) => {
  //         response.json();
  //         getSymptomsFromAPI();
  //       })
  //       // .then((json) => {
  //       //   console.log("new symptom addeddddd");
  //       //   getSymptomsFromAPI();
  //       //   // setSymptomsData(json);
  //       // })
  //       .catch((error) => {
  //         console.error(error);
  //       })
  //   );
  // };

  // const addSymptomAPI = (symptomName) => {
  //   const data = {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: symptomName,
  //       rating_type: "num", //change later!!!
  //       user_id: 1, //change later!!!
  //     }),
  //   };
  //   return fetch("http://localhost:3000/symptoms", data).then((response) =>
  //     response.json()
  //   ); // promise
  //   // .then((json) => dispatch(receiveAppos(json)));
  // };

  // add new symptom to user's symptom list
  const addSymptomHandler = () => {
    //CALL API --> ADD NEW SYMPTOM TO DB
    addNewSymptom(enteredSymptomText);
    //update symptomsData - append new symptom
    //THIS IS JUST TO GET A UNIQUE ID, WHEN CONNECTED TO API DELETE THIS
    // console.log(enteredSymptomText);
    // let newId = symptomsData.length + 10; // change to get id from api
    // const newSymptom = {
    //   id: newId, // change to get id from api
    //   name: enteredSymptomText,
    // };
    // addSymptomAPI(enteredSymptomText);
    // const symps = getSymptomsFromAPI();
    // setSymptomsData(symps);
    // console.log("Hhhh");
    // setSymptomsData((currentSymptomsData) => [
    //   ...currentSymptomsData,
    //   newSymptom,
    // ]);
    console.log("hssss");
    console.log(symptomsData);
  };

  // const deleteSymptomHandler = (id) => {
  //   console.log("delete symptom!!"); MOVED TO Symptom.js
  // };

  const x = () => {
    console.log("hiii");
  };
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Text>SYMPTOMS:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a Symptom"
          onChangeText={symptomInputHandler}
          // onChangeText={x}
        />
        <Button title="Add Symptom" onPress={addSymptomHandler} />
        {/* <Button title="Add Symptom" onPress={x} /> */}
      </View>

      <View style={styles.symptomsContainer}>
        <SymptomsList
          symptomsData={symptomsData}
          // deleteSymptomCallback={deleteSymptomHandler}
        ></SymptomsList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1, //so outer container takes up ALL of the space
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  NavContainer: {
    flex: 1, //so outer container takes up ALL of the space
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1, // 1 fifth of the outer container's (appContainer) space
    flexDirection: "row", // puts button next to input box
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
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

export default SymptomsScreen;
