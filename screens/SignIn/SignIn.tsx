import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const SignIn = () => {
  const { height } = useWindowDimensions();

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

  const onRegister = () => {
    navigation.navigate("Register");
  };

  const handleLogin = (data: any) => {
    auth
      .signInWithEmailAndPassword(data.email.trim(), data.password)
      .then((userCredentials: { user: any }) => {
        const user = userCredentials.user;
        console.log("Logged in with", user.email);
      })
      .catch((error: { message: string }) => alert(error.message));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={require("../../assets/images/logo-144.png")}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <View style={styles.inputContainer}>
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
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            }}
          />
          <CustomButton text="Sign In" onPress={handleSubmit(handleLogin)} />
          <CustomButton type="SECONDARY" text="Register" onPress={onRegister} />
        </View>
        <SocialSignInButtons />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  inputContainer: {
    width: "100%",
  },
});
