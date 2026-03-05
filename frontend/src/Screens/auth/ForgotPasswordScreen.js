import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function ForgotPasswordScreen() {

  const [email, setEmail] = useState("");

  const handleSend = () => {
    console.log("Email envoyé à :", email);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Mot de passe oublié
      </Text>

      <Text style={styles.text}>
        Entrez votre email professionnel
      </Text>

      <TextInput
        placeholder="email@staffhub.com"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>
          Envoyer le lien
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },

  text: {
    textAlign: "center",
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20
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
  }

});
