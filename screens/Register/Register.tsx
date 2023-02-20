import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/CustomButton";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Register = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  console.log(errors);

  useEffect(() => {
    const c = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return c;
  }, []);

  const handleSignUp = (data: any) => {
    if (data.password !== data.repeatPassword) {
      alert("Passwords dont match");
      return;
    }

    auth
      .createUserWithEmailAndPassword(data.email.trim(), data.password)
      .then((userCredentials: { user: any }) => {
        const user = userCredentials.user;
        console.log("Registered with", user.email);
      })
      .catch((error: { message: string }) => alert(error.message));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={styles.inputContainer}>
          <CustomInput
            name="username"
            placeholder="Username"
            control={control}
            secureTextEntry={false}
          />
          <CustomInput
            name="email"
            placeholder="Email"
            control={control}
            secureTextEntry={false}
            rules={{
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          />
          <CustomInput
            name="password"
            placeholder="Password"
            control={control}
            secureTextEntry={true}
            // value={value}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            }}
          />

          <CustomInput
            name="repeatPassword"
            placeholder="Repeat Password"
            control={control}
            secureTextEntry={true}
            // value={value}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            }}
          />

          <CustomButton text="Register" onPress={handleSubmit(handleSignUp)} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  inputContainer: {
    width: "100%",
  },
});
