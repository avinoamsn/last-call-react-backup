import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image
} from "react-native";

export default class AboutUsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require("../images/cropped-eaters-collective-172258-unsplashedit-1.jpg")
                  : require("../images/cropped-eaters-collective-172258-unsplashedit-1.jpg")
              }
              style={styles.welcomeImage}
            />
          </View>
          <Text style={styles.h1}>We believe in doing the right thing.</Text>
          <Text style={styles.getStartedText}>
            We currently produce enough food to feed the whole world.
            Unfortunately, 1/3 of all food produced goes to waste.
          </Text>
          <Text style={styles.getStartedText}>
            Last Call is seeking to change that statistic.
          </Text>
          <Text style={styles.getStartedText}>
            Last Call shares end-of-the-day restaurant deals with members of the
            community. We seek to minimize food waste by making surplus food
            available at a discounted price near closing time.
          </Text>
          <Text style={styles.getStartedText}>
            We are currently operating in Washington, DC, working with
            restaurants in Foggy Bottom and George Washington University
            students.
          </Text>
          <Text style={styles.getStartedText}>
            If you like food so cheap it's almost free, sign up under our sign
            up tab.
          </Text>
          <Text style={styles.getStartedText}>
            Treat yourself, your wallet, and your world.
          </Text>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require("../images/kitchen-360x240.jpeg")
                  : require("../images/kitchen-360x240.jpeg")
              }
              style={styles.welcomeImage}
            />
          </View>
          <Text style={styles.h1}>Meet the Team</Text>
          <Text style={styles.getStartedText}>
            Last Call was created by college students in order to provide a
            service we needed when our university took away its dining hall. We
            soon realized that we had an idea that could feed thousands of food
            insecure D.C. residents beyond our college campus, while helping
            local restaurants reduce their food waste.
          </Text>
          <View style={styles.headshotContainer}>
            <Image
              source={
                __DEV__
                  ? require("../images/Erin-headshot-square.jpg")
                  : require("../images/Erin-headshot-square.jpg")
              }
              style={styles.headshotImage}
            />
            <Text style={styles.imageCaptionText}>
              Erin McGeoy, Founder and CEO
            </Text>
            <Text style={styles.getStartedText}>
              Erin is a GW grad, passionate about finding solutions to food
              insecurity in her community.
            </Text>
            <Image
              source={
                __DEV__
                  ? require("../images/King-headshot-square.jpg")
                  : require("../images/King-headshot-square.jpg")
              }
              style={styles.headshotImage}
            />
            <Text style={styles.imageCaptionText}>
              Chloe King, Founder and COO.
            </Text>
            <Text style={styles.getStartedText}>
              Chloe is a senior at GW, determined to reduce food waste around
              the world, from D.C. to Indonesia.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

class Inline extends React.Component {
  render() {
    return (
      <WebView
        originWhitelist={["*"]}
        source={{ html: "<p>This is some HTML markup</p>" }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
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
  headshotContainer: {
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
  headshotImage: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
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
  h1: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "bold"
  },
  getStartedText: {
    marginTop: 14,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    color: "rgba(96,100,109, 1)",
    lineHeight: 18,
    textAlign: "center"
  },
  imageCaptionText: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 10,
    color: "rgba(96,100,109, 1)",
    lineHeight: 14,
    textAlign: "center",
    fontStyle: "italic"
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
