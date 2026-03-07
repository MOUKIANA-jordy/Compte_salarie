import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function AdresseScreen() {

  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState("");

  const handleSave = () => {
    console.log(adresse, ville, codePostal);
  };

  return (
    <View style={styles.container}>

      <Header title="Adresse" />

      <Input placeholder="Adresse" value={adresse} onChangeText={setAdresse} />

      <Input placeholder="Ville" value={ville} onChangeText={setVille} />

      <Input
        placeholder="Code postal"
        value={codePostal}
        onChangeText={setCodePostal}
      />

      <Button title="Enregistrer" onPress={handleSave} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
