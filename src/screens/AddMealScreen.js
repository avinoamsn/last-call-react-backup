import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BackgroundImage } from "../components/BackGroundImage";

export default class AddMealScreen extends React.Component {
	
	constructor(properties) {
    super(properties);
    this.state = {
      offerdate: "",
			offerstarttime: "",
			offerendtime: "",
			offername: "",
			offerdescription: "",
			supplierid: "",
			qtyavailably: "",
			foodtypeid: "",
		};
	}
		
	static navigationOptions = {
    title: 'Add Meal',
	};

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <Text style={styles.h1}>Add Meal</Text>
          </View>
        </ScrollView>
      </View>
    );
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
  h1: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "bold"
  }
});
