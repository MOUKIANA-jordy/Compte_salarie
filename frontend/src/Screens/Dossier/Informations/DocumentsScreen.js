import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Button from "../../components/Button";

export default function DocumentsScreen() {

  const uploadDocument = () => {
    console.log("Upload document");
  };

  return (
    <View style={styles.container}>

      <Header title="Documents officiels" />

      <Button title="Ajouter une pièce d'identité" onPress={uploadDocument} />

      <Button title="Ajouter un justificatif de domicile" onPress={uploadDocument} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
