import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Button from "../../components/Button";

export default function DossierScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Header title="Mon dossier" />

      <Button
        title="Mes demandes"
        onPress={() => navigation.navigate("MesDemandes")}
      />

      <Button
        title="Informations"
        onPress={() => navigation.navigate("Informations")}
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
