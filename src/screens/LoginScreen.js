import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

//khai báo mảng data
var data = [
  {
    id: 1,
    name: "BacPham",
    password: "123456",
  },
  {
    id: 2,
    name: "PhamBac",
    password: "123456",
  },
];

//
const LoginScreen = () => {

  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotify] = useState("");

  const handleLogin = () => {
    const user = data.find((d) => d.name === email && d.password === password);
    setNotify(user ? "Login successful" : "Invalid credentials");
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginLogo}>
        <Text style={styles.loginText}>LOGIN</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.email}
            placeholder="Email"
            keyboardType="email"
            onChangeText={setEmail}
          />
          <Pressable style={styles.useIcon}>
            <Icon name="user" size={40} color="#000" />
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.password}
            secureTextEntry={hidePassword}
            placeholder="Password"
            onChangeText={setPassword}
          />
          <Pressable
            style={styles.eyeIcon}
            onPress={() => setHidePassword(!hidePassword)}
          >
            <Icon
              name={hidePassword ? "eye-slash" : "eye"}
              size={30}
              color="#000"
            />
          </Pressable>
          <Pressable style={styles.lockIcon}>
            <Icon name="lock" size={40} color="#000" />
          </Pressable>
        </View>
        <Text style={styles.notify}>{notify}</Text>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Text style={styles.bodySubText}>Forgot your password?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  notify: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  loginLogo: {
    flex: 1,
    alignItems: "flex-start", 
    justifyContent: "flex-end", 
    paddingLeft: 10,
  },
  loginText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  bodyContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "94%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 10,
  },
  email: {
    flex: 1,
    height: 60,
    fontWeight: "bold",
    fontSize: 20,
    color: "#000000",
    textAlign: "center", 
    textAlignVertical: "center",
  },
  useIcon: {
    position: "absolute",
    left: 0,
    marginLeft: 10,
  },
  password: {
    flex: 1,
    height: 60,
    fontWeight: "bold",
    fontSize: 20,
    color: "#000000",
    textAlign: "center", 
    textAlignVertical: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    marginRight: 10,
  },
  lockIcon: {
    position: "absolute",
    left: 0,
    marginLeft: 10,
  },
  button: {
    height: 60,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: "94%",
    marginTop: 60,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  bodySubText: {
    color: "#000000",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default LoginScreen;
