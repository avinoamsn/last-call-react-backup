import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class SettingsScreen extends React.Component {

  displayName = RegisterSettingsScreen.name;

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
      emailoffers: false,
      textoffers: false,
      mailinglist: false,
      error: null,
      loading: false
    };

    global.foodPreferences = "";

		// bind methods to screen elements
    this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handlePasswordQChange = this.handlePasswordQChange.bind(this);
    this.handlePasswordAChange = this.handlePasswordAChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleFriendlyChange = this.handleFriendlyChange.bind(this);
  }

  //TODO: Bizarre. Cannot find a way of having a common change handler where the object id can be deduced from the event parameters. Official docs are useless.
  handleChange(event) {
    /**
     * Callback that is called when the text input's text changes.
     */
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

  // Note that because of the callback, 'this' right here is NOT RegisterSubscriber, so we use global.
  setFoodPrefs(id, add) {
    //alert("setFoodPrefs(" + id + ", " + add + ")");
    global.foodPreferences = global.foodPreferences.replace(id + ";", "");
    // Food preferences are saved as a semi-colon separated list of IDs referencing records in the foodtypes table.
    // This string will get parsed on the server.
    if (add) global.foodPreferences += id + ";";
    //alert(global.foodPreferences);
  }

  render() {
    const displayForm =
      (this.state && !this.state.loading && this.state.error === null) ||
      (this.state &&
        !this.state.loading &&
        this.state.error !== null &&
        this.state.error.ErrorNumber !== 0);
    //console.log(displayForm);

    // If state exists and loading then we are waiting for the server to respond
    const displayWaiting = this.state && this.state.loading;
    //console.log(displayForm + ":" + displayWaiting);

    // If state exists and not loading and error object exists and error code is nonzero then we have an error to display
    const displayError =
      this.state &&
      !this.state.loading &&
      this.state.error !== null &&
      this.state.error.ErrorNumber !== 0;
    //console.log(displayForm + ":" + displayWaiting + ":" + displayError);

    // If state exists and not loading and error object exists and error code is zero then we have a successful registration
    const displaySuccess =
      this.state &&
      !this.state.loading &&
      this.state.error !== null &&
      this.state.error.ErrorNumber === 0;

    //console.log(
    //  displayForm +
    //   ":" +
    //    displayWaiting +
    //    ":" +
    //    displayError +
    //    ":" +
    //    displaySuccess
    //);

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
              <SimpleCheckBox
                ref="mailinglist"
                title="Add to Mailing List?"
                checked={false}
              />
              <SimpleCheckBox
                ref="emailoffers"
                title="Notify by Email?"
                checked={false}
              />
              <SimpleCheckBox
                ref="textoffers"
                title="Notify by Text Message?"
                checked={false}
              />
              <FoodTypes onPrefsChange={this.setFoodPrefs} />
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
              <Text>Completing your registration...</Text>
            </View>
          )}
          {displaySuccess && (
            <View style={styles.welcomeContainer}>
              <Text>Welcome to Last Call {this.state.username}!</Text>
            </View>
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
    formData.append("preferences", global.foodPreferences);
    formData.append("address", this.state.address);
    formData.append("phone", this.state.phone);
    formData.append("friendlyname", this.state.friendlyname);
    formData.append("passwordq", this.state.passwordq);
    formData.append("passworda", this.state.passworda);
    formData.append("emailoffers", this.refs.emailoffers.state.checked ? 1 : 0);
    formData.append("textoffers", this.refs.textoffers.state.checked ? 1 : 0);
    formData.append("mailinglist", this.refs.mailinglist.state.checked ? 1 : 0);

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
          error: data,
          loading: false
        });
        console.log(JSON.stringify(data));
        console.log(
          data.ErrorNumber +
            " : " +
            data.ErrorMessage +
            " : " +
            data.ErrorDetails
        );

        if (data.ErrorNumber === 0) {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "SignIn" })]
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