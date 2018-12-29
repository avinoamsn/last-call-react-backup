import React, { Component } from 'react';
import { 
	View,
	Text,
	StyleSheet
} from 'react-native';

class CurrentOffersScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>CurrentOffersScreen</Text>
			</View>
		);
	}
}
export default CurrentOffersScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
