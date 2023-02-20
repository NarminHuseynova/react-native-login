import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import React from "react";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import CustomButton from "../../components/CustomButton/CustomButton";

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("SignIn");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.inputContainer}>
        {/* <Text style={styles.text}>Username: {auth.currentUser?.username}</Text> */}
        <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
        <CustomButton text="Sign Out" onPress={handleSignOut} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 20,
  },
});
