import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../Components/Header";

export default function CalendrierPaieScreen() {

  return (
    <View style={styles.container}>

      <Header title="Calendrier de paie" />

      <Text style={styles.text}>
        Prochain paiement : 26 Juin
      </Text>

      <Text style={styles.text}>
        Prochain paiement : 25 Juillet
      </Text>

      <Text style={styles.text}>
        Prochain paiement : 25 Août
      </Text>

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
    marginBottom: 10
  }

});
