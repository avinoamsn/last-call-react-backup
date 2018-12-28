import React, { Component } from "react";

import { StyleSheet, Text } from "react-native";

const SimpleLabel = props => {
  return (
    <Text
      style={
        props.styles && props.styles.textLabel
          ? props.styles.textLabel
          : styles.textLabel
      }
    >
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "space-mono",
    marginBottom: 10,
    color: "#595856"
  }
});

export default SimpleLabel;
