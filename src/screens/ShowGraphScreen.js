import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
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

  const data = JSON.stringify(habit);
  const abc = data[0].habitData;
  return (
    <>
      <Text>ShowGraphScreen- {navigation.getParam("id")}</Text>
      {console.log("abc:", abc)}
      {console.log("data:", data)}
      {console.log("habit:", habit)}
      {/* <VictoryChart
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
              x="quarter"
              y="earnings"
            />
          ) : (
            <Text>No data found</Text>
          )}
        </VictoryStack>
      </VictoryChart> */}
    </>
  );
};

export default ShowGraphScreen;
