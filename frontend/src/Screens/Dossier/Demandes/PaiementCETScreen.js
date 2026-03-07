import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function PaiementCETScreen() {

  const [jours, setJours] = useState("");

  const handleCET = () => {
    console.log("Paiement CET :", jours);
  };

  return (
    <View style={styles.container}>

      <Header title="Paiement CET" />

      <Input
        placeholder="Nombre de jours"
        value={jours}
        onChangeText={setJours}
      />

      <Button
        title="Envoyer la demande"
        onPress={handleCET}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  }

});
