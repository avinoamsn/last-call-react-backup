import React, { Component } from "react";

import { StyleSheet, Text } from "react-native";

const ErrorMessage = props => {
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
    fontSize: 16,
    fontWeight: "normal",
    fontFamily: "space-mono",
    marginBottom: 10,
    marginTop: 10,
    color: "#ff0000"
  }
});

export default ErrorMessage;
