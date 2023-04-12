import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import store from "./src/app/store";
import { Provider } from "react-redux";
import HomeScreen from "./src/screens/HomeScreen";
import CreateHobbyScreen from "./src/screens/CreateHobbyScreen";
import ShowGraphScreen from "./src/screens/ShowGraphScreen";

const switchNavigator = createSwitchNavigator({
  initialFlow: createStackNavigator({
    Home: HomeScreen,
    CreateHobby: CreateHobbyScreen,
    GraphScreen: ShowGraphScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
