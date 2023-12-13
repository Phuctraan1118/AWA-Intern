import { Select, CheckIcon, FlatList } from "native-base";
import React, { useState } from "react";

export default function FactorySelect({ data, selectedValue, onValueChange }) {
  const factorySelectionList = () => {
    return data.map((item) => {
      return (
        <Select.Item label={item.label} value={item.value} key={item.value} />
      );
    });
  };
  return (
    <Select
      selectedValue={selectedValue}
      py="12px"
      mr="8px"
      minWidth="70%"
      accessibilityLabel="Choose Service"
      placeholder="Choose Service"
      variant="filled"
      fontFamily="Bold"
      _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />,
      }}
      onValueChange={onValueChange}
    >
      {factorySelectionList()}
    </Select>
  );
}
