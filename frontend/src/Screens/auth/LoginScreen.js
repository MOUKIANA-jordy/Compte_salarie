import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LoginScreen({ navigation }) {

  const [identifiant, setIdentifiant] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Identifiant :", identifiant);
    console.log("Password :", password);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>StaffHub</Text>

      <TextInput
        placeholder="Identifiant (matricule)"
        style={styles.input}
        value={identifiant}
        onChangeText={setIdentifiant}
      />

      <TextInput
        placeholder="Mot de passe"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={styles.forgot}>
          Mot de passe oublié ?
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 8
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },

  forgot: {
    marginTop: 20,
    textAlign: "center",
    color: "#2563eb"
  }

});
