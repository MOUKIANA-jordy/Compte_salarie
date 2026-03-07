import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function EtatCivilScreen() {

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");

  const handleSave = () => {
    console.log(nom, prenom, dateNaissance);
  };

  return (
    <View style={styles.container}>

      <Header title="Etat civil" />

      <Input placeholder="Nom" value={nom} onChangeText={setNom} />

      <Input placeholder="Prénom" value={prenom} onChangeText={setPrenom} />

      <Input
        placeholder="Date de naissance"
        value={dateNaissance}
        onChangeText={setDateNaissance}
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
