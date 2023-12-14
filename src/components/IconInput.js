import { View, Text } from "react-native";
import { Input, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function IconInput({
  type,
  name,
  onChangeText,
  placeHolder,
  width,
  mx,
  my,
}) {
  return (
    <Input
      width={width}
      mx={mx}
      my={my}
      variant="unstyled"
      borderRadius="8"
      height="40px"
      backgroundColor="white"
      size="14"
      fontFamily="Bold"
      placeHolder={placeHolder}
      type={type}
      InputLeftElement={<Icon as={<Ionicons name={name} />} size="6" ml="3" />}
      onChangeText={onChangeText}
    />
  );
}
