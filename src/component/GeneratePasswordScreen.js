import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  CheckBox,
} from "react-native";

const GeneratePasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("8");

  const charTypes = [
    {
      label: "Lower Case Letters",
      chars: "abcdefghijklmnopqrstuvwxyz",
      state: useState(true),
    },
    {
      label: "Upper Case Letters",
      chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      state: useState(true),
    },
    { label: "Numbers", chars: "0123456789", state: useState(true) },
    {
      label: "Special Symbols",
      chars: "!@#$%^&*()_+-=[]{}|;:',.<>?",
      state: useState(true),
    },
  ];

  const generatePassword = () => {
    const selectedCharTypes = charTypes.filter((charType) => charType.state[0]);
    const selectedTypesCount = selectedCharTypes.length;

    if (selectedTypesCount === 0) {
      alert("Vui lòng chọn ít nhất một loại ký tự.");
      return;
    }
    if (isNaN(parseInt(passwordLength))) {
      alert("Vui lòng nhập độ dài mật khẩu.");
      return;
    }

    if (parseInt(passwordLength) <= selectedTypesCount) {
      alert("Độ dài mật khẩu phải lớn hơn hoặc bằng số loại ký tự đã chọn.");
      return;
    }

    let newPassword = "";

    selectedCharTypes.forEach((charType) => {
      const charSet = charType.chars;
      const randomIndex = Math.floor(Math.random() * charSet.length);
      newPassword += charSet.charAt(randomIndex);
    });

    const length = parseInt(passwordLength) - selectedTypesCount;
    const availableChars = selectedCharTypes
      .map((charType) => charType.chars)
      .join("");

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      newPassword += availableChars.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      <TextInput
        style={styles.input}
        placeholder="Generated Password"
        value={password}
        editable={false}
      />
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Password Length</Text>
        <TextInput
          style={styles.inputPassLength}
          defaultValue={passwordLength}
          onChangeText={(text) => setPasswordLength(text)}
          keyboardType="numeric"
        />
      </View>

      {charTypes.map((charType, index) => (
        <View style={styles.checkboxContainer} key={index}>
          <Text style={styles.label}>{charType.label}</Text>
          <CheckBox
            value={charType.state[0]}
            onValueChange={(value) => charType.state[1](value)}
            style={styles.checkbox}
          />
        </View>
      ))}

      <Pressable style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    margin: 20,
  },
  label: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 5,
  },
  input: {
    height: 60,
    fontSize: 20,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#151537",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  inputPassLength: {
    width: 80,
    height: 40,
    fontSize: 20,
    color: "#00000",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  checkbox: {
    marginHorizontal: 2,
    height: 30,
    width: 30,
  },
  button: {
    height: 60,
    backgroundColor: "#3B3B98",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default GeneratePasswordScreen;
