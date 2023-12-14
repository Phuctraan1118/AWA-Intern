import { View, Text } from "react-native";
import { Button } from "native-base";
import React from "react";

export default function ButtonA({ text, onPress, width, mx, my }) {
  return (
    <Button
      mx={mx}
      my={my}
      width={width}
      borderRadius="10"
      bgColor="rgb(26,118,255)"
      _pressed={{ backgroundColor: "rgba(141, 187, 255, 1)" }}
      _hover={{ backgroundColor: "rgba(141, 187, 255, 1)" }}
      padding="4"
      variant="solid"
      _text={{ fontFamily: "Bold", color: "white", fontSize: "14" }}
      onPress={onPress}
    >
      {text}
    </Button>
  );
}
