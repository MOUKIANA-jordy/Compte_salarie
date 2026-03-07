import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../Components/Header";
import Button from "../../Components/Button";

export default function FichePaieScreen() {

  return (
    <View style={styles.container}>

      <Header title="Mes fiches de paie" />

      <Text style={styles.text}>
        Consultez vos fiches de paie.
      </Text>

      <Button
        title="Télécharger la dernière fiche"
        onPress={() => console.log("Téléchargement")}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  text: {
    fontSize: 16,
    marginBottom: 20
  }

});
