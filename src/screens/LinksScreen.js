import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { BackgroundImage } from "../components/BackGroundImage";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <BackgroundImage />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
