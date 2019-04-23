import React, { Component } from "react";
import { Platform, View, Text } from "react-native";
import mainStyles from "styles/mixin/Main";
import styles from "./App.styles";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={mainStyles.container}>
        <Text>text</Text>
      </View>
    );
  }
}
