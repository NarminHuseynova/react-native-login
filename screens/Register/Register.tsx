import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { auth, db } from "../../firebase";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Register = () => {
  const [datum, setDatum] = useState({});

  console.log(datum);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  console.log(errors);

  const registerUser = async (data: any) => {
    const datum = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };

    console.log(data);
    auth
      .createUserWithEmailAndPassword(datum.email, data.password)
      .then(() => {
        auth.currentUser
          ?.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://react-native-login-35cee.firebaseapp.com",
          })

          .then(() => {
            db.collection("users").doc(auth.currentUser?.uid).set({
              datum,
            });
            setDatum(datum);
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerA}>
        <View style={styles.container}>
          <CustomInput
            name="firstName"
            placeholder="First Name"
            control={control}
            secureTextEntry={false}
            autoCapitalize="none"
            rules={{
              required: "First Name is required",
            }}
          />
          <CustomInput
            name="lastName"
            placeholder="Last Name"
            control={control}
            secureTextEntry={false}
            autoCapitalize="none"
            rules={{
              required: "Last Name is required",
            }}
          />
          <CustomInput
            name="email"
            placeholder="Email"
            control={control}
            secureTextEntry={false}
            autoCapitalize="none"
            rules={{
              required: "Email is required",
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
        </View>
        <CustomButton
          text="Register"
          onPress={handleSubmit((data) => registerUser(data))}
        />
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  containerA: {
    alignItems: "center",
    padding: 20,
  },
  container: {
    width: "100%",
    marginVertical: 5,
  },
});
