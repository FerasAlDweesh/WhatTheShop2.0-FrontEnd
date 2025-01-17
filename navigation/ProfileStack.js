import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile";
import Login from "../components/Login";
import Register from "../components/Register";
import List from "../components/List";
import Cart from "../components/Cart";

//Navigation
import StackNav from "./StackNav";

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    Login: Login,
    Register: Register,
    Cart: Cart
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
