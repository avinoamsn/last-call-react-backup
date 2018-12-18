import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { RkButton } from "react-native-ui-kitten";
import LinkLabel from "../components/LinkLabel.js";
import ErrorMessage from "../components/ErrorMessage.js";
import { StackActions, NavigationActions } from "react-navigation";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(properties) {
    super(properties);
    this.state = {
      username: "",
      password: "",
      error: null,
      loading: false,
      authtoken: null
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(text) {
    this.state.username = text; // Sets state property, for example username: 'adrian'
  }

  handlePasswordChange(text) {
    this.state.password = text; // Sets state property, for example username: 'adrian'
  }

  render() {
    const displayForm =
      (this.state && !this.state.loading && this.state.error === null) ||
      (this.state &&
        !this.state.loading &&
        this.state.error !== null &&
        this.state.error.ErrorNumber !== 0);

    // If state exists and loading then we are waiting for the server to respond
    const displayWaiting = this.state && this.state.loading;

    // If state exists and not loading and error object exists and error code is nonzero then we have an error to display
    const displayError =
      this.state &&
      !this.state.loading &&
      this.state.error !== null &&
      this.state.error.ErrorNumber !== 0;

    // If state exists and not loading and error object exists and error code is zero then we have a successful registration
    const displaySuccess =
      this.state &&
      !this.state.loading &&
      this.state.error !== null &&
      this.state.error.ErrorNumber === 0;

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {(displayForm || displayError) && (
            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require("../assets/images/last-call-logo.png")
                    : require("../assets/images/last-call-logo.png")
                }
                style={styles.welcomeImage}
              />
              <Text style={styles.h1}>Sign In to Your Account</Text>
              <Input
                placeholder="Email address"
                name="username"
                leftIcon={<Icon name="user" size={24} color="black" />}
                onChangeText={this.handleEmailChange}
              />
              <Input
                placeholder="Password"
                name="password"
                leftIcon={
                  <Icon name="question-circle" size={24} color="black" />
                }
                onChangeText={this.handlePasswordChange}
              />
              {displayError && (
                <ErrorMessage text={this.state.error.ErrorMessage} />
              )}
              <LinkLabel text="Forgot Password" />
              <RkButton
                rkType="rounded"
                style={{ backgroundColor: "#f44242", marginTop: 50 }}
                onPress={() => {
                  this.handleSubmit();
                }}
              >
                Sign In
              </RkButton>
            </View>
          )}
          {displayWaiting && (
            <View style={styles.welcomeContainer}>
              <Text>Logging you in...</Text>
            </View>
          )}
          {displaySuccess && (
            <Text>Welcome to Last Call {this.state.username}!</Text>
          )}
        </ScrollView>
      </View>
    );
  }

  handleSubmit() {
    var url = "http://lastcallforfood-dev.com/SubscriberServices/Login";

    var formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);

    this.setState({ loading: true });
    // POST the data, and check the response
    fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          error: data.error,
          loading: false,
          authtoken: data.AuthToken
        });
        //console.log(JSON.stringify(data));
        console.log(
          data.error.ErrorNumber +
            " : " +
            data.error.ErrorMessage +
            " : " +
            data.AuthToken
        );
        //TODO: Save the auth token
        //TODO: Unstack the login page
        //TODO: Go to the right place

        if (data.error.ErrorNumber === 0) {
          //this.props.navigation.reset(
          //[NavigationActions.navigate({ routeName: "Order" })],
          //0
          //);
          //this.props.navigation.replace("Order");
          //this.props.navigation.navigate("Order");
          //this.props.navigation.dispatch(
          //NavigationActions.reset({
          //index: 0, //Home screen of Tab A
          //actions: [
          //NavigationActions.navigate({
          //routeName: "Order"
          //}) //Tab B
          //]
          //})
          //);
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "OfferSummary" })]
          });
          this.props.navigation.dispatch(resetAction);
        }
      })
      .catch(error => {
        console.log("FAILURE: " + error);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  h1: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 50
  }
});
