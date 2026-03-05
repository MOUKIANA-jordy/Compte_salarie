import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Header from "../Components/Header";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { api } from "../api/axios";

export default function LoginScreen({ navigation }) {
  const [identifiant, setIdentifiant] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!identifiant || !password) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await api.post("token/", {
        username: identifiant, // ton matricule côté backend
        password: password,
      });

      const { access, refresh } = response.data;

      console.log("Access Token :", access);
      console.log("Refresh Token :", refresh);

      // Ici tu peux stocker le token dans AsyncStorage
      // AsyncStorage.setItem("access_token", access);

      Alert.alert("Succès", "Connexion réussie !");
      // navigation.navigate("Home"); // redirection après login

    } catch (error) {
      console.log(error.response?.data || error.message);
      Alert.alert("Erreur", "Identifiant ou mot de passe incorrect");
    }
  };

  return (
    <View style={styles.container}>
      <Header title="StaffHub" />

      <Input
        placeholder="Identifiant"
        value={identifiant}
        onChangeText={setIdentifiant}
      />

      <Input
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Se connecter" onPress={handleLogin} />

      <Button
        title="Mot de passe oublié ?"
        type="link"
        onPress={() => navigation.navigate("ForgotPassword")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
