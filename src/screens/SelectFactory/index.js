import React, { useState } from "react";

import { Stack, Box, Text, Image, HStack } from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import ButtonA from "../../components/ButtonA";
import FactorySelect from "../../components/FactorySelect";

const image = require("../../assets/background_1.gif");
const data = [
  {
    label: "Nhà máy nước Cần Thơ",
    value: "cantho",
  },
  {
    label: "Nhà máy nước Sài Gòn",
    value: "saigon",
  },
];
const SelectFactory = ({ navigation }) => {
  const [factory, setFactory] = useState("");

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
            Hãy chọn nhà máy
          </Text>

          <HStack justifyItems="center" alignItems="center" px="15px" mt="35px">
            <FactorySelect
              data={data}
              selectedValue={factory}
              onValueChange={(itemValue) => {
                setFactory(itemValue);
              }}
            />
            <ButtonA
              text="Tiếp tục"
              width="30%"
              onPress={() => navigation.navigate("HomeTabNavigator")}
            />
          </HStack>
        </Box>
      </Stack>
    </TouchableWithoutFeedback>
  );
};

export default SelectFactory;
