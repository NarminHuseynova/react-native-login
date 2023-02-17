import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  onChangeText,
}: any) => {
  return (
    <>
      <View>
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { value, onBlur }, fieldState: { error } }) => (
            <>
              <View
                style={[
                  styles.container,
                  { borderColor: error ? "red" : "#e8e8e8" },
                ]}
              >
                <TextInput
                  value={value}
                  onChangeText={onChangeText}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  style={styles.input}
                  secureTextEntry={secureTextEntry}
                />
              </View>
              {error && (
                <Text style={{ color: "red", alignSelf: "flex-start" }}>
                  {error.message || "Error"}
                </Text>
              )}
            </>
          )}
        />
      </View>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});
