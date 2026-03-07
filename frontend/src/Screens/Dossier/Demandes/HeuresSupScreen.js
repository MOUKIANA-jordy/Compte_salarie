import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function HeuresSupScreen() {

  const [heures, setHeures] = useState("");

  const handleHeures = () => {
    console.log("Heures supplémentaires :", heures);
  };

  return (
    <View style={styles.container}>

      <Header title="Heures supplémentaires" />

      <Input
        placeholder="Nombre d'heures"
        value={heures}
        onChangeText={setHeures}
      />

      <Button
        title="Envoyer la demande"
        onPress={handleHeures}
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
