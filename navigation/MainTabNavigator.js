import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import PlaceOrderScreen from "../screens/PlaceOrderScreen.js";
import MyAccountScreen from "../screens/MyAccountScreen";
import LoginScreen from "../screens/LoginScreen";
import LogoutScreen from "../screens/LogoutScreen";
import RegisterSubscriberScreen from "../screens/RegisterSubscriber";
import OfferSummaryScreen from "../screens/OfferSummaryScreen";
import OfferDetailsScreen from "../screens/OfferDetailsScreen";
import ConfirmOrderScreen from "../screens/ConfirmOrderScreen";
import AddMealScreen from "../screens/AddMealScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  SignIn: LoginScreen,
  SignUp: RegisterSubscriberScreen,
  OfferSummary: OfferSummaryScreen,
  OfferDetails: OfferDetailsScreen,
  PlaceOrder: PlaceOrderScreen,
  ConfirmOrder: ConfirmOrderScreen,
  Logout: LogoutScreen
});

HomeStack.navigationOptions = {
	tabBarVisible: false ,
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

const PlaceOrderStack = createStackNavigator({
  PlaceOrder: PlaceOrderScreen
});

PlaceOrderStack.navigationOptions = {
  tabBarLabel: "Order",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
    />
  )
};

const SupplierStack = createStackNavigator({
  AddMeal: AddMealScreen
});

SupplierStack.navigationOptions = {
  tabBarLabel: "Add Meal",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-add" : "md-add"}
    />
  )
};

const MyAccountStack = createStackNavigator({
  MyAccount: MyAccountScreen
});

MyAccountStack.navigationOptions = {
  tabBarLabel: "My Account",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

const AboutUsStack = createStackNavigator({
  AboutUs: AboutUsScreen
});

AboutUsStack.navigationOptions = {
  tabBarLabel: "About Us",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

export default createBottomTabNavigator({
  Home: HomeStack,
  PlaceOrder: PlaceOrderStack,
  Supplier: SupplierStack,
  MyAccount: MyAccountStack,
  AboutUs: AboutUsStack
});
