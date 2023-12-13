import React from "react";

import { Stack, Box, Text, Image } from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import IconInput from "../../components/IconInput";
import ButtonA from "../../components/ButtonA";
const image = require("../../assets/background_1.gif");

const LoginScreen = () => {
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

          <IconInput name="person" type="text" onChangeText={() => {}} />
          <IconInput
            name="lock-closed"
            type="password"
            onChangeText={() => {}}
          />
          <ButtonA text="Đăng nhập" onPress={() => console.log("Clicked")} />
        </Box>
      </Stack>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
