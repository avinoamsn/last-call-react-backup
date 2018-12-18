import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, ListItem } from "react-native-elements";

class CustomCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
      foodid: this.props.foodid
    };
  }
  render() {
    const checked = this.state.checked;
    return (
      <CheckBox
        title={this.props.title}
        checked={checked}
        onPress={() => {
          this.setState({ checked: !checked }, () => {
            this.props.onPrefsChange(this.state.foodid, this.state.checked);
          });
        }}
      />
    );
  }
}

export class FoodTypes extends React.Component {
  displayName = FoodTypes.name;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      foodtypes: [],
      loading: true
    };

    var url = "http://lastcallforfood-dev.com/HelperServices/FoodTypes";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          error: data.error,
          foodtypes: data.foodtypes,
          loading: false
        });
      });
  }

  render() {
    // If state exists and not loading and error is null then we are in a quiescent state, not waiting for any server data
    const displayForm =
      this.state && !this.state.loading && this.state.error === null;

    // If state exists and loading then we are waiting for the server to respond
    const displayWaiting = this.state && this.state.loading;

    // If state exists and not loading and error object exists and error code is nonzero then we have an error to display
    const displayError =
      this.state &&
      !this.state.loading &&
      this.state.error !== null &&
      this.state.error.ErrorNumber !== 0;

    // If state exists and not loading and error object exists and error code is zero then we have a successful server transaction
    const displaySuccess =
      this.state &&
      !this.state.loading &&
      this.state.error !== null &&
      this.state.error.ErrorNumber === 0;

    if (displayForm)
      return (
        <View>
          <Text>Your food preferences</Text>
        </View>
      );
    if (displayWaiting)
      return (
        <View>
          <Text>Retrieving available food preferences...</Text>
        </View>
      );
    if (displayError)
      return (
        <View>
          <Text>{this.state.ErrorMessage}</Text>
        </View>
      );
    if (displaySuccess)
      return (
        // Each row will return 'id' (the identifier for the food type, saved as the foodid prop) and 'foodtype1' (the name of the food type, used as the title prop)
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Text>Your food preferences</Text>
          {this.state.foodtypes.map(food => (
            <CustomCheckBox
              style="width:50%"
              title={food.foodtype1}
              checked={false}
              key={food.id}
              foodid={food.id}
              onPrefsChange={this.props.onPrefsChange}
            />
          ))}
        </View>
      );

    return (
      <View>
        <Text>
          No idea what happened: {this.state.error.ErrorMesssage}{" "}
          {this.state.error.ErrorDetails}
          {this.state.error.ErrorDetails}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noStyle: {}
});

export default FoodTypes;
