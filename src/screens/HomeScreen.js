import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addHabbit } from "../features/habitSlice";
const HomeScreen = ({ navigation }) => {
  const habitList = useSelector((state) => state.habitList);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <>
      <Text>HomeScreen</Text>
      <Button
        title="Create New Habit"
        onPress={() => {
          navigation.navigate("CreateHobby");
        }}
      />

      {console.log("state", habitList)}
      <FlatList
        data={habitList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("GraphScreen", { id: item.id })}
          >
            <Item title={item.habitName} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
