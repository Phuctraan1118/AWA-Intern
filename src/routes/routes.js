import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Icon, Box } from "native-base";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import {
  Ionicons,
  Foundation,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import Home from "../screens/Home";
import Bills from "../screens/Bills";
import Records from "../screens/Records";
import Scan from "../screens/Scan";
import Error from "../screens/Error";

import LoginScreen from "../screens/Login";
import SelectFactory from "../screens/SelectFactory";

const HomeTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabBarButton = ({ children, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;
  return (
    <Button
      top="-20"
      justifyContent="center"
      alignItems="center"
      onPress={onPress}
      isFocused={focused}
      width="70"
      height="70"
      borderRadius="35"
      _focus={{ backgroundColor: "#b9f7ea" }}
      backgroundColor={focused ? "#b9f7ea" : "#14e4ba"}
      _pressed={{ backgroundColor: "#b9f7ea" }}
      p="0"
    >
      <Box>{children}</Box>
    </Button>
  );
};

function HomeTabNavigator() {
  return (
    <HomeTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          borderTopColor: "gray",
          backgroundColor: "white",
        },
      }}
    >
      <HomeTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              as={<Ionicons name="home" />}
              color={focused ? "#4a95e1" : "#748c94"}
              size={6}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Records"
        component={Records}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              as={<Foundation name="clipboard-pencil" />}
              color={focused ? "#4a95e1" : "#748c94"}
              size={6}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              as={<MaterialCommunityIcons name="credit-card-scan-outline" />}
              size={7}
              color={focused ? "#4a95e1" : "#748c94"}
              h="30"
              w="30"
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <HomeTab.Screen
        name="Bills"
        component={Bills}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              as={<Ionicons name="receipt" />}
              color={focused ? "#4a95e1" : "#748c94"}
              size={6}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Error"
        component={Error}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              as={<FontAwesome name="exclamation-triangle" />}
              color={focused ? "#4a95e1" : "#748c94"}
              size={6}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectFactory"
          component={SelectFactory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTabNavigator"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
