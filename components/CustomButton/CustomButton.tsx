import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3b71f3",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: "#3b71f3",
  },
  container_SECONDARY: {
    borderColor: "#3b71f3",
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
  container_TERTIARY: {
    backgroundColor: "transparent"
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  text_SECONDARY: {
    color: "#3b71f3",
  },
  text_TERTIARY: {
    color: "gray",
  },
});

export default CustomButton;
