import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import CustomButton from "../../components/CustomButton/CustomButton";
import { auth, db } from "../../firebase";

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [name, setName] = useState<any>("");

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("SignIn");
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    db.collection("users")
      .doc(auth.currentUser?.uid)
      .get()
      .then((snapshot: any) => {
        console.log(snapshot.exists);

        if (snapshot.exists) {
          console.log(snapshot.data().datum.firstName);
          setName(snapshot.data().datum.firstName);
        } else {
          console.log("User does not exist");
        }
      })
      .catch(console.log);
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.headerSubText}>{name}</Text>
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
  content: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  headerSubText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
