import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function AvanceScreen() {

  const [montant, setMontant] = useState("");

  const handleAvance = () => {
    console.log("Demande avance :", montant);
  };

  return (
    <View style={styles.container}>

      <Header title="Demande d'avance" />

      <Input
        placeholder="Montant"
        value={montant}
        onChangeText={setMontant}
      />

      <Button
        title="Envoyer la demande"
        onPress={handleAvance}
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
