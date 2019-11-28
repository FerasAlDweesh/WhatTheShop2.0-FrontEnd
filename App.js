import React from "react";
import { StyleSheet } from "react-native";
import AppContainer from "./navigation";
import { Spinner } from "native-base";

export default class App extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="#132D4B" />;
    }
    return <AppContainer />;
  }
}
