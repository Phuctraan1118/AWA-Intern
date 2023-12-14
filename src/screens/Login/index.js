import React from "react";

import { Stack, Box, Text, Image } from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import IconInput from "../../components/IconInput";
import ButtonA from "../../components/ButtonA";
const image = require("../../assets/background_1.gif");

const LoginScreen = ({ navigation }) => {
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
          paddingBottom="20px"
        >
          <Text fontFamily="Bold" color="white" fontSize={28}>
            Đăng nhập
          </Text>

          <IconInput
            name="person"
            type="text"
            width="90%"
            onChangeText={() => {}}
            my="10px"
          />
          <IconInput
            name="lock-closed"
            type="password"
            width="90%"
            my="5px"
            onChangeText={() => {}}
          />
          <ButtonA
            text="Đăng nhập"
            onPress={() => navigation.navigate('SelectFactory')}
            my="20px"
          />
        </Box>
      </Stack>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
