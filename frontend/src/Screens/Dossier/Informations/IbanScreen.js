import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function IbanScreen() {

  const [iban, setIban] = useState("");

  const handleSave = () => {
    console.log("IBAN :", iban);
  };

  return (
    <View style={styles.container}>

      <Header title="IBAN" />

      <Input
        placeholder="FR76 XXXX XXXX XXXX XXXX XXXX XXX"
        value={iban}
        onChangeText={setIban}
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
