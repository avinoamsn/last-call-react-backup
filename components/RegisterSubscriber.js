import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { RkButton } from "react-native-ui-kitten";
import ErrorMessage from "../components/ErrorMessage.js";
import { StackActions, NavigationActions } from "react-navigation";
import { CheckBox } from "react-native-elements";

export default class RegisterSubscriberScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(properties) {
    super(properties);
    this.state = {
      username: "",
      password: "",
      passwordq: "",
      passworda: "",
      confirmpassword: "",
      friendlyname: "",
      address: "",
      phone: "",
      error: null,
      loading: false
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  //TODO: Bizarre. Cannot find a way of having a common change handler where the object id can be deduced from the event parameters. Official docs are useless.
  handleChange(event) {
    //const { name, type, value } = event.nativeEvent;
    //console.log(name + "/" + value);
    //this.setState({ [name]: value });
  }

  handleEmailChange(text) {
    this.state.username = text;
  }

  handleFriendlyChange(text) {
    this.state.friendlyname = text;
  }

  handlePasswordChange(text) {
    this.state.password = text;
  }

  handleConfirmPasswordChange(text) {
    this.state.confirmpassword = text;
  }

  handleAddressChange(text) {
    this.state.address = text;
  }

  handlePhoneChange(text) {
    this.state.phone = text;
  }

  handlePasswordQChange(text) {
    this.state.passwordq = text;
  }

  handlePasswordAChange(text) {
    this.state.passworda = text;
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
              <Text style={styles.h1}>Register A New Account</Text>
              {displayError && (
                <ErrorMessage text={this.state.error.ErrorMessage} />
              )}
              <Input
                placeholder="Email address"
                name="username"
                leftIcon={<Icon name="address-card" size={24} color="black" />}
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
              <Input
                placeholder="Confirm Password"
                name="confirmpassword"
                leftIcon={
                  <Icon name="question-circle" size={24} color="black" />
                }
                onChangeText={this.handleConfirmPasswordChange}
              />
              <Input
                placeholder="Password recovery question"
                name="recoveryq"
                leftIcon={<Icon name="sticky-note" size={24} color="black" />}
                onChangeText={this.handlePasswordQChange}
              />
              <Input
                placeholder="Password recovery answer"
                name="recoverya"
                leftIcon={<Icon name="sticky-note" size={24} color="black" />}
                onChangeText={this.handlePasswordAChange}
              />
              <Input
                placeholder="Friendly name"
                name="friendlyname"
                leftIcon={
                  <Icon name="question-circle" size={24} color="black" />
                }
                onChangeText={this.handleFriendlyChange}
              />
              <Input
                placeholder="Address"
                name="address"
                leftIcon={<Icon name="address-book" size={24} color="black" />}
                onChangeText={this.handleAddressChange}
              />
              <Input
                placeholder="Phone"
                name="phone"
                leftIcon={<Icon name="phone" size={24} color="black" />}
                onChangeText={this.handlePhoneChange}
              />
              <Text>Food preferences </Text>
              <CheckBox title="Any" checked={true} />
              <CheckBox title="Pizza" checked={false} />
              <RkButton
                rkType="rounded"
                style={{ backgroundColor: "#f44242", marginTop: 10 }}
                onPress={() => {
                  this.handleSubmit();
                }}
              >
                Register
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
    var url =
      "http://lastcallforfood-dev.com/SubscriberServices/RegisterSubscriber";

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

        if (data.error.ErrorNumber === 0) {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "Order" })]
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
    paddingTop: 4,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 4
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 4,
    marginBottom: 10
  },
  h1: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10
  }
});
