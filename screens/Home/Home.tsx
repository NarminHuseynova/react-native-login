import { View, Text, KeyboardAvoidingView, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/types'

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("SignIn")
    })
    .catch(error => alert(error.message))
  }
  
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.inputContainer}>
      <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 20
  },
  inputContainer: {
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#3b71f3",
    borderColor: "#3b71f3",
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  }
})