// import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { Stack, Box, Text, Image, Input, Icon, Button } from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IconInput from "../../components/IconInput";
const image = require("../../assets/background_1.gif");

const LoginScreen = () => {
  let [fontsLoaded] = useFonts({
    SemiBold: Quicksand_600SemiBold,
    Bold: Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Stack
          flex={1}
          alignItems="center"
          justifyContent="center"
          fontFamily="Bold"
        >
          <Image
            source={image}
            position="absolute"
            alt="background_1"
            resizeMode="cover"
          />
          <Box
            alignItems="center"
            backgroundColor="rgba(0,0,0,.2)"
            width="90%"
            paddingBottom="40px"
          >
            <Text fontFamily="Bold" color="white" fontSize={28}>
              Đăng nhập
            </Text>
            <Input
              width="90%"
              mt="2"
              variant="unstyled"
              borderRadius="8"
              height="40px"
              backgroundColor="white"
              size="14"
              InputLeftElement={
                <Icon as={<Ionicons name="person" />} size="6" ml="3" />
              }
              //onChangeText={{}}
            />
            <Input
              width="90%"
              mt="2"
              variant="unstyled"
              borderRadius="8"
              height="40px"
              backgroundColor="white"
              size="14"
              fontFamily="Bold"
              type="password"
              InputLeftElement={
                <Icon as={<Ionicons name="lock-closed" />} size="6" ml="3" />
              }
              //onChangeText={{}}
            />
            {/* <IconInput icon="person" type="text" /> */}

            <Button
              mt="8"
              borderRadius="8"
              bgColor="rgb(26,118,255)"
              _pressed={{ backgroundColor: "rgba(141, 187, 255, 1)" }}
              _hover={{ backgroundColor: "rgba(141, 187, 255, 1)" }}
              padding="4"
              variant="solid"
              _text={{ fontFamily: "Bold", color: "white", fontSize: "14" }}
              onPress={() => console.log("hello world")}
            >
              Đăng nhập
            </Button>
          </Box>
        </Stack>
      </TouchableWithoutFeedback>
    );
  }
};

export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   background: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   text: {
//     color: "white",
//     textAlign: "center",
//     fontFamily: "SemiBold",
//     fontSize: 18,
//   },
//   heading: {
//     color: "white",
//     textAlign: "center",
//     fontFamily: "Bold",
//     fontSize: 28,
//   },
//   formContainer: {
//     backgroundColor: "rgba(0, 0, 0, 0.3)",
//     marginHorizontal: 20,
//     paddingTop: 5,
//     paddingBottom: 50,
//     paddingHorizontal: 20,
//   },
//   icon: {
//     width: 30,
//   },
//   textInput: {
//     height: 50,
//     borderRadius: 25,
//   },
// });
