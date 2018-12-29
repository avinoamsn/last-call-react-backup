import React from 'react';
import { Text } from 'react-native';
import {
	createAppContainer,
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import PlaceOrderScreen from '../screens/PlaceOrderScreen.js';
import MyAccountScreen from '../screens/MyAccountScreen';
import RegisterSubscriberScreen from '../screens/RegisterSubscriber';
import AddMealScreen from '../screens/AddMealScreen';
import CurrentOffersScreen from '../screens/CurrentOffersScreen';
import OfferHistoryScreen from '../screens/OfferHistoryScreen';

// TODO: functionality that dynamically determines tab navigator based on user type
// TODO: stack navigators for the necessary screens
const userType = 'subscriber';

// supplier tab navigator
const SupplierTabNavigator = createBottomTabNavigator(
	{
		AddMeal: AddMealScreen,
		CurrentOffers: CurrentOffersScreen,
		OfferHistory: OfferHistoryScreen,
		MyAccount: MyAccountScreen,
		AboutUs: AboutUsScreen,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarLabel: () => {
				const { routeName } = navigation.state;
				// eslint-disable-next-line max-len
				const tabBarStyle = { textAlign: 'center', /*color: {tintColor},*/ };	// for some reason, tabBarLabel is not styled the same as it is when using .navigationOptions
				let text;

				switch (routeName) {
					case 'AddMeal': 			text = 'Add Meal';				break;
					case 'CurrentOffers': text = 'Current Offers';	break;
					case 'OfferHistory':	text = 'Offer History';		break;
					case 'MyAccount': 		text = 'My Account';			break;
					case 'AboutUs': 			text = 'About Us';				break;
					default: 							break;
				}
				return <Text style={tabBarStyle} size={12}>{text}</Text>;
			},
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;

				switch (routeName) {
					// TODO
					case 'AddMeal': 			iconName = 'ios-add';									break;
					case 'CurrentOffers':	break;
					case 'OfferHistory':	break;
					case 'MyAccount': 		break;
					case 'AboutUs':				iconName = 'ios-information-circle';	break;
					default: 							break;
				}
				return <Ionicons name={iconName} size={26} color={tintColor} />;
			},
		}),
	},
);

// subscriber tab navigator
const SubscriberTabNavigator = createBottomTabNavigator(
	{
		PlaceOrder: PlaceOrderScreen,
		MyAccount: MyAccountScreen,
		AboutUs: AboutUsScreen,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarLabel: () => {
				const { routeName } = navigation.state;
				// eslint-disable-next-line max-len
				const tabBarStyle = { textAlign: 'center', /*color: {tintColor},*/ };	// for some reason, tabBarLabel is not styled the same as it is when using .navigationOptions
				let text;

				switch (routeName) {
					case 'PlaceOrder': 	text = 'Buy Meal';		break;
					case 'MyAccount': 	text = 'My Account';	break;
					case 'AboutUs': 		text = 'About Us';		break;
					default: 						break;
				}
				return <Text style={tabBarStyle} size={12}>{text}</Text>;
			},
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;

				switch (routeName) {
					case 'PlaceOrder': 	iconName = 'ios-cart';								break;
					case 'MyAccount': 	iconName = 'ios-person';							break;
					case 'AboutUs': 		iconName = 'ios-information-circle';	break;
					default: 						break;
				}
				return <Ionicons name={iconName} size={26} color={tintColor} />;
			},
		}),
	},
);

// auth stack navigator (for navigating splash screen/login)
const AuthStackNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		SignIn: LoginScreen,
		SignUp: RegisterSubscriberScreen,
		AboutUs: AboutUsScreen,
		Tabs: userType === 'subscriber' ? SubscriberTabNavigator : SupplierTabNavigator,
	}
);

export default createAppContainer(AuthStackNavigator);
