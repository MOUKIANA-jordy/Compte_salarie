import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function AcompteScreen() {

  const [montant, setMontant] = useState("");

  const handleAcompte = () => {
    console.log("Demande acompte :", montant);
  };

  return (
    <View style={styles.container}>

      <Header title="Demande d'acompte" />

      <Input
        placeholder="Montant"
        value={montant}
        onChangeText={setMontant}
      />

      <Button
        title="Envoyer la demande"
        onPress={handleAcompte}
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
