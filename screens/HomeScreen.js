import React from "react";

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from "react-native";

import { buttons } from "../styles/base.js";

import { RkButton } from "react-native-ui-kitten";
import { BackgroundImage } from "../components/BackGroundImage";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
		header: null,
  };

  render() {
    return (
      <BackgroundImage>
        <View>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require("../assets/images/last-call-logo.png")
                    : require("../assets/images/last-call-logo.png")
                } style={styles.welcomeImage}
              />
            </View>

            <View style={styles.getStartedContainer}>

              <RkButton
                rkType="rounded"
                style={buttons}
                onPress={() => {
                  this.props.navigation.navigate("SignIn");
                }}
              >Sign In</RkButton>

              <RkButton
                rkType="rounded"
                style={buttons}
                onPress={() => {
                  this.props.navigation.navigate("SignUp");
                }}
              >Sign Up</RkButton>

              <RkButton
                rkType="rounded"
                style={buttons}
                onPress={() => {
                  this.props.navigation.navigate("AboutUs");
                }}
              >Learn More</RkButton>

            </View>
						
          </ScrollView>
        </View>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  getStartedContainer: {
    alignItems: "center",
		marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
