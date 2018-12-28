import React from 'react';
import { Platform, Text } from 'react-native';
import {
	createAppContainer,
	createStackNavigator,
	createTabNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import PlaceOrderScreen from '../screens/PlaceOrderScreen.js';
import MyAccountScreen from '../screens/MyAccountScreen';
import RegisterSubscriberScreen from '../screens/RegisterSubscriber';
import OfferSummaryScreen from '../screens/OfferSummaryScreen';
import OfferDetailsScreen from '../screens/OfferDetailsScreen';
import ConfirmOrderScreen from '../screens/ConfirmOrderScreen';
import AddMealScreen from '../screens/AddMealScreen';

// TODO: organize & code such that tabs change based on user type

// tab navigator
export const SubscriberTabNavigator = createBottomTabNavigator(
	{
		PlaceOrder: PlaceOrderScreen,
		AddMeal: AddMealScreen,
		MyAccount: MyAccountScreen,
		AboutUs: AboutUsScreen,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarLabel: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				const tabBarStyle = { textAlign: 'center', /*color: {tintColor},*/ };	// for some reason, tabBarLabel is not styled the same as it is when using .navigationOptions
				let text;

				switch (routeName) {
					case 'PlaceOrder': 	text = 'Buy Meal'; break;
					case 'AddMeal': 		text = 'Add Meal'; break;
					case 'MyAccount': 	text = 'My Account'; break;
					case 'AboutUs': 		text = 'About Us'; break;
				}
				return <Text style={tabBarStyle} size={12}>{text}</Text>;
			},
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;

				switch (routeName) {
					case 'PlaceOrder': 	iconName = 'ios-cart'; break;
					case 'AddMeal': 		iconName = 'ios-add'; break;
					case 'MyAccount': 	iconName = 'ios-person'; break;
					case 'AboutUs': 		iconName = 'ios-information-circle'; break;
				}
				return <Ionicons name={iconName} size={26} color={tintColor} />;
			},
		}),
	},
);

// stack navigator (for navigating splash screen/login)
export const StackNavigator = createStackNavigator({
	Home: HomeScreen,
  SignIn: LoginScreen,
	SignUp: RegisterSubscriberScreen,
	AboutUs: AboutUsScreen,

	Tabs: SubscriberTabNavigator,
});

export default createAppContainer(StackNavigator);