import React from 'react';
import { Platform, StatusBar, View, StyleSheet } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import { containerNoPadding } from './src/styles/Style';

export default class App extends React.Component {

  state = {
    isLoadingComplete: false
  };

  _loadResourcesAsync = async () => Promise.all([
      Asset.loadAsync([
				// TODO: require these globally?
        require('./src/assets/images/last-call-logo.png'),
        require('./src/assets/images/last-call-logo.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf')
      })
    ]);

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
	
	render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
		}
		
		return (
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
				<AppNavigator />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
});
