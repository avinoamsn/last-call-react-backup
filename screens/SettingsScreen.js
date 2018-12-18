import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "app.json"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <Text style={styles.h1}>This is the My Account screen</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
