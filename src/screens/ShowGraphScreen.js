import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
} from "victory-native";
import { useSelector, useDispatch } from "react-redux";

const ShowGraphScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const habit = useSelector((state) => state.habitList).filter((data) => {
    return data.id == id;
  });

  const data = habit[0].habitData;

  return (
    <>
      <Text>ShowGraphScreen- {navigation.getParam("id")}</Text>
      <VictoryChart
        width={400}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryStack colorScale={"warm"}>
          {data ? (
            <VictoryBar
              style={{ data: { fill: "#c43a31" } }}
              alignment="start"
              data={data}
              x="date"
              y="data"
            />
          ) : (
            <Text>No data found</Text>
          )}
        </VictoryStack>
      </VictoryChart>

      <TouchableOpacity
        onPress={() => navigation.navigate("AddHabitData", { id: id })}
      >
        <Text>Add Data</Text>
      </TouchableOpacity>
    </>
  );
};

export default ShowGraphScreen;
