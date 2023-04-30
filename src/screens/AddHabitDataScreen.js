import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { addData } from "../features/habitSlice";
import { useDispatch } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddHabitDataScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [content, setContent] = useState("");

  const dateFormatter = (date) => {
    function pad2(n) {
      return n < 10 ? "0" + n : n;
    }
    return date.getDate() + pad2(date.getMonth() + 1);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const submitData = () => {
    dispatch(
      addData({
        id: id,
        // habitData: { date: date.toLocaleDateString(), data: content },
        habitData: {
          date: parseInt(dateFormatter(date)),
          data: parseFloat(content),
        },
      })
    );
    setDate(new Date());
    setContent("");
  };

  const DTPicker = () => (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={mode}
      is24Hour={true}
      onChange={onChange}
    />
  );

  return (
    <>
      <Text style={styles.lableStyle}>
        Add Habit Data- {navigation.getParam(0)}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setShow(true);
        }}
      >
        <Text style={styles.lableStyle}>Date: {date.toLocaleDateString()}</Text>
      </TouchableOpacity>
      <Text>Select Date</Text>
      <DTPicker />
      <TextInput
        style={styles.inputStyle}
        placeholder="please enter the minutes here"
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Add Data" onPress={submitData} />
    </>
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

export default AddHabitDataScreen;
