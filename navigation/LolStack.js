import { createStackNavigator } from "react-navigation-stack";

// Components
import LolScreen from "../components/Lol";

const LolStack = createStackNavigator(
  {
    Lol: LolScreen
  },
  {
    initialRouteName: "Lol",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default LolStack;
