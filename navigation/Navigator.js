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

// tab navigator
export const SubscriberTabNavigator = createBottomTabNavigator(
	{
		PlaceOrder: PlaceOrderScreen,
		Supplier: AddMealScreen,
		MyAccount: MyAccountScreen,
		AboutUs: AboutUsScreen,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarLabel: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				const tabBarStyle = { textAlign: 'center', /*color: {tintColor},*/ };	// for some reason, tabBarLabel is not styled the same as it is in .navigationOptions
				let text;
				
				if (routeName === 'PlaceOrder') {
					text = 'Buy Meal';
				} else if (routeName === 'Supplier') {
					text = 'Add Meal';
				} else if (routeName === 'MyAccount') {
					text = 'My Account';
				} else if (routeName === 'AboutUs') {
					text = 'About Us';
				}
				return <Text style={tabBarStyle} size={12}>{text}</Text>;
			},
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;

				if (routeName === 'PlaceOrder') {
					iconName = 'ios-cart';
				} else if (routeName === 'Supplier') {
					iconName = 'ios-add';
				} else if (routeName === 'MyAccount') {
					iconName = 'ios-person';
				} else if (routeName === 'AboutUs') {
					iconName = 'ios-information-circle';
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