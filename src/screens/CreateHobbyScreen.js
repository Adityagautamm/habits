import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { addHabbit } from "../features/habitSlice";
import { useDispatch } from "react-redux";

const CreateHobbyScreen = ({ navigation }) => {
  const [name, setName] = useState(null);
  const dispatch = useDispatch();
  const submitHabit = () => {
    dispatch(addHabbit(name));
    setName(null);
    navigation.navigate("Home");
  };
  return (
    <View>
      <Text style={styles.lableStyle}>Create Habit</Text>
      <TextInput
        style={styles.inputStyle}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Save Habit" onPress={submitHabit} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  lableStyle: { fontSize: 20, marginBottom: 5, marginLeft: 5 },
});

export default CreateHobbyScreen;
