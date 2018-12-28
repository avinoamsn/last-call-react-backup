import React from "react";
import { StyleSheet, Text, Image, View, ImageBackground } from "react-native";

export class BackgroundImage extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/images/splash.png")}
        style={styles.backgroundImage}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
});
